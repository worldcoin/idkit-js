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
	config: { action_id: StringOrAdvanced; signal: StringOrAdvanced } | null
	qrData: {
		default: string
		mobile: string
	} | null

	resetConnection: () => void
	onConnectionEstablished: () => void
	setUri: (uri: string) => void
	initConnection: (action_id: StringOrAdvanced, signal: StringOrAdvanced) => Promise<void>
}

let client: Client

const useWalletConnectStore = create<WalletConnectStore>()((set, get) => ({
	qrData: null,
	config: null,
	result: null,
	connected: false,
	uri: '',
	topic: '',
	errorCode: null,
	verificationState: VerificationState.LoadingWidget,

	initConnection: async (action_id: StringOrAdvanced, signal: StringOrAdvanced) => {
		set({ config: { action_id, signal } })

		// TODO: Move metadata to .env vars
		client = await Client.init({
			projectId: 'c3e6053f10efbb423808783ee874cf6a',
			metadata: {
				name: 'IDKit',
				description: 'Testing IDKit w/ WalletConnect v2',
				url: '#',
				icons: ['https://walletconnect.com/walletconnect-logo.png'],
			},
		})

		try {
			const { uri, approval } = await client.connect({
				requiredNamespaces: {
					eip155: {
						methods: ['wld_worldIDVerification'],
						chains: ['eip155:0'],
						events: ['chainChanged', 'accountsChanged'],
					},
				},
			})

			if (uri) {
				get().setUri(uri)
				const session = await approval()

				if (typeof session !== 'undefined') {
					set({ topic: session.topic })
					return get().onConnectionEstablished()
				}

				client.on('session_delete', () => {
					void get().initConnection(action_id, signal)
				})
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
	onConnectionEstablished: async () => {
		set({ verificationState: VerificationState.AwaitingVerification })

		await client
			.request({
				topic: get().topic,
				chainId: 'eip155:0',
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				request: buildVerificationRequest(get().config!.action_id, get().config!.signal),
			})
			.then(result => {
				if (!ensureVerificationResponse(result)) return set({ errorCode: OrbErrorCodes.UnexpectedResponse })

				set({ result, verificationState: VerificationState.Confirmed })
			})
			.catch((error: unknown) => {
				let errorCode = OrbErrorCodes.GenericError

				const errorMessage = (error as ExpectedErrorResponse).message
				if (errorMessage && Object.values(OrbErrorCodes).includes(errorMessage as OrbErrorCodes)) {
					errorCode = errorMessage as OrbErrorCodes
				}

				set({ errorCode, verificationState: VerificationState.Failed })
			})
			.finally(
				async () => await client.disconnect({ topic: get().topic, reason: getSdkError('USER_DISCONNECTED') })
			)
			.catch(error => console.error('Unable to kill session', error))
	},

	resetConnection: () => {
		set({
			result: null,
			config: null,
			qrData: null,
			errorCode: null,
			connected: false,
			connectorUri: '',
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
	initConnection: store.initConnection,
	verificationState: store.verificationState,
})

const useOrbSignal = (action_id: StringOrAdvanced, signal: StringOrAdvanced): UseOrbSignalResponse => {
	const { result, verificationState, errorCode, qrData, initConnection, reset } = useWalletConnectStore(getStore)

	useEffect(() => {
		if (!action_id || !signal) return

		void initConnection(action_id, signal)
	}, [action_id, initConnection, signal])

	return { result, reset, verificationState, errorCode, qrData }
}

export default useOrbSignal
