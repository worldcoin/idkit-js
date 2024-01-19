import { create } from 'zustand'
import { type IDKitConfig } from '@/types/config'
import { VerificationState } from '@/types/bridge'
import type { ISuccessResult } from '@/types/result'
import type { CredentialType } from '@/types/config'
import { validate_bridge_url } from './lib/validation'
import { encodeAction, generateSignal } from '@/lib/hashing'
import { AppErrorCodes, ResponseStatus } from '@/types/bridge'
import { decryptResponse, encryptRequest, exportKey, generateKey } from '@/lib/crypto'
import {
	DEFAULT_VERIFICATION_LEVEL,
	buffer_decode,
	credential_type_to_verification_level,
	verification_level_to_credential_types,
} from './lib/utils'

const DEFAULT_BRIDGE_URL = 'https://bridge.worldcoin.org'

type BridgeResponse =
	| {
			status: ResponseStatus.Retrieved | ResponseStatus.Initialized
			response: null
	  }
	| {
			status: ResponseStatus.Completed
			response: { iv: string; payload: string }
	  }

type BridgeResult =
	| ISuccessResult
	| (Omit<ISuccessResult, 'verification_level'> & { credential_type: CredentialType })
	| { error_code: AppErrorCodes }

export type WorldBridgeStore = {
	bridge_url: string
	iv: Uint8Array | null
	key: CryptoKey | null
	requestId: string | null
	connectorURI: string | null
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
	verificationState: VerificationState

	createClient: (config: IDKitConfig) => Promise<void>
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

	createClient: async ({ bridge_url, app_id, verification_level, action_description, action, signal }) => {
		const { key, iv } = await generateKey()

		if (bridge_url) {
			const validation = validate_bridge_url(bridge_url, app_id.includes('staging'))
			if (!validation.valid) {
				console.error(validation.errors.join('\n'))
				set({ verificationState: VerificationState.Failed })
				throw new Error('Invalid bridge_url. Please check the console for more details.')
			}
		}

		const res = await fetch(new URL('/request', bridge_url ?? DEFAULT_BRIDGE_URL), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(
				await encryptRequest(
					key,
					iv,
					JSON.stringify({
						app_id,
						action_description,
						action: encodeAction(action),
						signal: generateSignal(signal).digest,
						credential_types: verification_level_to_credential_types(
							verification_level ?? DEFAULT_VERIFICATION_LEVEL
						),
						verification_level: verification_level ?? DEFAULT_VERIFICATION_LEVEL,
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

		const res = await fetch(new URL(`/response/${get().requestId}`, get().bridge_url))

		if (!res.ok) {
			return set({
				errorCode: AppErrorCodes.ConnectionFailed,
				verificationState: VerificationState.Failed,
			})
		}

		const { response, status } = (await res.json()) as BridgeResponse

		if (status != ResponseStatus.Completed) {
			return set({
				verificationState:
					status == ResponseStatus.Retrieved
						? VerificationState.WaitingForApp
						: VerificationState.WaitingForConnection,
			})
		}

		let result = JSON.parse(
			await decryptResponse(key, buffer_decode(response.iv), response.payload)
		) as BridgeResult

		if ('error_code' in result) {
			return set({
				errorCode: result.error_code,
				verificationState: VerificationState.Failed,
			})
		}

		if ('credential_type' in result) {
			result = {
				verification_level: credential_type_to_verification_level(result.credential_type),
				...result,
			} satisfies ISuccessResult
		}

		set({
			result,
			key: null,
			requestId: null,
			connectorURI: null,
			verificationState: VerificationState.Confirmed,
		})
	},

	reset: () => {
		set({
			iv: null,
			key: null,
			result: null,
			errorCode: null,
			requestId: null,
			connectorURI: null,
			verificationState: VerificationState.PreparingClient,
		})
	},
}))
