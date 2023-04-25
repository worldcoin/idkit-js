import { IDKITStage } from '@/types'
import useMedia from '@/hooks/useMedia'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import type { IDKitStore } from '@/store/idkit'
import AboutWorldID from '@/components/AboutWorldID'
import useAppConnection from '@/services/walletconnect'
import LoadingIcon from '@/components/Icons/LoadingIcon'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'
import { AppErrorCodes, VerificationState } from '@/types/app'
import DevicePhoneMobileIcon from '@/components/Icons/DevicePhoneMobileIcon'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	app_id: store.app_id,
	action: store.action,
	walletConnectProjectId: store.walletConnectProjectId,
	handleVerify: store.handleVerify,
	credential_types: store.credential_types,
	action_description: store.action_description,
	showAbout: store.methods.length == 1,
	hasPhone: store.methods.includes('phone'),
	usePhone: () => store.setStage(IDKITStage.ENTER_PHONE),
	setStage: store.setStage,
	setErrorState: store.setErrorState,
})

const WorldIDState = () => {
	const media = useMedia()
	const [showQR, setShowQR] = useState<boolean>(false)
	const {
		app_id,
		action,
		signal,
		setStage,
		usePhone,
		handleVerify,
		action_description,
		credential_types,
		hasPhone,
		walletConnectProjectId,
		setErrorState,
	} = useIDKitStore(getOptions, shallow)

	const { result, qrData, verificationState, reset, errorCode } = useAppConnection(
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
			setErrorState({ code: errorCode ?? AppErrorCodes.GenericError })
		}

		if (result) handleVerify(result)
	}, [result, reset, handleVerify, verificationState, setStage, errorCode, setErrorState])

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
