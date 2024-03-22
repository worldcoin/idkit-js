/**
 * This state is triggered after a successful signal is received and the host app is performing their own verifications,
 * before we show a success/error state.
 */

import { __ } from '@/lang'
import { memo } from 'react'
import LoadingIcon from '@/components/Icons/LoadingIcon'

const HostAppVerificationState = () => {
	return (
		<div className="space-y-6">
			<div className="flex justify-center">
				<LoadingIcon className="h-24 w-24" />
			</div>
			<div className="mt-4 text-70868f">{__('Transmitting verification to host app. Please wait...')}</div>
		</div>
	)
}

export default memo(HostAppVerificationState)
