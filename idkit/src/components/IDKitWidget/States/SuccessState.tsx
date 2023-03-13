import CheckIcon from '@/components/Icons/CheckIcon'

const SuccessState = () => {
	return (
		<div className="space-y-6">
			<div className="-mt-5 flex items-center justify-center">
				<div className="inline-flex aspect-square items-center justify-center rounded-full bg-green-100 p-5">
					<div className="flex aspect-square items-center justify-center rounded-full bg-green-500 p-5">
						<CheckIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">Success! 🎉</p>
				{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
				<p className="text-70868f mt-2 text-center text-lg">World ID verification was successful</p>
			</div>
		</div>
	)
}

export default SuccessState
