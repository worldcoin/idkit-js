import { IDKITStage } from '@/types'
import create from 'zustand'

export type IDKitStore = {
	open: boolean
	phoneNumber: string
	code: string
	actionId: string
	stage: IDKITStage
	processing: boolean // Whether an async request is being processed and we show a loading state in the UI
	retryFlow: () => void
	setOpen: (open: boolean) => void
	onOpenChange: (open: boolean) => void
	setStage: (stage: IDKITStage) => void
	setActionId: (actionId: string) => void
	setPhoneNumber: (phoneNumber: string) => void
	setCode: (code: string) => void
	setProcessing: (processing: boolean) => void
}

const useIDKitStore = create<IDKitStore>()(set => ({
	open: false,
	code: '',
	actionId: '',
	phoneNumber: '',
	stage: IDKITStage.ENTER_PHONE,
	processing: false,
	setOpen: open => set({ open }),
	setPhoneNumber: phoneNumber => set({ phoneNumber }),
	setCode: code => set({ code }),
	setActionId: actionId => set({ actionId }),
	setStage: stage => set({ stage }),
	retryFlow: () => set({ stage: IDKITStage.ENTER_PHONE, phoneNumber: '' }),
	setProcessing: (processing: boolean) => set({ processing }),
	onOpenChange: open => {
		if (open) return set({ open })
		set({ open, phoneNumber: '', code:'', processing:false, stage: IDKITStage.ENTER_PHONE })
	},
}))

export default useIDKitStore
