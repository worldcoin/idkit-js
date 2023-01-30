import { useEffect } from 'react'
import { SignalType } from '@/types'
import QRState from './WorldID/QRState'
import useIDKitStore from '@/store/idkit'
import { VerificationState } from '@/types/orb'
import type { IDKitStore } from '@/store/idkit'
import LoadingState from './WorldID/LoadingState'
import useOrbSignal from '@/services/walletconnect'

const getOptions = (store: IDKitStore) => ({
	signal: store.signal,
	actionId: store.actionId,
	handleVerify: store.handleVerify,
})

const WorldIDState = () => {
	const { actionId, signal, handleVerify } = useIDKitStore(getOptions)
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
		<div className="space-y-6">
			{verificationState === VerificationState.AwaitingVerification ? (
				<LoadingState />
			) : (
				<QRState qrData={qrData} />
			)}
		</div>
	)
}

export default WorldIDState
