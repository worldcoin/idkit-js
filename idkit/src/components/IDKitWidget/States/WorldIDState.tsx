import { getCopy } from '@/lib/utils'
import useMedia from '@/hooks/useMedia'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { useEffect, useState } from 'react'
import { VerificationState } from '@/types/orb'
import type { IDKitStore } from '@/store/idkit'
import { IDKITStage, SignalType } from '@/types'
import useOrbSignal from '@/services/walletconnect'
import AboutWorldID from '@/components/AboutWorldID'
import LoadingIcon from '@/components/Icons/LoadingIcon'
import DevicePhoneMobileIcon from '@/components/Icons/DevicePhoneMobileIcon'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	copy: store.copy,
	actionId: store.actionId,
	handleVerify: store.handleVerify,
	showAbout: store.methods.length == 1,
	hasPhone: store.methods.includes('phone'),
	usePhone: () => store.setStage(IDKITStage.ENTER_PHONE),
})

const WorldIDState = () => {
	const media = useMedia()
	const [showQR, setShowQR] = useState<boolean>(false)
	const { actionId, copy, signal, handleVerify, showAbout, hasPhone, usePhone } = useIDKitStore(getOptions)
	const { result, qrData, verificationState, reset } = useOrbSignal(actionId, signal)

	useEffect(() => reset, [reset])

	useEffect(() => {
		if (!result) return

		handleVerify({
			signal_type: SignalType.Orb,
			nullifier_hash: result.nullifier_hash,
			proof_payload: {
				proof: result.proof,
				merkle_root: result.merkle_root,
			},
		})
	}, [result, reset, handleVerify])

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
			{showAbout && (media == 'desktop' || !showQR) && <AboutWorldID />}
			{hasPhone && verificationState == VerificationState.AwaitingConnection && (
				<div className="hidden space-y-3 md:block">
					<div className="flex items-center justify-between space-x-6">
						<div className="bg-f2f5f9 dark:bg-29343f h-px flex-1" />
						<p className="text-9eafc0 dark:text-596673 text-xs">or</p>
						<div className="bg-f2f5f9 dark:bg-29343f h-px flex-1" />
					</div>
					<div className="flex items-center justify-center">
						<button onClick={usePhone} className="flex items-center space-x-2">
							<DevicePhoneMobileIcon className="text-0d151d/70 h-6 w-6 dark:text-white/70" />
							<p className="text-0d151d text-sm font-medium dark:text-white">Verify with Phone Number</p>
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default WorldIDState
