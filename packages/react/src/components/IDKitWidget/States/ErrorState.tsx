import { __ } from '@/lang'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import ErrorIcon from '@/components/Icons/ErrorIcon'
import { AppErrorCodes } from '@worldcoin/idkit-core'

const getParams = ({ retryFlow, errorState }: IDKitStore) => ({ retryFlow, errorState })

const ERROR_TITLES: Partial<Record<AppErrorCodes, string>> = {
	[AppErrorCodes.GenericError]: __('Something went wrong'),
	[AppErrorCodes.FailedByHostApp]: __('Verification Declined'),
}

const ERROR_MESSAGES: Record<AppErrorCodes, string> = {
	[AppErrorCodes.ConnectionFailed]: __('Connection to the World App or identity wallet failed. Please try again.'),
	[AppErrorCodes.VerificationRejected]: __('Verification request rejected in the World App.'),
	[AppErrorCodes.MaxVerificationsReached]: __(
		'You have already verified the maximum number of times for this action.'
	),
	[AppErrorCodes.CredentialUnavailable]: __('It seems you do not have the credential required by this app.'),
	[AppErrorCodes.MalformedRequest]: __(
		'There was a problem with this request. Please try again or contact the app owner.'
	),
	[AppErrorCodes.InvalidNetwork]: __(
		'This app is not available on the network you are connected to. Visit docs.worldcoin.org/test for details.'
	),
	[AppErrorCodes.InclusionProofFailed]: __('There was an issue fetching your credential. Please try again.'),
	[AppErrorCodes.InclusionProofPending]: __(
		'Your credential is still being registered. Please wait a few minutes and try again.'
	),
	[AppErrorCodes.FailedByHostApp]: __('Verification failed by the app. Please contact the app owner for details.'),
	[AppErrorCodes.UnexpectedResponse]: __(
		'Unexpected response from the World App or identity wallet. Please try again.'
	),
	[AppErrorCodes.GenericError]: __('Something unexpected went wrong. Please try again.'),
}

const ErrorState = () => {
	const { retryFlow, errorState } = useIDKitStore(getParams)

	return (
		<div className="space-y-8">
			<div className="-mt-5 flex items-center justify-center">
				<ErrorIcon className="w-24" />
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{(errorState?.code && ERROR_TITLES[errorState.code]) || ERROR_TITLES[AppErrorCodes.GenericError]}
				</p>
				<p className="mx-auto mt-2 max-w-[14rem] text-center text-657080">
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
					{__('Try Again')}
				</button>
			</div>
		</div>
	)
}

export default ErrorState
