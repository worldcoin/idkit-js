import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import { XMarkIcon } from '@heroicons/react/20/solid'

const getParams = ({ errorTitle, errorDetail, retryFlow }: IDKitStore) => ({ errorTitle, errorDetail, retryFlow })

const ErrorState = () => {
	const { errorTitle, errorDetail, retryFlow } = useIDKitStore(getParams)

	return (
		<div className="space-y-8">
			<div className="-mt-5 flex items-center justify-center">
				<div className="bg-ff6848/10 inline-flex items-center justify-center rounded-full p-5">
					<div className="bg-ff6848 flex items-center justify-center rounded-full p-5">
						<XMarkIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{errorTitle ? 'Error: ' + errorTitle.toUpperCase() : 'Something went wrong'}
				</p>
				<p className="mt-2 text-center text-lg text-gray-400">
					{errorDetail ? errorDetail : 'Please try to verify your phone number again in a few moments'}
				</p>
			</div>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={retryFlow}
					className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-indigo-600"
				>
					Try Again
				</button>
			</div>
		</div>
	)
}

export default ErrorState
