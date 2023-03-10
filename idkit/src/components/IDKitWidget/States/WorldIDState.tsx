import { IDKITStage } from '@/types'
import useMedia from '@/hooks/useMedia'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import { VerificationState } from '@/types/app'
import type { IDKitStore } from '@/store/idkit'
import AboutWorldID from '@/components/AboutWorldID'
import useAppConnection from '@/services/walletconnect'
import LoadingIcon from '@/components/Icons/LoadingIcon'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	copy: store.copy,
	app_id: store.app_id,
	action: store.action,
	credential_types: store.credential_types,
	action_description: store.action_description,
	walletConnectProjectId: store.walletConnectProjectId,
	handleVerify: store.handleVerify,
	setStage: store.setStage,
})

const WorldIDState = () => {
	const media = useMedia()
	const [showQR, setShowQR] = useState<boolean>(false)
	const {
		app_id,
		action,
		signal,
		setStage,
		handleVerify,
		action_description,
		walletConnectProjectId,
		credential_types,
	} = useIDKitStore(getOptions, shallow)

	const { result, qrData, verificationState, reset } = useAppConnection(
		app_id,
		action,
		signal,
		credential_types,
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
				<div className="mb-2 flex items-center justify-center">
					<WorldcoinIcon className="text-0d151d h-8 dark:text-white" />
				</div>
				<p className="font-sora text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
					{verificationState === VerificationState.AwaitingVerification
						? 'Confirm in World App'
						: 'Continue with Worldcoin'}
				</p>
				{verificationState === VerificationState.AwaitingVerification && (
					<p className="text-70868f dark:text-9eafc0 mt-3 text-center md:mt-2">
						Please confirm the request in your app to continue.
					</p>
				)}
			</div>
			{verificationState === VerificationState.AwaitingVerification ? (
				<div className="flex items-center justify-center">
					<LoadingIcon className="h-20 w-20" />
				</div>
			) : (
				<QRState showQR={showQR} setShowQR={setShowQR} qrData={qrData} />
			)}
			{(media == 'desktop' || !showQR) &&
				(verificationState === VerificationState.AwaitingConnection ||
					verificationState === VerificationState.LoadingWidget) && <AboutWorldID />}
		</div>
	)
}

export default WorldIDState
