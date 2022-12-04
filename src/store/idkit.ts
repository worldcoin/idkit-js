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
	code: string
	actionId: string
	stage: IDKITStage
	phoneNumber: string
	retryFlow: () => void
	setCode: (code: string) => void
	setOpen: (open: boolean) => void
	onOpenChange: (open: boolean) => void
	setStage: (stage: IDKITStage) => void
	setActionId: (actionId: string) => void
	setPhoneNumber: (phoneNumber: string) => void
}

const useIDKitStore = create<IDKitStore>()(set => ({
	open: false,
	code: '',
	actionId: '',
	phoneNumber: '',
	stage: IDKITStage.ENTER_PHONE,
	setOpen: open => set({ open }),
	setCode: code => set({ code }),
	setStage: stage => set({ stage }),
	setActionId: (actionId: string) => set({ actionId }),
	setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
	retryFlow: () => set({ stage: IDKITStage.ENTER_PHONE, phoneNumber: '' }),
	onOpenChange: open => {
		if (open) return set({ open })

		set({ open, phoneNumber: '', stage: IDKITStage.ENTER_PHONE })
	},
}))

export default useIDKitStore
