/**
 * This state is triggered after a successful signal is received and the host app is performing their own verifications,
 * before we show a success/error state.
 */

import i18n from '@/lang/i18n'
import LoadingIcon from '@/components/Icons/LoadingIcon'

const HostAppVerificationState = () => {
	return (
		<div className="space-y-6">
			<div className="flex justify-center">
				<LoadingIcon className="size-24" />
			</div>
			<div className="mt-4 text-70868f">{i18n.t('transmitting-verification')}</div>
		</div>
	)
}

export default HostAppVerificationState
