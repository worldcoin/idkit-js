import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { VerificationState } from '@worldcoin/idkit-core'
import { useWorldBridgeStore } from '@worldcoin/idkit-core'
import type { ISuccessResult, AppErrorCodes, IDKitConfig } from '@worldcoin/idkit-core'

const TERMINAL_STATES: VerificationState[] = [VerificationState.Confirmed, VerificationState.Failed]

export type UseSessionConfig = IDKitConfig

export type UseSessionResult = {
	/** The current verification state */
	status: VerificationState
	/** The QR code URI that users can scan to verify */
	sessionURI: string | null
	/** The verification result if successful */
	result: ISuccessResult | null
	/** Error code if verification failed */
	errorCode: AppErrorCodes | null
	/** Function to reset the session and start over */
	reset: () => void
}

/**
 * A beginner-friendly React hook for World ID verification sessions.
 *
 * This hook automatically:
 * - Creates a verification session
 * - Generates a QR code URI for scanning
 * - Polls for verification updates
 * - Stops polling when verification completes or fails
 *
 * @param config - The World ID configuration object
 * @returns Session state and controls
 *
 * @example
 * ```tsx
 * const { status, sessionURI, result, errorCode } = useSession({
 *   app_id: 'app_staging_12345',
 *   action: 'login',
 *   signal: 'user_123'
 * })
 *
 * if (status === VerificationState.WaitingForConnection) {
 *   return <QRCodeSVG value={sessionURI} />
 * }
 * ```
 */
export function useSession(config: UseSessionConfig): UseSessionResult {
	const { reset, result, connectorURI, createClient, pollForUpdates, verificationState, errorCode } =
		useWorldBridgeStore(
			useShallow(state => ({
				reset: state.reset,
				result: state.result,
				connectorURI: state.connectorURI,
				createClient: state.createClient,
				pollForUpdates: state.pollForUpdates,
				verificationState: state.verificationState,
				errorCode: state.errorCode,
			}))
		)

	// Create client only when in PreparingClient state and no connector URI exists
	useEffect(() => {
		if (verificationState === VerificationState.PreparingClient && !connectorURI) {
			void createClient(config)
		}
	}, [verificationState, connectorURI, createClient, config])

	// Polling effect - stop polling when we reach a terminal state
	useEffect(() => {
		if (TERMINAL_STATES.includes(verificationState)) return

		const interval = setInterval(() => {
			void pollForUpdates()
		}, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [verificationState, pollForUpdates])

	return {
		status: verificationState,
		sessionURI: connectorURI,
		result,
		errorCode,
		reset,
	}
}
