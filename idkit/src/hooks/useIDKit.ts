import useIDKitStore from '@/store/idkit'
import type { Config } from '@/types/Config'

const useIDKit = (options: Config) => {
	const { open, onOpenChange, setOptions } = useIDKitStore()
	setOptions(options)

	return { open, setOpen: onOpenChange }
}

export default useIDKit
