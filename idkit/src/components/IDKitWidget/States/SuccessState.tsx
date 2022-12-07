import { CheckIcon } from '@heroicons/react/20/solid'

const SuccessState = () => {
	return (
		<div className="space-y-6">
			<div className="-mt-5 flex items-center justify-center">
				<div className="inline-flex items-center justify-center rounded-full bg-indigo-100 p-5">
					<div className="flex items-center justify-center rounded-full bg-indigo-500 p-5">
						<CheckIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900">Success! 🎉</p>
				<p className="mt-2 text-center text-lg text-gray-400">
					{/* TODO: This caption should be a config option */}
					Your phone number is verified and access to gasless transactions is enabled.
				</p>
			</div>
		</div>
	)
}

export default SuccessState
