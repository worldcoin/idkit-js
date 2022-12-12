import { CheckIcon } from '@heroicons/react/20/solid'

const SuccessState = () => {
	return (
		<div className="space-y-6">
			<div className="-mt-5 flex items-center justify-center">
				<div className="bg-6445dd/10 p-5 rounded-full inline-flex items-center justify-center">
					<div className="bg-6445dd p-5 rounded-full flex items-center justify-center">
						<CheckIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="font-semibold text-2xl text-gray-900 dark:text-white text-center">Success! 🎉</p>
				<p className="text-70868f text-lg text-center mt-2">
					{/* TODO: This caption should be a config option */}
					Your phone number is verified and access to gasless transactions is enabled.
				</p>
			</div>
		</div>
	)
}

export default SuccessState
