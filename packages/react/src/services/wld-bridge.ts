import { useEffect, useRef } from 'react'
import { useWorldBridgeStore } from '@worldcoin/idkit-core'
import type { ISuccessResult, AppErrorCodes, VerificationState, IDKitConfig } from '@worldcoin/idkit-core'

type UseAppBridgeResponse = {
	reset: () => void
	connectorURI: string | null
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
	verificationState: VerificationState
}

export const useWorldBridge = (
	app_id: IDKitConfig['app_id'],
	action: IDKitConfig['action'],
	signal?: IDKitConfig['signal'],
	bridge_url?: IDKitConfig['bridge_url'],
	verification_level?: IDKitConfig['verification_level'],
	action_description?: IDKitConfig['action_description']
): UseAppBridgeResponse => {
	const ref_verification_level = useRef(verification_level)
	const { reset, result, connectorURI, createClient, pollForUpdates, verificationState, errorCode } =
		useWorldBridgeStore()

	useEffect(() => {
		if (!connectorURI) {
			void createClient({
				app_id,
				action,
				signal,
				bridge_url,
				action_description,
				verification_level: ref_verification_level.current,
			})
		}
	}, [app_id, action, signal, action_description, createClient, ref_verification_level, bridge_url, connectorURI])

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
		if (!connectorURI || result || errorCode) return

		const interval = setInterval(() => void pollForUpdates(), 3000)

		return () => clearInterval(interval)
	}, [connectorURI, pollForUpdates, errorCode, result])

	return { connectorURI, reset, result, verificationState, errorCode }
}
