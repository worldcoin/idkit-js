import { create } from 'zustand'
import { useEffect } from 'react'
import { buildQRData } from '@/lib/qr'
import { CredentialType } from '@/types'
import { randomNumber } from '@/lib/utils'
import { WC_PROJECT_ID } from '@/lib/consts'
import Client from '@walletconnect/sign-client'
import type { IDKitConfig } from '@/types/config'
import { getSdkError } from '@walletconnect/utils'
import { AppErrorCodes, VerificationState } from '@/types/app'
import type { ExpectedErrorResponse, ISuccessResult } from '@/types'
import { validateABILikeEncoding, generateSignal, generateExternalNullifier, encodeAction } from '@/lib/hashing'

type WalletConnectStore = {
	connected: boolean
	uri: string
	topic: string
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
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
		credential_types?: IDKitConfig['credential_types'],
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
		signal?: IDKitConfig['signal'],
		credential_types?: IDKitConfig['credential_types'],
		action_description?: IDKitConfig['action_description'],
		walletConnectProjectId = WC_PROJECT_ID
	) => {
		if (credential_types && !credential_types.length) {
			console.warn('Cannot set empty `credential_types`. Defaulting to only Orb credential.')
		}

		set({
			config: {
				app_id,
				action,
				signal,
				action_description,
				walletConnectProjectId,
				credential_types: credential_types?.length ? credential_types : [CredentialType.Orb],
			},
		})

		try {
			const client = await Client.init({
				projectId: walletConnectProjectId,
				metadata: {
					name: 'IDKit',
					description: 'Verify with World ID',
					url: 'https://worldcoin.org',
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
			set({ errorCode: AppErrorCodes.ConnectionFailed })
			console.error('Unable to establish a connection with the World app:', error)
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
				if (!ensureVerificationResponse(result)) {
					return set({ errorCode: AppErrorCodes.UnexpectedResponse })
				}

				set({ result, verificationState: VerificationState.Confirmed })
			})
			.catch((error: unknown) => {
				let errorCode = AppErrorCodes.GenericError

				const errorMessage = (error as ExpectedErrorResponse).message
				if (errorMessage && Object.values(AppErrorCodes).includes(errorMessage as AppErrorCodes)) {
					errorCode = errorMessage as AppErrorCodes
				}

				set({ errorCode, verificationState: VerificationState.Failed })
			})
			.finally(() => void client.disconnect({ topic: get().topic, reason: getSdkError('USER_DISCONNECTED') }))
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
			external_nullifier: generateExternalNullifier(config.app_id, config.action).digest,
			credential_types: config.credential_types,
		},
	],
})

const ensureVerificationResponse = (result: unknown): result is ISuccessResult => {
	if (!result || typeof result !== 'object') return false
	const proof = 'proof' in result ? (result as Record<string, string>).proof : undefined
	const merkle_root = 'merkle_root' in result ? (result as Record<string, string>).merkle_root : undefined
	const nullifier_hash = 'nullifier_hash' in result ? (result as Record<string, string>).nullifier_hash : undefined
	const credential_type = 'credential_type' in result ? (result as Record<string, string>).credential_type : undefined

	if (!credential_type) return false
	for (const attr of [merkle_root, nullifier_hash, proof]) {
		if (!attr || !validateABILikeEncoding(attr)) return false
	}

	return true
}

type UseAppConnectionResponse = {
	reset: () => void
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
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

const useAppConnection = (
	app_id: IDKitConfig['app_id'],
	action: IDKitConfig['action'],
	signal?: IDKitConfig['signal'],
	credential_types?: IDKitConfig['credential_types'],
	action_description?: IDKitConfig['action_description'],
	walletConnectProjectId?: IDKitConfig['walletConnectProjectId']
): UseAppConnectionResponse => {
	const { result, verificationState, errorCode, qrData, client, createClient, reset } =
		useWalletConnectStore(getStore)

	useEffect(() => {
		if (!app_id) return
		if (!client) {
			void createClient(app_id, action, signal, credential_types, action_description, walletConnectProjectId)
		}
	}, [
		app_id,
		action,
		signal,
		walletConnectProjectId,
		action_description,
		credential_types,
		client,
		createClient,
		verificationState,
	])

	return { result, reset, verificationState, errorCode, qrData }
}

export default useAppConnection
