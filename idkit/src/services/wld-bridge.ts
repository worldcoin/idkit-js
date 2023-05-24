import { create } from 'zustand'
import type { ISuccessResult } from '..'
import { useEffect, useRef } from 'react'
import libsodium from 'libsodium-wrappers'
import type { IDKitConfig } from '@/types/config'
import { VerificationState } from '@/types/bridge'
import type { AppErrorCodes } from '@/types/bridge'
import { encodeAction, encodeKey, generateSignal } from '@/lib/hashing'

const DEFAULT_BRIDGE_URL = 'https://bridge.worldcoin.org/'

type WorldBridgeStore = {
	bridgeUrl: string
	connectorURI: string | null
	result: ISuccessResult | null
	key: libsodium.KeyPair | null
	errorCode: AppErrorCodes | null
	verificationState: VerificationState

	getConnectorURI: (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal?: IDKitConfig['signal'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => string

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
		await libsodium.ready

		set({
			key: libsodium.crypto_box_keypair(),
			bridgeUrl: bridgeUrl ?? DEFAULT_BRIDGE_URL,
			verificationState: VerificationState.PollingForUpdates,
		})
		set({ connectorURI: get().getConnectorURI(app_id, action, signal, credential_types, action_description) })
	},

	getConnectorURI: (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal?: IDKitConfig['signal'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => {
		const key = get().key
		if (!key) throw new Error('No keypair found. Please call `createClient` first.')

		const params = new URLSearchParams({ app_id, action: encodeAction(action), key: encodeKey(key.publicKey) })
		if (credential_types) params.set('credential_types', credential_types.join(','))
		if (action_description) params.set('action_description', action_description)
		if (signal) params.set('signal', generateSignal(signal).digest)

		return `https://id.worldcoin.org/verify?${params.toString()}`
	},

	pollForUpdates: async () => {
		const key = get().key
		if (!key) throw new Error('No keypair found. Please call `createClient` first.')

		const response = await fetch(`${get().bridgeUrl}/${encodeKey(libsodium.crypto_generichash(32, key.publicKey))}`)

		if (response.ok) return

		// ...
	},

	reset: () => {
		set({ key: null, connectorURI: null })
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
