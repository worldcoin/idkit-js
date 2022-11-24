import { XMarkIcon } from '@heroicons/react/20/solid'
import useIDKitStore, { IDKitStore } from '@/store/idkit'

const getParams = ({ retryFlow }: IDKitStore) => ({ retryFlow })

const ErrorState = () => {
	const { retryFlow } = useIDKitStore(getParams)

	return (
		<div className="space-y-8">
			<div className="-mt-5 flex items-center justify-center">
				<div className="bg-red-100 p-5 rounded-full inline-flex items-center justify-center">
					<div className="bg-red-500 p-5 rounded-full flex items-center justify-center">
						<XMarkIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="font-semibold text-2xl text-gray-900 text-center">Something went wrong</p>
				<p className="text-gray-400 text-lg text-center mt-2">
					Please try to verify your phone number again in a few moments
				</p>
			</div>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={retryFlow}
					className="inline-flex items-center px-8 py-3 border border-transparent font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-indigo-600"
				>
					Try Again
				</button>
			</div>
		</div>
	)
}

export default ErrorState
