import { useEffect } from 'react'
import { SignalType } from '@/types'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { DEFAULT_COPY } from '@/types/config'
import { VerificationState } from '@/types/orb'
import type { IDKitStore } from '@/store/idkit'
import LoadingState from './WorldID/LoadingState'
import useOrbSignal from '@/services/walletconnect'
import AboutWorldID from '@/components/AboutWorldID'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	copy: store.copy,
	actionId: store.actionId,
	handleVerify: store.handleVerify,
	showAbout: store.methods.length == 1,
})

const WorldIDState = () => {
	const { actionId, copy, signal, handleVerify, showAbout } = useIDKitStore(getOptions)
	const { result, qrData, verificationState, reset } = useOrbSignal(actionId, signal)

	useEffect(() => {
		return reset
	}, [reset])

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
					{copy?.heading || DEFAULT_COPY.heading}
				</p>
				<p className="text-70868f mt-3 text-center md:mt-2">
					{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
					{copy?.subheading || DEFAULT_COPY.subheading}
				</p>
			</div>
			{verificationState === VerificationState.AwaitingVerification ? (
				<LoadingState />
			) : (
				<QRState qrData={qrData} />
			)}
			{showAbout && <AboutWorldID />}
		</div>
	)
}

export default WorldIDState
