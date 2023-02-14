import { create } from 'zustand'
import { useEffect } from 'react'
import { buildQRData } from '@/lib/qr'
import { randomNumber } from '@/lib/utils'
import type { OrbResponse } from '@/types/orb'
import Client from '@walletconnect/sign-client'
import { getSdkError } from '@walletconnect/utils'
import type { ExpectedErrorResponse } from '@/types'
import type { StringOrAdvanced } from '@/types/config'
import { OrbErrorCodes, VerificationState } from '@/types/orb'
import { validateABILikeEncoding, worldIDHash } from '@/lib/hashing'

type WalletConnectStore = {
	connected: boolean
	uri: string
	topic: string
	result: OrbResponse | null
	errorCode: OrbErrorCodes | null
	verificationState: VerificationState
	config: { action_id: StringOrAdvanced; signal: StringOrAdvanced; walletconnect_id?: string } | null
	qrData: {
		default: string
		mobile: string
	} | null
	client: Client | null

	resetConnection: () => void
	onConnectionEstablished: (client: Client) => void
	setUri: (uri: string) => void
	createClient: (action_id: StringOrAdvanced, signal: StringOrAdvanced, walletconnect_id?: string) => Promise<void>
	connectClient: (client: Client) => Promise<void>
}

// let client: Client
const namespaces = {
	eip155: {
		methods: ['wld_worldIDVerification'],
		chains: ['eip155:1'], // Chain ID used does not matter, since we only perform signatures
		events: ['chainChanged', 'accountsChanged'],
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
		action_id: StringOrAdvanced,
		signal: StringOrAdvanced,
		walletconnect_id = 'c3e6053f10efbb423808783ee874cf6a' // Default WalletConnect project ID for IDKit
	) => {
		set({ config: { action_id, signal, walletconnect_id } })

		try {
			const client = await Client.init({
				projectId: walletconnect_id,
				metadata: {
					name: 'World ID',
					description: 'Verify with World ID',
					url: '#',
					icons: ['https://worldcoin.org/icons/logo-small.svg'],
				},
			})
			set({ client: client })

			// DEBUG
			// client.on('session_ping', args => {
			// 	console.log('session_ping:', args)
			// })
			// client.on('session_event', args => {
			// 	console.log('session_event:', args)
			// })
			// client.on('session_update', args => {
			// 	console.log('session_update:', args)
			// })
			// client.on('session_delete', args => {
			// 	console.log('session_delete:', args)
			// })

			return get().connectClient(client)
		} catch (error) {
			console.error(error)
		}
	},

	connectClient: async (client: Client) => {
		try {
			const { uri, approval } = await client.connect({
				requiredNamespaces: namespaces,
			})

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
				request: buildVerificationRequest(get().config!.action_id, get().config!.signal),
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

const buildVerificationRequest = (action_id: StringOrAdvanced, signal: StringOrAdvanced) => ({
	jsonrpc: '2.0',
	method: 'wld_worldIDVerification',
	id: randomNumber(100000, 9999999),
	params: [{ signal: worldIDHash(signal).digest, action_id: worldIDHash(action_id).digest }],
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
	action_id: StringOrAdvanced,
	signal: StringOrAdvanced,
	walletconnect_id?: string
): UseOrbSignalResponse => {
	const { result, verificationState, errorCode, qrData, client, createClient, reset } =
		useWalletConnectStore(getStore)

	useEffect(() => {
		if (!action_id || !signal) return
		if (!client) {
			void createClient(action_id, signal, walletconnect_id)
		}
	}, [action_id, signal, walletconnect_id, client, createClient, verificationState])

	return { result, reset, verificationState, errorCode, qrData }
}

export default useOrbSignal
