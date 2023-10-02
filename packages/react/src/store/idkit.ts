import { __ } from '@/lang'
import { IDKITStage } from '@/types'
import type { CallbackFn } from '@/types'
import { shallow } from 'zustand/shallow'
import { telemetryModalOpened } from '@/lib/telemetry'
import type { Config, ConfigSource } from '@/types/config'
import { createWithEqualityFn } from 'zustand/traditional'
import {
	AppErrorCodes,
	CredentialType,
	type IErrorState,
	type IDKitConfig,
	type ISuccessResult,
} from '@worldcoin/idkit-core'

export type IDKitStore = {
	app_id: IDKitConfig['app_id']
	action: IDKitConfig['action']
	signal: IDKitConfig['signal']
	bridgeUrl?: IDKitConfig['bridgeUrl']
	action_description?: IDKitConfig['action_description']
	credential_types?: IDKitConfig['credential_types']

	open: boolean
	stage: IDKITStage
	autoClose: boolean
	processing: boolean
	theme: Config['theme']
	result: ISuccessResult | null
	errorState: IErrorState | null
	verifyCallbacks: Record<ConfigSource, CallbackFn<ISuccessResult> | undefined> | Record<string, never>
	successCallbacks: Record<ConfigSource, CallbackFn<ISuccessResult> | undefined> | Record<string, never>

	computed: {
		canGoBack: (stage: IDKITStage) => boolean
	}

	retryFlow: () => void
	setStage: (stage: IDKITStage) => void
	onOpenChange: (open: boolean) => void
	setProcessing: (processing: boolean) => void
	handleVerify: (result: ISuccessResult) => void
	setErrorState: (state: IErrorState | null) => void
	setOptions: (options: Config, source: ConfigSource) => void
	addSuccessCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => void
	addVerificationCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => void
}

const useIDKitStore = createWithEqualityFn<IDKitStore>()(
	(set, get) => ({
		app_id: '',
		signal: '',
		action: '',
		action_description: '',
		bridgeUrl: '',
		credential_types: [],

		open: false,
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
				return stage == IDKITStage.PRIVACY
			},
		},

		setStage: stage => set({ stage }),
		setErrorState: errorState => set({ errorState }),
		setProcessing: (processing: boolean) => set({ processing }),
		retryFlow: () => {
			set({ stage: IDKITStage.WORLD_ID, errorState: null })
		},
		addSuccessCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => {
			set(state => {
				state.successCallbacks[source] = cb

				return state
			})
		},
		addVerificationCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => {
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
				bridgeUrl,
				autoClose,
				theme,
			}: Config,
			source: ConfigSource
		) => {
			const sanitized_credential_types = credential_types?.filter(type =>
				Object.values(CredentialType).includes(type)
			)

			set({
				theme,
				signal,
				action,
				app_id,
				autoClose,
				bridgeUrl,
				credential_types: sanitized_credential_types,
				action_description,
			})

			get().addSuccessCallback(onSuccess, source)
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
						errorState: {
							code: AppErrorCodes.FailedByHostApp,
							message: errorMessage ? __(errorMessage) : undefined,
						},
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
				result: null,
				errorState: null,
				processing: false,
				stage: IDKITStage.WORLD_ID,
			})
		},
	}),
	shallow
)

export default useIDKitStore
