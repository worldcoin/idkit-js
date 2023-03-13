import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { AppErrorCodes } from '@/types/app'
import type { IDKitStore } from '@/store/idkit'
import XMarkIcon from '@/components/Icons/XMarkIcon'

const getParams = ({ retryFlow, errorState }: IDKitStore) => ({ retryFlow, errorState })

const ERROR_TITLES: Partial<Record<AppErrorCodes, string>> = {
	[AppErrorCodes.FailedByHostApp]: 'Verification Declined',
	[AppErrorCodes.GenericError]: 'Verification Failed',
}

const ERROR_MESSAGES: Record<AppErrorCodes, string> = {
	[AppErrorCodes.ConnectionFailed]: 'Connection to the World App or identity wallet failed. Please try again.',
	[AppErrorCodes.VerificationRejected]: 'Verification request rejected in the World App.',
	[AppErrorCodes.MaxVerificationsReached]: 'You have already verified the maximum number of times for this action.',
	[AppErrorCodes.AlreadySigned]: 'You have already verified for this action.',
	[AppErrorCodes.CredentialUnavailable]: 'It seems you do not have the credential required by this app.',
	[AppErrorCodes.MalformedRequest]:
		'There was a problem with this request. Please try again or contact the app owner.',
	[AppErrorCodes.InvalidNetwork]:
		'This app is not available on the network you are connected to. Visit docs.worldcoin.org/test for details.',
	[AppErrorCodes.InclusionProofFailed]: 'There was an issue fetching your credential. Please try again.',
	[AppErrorCodes.InclusionProofPending]:
		'Your credential is still being registered. Please wait a few minutes and try again.',
	[AppErrorCodes.FailedByHostApp]: 'Verification failed by the app. Please contact the app owner for details.',
	[AppErrorCodes.UnexpectedResponse]: 'Unexpected response from the World App or identity wallet. Please try again.',
	[AppErrorCodes.GenericError]: 'Something unexpected went wrong. Please try again.',
}

const ErrorState = () => {
	const { retryFlow, errorState } = useIDKitStore(getParams, shallow)

	return (
		<div className="space-y-8">
			<div className="-mt-5 flex items-center justify-center">
				<div className="inline-flex aspect-square items-center justify-center rounded-full bg-red-100 p-5">
					<div className="flex aspect-square items-center justify-center rounded-full bg-red-500 p-5">
						<XMarkIcon className="w-8 text-white" />
					</div>
				</div>
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{(errorState?.code && ERROR_TITLES[errorState.code]) || ERROR_TITLES[AppErrorCodes.GenericError]}
				</p>
				<p className="mt-2 text-center text-lg text-gray-400">
					{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
					{errorState?.message || ERROR_MESSAGES[errorState?.code ?? AppErrorCodes.GenericError]}
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
			<div>
				<p className="mt-4 text-xs text-gray-400">
					If you are the app owner, check the console for further details.
				</p>
			</div>
		</div>
	)
}

export default ErrorState
