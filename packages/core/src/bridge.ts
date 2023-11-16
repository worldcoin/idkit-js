import { create } from 'zustand'
import { buffer_decode } from './lib/utils'
import type { IDKitConfig } from '@/types/config'
import { VerificationState } from '@/types/bridge'
import type { AppErrorCodes } from '@/types/bridge'
import type { ISuccessResult } from '@/types/result'
import { encodeAction, generateSignal } from '@/lib/hashing'
import { decryptResponse, encryptRequest, exportKey, generateKey } from '@/lib/crypto'

const DEFAULT_BRIDGE_URL = 'https://bridge.worldcoin.org'

export enum ResponseStatus {
	Retrieved = 'retrieved',
	Completed = 'completed',
	Initialized = 'initialized',
}

type BridgeResponse =
	| {
			status: ResponseStatus.Retrieved | ResponseStatus.Initialized
			response: null
	  }
	| {
			status: ResponseStatus.Completed
			response: { iv: string; payload: string }
	  }

export type WorldBridgeStore = {
	bridge_url: string
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
		bridge_url?: IDKitConfig['bridge_url'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => Promise<void>

	pollForUpdates: () => Promise<void>

	reset: () => void
}

export const useWorldBridgeStore = create<WorldBridgeStore>((set, get) => ({
	iv: null,
	key: null,
	result: null,
	errorCode: null,
	requestId: null,
	connectorURI: null,
	bridge_url: DEFAULT_BRIDGE_URL,
	verificationState: VerificationState.PreparingClient,

	createClient: async (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal?: IDKitConfig['signal'],
		bridge_url?: IDKitConfig['bridge_url'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description']
	) => {
		const { key, iv } = await generateKey()

		const res = await fetch(`${bridge_url ?? DEFAULT_BRIDGE_URL}/request`, {
			method: 'POST',
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

		const { request_id } = (await res.json()) as { request_id: string }

		set({
			iv,
			key,
			requestId: request_id,
			bridge_url: bridge_url ?? DEFAULT_BRIDGE_URL,
			verificationState: VerificationState.WaitingForConnection,
			connectorURI: `https://worldcoin.org/verify?t=wld&i=${request_id}&k=${encodeURIComponent(
				await exportKey(key)
			)}${bridge_url && bridge_url !== DEFAULT_BRIDGE_URL ? `&b=${encodeURIComponent(bridge_url)}` : ''}`,
		})
	},

	pollForUpdates: async () => {
		const key = get().key
		if (!key) throw new Error('No keypair found. Please call `createClient` first.')

		const res = await fetch(`${get().bridge_url}/response/${get().requestId}`)

		const { response, status } = (await res.json()) as BridgeResponse

		if (status != ResponseStatus.Completed) {
			return set({
				verificationState:
					status == ResponseStatus.Retrieved
						? VerificationState.WaitingForApp
						: VerificationState.WaitingForConnection,
			})
		}

		const result = JSON.parse(await decryptResponse(key, buffer_decode(response.iv), response.payload)) as
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
