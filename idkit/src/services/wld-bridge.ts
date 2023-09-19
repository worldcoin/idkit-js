import { create } from 'zustand'
import type { ISuccessResult } from '..'
import { useEffect, useRef } from 'react'
import type { IDKitConfig } from '@/types/config'
import { VerificationState } from '@/types/bridge'
import type { AppErrorCodes } from '@/types/bridge'
import { encodeAction, generateSignal } from '@/lib/hashing'
import { decryptResponse, encryptRequest, exportKey, generateKey } from '@/lib/crypto'

const DEFAULT_BRIDGE_URL = 'https://bridge.id.worldcoin.org/'

type WorldBridgeStore = {
	bridgeUrl: string
	iv: Uint8Array | null
	key: CryptoKey | null
	requestId: string | null
	connectorURI: string | null
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
	verificationState: VerificationState

	createClient: (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal?: IDKitConfig['signal'],
		bridgeUrl?: IDKitConfig['bridgeUrl'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => Promise<void>

	pollForUpdates: () => Promise<void>

	reset: () => void
}

const useWorldBridgeStore = create<WorldBridgeStore>((set, get) => ({
	iv: null,
	key: null,
	result: null,
	errorCode: null,
	requestId: null,
	connectorURI: null,
	bridgeUrl: DEFAULT_BRIDGE_URL,
	verificationState: VerificationState.PreparingClient,

	createClient: async (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal?: IDKitConfig['signal'],
		bridgeUrl?: IDKitConfig['bridgeUrl'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => {
		const { key, iv } = await generateKey()
		const requestId = window.crypto.randomUUID()

		const res = await fetch(`${bridgeUrl ?? DEFAULT_BRIDGE_URL}/request/${requestId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(
				await encryptRequest(
					key,
					iv,
					JSON.stringify({
						app_id,
						credential_types,
						action_description,
						action: encodeAction(action),
						signal: generateSignal(signal).digest,
					})
				)
			),
		})

		if (!res.ok) {
			set({ verificationState: VerificationState.Failed })
			throw new Error('Failed to create client')
		}

		set({
			iv,
			key,
			requestId,
			bridgeUrl: bridgeUrl ?? DEFAULT_BRIDGE_URL,
			verificationState: VerificationState.PollingForUpdates,
			connectorURI: `https://worldcoin.org/verify?t=wld&i=${requestId}&k=${encodeURIComponent(
				await exportKey(key)
			)}${bridgeUrl ? `&b=${encodeURIComponent(bridgeUrl)}` : ''}`,
		})
	},

	pollForUpdates: async () => {
		const key = get().key
		if (!key) throw new Error('No keypair found. Please call `createClient` first.')

		const res = await fetch(`${get().bridgeUrl}/response/${get().requestId}`)

		if (res.status == 500) {
			return set({ verificationState: VerificationState.Failed })
		}

		if (!res.ok) return

		const result = JSON.parse(await decryptResponse(key, get().iv!, await res.text())) as
			| ISuccessResult
			| { error_code: AppErrorCodes }

		if ('error_code' in result) {
			return set({
				errorCode: result.error_code,
				verificationState: VerificationState.Failed,
			})
		}

		set({ result, verificationState: VerificationState.Confirmed, key: null, connectorURI: null, requestId: null })
	},

	reset: () => {
		set({
			iv: null,
			key: null,
			requestId: null,
			connectorURI: null,
			verificationState: VerificationState.PreparingClient,
		})
	},
}))

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
	const { reset, result, connectorURI, createClient, pollForUpdates, verificationState, errorCode } =
		useWorldBridgeStore()
	const ref_credential_types = useRef(credential_types)

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
