import create from 'zustand'
import { IDKITStage } from '@/types'
import type { CallbackFn, ErrorState, IPhoneSignal} from '@/types';

export type IDKitStore = {
	open: boolean
	phoneNumber: string
	code: string
	actionId: string
	stage: IDKITStage
	processing: boolean // Whether an async request is being processed and we show a loading state in the UI
	errorState: ErrorState | null
  successCallbacks: Array<CallbackFn>

	retryFlow: () => void
	setCode: (code: string) => void
	setOpen: (open: boolean) => void
	onOpenChange: (open: boolean) => void
	setStage: (stage: IDKITStage) => void
	setActionId: (actionId: string) => void
  onSuccess: (result: IPhoneSignal) => void
	setProcessing: (processing: boolean) => void
  addSuccessCallback: (cb: CallbackFn) => void
	setPhoneNumber: (phoneNumber: string) => void
	setErrorState: (errorState: ErrorState | null) => void
}

const useIDKitStore = create<IDKitStore>()((set, get) => ({
	open: false,
	code: '',
	actionId: '',
	phoneNumber: '',
	stage: IDKITStage.ENTER_PHONE,
	processing: false,
	errorState: null,
	successCallbacks: [],

	setOpen: open => set({ open }),
	setCode: code => set({ code }),
	setStage: stage => set({ stage }),
	setActionId: actionId => set({ actionId }),
  setErrorState: errorState => set({ errorState }),
	setPhoneNumber: phoneNumber => set({ phoneNumber }),
	setProcessing: (processing: boolean) => set({ processing }),
	retryFlow: () => set({ stage: IDKITStage.ENTER_PHONE, phoneNumber: '' }),
  onSuccess: (result: IPhoneSignal) => {
    get().successCallbacks.map(cb => cb(result))
    set({ stage: IDKITStage.SUCCESS, processing: false })
  },
  addSuccessCallback: (cb: CallbackFn) => set(state => ({ successCallbacks: [...state.successCallbacks, cb] })),
	onOpenChange: open => {
		if (open) return set({ open })
		set({ open, phoneNumber: '', code: '', processing: false, stage: IDKITStage.ENTER_PHONE })
	},
}))

export default useIDKitStore
