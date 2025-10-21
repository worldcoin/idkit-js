import clsx from 'clsx'
import { __ } from '@/lang'
import { IDKITStage } from '@/types'
import useMedia from '@/hooks/useMedia'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import type { IDKitStore } from '@/store/idkit'
import { useWorldBridge } from '@/services/wld-bridge'
import LoadingIcon from '@/components/Icons/LoadingIcon'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'
import { AppErrorCodes, VerificationState, VerificationLevel, isValidCredential } from '@worldcoin/idkit-core'

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
	partner: store.partner,
	face_auth: store.face_auth,
})

const WorldIDState = (props: { show_modal?: boolean }) => {
	const media = useMedia()
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
		partner,
		face_auth,
	} = useIDKitStore(getOptions, shallow)

	const { connectorURI, reset, errorCode, result, verificationState } = useWorldBridge(
		app_id as `app_${string}`,
		action,
		signal,
		bridge_url,
		verification_level,
		action_description,
		partner,
		face_auth
	)

	useEffect(() => reset, [reset])

	useEffect(() => {
		if (verificationState === VerificationState.Failed) {
			setStage(IDKITStage.ERROR)
			setErrorState({ code: errorCode ?? AppErrorCodes.GenericError })
		}
		if (result) {
			// Validate that the received credential matches the requested verification level
			const requestedLevel = verification_level ?? VerificationLevel.Orb
			const receivedLevel = result.verification_level

			if (!isValidCredential(requestedLevel, receivedLevel)) {
				console.error(
					`Credential type received from wallet does not match configured verification level. Requested: ${requestedLevel}, Received: ${receivedLevel}`
				)
				setStage(IDKITStage.ERROR)
				setErrorState({ code: AppErrorCodes.CredentialUnavailable })
				return
			}

			return handleVerify(result)
		}
	}, [result, handleVerify, verificationState, setStage, errorCode, setErrorState, verification_level])

	const { show_modal } = props
	return (
		<div
			className={clsx(
				'flex flex-col items-center text-center',
				show_modal ? (showQR ? '-mt-6 space-y-5 ' : '-mt-6 space-y-10 ') : ''
			)}
		>
			<div className={clsx(!show_modal ? 'hidden' : '')}>
				<div className="mb-4 flex items-center justify-center">
					<div className="flex size-14 items-center justify-center rounded-full border-[1.2px] border-solid border-[#EBECEF]">
						<WorldcoinIcon className="text-0d151d size-8 dark:text-white" />
					</div>
				</div>
				<p className="text-2xl font-semibold text-gray-900 dark:text-white">{__('Connect your World ID')}</p>
				<p className={clsx('text-657080 dark:text-9eafc0 mt-3 md:mt-2', { hidden: media === 'mobile' })}>
					{__('Use phone camera to scan the QR code')}
				</p>
				<p className={clsx('text-657080 dark:text-9eafc0 mt-3 md:mt-2', { hidden: media !== 'mobile' })}>
					{__("You will be redirected to the app, please return to this page once you're done")}
				</p>
			</div>

			{/* QR Container */}
			<div className="relative w-full">
				{verificationState === VerificationState.WaitingForApp && (
					<div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
						<LoadingIcon className="size-6" />
						<div>
							<p className="text-657080 font-medium">{__('Connecting...')}</p>
							<p className="text-657080 text-sm font-light">{__('Please continue in app')}</p>
						</div>
					</div>
				)}

				<div
					className={clsx(
						'transition duration-500 ease-in-out',
						verificationState === VerificationState.WaitingForApp && 'opacity-40 blur-lg'
					)}
				>
					{/* Center the QR code by ensuring QRState is in a container with mx-auto */}
					<div className="mx-auto">
						<QRState showQR={showQR} setShowQR={setShowQR} qrData={connectorURI} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorldIDState
