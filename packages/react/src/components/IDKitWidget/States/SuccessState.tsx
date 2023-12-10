import { __ } from '@/lang'
import CheckIcon from '@/components/Icons/CheckIcon'

const SuccessState = () => {
	return (
		<div className="space-y-6">
			<div className="-mt-5 flex items-center justify-center">
				<CheckIcon className="w-24 text-white" />
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{__('Successfully verified')}
				</p>
				<p className="text-657080 mt-2 max-w-[14rem] text-center text-lg">
					{__('Your World ID verification was successful')}
				</p>
			</div>
		</div>
	)
}

export default SuccessState
