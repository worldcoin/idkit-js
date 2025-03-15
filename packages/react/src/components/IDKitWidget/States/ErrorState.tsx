import clsx from 'clsx'
import i18n from '@/lang/i18n'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import ErrorIcon from '@/components/Icons/ErrorIcon'
import { AppErrorCodes } from '@worldcoin/idkit-core'
import ReloadIcon from '@/components/Icons/ReloadIcon'
import WarningIcon from '@/components/Icons/WarningIcon'
const getParams = ({ retryFlow, errorState }: IDKitStore) => ({ retryFlow, errorState })

const ERROR_TITLES: Partial<Record<AppErrorCodes, string>> = {
	[AppErrorCodes.GenericError]: i18n.t('generic-error-title'),
	[AppErrorCodes.FailedByHostApp]: i18n.t('failed-by-host-app-title'),
	[AppErrorCodes.VerificationRejected]: i18n.t('verification-rejected-title'),
}

const ERROR_MESSAGES: Record<AppErrorCodes, string> = {
	[AppErrorCodes.ConnectionFailed]: i18n.t('connection-failed'),
	[AppErrorCodes.VerificationRejected]: i18n.t('cancelled-in-world-app'),
	[AppErrorCodes.MaxVerificationsReached]: i18n.t('max-verifications-reached'),
	[AppErrorCodes.CredentialUnavailable]: i18n.t('credential-unavailable'),
	[AppErrorCodes.MalformedRequest]: i18n.t('malformed-request'),
	[AppErrorCodes.InvalidNetwork]: i18n.t('invalid-network'),
	[AppErrorCodes.InclusionProofFailed]: i18n.t('inclusion-proof-failed'),
	[AppErrorCodes.InclusionProofPending]: i18n.t('inclusion-proof-pending'),
	[AppErrorCodes.GenericError]: i18n.t('generic-error'),
	[AppErrorCodes.UnexpectedResponse]: i18n.t('unexpected-response'),
	[AppErrorCodes.FailedByHostApp]: i18n.t('failed-by-host-app'),
}

const ErrorState = (props: { show_modal?: boolean }) => {
	const { retryFlow, errorState } = useIDKitStore(getParams)
	const { show_modal } = props

	const errorTitle = errorState?.code ? ERROR_TITLES[errorState.code] : ERROR_TITLES[AppErrorCodes.GenericError]
	const errorMessage =
		(errorState?.code ? ERROR_MESSAGES[errorState.code] : errorState?.message) ??
		ERROR_MESSAGES[AppErrorCodes.GenericError]

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
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">{errorTitle}</p>
				<p className="mx-auto mt-2 max-w-[224px] text-center text-657080">{errorMessage}</p>
			</div>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={retryFlow}
					className="inline-flex items-center rounded-lg border border-ebecef bg-transparent px-8 py-3 font-medium text-3c424b shadow-sm transition duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
				>
					<ReloadIcon className="mr-1.5 size-5" />
					{i18n.t('try-again')}
				</button>
			</div>
		</div>
	)
}

export default ErrorState
