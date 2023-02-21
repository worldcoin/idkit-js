import { create } from 'zustand'
import { useEffect } from 'react'
import { buildQRData } from '@/lib/qr'
import { randomNumber } from '@/lib/utils'
import { WC_PROJECT_ID } from '@/lib/consts'
import type { OrbResponse } from '@/types/orb'
import Client from '@walletconnect/sign-client'
import type { IDKitConfig } from '@/types/config'
import { getSdkError } from '@walletconnect/utils'
import type { ExpectedErrorResponse } from '@/types'
import { OrbErrorCodes, VerificationState } from '@/types/orb'
import {
	packAndEncode,
	validateABILikeEncoding,
	hashToField,
	generateSignal,
	generateNullifier,
	encodeAction,
} from '@/lib/hashing'

type WalletConnectStore = {
	connected: boolean
	uri: string
	topic: string
	result: OrbResponse | null
	errorCode: OrbErrorCodes | null
	verificationState: VerificationState
	config: IDKitConfig | null
	qrData: {
		default: string
		mobile: string
	} | null
	client: Client | null

	resetConnection: () => void
	onConnectionEstablished: (client: Client) => void
	setUri: (uri: string) => void
	createClient: (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal: IDKitConfig['signal'],
		action_description?: IDKitConfig['action_description'],
		walletConnectProjectId?: IDKitConfig['walletConnectProjectId']
	) => Promise<void>
	connectClient: (client: Client) => Promise<void>
}

const namespaces = {
	eip155: {
		methods: ['world_id_v1'],
		chains: ['eip155:1'], // Chain ID used does not matter, since we only perform custom JSON RPC messages (World ID verification)
		events: ['accountsChanged'],
	},
}

const useWalletConnectStore = create<WalletConnectStore>()((set, get) => ({
	qrData: null,
	config: null,
	result: null,
	connected: false,
	uri: '',
	topic: '',
	errorCode: null,
	verificationState: VerificationState.LoadingWidget,
	client: null,

	createClient: async (
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal: IDKitConfig['signal'],
		action_description?: IDKitConfig['action_description'],
		walletConnectProjectId = WC_PROJECT_ID
	) => {
		set({ config: { app_id, action, signal, action_description, walletConnectProjectId } })

		try {
			const client = await Client.init({
				projectId: walletConnectProjectId,
				metadata: {
					name: 'IDKit',
					description: 'Verify with World ID',
					url: '#',
					icons: ['https://worldcoin.org/icons/logo-small.svg'],
				},
			})
			set({ client: client })

			return get().connectClient(client)
		} catch (error) {
			console.error(error)
		}
	},

	connectClient: async (client: Client) => {
		try {
			const { uri, approval } = await client.connect({ requiredNamespaces: namespaces })

			if (uri) {
				get().setUri(uri)
				const session = await approval()

				if (typeof session !== 'undefined') {
					set({ topic: session.topic })
					return get().onConnectionEstablished(client)
				}
			}
		} catch (error) {
			set({ errorCode: OrbErrorCodes.ConnectionFailed })
			console.error(`Unable to establish a connection with the WLD app: ${error}`)
		}
	},

	setUri: (uri: string) => {
		if (!uri) return

		set({
			uri: uri,
			verificationState: VerificationState.AwaitingConnection,
			qrData: {
				default: buildQRData(uri),
				mobile: buildQRData(uri, window.location.href),
			},
		})
	},

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	onConnectionEstablished: async (client: Client) => {
		set({ verificationState: VerificationState.AwaitingVerification })

		await client
			.request({
				topic: get().topic,
				chainId: 'eip155:1',
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				request: buildVerificationRequest(get().config!),
			})
			.then(result => {
				if (!ensureVerificationResponse(result as Record<string, string>))
					return set({ errorCode: OrbErrorCodes.UnexpectedResponse })

				set({ result: result as OrbResponse, verificationState: VerificationState.Confirmed })
			})
			.catch((error: unknown) => {
				let errorCode = OrbErrorCodes.GenericError

				const errorMessage = (error as ExpectedErrorResponse).message
				if (errorMessage && Object.values(OrbErrorCodes).includes(errorMessage as OrbErrorCodes)) {
					errorCode = errorMessage as OrbErrorCodes
				}

				set({ errorCode, verificationState: VerificationState.Failed })
			})
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			.finally(async () => {
				await client.disconnect({ topic: get().topic, reason: getSdkError('USER_DISCONNECTED') })
			})
			.catch(error => {
				console.error(`Unable to disconnect: ${error}`)
			})
	},

	resetConnection: () => {
		set({
			result: null,
			config: null,
			qrData: null,
			errorCode: null,
			connected: false,
			client: null,
			verificationState: VerificationState.LoadingWidget,
		})
	},
}))

const buildVerificationRequest = (config: IDKitConfig) => ({
	jsonrpc: '2.0',
	method: 'world_id_v1',
	id: randomNumber(100000, 9999999),
	params: [
		{
			app_id: config.app_id,
			action: encodeAction(config.action),
			signal: generateSignal(config.signal).digest,
			action_description: config.action_description,
			external_nullifier: generateNullifier(config.app_id, config.action).digest,
		},
	],
})

const ensureVerificationResponse = (result: Record<string, string | undefined>): result is OrbResponse => {
	const proof = 'proof' in result ? result.proof : undefined
	const merkle_root = 'merkle_root' in result ? result.merkle_root : undefined
	const nullifier_hash = 'nullifier_hash' in result ? result.nullifier_hash : undefined

	for (const attr of [merkle_root, nullifier_hash, proof]) {
		if (!attr || !validateABILikeEncoding(attr)) return false
	}

	return true
}

type UseOrbSignalResponse = {
	reset: () => void
	result: OrbResponse | null
	errorCode: OrbErrorCodes | null
	verificationState: VerificationState
	qrData: {
		default: string
		mobile: string
	} | null
}

const getStore = (store: WalletConnectStore) => ({
	qrData: store.qrData,
	result: store.result,
	errorCode: store.errorCode,
	reset: store.resetConnection,
	client: store.client,
	createClient: store.createClient,
	connectClient: store.connectClient,
	verificationState: store.verificationState,
})

const useOrbSignal = (
	app_id: IDKitConfig['app_id'],
	action: IDKitConfig['action'],
	signal: IDKitConfig['signal'],
	action_description?: IDKitConfig['action_description'],
	walletConnectProjectId?: IDKitConfig['walletConnectProjectId']
): UseOrbSignalResponse => {
	const { result, verificationState, errorCode, qrData, client, createClient, reset } =
		useWalletConnectStore(getStore)

	useEffect(() => {
		if (!app_id || !action || !signal) return
		if (!client) {
			void createClient(app_id, action, signal, action_description, walletConnectProjectId)
		}
	}, [app_id, action, signal, walletConnectProjectId, action_description, client, createClient, verificationState])

	return { result, reset, verificationState, errorCode, qrData }
}

export default useOrbSignal
