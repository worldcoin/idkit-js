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
import { AppErrorCodes, VerificationState } from '@worldcoin/idkit-core'
import DevicePhoneMobileIcon from '@/components/Icons/DevicePhoneMobileIcon'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	app_id: store.app_id,
	action: store.action,
	setStage: store.setStage,
	bridgeUrl: store.bridgeUrl,
	handleVerify: store.handleVerify,
	setErrorState: store.setErrorState,
	credential_types: store.credential_types,
	action_description: store.action_description,
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
		bridgeUrl,
		action_description,
		credential_types,
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
			return handleVerify(result)
		}
	}, [result, reset, handleVerify, verificationState, setStage, errorCode, setErrorState])

	return (
		<div className="-mt-6 space-y-6">
			<div>
				<div className="mb-2 flex items-center justify-center">
					<WorldcoinIcon className="h-8 text-0d151d dark:text-white" />
				</div>
				<p className="text-center font-sora text-2xl font-semibold text-gray-900 dark:text-white">
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
		</div>
	)
}

export default WorldIDState