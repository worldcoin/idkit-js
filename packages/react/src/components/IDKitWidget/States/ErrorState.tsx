import { __ } from '@/lang'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import ErrorIcon from '@/components/Icons/ErrorIcon'
import { AppErrorCodes } from '@worldcoin/idkit-core'
import ReloadIcon from '@/components/Icons/ReloadIcon'
import WarningIcon from '@/components/Icons/WarningIcon'

const getParams = ({ retryFlow, errorState }: IDKitStore) => ({ retryFlow, errorState })

const ERROR_TITLES: Partial<Record<AppErrorCodes, string>> = {
	[AppErrorCodes.GenericError]: __('Something went wrong'),
	[AppErrorCodes.FailedByHostApp]: __('Verification Declined'),
	[AppErrorCodes.VerificationRejected]: __('Request cancelled'),
}

const ERROR_MESSAGES: Record<AppErrorCodes, string> = {
	[AppErrorCodes.ConnectionFailed]: __('Connection to your wallet failed. Please try again.'),
	[AppErrorCodes.VerificationRejected]: __('You’ve cancelled the request in World App.'),
	[AppErrorCodes.MaxVerificationsReached]: __(
		'You have already verified the maximum number of times for this action.'
	),
	[AppErrorCodes.CredentialUnavailable]: __('It seems you do not have the verification level required by this app.'),
	[AppErrorCodes.MalformedRequest]: __(
		'There was a problem with this request. Please try again or contact the app owner.'
	),
	[AppErrorCodes.InvalidNetwork]: __(
		'Invalid network. If you are the app owner, visit docs.worldcoin.org/test for details.'
	),
	[AppErrorCodes.InclusionProofFailed]: __('There was an issue fetching your credential. Please try again.'),
	[AppErrorCodes.InclusionProofPending]: __(
		'Your identity is still being registered. Please wait a few minutes and try again.'
	),
	[AppErrorCodes.GenericError]: __('Something unexpected went wrong. Please try again.'),
	[AppErrorCodes.UnexpectedResponse]: __('Unexpected response from your wallet. Please try again.'),
	[AppErrorCodes.FailedByHostApp]: __('Verification failed by the app. Please contact the app owner for details.'),
}

const ErrorState = () => {
	const { retryFlow, errorState } = useIDKitStore(getParams)

	return (
		<div className="space-y-8">
			<div className="-mt-5 flex items-center justify-center">
				{errorState?.code == AppErrorCodes.VerificationRejected ? (
					<WarningIcon className="w-24" />
				) : (
					<ErrorIcon className="w-24" />
				)}
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{(errorState?.code && ERROR_TITLES[errorState.code]) ?? ERROR_TITLES[AppErrorCodes.GenericError]}
				</p>
				<p className="mx-auto mt-2 max-w-[224px] text-center text-657080">
					{errorState?.message ?? ERROR_MESSAGES[errorState?.code ?? AppErrorCodes.GenericError]}
				</p>
			</div>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={retryFlow}
					className="inline-flex items-center rounded-lg border border-ebecef bg-transparent px-8 py-3 font-medium text-3c424b shadow-sm transition duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
				>
					<ReloadIcon className="mr-1.5 h-5 w-5" />
					{__('Try Again')}
				</button>
			</div>
		</div>
	)
}

export default ErrorState
