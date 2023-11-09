import { __ } from '@/lang'
import { IDKITStage } from '@/types'
import useMedia from '@/hooks/useMedia'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import type { IDKitStore } from '@/store/idkit'
import AboutWorldID from '@/components/AboutWorldID'
import { useWorldBridge } from '@/services/wld-bridge'
import LoadingIcon from '@/components/Icons/LoadingIcon'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'
import { AppErrorCodes, VerificationState } from '@/types/bridge'
import DevicePhoneMobileIcon from '@/components/Icons/DevicePhoneMobileIcon'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	app_id: store.app_id,
	action: store.action,
	setStage: store.setStage,
	bridgeUrl: store.bridgeUrl,
	handleVerify: store.handleVerify,
	setErrorState: store.setErrorState,
	showAbout: store.methods.length == 1,
	credential_types: store.credential_types,
	isExperimental: store.methods.length > 0,
	hasPhone: store.methods.includes('phone'),
	action_description: store.action_description,
	usePhone: () => store.setStage(IDKITStage.ENTER_PHONE),
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
		isExperimental,
		bridgeUrl,
		action_description,
		credential_types,
		hasPhone,
		setErrorState,
	} = useIDKitStore(getOptions, shallow)

	const { connectorURI, reset, errorCode, result, verificationState } = useWorldBridge(
		app_id,
		action,
		signal,
		bridgeUrl,
		credential_types,
		action_description
	)

	useEffect(() => reset, [reset])

	useEffect(() => {
		if (verificationState === VerificationState.Failed) {
			setStage(IDKITStage.ERROR)
			setErrorState({ code: errorCode ?? AppErrorCodes.GenericError })
		}

		if (result) {
			if (!isExperimental) return handleVerify(result)

			const { nullifier_hash, credential_type, ...proof_payload } = result

			handleVerify({ proof_payload, nullifier_hash, credential_type })
		}
	}, [result, reset, handleVerify, verificationState, setStage, errorCode, setErrorState, isExperimental])

	return (
		<div className="-mt-6 space-y-6">
			<div>
				<div className="mb-2 flex items-center justify-center">
					<WorldcoinIcon className="text-0d151d h-8 dark:text-white" />
				</div>
				<p className="font-sora text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{__('Continue with Worldcoin')}
				</p>
			</div>
			{verificationState === VerificationState.PreparingClient ? (
				<div className="flex items-center justify-center">
					<LoadingIcon className="h-20 w-20" />
				</div>
			) : (
				<QRState showQR={showQR} setShowQR={setShowQR} qrData={connectorURI} />
			)}
			{(media == 'desktop' || !showQR) && <AboutWorldID />}
			{hasPhone && (
				<div className="hidden space-y-3 md:block">
					<div className="flex items-center justify-between space-x-6">
						<div className="bg-f2f5f9 dark:bg-29343f h-px flex-1" />
						<p className="text-9eafc0 dark:text-596673 text-xs">or</p>
						<div className="bg-f2f5f9 dark:bg-29343f h-px flex-1" />
					</div>
					<div className="flex items-center justify-center">
						<button onClick={usePhone} className="flex items-center space-x-2">
							<DevicePhoneMobileIcon className="text-0d151d/70 h-6 w-6 dark:text-white/70" />
							<p className="text-0d151d text-sm font-medium dark:text-white">
								{__('Verify with Phone Number')}
							</p>
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default WorldIDState
