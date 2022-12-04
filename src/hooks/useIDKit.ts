import useIDKitStore from '@/store/idkit'

const useIDKit = () => {
	const { open, onOpenChange } = useIDKitStore()

	return { open, setOpen: onOpenChange }
}

export default useIDKit
