import { useEffect } from 'react'
import useIDKitStore from '@/store/idkit'
import type { Config } from '@/types/config'
import { ConfigSource } from '@/types/config'

const useIDKit = (options: Config) => {
	const { open, onOpenChange, setOptions } = useIDKitStore()

	useEffect(() => {
		setOptions(options, ConfigSource.HOOK)
	}, [setOptions, options])

	return { open, setOpen: onOpenChange }
}

export default useIDKit
