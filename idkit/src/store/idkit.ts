import create from 'zustand'
import { worldIDHash } from '@/lib/hashing'
import { ErrorCodes, IDKITStage } from '@/types'
import { telemetryModalOpened } from '@/lib/telemetry'
import type { CallbackFn, ISuccessResult, IErrorState } from '@/types'
import type { Config, ConfigSource, StringOrAdvanced } from '@/types/config'

export type IDKitStore = {
	code: string
	open: boolean
	stage: IDKITStage
	autoClose: boolean
	phoneNumber: string
	processing: boolean
	copy: Config['copy']
	signal: StringOrAdvanced
	actionId: StringOrAdvanced
	stringifiedActionId: string // Raw action IDs get hashed and stored (used for phone non-orb signals)
	errorState: IErrorState | null
	verifyCallbacks: Record<ConfigSource, CallbackFn | undefined> | Record<string, never>
	successCallbacks: Record<ConfigSource, CallbackFn | undefined> | Record<string, never>

	retryFlow: () => void
	setCode: (code: string) => void
	setOpen: (open: boolean) => void
	setStage: (stage: IDKITStage) => void
	onOpenChange: (open: boolean) => void
	onVerification: (result: ISuccessResult) => void
	setProcessing: (processing: boolean) => void
	setPhoneNumber: (phoneNumber: string) => void
	setErrorState: (state: IErrorState | null) => void
	setOptions: (options: Config, source: ConfigSource) => void
	addSuccessCallback: (cb: CallbackFn, source: ConfigSource) => void
	addVerificationCallback: (cb: CallbackFn, source: ConfigSource) => void
}

const useIDKitStore = create<IDKitStore>()((set, get) => ({
	open: false,
	code: '',
	signal: '',
	actionId: '',
	errorTitle: '',
	errorDetail: '',
	phoneNumber: '',
	autoClose: false,
	errorState: null,
	processing: false,
	verifyCallbacks: {},
	successCallbacks: {},
	stringifiedActionId: '',
	stage: IDKITStage.ENTER_PHONE,
	copy: {},

	setOpen: open => set({ open }),
	setCode: code => set({ code }),
	setStage: stage => set({ stage }),
	setErrorState: errorState => set({ errorState }),
	setPhoneNumber: phoneNumber => set({ phoneNumber }),
	setProcessing: (processing: boolean) => set({ processing }),
	retryFlow: () => set({ stage: IDKITStage.ENTER_PHONE, phoneNumber: '', errorState: null }),
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
	setOptions: ({ onVerification, onSuccess, signal, actionId, autoClose, copy }: Config, source: ConfigSource) => {
		const stringifiedActionId = typeof actionId === 'string' ? actionId : worldIDHash(actionId).digest
		set(store => ({
			actionId,
			stringifiedActionId,
			signal,
			autoClose,
			copy: { ...store.copy, ...copy },
		}))

		if (onSuccess) get().addSuccessCallback(onSuccess, source)
		if (onVerification) get().addSuccessCallback(onVerification, source)
	},
	onVerification: (result: ISuccessResult) => {
		set({ stage: IDKITStage.HOST_APP_VERIFICATION, processing: false })

		Promise.all(Object.values(get().verifyCallbacks).map(cb => cb?.(result)))
			.then(() => {
				set({ stage: IDKITStage.SUCCESS })
				Object.values(get().successCallbacks).map(cb => cb?.(result))
			})
			.catch(response => {
				let errorMessage: string | undefined = undefined
				if (response && typeof response === 'object' && (response as Record<string, unknown>).message) {
					errorMessage = (response as Record<string, unknown>).message as string
				}
				set({
					stage: IDKITStage.ERROR,
					errorState: { code: ErrorCodes.REJECTED_BY_HOST_APP, message: errorMessage },
				})
			})

		if (get().autoClose) setTimeout(() => set({ open: false }), 1000)
	},
	onOpenChange: open => {
		if (open) {
			telemetryModalOpened()
			return set({ open })
		}
		set({ open, phoneNumber: '', code: '', processing: false, stage: IDKITStage.ENTER_PHONE })
	},
}))

export default useIDKitStore
