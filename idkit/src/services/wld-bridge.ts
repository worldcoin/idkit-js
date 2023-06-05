import { create } from 'zustand'
import type { ISuccessResult } from '..'
import { useEffect, useRef } from 'react'
import type { IDKitConfig } from '@/types/config'
import { VerificationState } from '@/types/bridge'
import type { AppErrorCodes } from '@/types/bridge'
import { exportKey, generateKey, hashKey } from '@/lib/crypto'
import { encodeAction, encodeKey, generateSignal } from '@/lib/hashing'

const DEFAULT_BRIDGE_URL = 'https://bridge.worldcoin.org/'

type WorldBridgeStore = {
	bridgeUrl: string
	key: CryptoKey | null
	connectorURI: string | null
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
	verificationState: VerificationState

	getConnectorURI: () => Promise<string>

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
	key: null,
	result: null,
	errorCode: null,
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
		const key = await generateKey()

		// const res = await fetch(`${bridgeUrl ?? DEFAULT_BRIDGE_URL}/${await hashKey(key)}`, {
		// 	method: 'PUT',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		app_id,
		// 		credential_types,
		// 		action_description,
		// 		action: encodeAction(action),
		// 		signal: generateSignal(signal).digest,
		// 	}),
		// })

		// if (!res.ok) {
		// 	set({ verificationState: VerificationState.Failed })
		// 	throw new Error('Failed to create client')
		// }

		set({
			key,
			bridgeUrl: bridgeUrl ?? DEFAULT_BRIDGE_URL,
			verificationState: VerificationState.PollingForUpdates,
			connectorURI: `https://id.worldcoin.org/verify?key=${await exportKey(key)}`,
		})
	},

	getConnectorURI: async () => {
		const key = get().key
		if (!key) throw new Error('No keypair found. Please call `createClient` first.')

		return `https://id.worldcoin.org/verify?key=${encodeKey(await window.crypto.subtle.exportKey('raw', key))}`
	},

	pollForUpdates: async () => {
		const key = get().key
		if (!key) throw new Error('No keypair found. Please call `createClient` first.')

		const response = await fetch(`${get().bridgeUrl}/${hashKey(key)}`)

		// ...
	},

	reset: () => {
		set({ key: null, connectorURI: null, verificationState: VerificationState.PreparingClient })
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
		if (!connectorURI || result) return

		const interval = setInterval(() => void pollForUpdates(), 5000)
		return () => clearInterval(interval)
	}, [connectorURI, pollForUpdates, result])

	return { connectorURI, reset, result, verificationState, errorCode }
}
