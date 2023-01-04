import { ErrorCodes } from '@/types'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import { XMarkIcon } from '@heroicons/react/20/solid'

const getParams = ({ retryFlow, errorState }: IDKitStore) => ({ retryFlow, errorState })

const ERROR_TITLES: Record<ErrorCodes, string> = {
	[ErrorCodes.GENERIC_ERROR]: 'Something went wrong',
	[ErrorCodes.INVALID_CODE]: 'Invalid code',
	[ErrorCodes.REJECTED_BY_HOST_APP]: 'Verification declined by app',
}

const ErrorState = () => {
	const { retryFlow, errorState } = useIDKitStore(getParams)

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
					{ERROR_TITLES[errorState?.code ?? ErrorCodes.GENERIC_ERROR]}
				</p>
				<p className="mt-2 text-center text-lg text-gray-400">
					{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
					{errorState?.message || 'Please try to verify again in a moment'}
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
