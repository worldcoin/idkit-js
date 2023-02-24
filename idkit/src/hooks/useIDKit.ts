import { useEffect } from 'react'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import type { Config } from '@/types/config'
import { ConfigSource } from '@/types/config'
import type { IDKitStore } from '@/store/idkit'

type HookConfig = Pick<Config, 'handleVerify' | 'onSuccess'>

const getStore = ({ open, onOpenChange, addSuccessCallback, addVerificationCallback }: IDKitStore) => ({
	open,
	onOpenChange,
	addSuccessCallback,
	addVerificationCallback,
})

const useIDKit = ({ handleVerify, onSuccess }: HookConfig = {}) => {
	const { open, onOpenChange, addSuccessCallback, addVerificationCallback } = useIDKitStore(getStore, shallow)

	useEffect(() => {
		if (onSuccess) addSuccessCallback(onSuccess, ConfigSource.HOOK)
		if (handleVerify) addVerificationCallback(handleVerify, ConfigSource.HOOK)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleVerify, onSuccess])

	return { open, setOpen: onOpenChange }
}

export default useIDKit
