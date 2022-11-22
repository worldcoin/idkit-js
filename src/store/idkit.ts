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
	stage: IDKITStage
	phoneNumber: string
	retryFlow: () => void
	setCode: (code: string) => void
	setOpen: (open: boolean) => void
	onOpenChange: (open: boolean) => void
	setStage: (stage: IDKITStage) => void
	setPhoneNumber: (phoneNumber: string) => void
}

const useIDKitStore = create<IDKitStore>()(set => ({
	open: false,
	code: '',
	phoneNumber: '',
	stage: IDKITStage.ENTER_PHONE,
	setOpen: open => set({ open }),
	setCode: code => set({ code }),
	setStage: stage => set({ stage }),
	setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
	retryFlow: () => set({ stage: IDKITStage.ENTER_PHONE, phoneNumber: '' }),
	onOpenChange: open => {
		if (open) return set({ open })

		set({ open, phoneNumber: '', stage: IDKITStage.ENTER_PHONE })
	},
}))

export default useIDKitStore
