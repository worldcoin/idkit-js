import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, memo, useCallback, useMemo, useState } from 'react'

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
	setOpen: Dispatch<SetStateAction<boolean>>
	setCode: Dispatch<SetStateAction<string>>
	setStage: Dispatch<SetStateAction<IDKITStage>>
	setPhoneNumber: Dispatch<SetStateAction<string>>
	retryFlow: () => void
	onOpenChange: (open: boolean) => void
}

const defaultValues: IDKitStore = {
	open: false,
	code: '',
	phoneNumber: '',
	stage: IDKITStage.ENTER_PHONE,
	setOpen: () => null,
	setCode: () => null,
	setStage: () => null,
	setPhoneNumber: () => null,
	retryFlow: () => null,
	onOpenChange: (_open: boolean) => null,
}

export const StoreContext = createContext<IDKitStore>(defaultValues)

export const StoreProvider = memo(function StoreProvider(props: { children: ReactNode }) {
	const [open, setOpen] = useState<boolean>(false)
	const [code, setCode] = useState<string>('')
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [stage, setStage] = useState<IDKITStage>(IDKITStage.ENTER_PHONE)

	const onOpenChange = useCallback((open: boolean) => {
		if (open) {
			return setOpen(open)
		}

		setOpen(open)
		setPhoneNumber('')
		setStage(IDKITStage.ENTER_PHONE)
	}, [])

	const retryFlow = useCallback(() => {
		setStage(IDKITStage.ENTER_PHONE)
		setPhoneNumber('')
	}, [])

	const value: IDKitStore = useMemo(
		() => ({
			open,
			code,
			phoneNumber,
			stage,
			setOpen,
			setCode,
			setStage,
			setPhoneNumber,
			retryFlow,
			onOpenChange,
		}),
		[code, onOpenChange, open, phoneNumber, retryFlow, stage]
	)

	return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>
})
