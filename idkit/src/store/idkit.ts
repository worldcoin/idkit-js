import { create } from 'zustand'
import { AppErrorCodes } from '@/types/app'
import { CredentialType, IDKITStage } from '@/types'
import { telemetryModalOpened } from '@/lib/telemetry'
import type { VerificationMethods } from '@/types/config'
import type { Config, ConfigSource, IDKitConfig } from '@/types/config'
import type { CallbackFn, IErrorState, IExperimentalSuccessResult, ISuccessResult } from '@/types'

export type IDKitStore = {
	app_id: IDKitConfig['app_id']
	action: IDKitConfig['action']
	signal: IDKitConfig['signal']
	action_description?: IDKitConfig['action_description']
	walletConnectProjectId?: IDKitConfig['walletConnectProjectId']
	credential_types?: IDKitConfig['credential_types']
	phoneNumber: string // EXPERIMENTAL

	code: string
	open: boolean
	stage: IDKITStage
	autoClose: boolean
	processing: boolean
	theme: Config['theme']
	result: IExperimentalSuccessResult | ISuccessResult | null
	methods: VerificationMethods[]
	errorState: IErrorState | null
	verifyCallbacks:
		| Record<ConfigSource, CallbackFn<IExperimentalSuccessResult> | CallbackFn<ISuccessResult> | undefined>
		| Record<string, never>
	successCallbacks:
		| Record<ConfigSource, CallbackFn<IExperimentalSuccessResult> | CallbackFn<ISuccessResult> | undefined>
		| Record<string, never>

	computed: {
		canGoBack: (stage: IDKITStage) => boolean
		getDefaultStage: (methods?: Config['experimental_methods']) => IDKITStage
	}

	retryFlow: () => void
	setCode: (code: string) => void
	setStage: (stage: IDKITStage) => void
	onOpenChange: (open: boolean) => void
	setProcessing: (processing: boolean) => void
	handleVerify: (result: IExperimentalSuccessResult | ISuccessResult) => void
	setErrorState: (state: IErrorState | null) => void
	setOptions: (options: Config, source: ConfigSource) => void
	addSuccessCallback: (
		cb: CallbackFn<IExperimentalSuccessResult> | CallbackFn<ISuccessResult>,
		source: ConfigSource
	) => void
	addVerificationCallback: (
		cb: CallbackFn<IExperimentalSuccessResult> | CallbackFn<ISuccessResult>,
		source: ConfigSource
	) => void
	setPhoneNumber: (phoneNumber: string) => void // EXPERIMENTAL
}

const useIDKitStore = create<IDKitStore>()((set, get) => ({
	app_id: '',
	signal: '',
	action: '',
	phoneNumber: '', // EXPERIMENTAL
	methods: [],
	action_description: '',
	walletConnectProjectId: '',
	credential_types: [],

	open: false,
	code: '',
	result: null,
	theme: 'light',
	errorTitle: '',
	errorDetail: '',
	autoClose: true,
	errorState: null,
	processing: false,
	verifyCallbacks: {},
	successCallbacks: {},
	stage: IDKITStage.WORLD_ID,

	computed: {
		canGoBack: (stage: IDKITStage) => {
			switch (stage) {
				case IDKITStage.ENTER_PHONE:
					return get().methods.includes('orb')
				case IDKITStage.WORLD_ID:
					return get().methods.includes('phone')
				case IDKITStage.ENTER_CODE:
				case IDKITStage.PRIVACY:
					return true
				default:
					return false
			}
		},
		getDefaultStage: (methods?: Config['experimental_methods']) => {
			methods = methods ?? get().methods

			if (methods.length > 1) return IDKITStage.SELECT_METHOD
			return methods[0] === 'phone' ? IDKITStage.ENTER_PHONE : IDKITStage.WORLD_ID
		},
	},

	setCode: code => set({ code }),
	setStage: stage => set({ stage }),
	setErrorState: errorState => set({ errorState }),
	setProcessing: (processing: boolean) => set({ processing }),
	setPhoneNumber: phoneNumber => set({ phoneNumber }),
	retryFlow: () => {
		if (get().methods.length === 1) {
			set({ stage: get().computed.getDefaultStage(), errorState: null })
		}

		set({ stage: IDKITStage.SELECT_METHOD, errorState: null })
	},
	addSuccessCallback: (
		cb: CallbackFn<IExperimentalSuccessResult> | CallbackFn<ISuccessResult>,
		source: ConfigSource
	) => {
		set(state => {
			state.successCallbacks[source] = cb

			return state
		})
	},
	addVerificationCallback: (
		cb: CallbackFn<IExperimentalSuccessResult> | CallbackFn<ISuccessResult>,
		source: ConfigSource
	) => {
		set(state => {
			state.verifyCallbacks[source] = cb

			return state
		})
	},
	setOptions: (
		{
			handleVerify,
			onSuccess,
			signal,
			action,
			app_id,
			credential_types,
			action_description,
			experimental_methods,
			walletConnectProjectId,
			autoClose,
			theme,
		}: Config,
		source: ConfigSource
	) => {
		const sanitized_credential_types = credential_types?.filter(type =>
			Object.values(CredentialType).includes(type)
		)

		const hasUpdatedMethods = experimental_methods && experimental_methods !== get().methods

		set(store => ({
			theme,
			signal,
			action,
			app_id,
			autoClose,
			walletConnectProjectId,
			credential_types: sanitized_credential_types,
			action_description,
			methods: experimental_methods ?? store.methods,
			stage: hasUpdatedMethods ? store.computed.getDefaultStage(experimental_methods) : get().stage,
		}))

		if (onSuccess) get().addSuccessCallback(onSuccess, source)
		if (handleVerify) get().addVerificationCallback(handleVerify, source)
	},
	handleVerify: (result: IExperimentalSuccessResult | ISuccessResult) => {
		set({ stage: IDKITStage.HOST_APP_VERIFICATION, processing: false })

		Promise.all(
			Object.values(get().verifyCallbacks).map(cb =>
				(cb as CallbackFn<IExperimentalSuccessResult | ISuccessResult>)(result)
			)
		).then(
			() => {
				set({ stage: IDKITStage.SUCCESS, result })

				if (get().autoClose) setTimeout(() => get().onOpenChange(false), 1000)
			},
			response => {
				let errorMessage: string | undefined = undefined
				if (response && typeof response === 'object' && (response as Record<string, unknown>).message) {
					errorMessage = (response as Record<string, unknown>).message as string
				}

				set({
					stage: IDKITStage.ERROR,
					errorState: { code: AppErrorCodes.FailedByHostApp, message: errorMessage },
				})
			}
		)
	},
	onOpenChange: open => {
		if (open) {
			telemetryModalOpened()
			return set({ open })
		}

		if (get().stage == IDKITStage.SUCCESS) {
			const result = get().result
			const callbacks = get().successCallbacks

			if (result)
				requestAnimationFrame(() =>
					Object.values(callbacks).forEach(
						cb => void (cb as CallbackFn<IExperimentalSuccessResult | ISuccessResult>)(result)
					)
				)
		}

		set({
			open,
			code: '',
			result: null,
			errorState: null,
			processing: false,
			stage: get().computed.getDefaultStage(),
		})
	},
}))

export default useIDKitStore
