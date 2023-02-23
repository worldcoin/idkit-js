import { useEffect } from 'react'
import useIDKitStore from '@/store/idkit'
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

const useIDKit = (options: HookConfig = {}) => {
	const { open, onOpenChange, addSuccessCallback, addVerificationCallback } = useIDKitStore(getStore)

	useEffect(() => {
		if (options.onSuccess) addSuccessCallback(options.onSuccess, ConfigSource.HOOK)
		if (options.handleVerify) addVerificationCallback(options.handleVerify, ConfigSource.HOOK)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [options])

	return { open, setOpen: onOpenChange }
}

export default useIDKit
