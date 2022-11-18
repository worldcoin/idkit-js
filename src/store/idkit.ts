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
	stage: IDKITStage
	phoneNumber: string
	setOpen: (open: boolean) => void
	setPhoneNumber: (phoneNumber: string) => void
}

const useIDKitStore = create<IDKitStore>()(set => ({
	open: false,
	phoneNumber: '',
	stage: IDKITStage.ENTER_PHONE,
	setOpen: open => set({ open }),
	setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
}))

export default useIDKitStore
