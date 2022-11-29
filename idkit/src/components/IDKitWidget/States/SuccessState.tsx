import { CheckIcon } from '@heroicons/react/20/solid'

const SuccessState = () => {
	return (
		<div className="space-y-6">
			<div className="-mt-5 flex items-center justify-center">
				<div className="bg-indigo-100 p-5 rounded-full inline-flex items-center justify-center">
					<div className="bg-indigo-500 p-5 rounded-full flex items-center justify-center">
						<CheckIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="font-semibold text-2xl text-gray-900 text-center">Success! 🎉</p>
				<p className="text-gray-400 text-lg text-center mt-2">
					Your phone number is verified and access to glassless transactions is enabled.
				</p>
			</div>
		</div>
	)
}

export default SuccessState
