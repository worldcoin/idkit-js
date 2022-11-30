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
	stage: IDKITStage
	pending: boolean
	retryFlow: () => void
	setCode: (code: string) => void
	setOpen: (open: boolean) => void
	onOpenChange: (open: boolean) => void
	setStage: (stage: IDKITStage) => void
	setPhoneNumber: (phoneNumber: string) => void
	setPending: (pending: boolean) => void
}

const useIDKitStore = create<IDKitStore>()(set => ({
	open: false,
	phoneNumber: '',
	code: '',
	stage: IDKITStage.ENTER_PHONE,
	pending: false,
	setOpen: open => set({ open }),
	setCode: code => set({ code }),
	setStage: stage => set({ stage }),
	setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
	setPending: (pending: boolean) => set({ pending }),
	retryFlow: () => set({ stage: IDKITStage.ENTER_PHONE, phoneNumber: '' }),
	onOpenChange: open => {
		if (open) return set({ open })

		set({ open, phoneNumber: '', stage: IDKITStage.ENTER_PHONE })
	},
}))

export default useIDKitStore
