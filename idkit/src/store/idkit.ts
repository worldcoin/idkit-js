import { create } from 'zustand'
import { telemetryModalOpened } from '@/lib/telemetry'
import { CredentialType, ErrorCodes, IDKITStage } from '@/types'
import type { CallbackFn, IErrorState, ISuccessResult } from '@/types'
import type { Config, ConfigSource, IDKitConfig } from '@/types/config'

export type IDKitStore = {
	app_id: IDKitConfig['app_id']
	action: IDKitConfig['action']
	signal: IDKitConfig['signal']
	action_description?: IDKitConfig['action_description']
	walletConnectProjectId?: IDKitConfig['walletConnectProjectId']
	credential_types?: IDKitConfig['credential_types']

	code: string
	open: boolean
	stage: IDKITStage
	autoClose: boolean
	processing: boolean
	copy: Config['copy']
	theme: Config['theme']
	result: ISuccessResult | null
	errorState: IErrorState | null
	verifyCallbacks: Record<ConfigSource, CallbackFn | undefined> | Record<string, never>
	successCallbacks: Record<ConfigSource, CallbackFn | undefined> | Record<string, never>

	computed: {
		canGoBack: (stage: IDKITStage) => boolean
	}

	retryFlow: () => void
	setCode: (code: string) => void
	setStage: (stage: IDKITStage) => void
	onOpenChange: (open: boolean) => void
	setProcessing: (processing: boolean) => void
	handleVerify: (result: ISuccessResult) => void
	setErrorState: (state: IErrorState | null) => void
	setOptions: (options: Config, source: ConfigSource) => void
	addSuccessCallback: (cb: CallbackFn, source: ConfigSource) => void
	addVerificationCallback: (cb: CallbackFn, source: ConfigSource) => void
}

const useIDKitStore = create<IDKitStore>()((set, get) => ({
	app_id: '',
	signal: '',
	action: '',
	action_description: '',
	walletConnectProjectId: '',
	credential_types: [],

	open: false,
	code: '',
	result: null,
	theme: 'light',
	errorTitle: '',
	errorDetail: '',
	autoClose: false,
	errorState: null,
	processing: false,
	verifyCallbacks: {},
	successCallbacks: {},
	stage: IDKITStage.WORLD_ID,
	copy: {},

	computed: {
		canGoBack: (stage: IDKITStage) => {
			switch (stage) {
				case IDKITStage.PRIVACY:
					return true
				default:
					return false
			}
		},
	},

	setCode: code => set({ code }),
	setStage: stage => set({ stage }),
	setErrorState: errorState => set({ errorState }),
	setProcessing: (processing: boolean) => set({ processing }),
	retryFlow: () => {
		set({ stage: IDKITStage.WORLD_ID, errorState: null })
	},
	addSuccessCallback: (cb: CallbackFn, source: ConfigSource) => {
		set(state => {
			state.successCallbacks[source] = cb

			return state
		})
	},
	addVerificationCallback: (cb: CallbackFn, source: ConfigSource) => {
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
			walletConnectProjectId,
			autoClose,
			copy,
			theme,
		}: Config,
		source: ConfigSource
	) => {
		const sanitized_credential_types = credential_types?.filter(type =>
			Object.values(CredentialType).includes(type)
		)

		set(store => ({
			theme,
			signal,
			action,
			app_id,
			credential_types: sanitized_credential_types,
			autoClose,
			action_description,
			walletConnectProjectId,
			copy: { ...store.copy, ...copy },
		}))

		if (onSuccess) get().addSuccessCallback(onSuccess, source)
		if (handleVerify) get().addVerificationCallback(handleVerify, source)
	},
	handleVerify: (result: ISuccessResult) => {
		set({ stage: IDKITStage.HOST_APP_VERIFICATION, processing: false })

		Promise.all(Object.values(get().verifyCallbacks).map(cb => cb?.(result))).then(
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
					errorState: { code: ErrorCodes.REJECTED_BY_HOST_APP, message: errorMessage },
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

			if (result) requestAnimationFrame(() => Object.values(callbacks).forEach(cb => void cb?.(result)))
		}

		set({
			open,
			code: '',
			result: null,
			errorState: null,
			processing: false,
			stage: IDKITStage.WORLD_ID,
		})
	},
}))

export default useIDKitStore
