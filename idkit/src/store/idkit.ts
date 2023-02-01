import { create } from 'zustand'
import { worldIDHash } from '@/lib/hashing'
import { ErrorCodes, IDKITStage } from '@/types'
import { telemetryModalOpened } from '@/lib/telemetry'
import type { CallbackFn, ISuccessResult, IErrorState } from '@/types'
import type { Config, ConfigSource, StringOrAdvanced, VerificationMethods } from '@/types/config'

export type IDKitStore = {
	code: string
	open: boolean
	stage: IDKITStage
	autoClose: boolean
	phoneNumber: string
	processing: boolean
	copy: Config['copy']
	theme: Config['theme']
	signal: StringOrAdvanced
	actionId: StringOrAdvanced
	stringifiedActionId: string // Raw action IDs get hashed and stored (used for phone non-orb signals)
	result: ISuccessResult | null
	methods: VerificationMethods[]
	errorState: IErrorState | null
	verifyCallbacks: Record<ConfigSource, CallbackFn | undefined> | Record<string, never>
	successCallbacks: Record<ConfigSource, CallbackFn | undefined> | Record<string, never>

	computed: {
		canGoBack: (stage: IDKITStage) => boolean
		getDefaultStage: (methods?: Config['methods']) => IDKITStage
	}

	retryFlow: () => void
	setCode: (code: string) => void
	setStage: (stage: IDKITStage) => void
	onOpenChange: (open: boolean) => void
	setProcessing: (processing: boolean) => void
	setPhoneNumber: (phoneNumber: string) => void
	handleVerify: (result: ISuccessResult) => void
	setErrorState: (state: IErrorState | null) => void
	setOptions: (options: Config, source: ConfigSource) => void
	addSuccessCallback: (cb: CallbackFn, source: ConfigSource) => void
	addVerificationCallback: (cb: CallbackFn, source: ConfigSource) => void
}

const useIDKitStore = create<IDKitStore>()((set, get) => ({
	open: false,
	code: '',
	signal: '',
	result: null,
	actionId: '',
	theme: 'light',
	phoneNumber: '',
	autoClose: false,
	errorState: null,
	processing: false,
	verifyCallbacks: {},
	successCallbacks: {},
	stringifiedActionId: '',
	methods: ['orb', 'phone'],
	stage: IDKITStage.SELECT_METHOD,
	copy: {},

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
		getDefaultStage: (methods?: Config['methods']) => {
			methods = methods ?? get().methods

			if (methods.length > 1) return IDKITStage.SELECT_METHOD
			return methods[0] === 'phone' ? IDKITStage.ENTER_PHONE : IDKITStage.WORLD_ID
		},
	},

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
	setOptions: (
		{ handleVerify, onSuccess, signal, actionId, autoClose, copy, theme, methods }: Config,
		source: ConfigSource
	) => {
		const stringifiedActionId = typeof actionId === 'string' ? actionId : worldIDHash(actionId).digest
		set(store => ({
			theme,
			signal,
			actionId,
			methods: methods ?? store.methods,
			stage: store.computed.getDefaultStage(methods),
			autoClose,
			stringifiedActionId,
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
			if (result) requestAnimationFrame(() => Object.values(get().successCallbacks).map(cb => () => cb?.(result)))
		}

		set({
			open,
			code: '',
			result: null,
			phoneNumber: '',
			errorState: null,
			processing: false,
			stage: get().computed.getDefaultStage(),
		})
	},
}))

export default useIDKitStore
