import { create } from 'zustand'
import { useEffect, useRef } from 'react'
import libsodium from 'libsodium-wrappers'
import type { IDKitConfig } from '@/types/config'
import { encodeAction, encodeKey, generateSignal } from '@/lib/hashing'

type WorldBridgeStore = {
	connector: string | null
	key: libsodium.KeyPair | null

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
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => Promise<void>
}

const useWorldBridgeStore = create<WorldBridgeStore>((set, get) => ({
	key: null,
	connector: null,

	createClient: async (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal?: IDKitConfig['signal'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => {
		await libsodium.ready

		set({ key: libsodium.crypto_box_keypair() })
		set({ connector: get().getConnectorURI(app_id, action, signal, credential_types, action_description) })
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

		const params = new URLSearchParams({
			app_id,
			key: encodeKey(key),
			action: encodeAction(action),
		})

		if (signal) params.set('signal', generateSignal(signal).digest)
		if (action_description) params.set('action_description', action_description)
		if (credential_types) params.set('credential_types', credential_types.join(','))

		return `https://id.worldcoin.org/verify?${params.toString()}`
	},
}))

export const useWorldBridge = (
	app_id: IDKitConfig['app_id'],
	action: IDKitConfig['action'],
	signal?: IDKitConfig['signal'],
	credential_types?: IDKitConfig['credential_types'],
	action_description?: IDKitConfig['action_description']
) => {
	const { connector, createClient } = useWorldBridgeStore()
	const ref_credential_types = useRef(credential_types)

	useEffect(() => {
		if (!app_id) return
		if (!connector) {
			void createClient(app_id, action, signal, ref_credential_types.current, action_description)
		}
	}, [app_id, action, signal, action_description, createClient, ref_credential_types, connector])

	return { connector }
}
