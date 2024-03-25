import { __ } from '@/lang'
import { IDKITStage } from '@/types'
import type { CallbackFn } from '@/types'
import { shallow } from 'zustand/shallow'
import type { Config, ConfigSource } from '@/types/config'
import { createWithEqualityFn } from 'zustand/traditional'
import {
	AppErrorCodes,
	DEFAULT_VERIFICATION_LEVEL,
	type IErrorState,
	type IDKitConfig,
	type ISuccessResult,
} from '@worldcoin/idkit-core'

const SELF_HOSTED_APP_ID = 'self_hosted'

export type IDKitStore = {
	app_id: IDKitConfig['app_id'] | typeof SELF_HOSTED_APP_ID | ''
	action: IDKitConfig['action']
	signal: IDKitConfig['signal']
	bridge_url?: IDKitConfig['bridge_url']
	action_description?: IDKitConfig['action_description']
	verification_level: NonNullable<IDKitConfig['verification_level']>

	open: boolean
	stage: IDKITStage
	autoClose: boolean
	processing: boolean
	result: ISuccessResult | null
	errorState: IErrorState | null
	errorCallbacks: Record<ConfigSource, CallbackFn<IErrorState> | undefined> | Record<string, never>
	verifyCallbacks: Record<ConfigSource, CallbackFn<ISuccessResult> | undefined> | Record<string, never>
	successCallbacks: Record<ConfigSource, CallbackFn<ISuccessResult> | undefined> | Record<string, never>

	retryFlow: () => void
	setStage: (stage: IDKITStage) => void
	onOpenChange: (open: boolean) => void
	setProcessing: (processing: boolean) => void
	handleVerify: (result: ISuccessResult) => void
	setErrorState: (state: IErrorState | null) => void
	setOptions: (options: Config, source: ConfigSource) => void
	addErrorCallback: (cb: CallbackFn<IErrorState>, source: ConfigSource) => void
	addSuccessCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => void
	addVerificationCallback: (cb: CallbackFn<ISuccessResult>, source: ConfigSource) => void
}

const useIDKitStore = createWithEqualityFn<IDKitStore>()(
	(set, get) => ({
		app_id: '',
		signal: '',
		action: '',
		action_description: '',
		bridge_url: '',
		verification_level: DEFAULT_VERIFICATION_LEVEL,

		open: false,
		result: null,
		errorTitle: '',
		errorDetail: '',
		autoClose: true,
		errorState: null,
		processing: false,
		errorCallbacks: {},
		verifyCallbacks: {},
		successCallbacks: {},
		stage: IDKITStage.WORLD_ID,

		setStage: stage => set({ stage }),
		setErrorState: errorState => set({ errorState }),
		setProcessing: (processing: boolean) => set({ processing }),
		retryFlow: () => {
			set({ stage: IDKITStage.WORLD_ID, errorState: null })
		},
		addErrorCallback: (cb: CallbackFn<IErrorState>, source: ConfigSource) => {
			set(state => {
				state.errorCallbacks[source] = cb

				return state
			})
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
				onError,
				verification_level,
				action_description,
				bridge_url,
				autoClose,
				advanced,
			}: Config,
			source: ConfigSource
		) => {
			set({
				signal,
				action,
				bridge_url,
				action_description,
				autoClose: autoClose ?? true,
				app_id: advanced?.self_hosted ? SELF_HOSTED_APP_ID : app_id,
				verification_level: verification_level ?? DEFAULT_VERIFICATION_LEVEL,
			})

			get().addSuccessCallback(onSuccess, source)
			if (onError) get().addErrorCallback(onError, source)
			if (handleVerify) get().addVerificationCallback(handleVerify, source)
		},
		handleVerify: (result: ISuccessResult) => {
			set({ stage: IDKITStage.HOST_APP_VERIFICATION, processing: false })

			// the `async` added below ensures that we properly handle errors thrown by the callbacks if they are defined as synchronous functions
			// without it, if `handleVerify` was a synchronous function and it threw an error, the error would not be caught by the promise chain to be properly displayed in IDKit
			// this has no effect on the callbacks if they are defined as asynchronous functions
			Promise.all(Object.values(get().verifyCallbacks).map(async cb => cb?.(result))).then(
				() => {
					set({ stage: IDKITStage.SUCCESS, result })

					if (get().autoClose) setTimeout(() => get().onOpenChange(false), 2500)
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
				return set({ open })
			}

			const errorState = get().errorState
			if (get().stage === IDKITStage.ERROR && errorState) {
				const callbacks = get().errorCallbacks

				requestAnimationFrame(() => Object.values(callbacks).forEach(cb => void cb?.(errorState)))
			}

			const result = get().result
			if (get().stage == IDKITStage.SUCCESS && result) {
				const callbacks = get().successCallbacks

				requestAnimationFrame(() => Object.values(callbacks).forEach(cb => void cb?.(result)))
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
