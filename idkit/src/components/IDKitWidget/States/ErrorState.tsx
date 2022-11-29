// import useIDKitStore, { IDKitStore } from '@/store/idkit'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { StoreContext } from '@/contexts/StoreContext'

// const getParams = ({ retryFlow }: IDKitStore) => ({ retryFlow })

const ErrorState = () => {
	// const { retryFlow } = useIDKitStore(getParams)
	const { retryFlow } = useContext(StoreContext)

	return (
		<div className="space-y-8">
			<div className="-mt-5 flex items-center justify-center">
				<div className="inline-flex items-center justify-center rounded-full bg-red-100 p-5">
					<div className="flex items-center justify-center rounded-full bg-red-500 p-5">
						<XMarkIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900">Something went wrong</p>
				<p className="mt-2 text-center text-lg text-gray-400">
					Please try to verify your phone number again in a few moments
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
