import useIDKitStore from '@/store/idkit'
import type { Config } from '@/types/config'
import { ConfigSource } from '@/types/config'

const useIDKit = (options: Config) => {
	const { open, onOpenChange, setOptions } = useIDKitStore()
	setOptions(options, ConfigSource.HOOK)

	return { open, setOpen: onOpenChange }
}

export default useIDKit
