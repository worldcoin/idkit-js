import { IDKITStage } from '@/types'
import { getCopy } from '@/lib/utils'
import useMedia from '@/hooks/useMedia'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import { VerificationState } from '@/types/orb'
import type { IDKitStore } from '@/store/idkit'
import useOrbSignal from '@/services/walletconnect'
import AboutWorldID from '@/components/AboutWorldID'
import LoadingIcon from '@/components/Icons/LoadingIcon'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	copy: store.copy,
	app_id: store.app_id,
	action: store.action,
	action_description: store.action_description,
	walletConnectProjectId: store.walletConnectProjectId,
	handleVerify: store.handleVerify,
	setStage: store.setStage,
})

const WorldIDState = () => {
	const media = useMedia()
	const [showQR, setShowQR] = useState<boolean>(false)
	const { copy, app_id, action, signal, setStage, handleVerify, action_description, walletConnectProjectId } =
		useIDKitStore(getOptions, shallow)

	const { result, qrData, verificationState, reset } = useOrbSignal(
		app_id,
		action,
		signal,
		action_description,
		walletConnectProjectId
	)

	useEffect(() => reset, [reset])

	useEffect(() => {
		if (verificationState === VerificationState.Failed) {
			setStage(IDKITStage.ERROR)
		}

		if (result) handleVerify(result)
	}, [result, reset, handleVerify, verificationState, setStage])

	return (
		<div className="-mt-6 space-y-6">
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
					{verificationState === VerificationState.AwaitingVerification
						? 'Confirm on the Worldcoin app'
						: getCopy(copy, 'heading')}
				</p>
				<p className="text-70868f dark:text-9eafc0 mt-3 text-center md:mt-2">
					{verificationState === VerificationState.AwaitingVerification
						? 'Please confirm the request inside the Worldcoin app to continue.'
						: getCopy(copy, 'subheading')}
				</p>
			</div>
			{verificationState === VerificationState.AwaitingVerification ? (
				<div className="flex items-center justify-center">
					<LoadingIcon className="h-20 w-20" />
				</div>
			) : (
				<QRState showQR={showQR} setShowQR={setShowQR} qrData={qrData} />
			)}
			{(media == 'desktop' || !showQR) && <AboutWorldID />}
		</div>
	)
}

export default WorldIDState
