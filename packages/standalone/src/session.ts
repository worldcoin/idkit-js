import type { StoreApi, UseBoundStore } from 'zustand'
import { createWorldBridgeStore } from '@worldcoin/idkit-core'
import type {
	WorldBridgeStore,
	IDKitConfig,
	VerificationState,
	ISuccessResult,
	AppErrorCodes,
} from '@worldcoin/idkit-core'

export type SessionStatus = {
	state: VerificationState
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
	sessionURI: string | null
}

// Global session state - similar to how IDKit manages its state
let sessionStore: UseBoundStore<StoreApi<WorldBridgeStore>> | null = null
let isSessionActive = false

/**
 * Creates a new World ID verification session
 * @param config The session configuration
 * @returns Promise that resolves when session is created
 */
const createSession = async (config: IDKitConfig): Promise<void> => {
	if (sessionStore) {
		console.warn('Session already exists. Destroying previous session.')
		destroySession()
	}

	sessionStore = createWorldBridgeStore()
	await sessionStore.getState().createClient(config)
	isSessionActive = true
}

/**
 * Gets the current session URI for QR code generation
 * @returns The session URI or null if no active session
 */
const getSessionURI = (): string | null => {
	if (!sessionStore) return null
	return sessionStore.getState().connectorURI
}

/**
 * Polls for verification updates and returns current session status
 * @returns Promise with current session status
 */
const pollSessionStatus = async (): Promise<SessionStatus> => {
	if (!sessionStore) {
		throw new Error('No active session. Call createSession() first.')
	}

	await sessionStore.getState().pollForUpdates()
	const state = sessionStore.getState()

	return {
		state: state.verificationState,
		result: state.result,
		errorCode: state.errorCode,
		sessionURI: state.connectorURI,
	}
}

/**
 * Destroys the current session and cleans up resources
 */
const destroySession = (): void => {
	if (sessionStore) {
		sessionStore.getState().reset()
		sessionStore = null
		isSessionActive = false
	}
}

/**
 * Checks if there's an active session
 */
const hasActiveSession = (): boolean => {
	return isSessionActive && sessionStore !== null
}

// Export the session API functions
export const IDKitSession = {
	create: createSession,
	pollStatus: pollSessionStatus,
	getURI: getSessionURI,
	destroy: destroySession,
	get isActive() {
		return hasActiveSession()
	},
}

export default IDKitSession
