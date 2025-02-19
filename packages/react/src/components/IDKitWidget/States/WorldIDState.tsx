import { __ } from '@/lang'
import { IDKITStage } from '@/types'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import type { IDKitStore } from '@/store/idkit'
import { useWorldBridge } from '@/services/wld-bridge'
import LoadingIcon from '@/components/Icons/LoadingIcon'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'
import { AppErrorCodes, VerificationState, VerificationLevel } from '@worldcoin/idkit-core'
import clsx from 'clsx'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	app_id: store.app_id,
	action: store.action,
	setStage: store.setStage,
	bridge_url: store.bridge_url,
	handleVerify: store.handleVerify,
	setErrorState: store.setErrorState,
	verification_level: store.verification_level,
	action_description: store.action_description,
})

const WorldIDState = () => {
	const [showQR, setShowQR] = useState<boolean>(false)
	const {
		app_id,
		action,
		signal,
		setStage,
		handleVerify,
		bridge_url,
		action_description,
		verification_level,
		setErrorState,
	} = useIDKitStore(getOptions, shallow)

	const { connectorURI, reset, errorCode, result, verificationState } = useWorldBridge(
		app_id as `app_${string}`,
		action,
		signal,
		bridge_url,
		verification_level,
		action_description
	)

	useEffect(() => reset, [reset])

	useEffect(() => {
		if (verificationState === VerificationState.Failed) {
			setStage(IDKITStage.ERROR)
			setErrorState({ code: errorCode ?? AppErrorCodes.GenericError })
		}

		if (result) {
			if (verification_level == VerificationLevel.Orb && result.verification_level == VerificationLevel.Device) {
				console.error(
					'Credential type received from wallet does not match configured credential_types. This should only happen when manually selecting disallowed credentials in the Worldcoin Simulator.'
				)
				setStage(IDKITStage.ERROR)
				setErrorState({ code: AppErrorCodes.CredentialUnavailable })
				return
			}
			return handleVerify(result)
		}
	}, [result, handleVerify, verificationState, setStage, errorCode, setErrorState, verification_level])

	return (
		<div className={clsx("-mt-6 space-y-5", {"space-y-10": !showQR})}>
			<div>
				<div className="mb-4 flex items-center justify-center">
					<WorldcoinIcon className="h-10 text-0d151d dark:text-white" />
				</div>
				<p className="text-center font-sora text-2xl font-semibold text-gray-900 dark:text-white">
					{__('Verify with World ID')}
				</p>
				<p className="mt-3 text-center text-657080 dark:text-9eafc0 md:mt-2">
					Please use your World App to scan the QR code
				</p>
			</div>
			<div className="relative">
				{verificationState == VerificationState.WaitingForApp && (
					<div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
						<LoadingIcon className="size-6" />
						<div>
							<p className="font-bold text-657080">Verifying</p>
							<p className="text-sm text-657080">Please continue in app</p>
						</div>
					</div>
				)}
				<div
					className={
						verificationState === VerificationState.WaitingForApp
							? 'opacity-40 blur-lg transition duration-500 ease-in-out'
							: 'transition duration-500 ease-in-out'
					}
				>
					<QRState showQR={showQR} setShowQR={setShowQR} qrData={connectorURI} />
				</div>
			</div>
		</div>
	)
}

export default WorldIDState
