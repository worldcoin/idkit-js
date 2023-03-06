import { IDKITStage } from '@/types'
import { getCopy } from '@/lib/utils'
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
	action_description: store.action_description,
	walletConnectProjectId: store.walletConnectProjectId,
	handleVerify: store.handleVerify,
	setStage: store.setStage,
})

const WorldIDState = () => {
	const [showQR, setShowQR] = useState<boolean>(false)
	const { copy, app_id, action, signal, setStage, handleVerify, action_description, walletConnectProjectId } =
		useIDKitStore(getOptions, shallow)

	const { result, qrData, verificationState, reset } = useAppConnection(
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
		<div className="flex flex-col items-center space-y-6">
			<WorldcoinIcon className="h-8 w-8 text-black dark:text-white" />
			<p className="font-sora text-center text-2xl font-semibold text-gray-900 dark:text-white">
				{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
				{verificationState === VerificationState.AwaitingVerification
					? 'Confirm on the Worldcoin app'
					: getCopy(copy, 'heading')}
			</p>
			{!qrData || verificationState === VerificationState.AwaitingVerification ? (
				<div className="flex items-center justify-center">
					<LoadingIcon className="h-20 w-20" />
				</div>
			) : (
				<div className="space-y-6">
					<QRState showQR={showQR} setShowQR={setShowQR} qrData={qrData} />
					<a
						target="_blank"
						rel="noreferrer"
						href={qrData.mobile}
						className="flex items-center justify-center space-x-2"
					>
						<div className="flex h-6 w-6 items-center justify-center rounded-lg bg-black">
							<WorldcoinIcon className="h-3 w-3 text-white" />
						</div>
						<span className="text-191c20">Scan with World App</span>
					</a>
				</div>
			)}
		</div>
	)
}

export default WorldIDState
