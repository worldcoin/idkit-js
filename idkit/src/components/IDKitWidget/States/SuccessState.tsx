import useIDKitStore from '@/store/idkit'
import { DEFAULT_COPY } from '@/types/config'
import type { IDKitStore } from '@/store/idkit'
import CheckIcon from '@/components/Icons/CheckIcon'

const getCopy = (store: IDKitStore) => store.copy

const SuccessState = () => {
	const copy = useIDKitStore(getCopy)

	return (
		<div className="space-y-6">
			<div className="-mt-5 flex items-center justify-center">
				<div className="bg-6445dd/10 inline-flex items-center justify-center rounded-full p-5">
					<div className="bg-6445dd flex items-center justify-center rounded-full p-5">
						<CheckIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">Success! 🎉</p>
				{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
				<p className="text-70868f mt-2 text-center text-lg">{copy?.success || DEFAULT_COPY.success}</p>
			</div>
		</div>
	)
}

export default SuccessState
