import clsx from 'clsx'
import { __ } from '@/lang'
import { useEffect } from 'react'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import ErrorIcon from '@/components/Icons/ErrorIcon'
import { AppErrorCodes } from '@worldcoin/idkit-core'
import WarningIcon from '@/components/Icons/WarningIcon'
const getParams = ({ retryFlow, errorState }: IDKitStore) => ({ retryFlow, errorState })

const getErrorTitle = (code: AppErrorCodes): string => {
	switch (code) {
		case AppErrorCodes.GenericError:
			return __('Something went wrong')
		case AppErrorCodes.FailedByHostApp:
			return __('Verification Declined')
		case AppErrorCodes.VerificationRejected:
			return __('Request cancelled')
		default:
			return __('Something went wrong')
	}
}

const getErrorMessage = (code: AppErrorCodes): string => {
	switch (code) {
		case AppErrorCodes.ConnectionFailed:
			return __('Connection to your wallet failed. Please try again.')
		case AppErrorCodes.VerificationRejected:
			return __("You've cancelled the request in World App.")
		case AppErrorCodes.MaxVerificationsReached:
			return __("You've already verified the maximum number of times for this action.")
		case AppErrorCodes.CredentialUnavailable:
			return __("It seems you don't have the verification level required by this app.")
		case AppErrorCodes.InvalidNetwork:
			return __('Invalid network. If you are the app owner, visit docs.world.org/test for details.')
		case AppErrorCodes.InclusionProofPending:
			return __('Your identity is still being registered. Please wait a few minutes and try again.')
		case AppErrorCodes.GenericError:
		default:
			return __("We couldn't complete your request. Please try again.")
	}
}

const ErrorState = (props: { show_modal?: boolean }) => {
	const { retryFlow, errorState } = useIDKitStore(getParams)
	const { show_modal } = props

	useEffect(() => {
		if (errorState) {
			console.error(`Error state: `, errorState)
		}
	}, [errorState])

	return (
		<div className="space-y-8">
			<div className={clsx('flex items-center justify-center', show_modal ? '-mt-5' : '')}>
				{errorState?.code == AppErrorCodes.VerificationRejected ? (
					<WarningIcon className="w-24" />
				) : (
					<ErrorIcon className="w-24" />
				)}
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{errorState?.code ? getErrorTitle(errorState.code) : getErrorTitle(AppErrorCodes.GenericError)}
				</p>
				<p className="mx-auto mt-2 max-w-[224px] text-center text-657080">
					{errorState?.code ? getErrorMessage(errorState.code) : getErrorMessage(AppErrorCodes.GenericError)}
				</p>
			</div>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={retryFlow}
					className="inline-flex items-center rounded-full border-[1.2px] border-ebecef bg-transparent px-8 py-3 font-semibold text-gray-900 shadow-sm transition duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
				>
					{__('Try Again')}
				</button>
			</div>
		</div>
	)
}

export default ErrorState
