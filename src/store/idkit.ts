import create from 'zustand'

export enum IDKITStage {
	ENTER_PHONE = 'ENTER_PHONE',
	ENTER_CODE = 'ENTER_CODE',
	WORLD_ID = 'WORLD_ID',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
}

export type IDKitStore = {
	open: boolean
	phoneNumber: string
	code: string
	actionId: string
	stage: IDKITStage
	pending: boolean
	retryFlow: () => void
	setOpen: (open: boolean) => void
	onOpenChange: (open: boolean) => void
	setStage: (stage: IDKITStage) => void
	setActionId: (actionId: string) => void
	setPhoneNumber: (phoneNumber: string) => void
	setCode: (code: string) => void
	setPending: (pending: boolean) => void
}

const useIDKitStore = create<IDKitStore>()(set => ({
	open: false,
	code: '',
	actionId: '',
	phoneNumber: '',
	stage: IDKITStage.ENTER_PHONE,
	pending: false,
	setOpen: open => set({ open }),
	setPhoneNumber: phoneNumber => set({ phoneNumber }),
	setCode: code => set({ code }),
	setActionId: actionId => set({ actionId }),
	setStage: stage => set({ stage }),
	retryFlow: () => set({ stage: IDKITStage.ENTER_PHONE, phoneNumber: '' }),
	setPending: (pending: boolean) => set({ pending }),
	onOpenChange: open => {
		if (open) return set({ open })
		set({ open, phoneNumber: '', code:'', pending:false, stage: IDKITStage.ENTER_PHONE })
	},
}))

export default useIDKitStore
