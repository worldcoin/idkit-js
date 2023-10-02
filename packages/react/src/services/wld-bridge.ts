import { useEffect, useRef } from 'react'
import { useWorldBridgeStore } from '@worldcoin/idkit-core'
import { ISuccessResult, AppErrorCodes, VerificationState, IDKitConfig } from '@worldcoin/idkit-core'

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
	bridgeUrl?: IDKitConfig['bridgeUrl'],
	credential_types?: IDKitConfig['credential_types'],
	action_description?: IDKitConfig['action_description']
): UseAppBridgeResponse => {
	const ref_credential_types = useRef(credential_types)
	const { reset, result, connectorURI, createClient, pollForUpdates, verificationState, errorCode } =
		useWorldBridgeStore()

	useEffect(() => {
		if (!app_id) return
		if (!connectorURI) {
			void createClient(app_id, action, signal, bridgeUrl, ref_credential_types.current, action_description)
		}
	}, [app_id, action, signal, action_description, createClient, ref_credential_types, bridgeUrl, connectorURI])

	useEffect(() => {
		if (!connectorURI || result || errorCode) return

		const interval = setInterval(() => void pollForUpdates(), 5000)

		return () => clearInterval(interval)
	}, [connectorURI, pollForUpdates, errorCode, result])

	return { connectorURI, reset, result, verificationState, errorCode }
}
