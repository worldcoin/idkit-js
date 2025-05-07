/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { StoreApi, UseBoundStore } from 'zustand'
import { createWorldBridgeStore } from '@worldcoin/idkit-core'
import type {
	WorldBridgeStore,
	IDKitConfig,
	VerificationState,
	ISuccessResult,
	AppErrorCodes,
} from '@worldcoin/idkit-core'

/**
 * Combined status information for a verification session
 * Returned by the status() method to provide a convenient way
 * to check verification state, result, and errors in a single call
 */
export type SessionStatus = {
	state: VerificationState
	result: ISuccessResult | null
	errorCode: AppErrorCodes | null
}

export class Session {
	private store: UseBoundStore<StoreApi<WorldBridgeStore>>

	constructor(
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		signal?: IDKitConfig['signal'],
		bridge_url?: IDKitConfig['bridge_url'],
		verification_level?: IDKitConfig['verification_level'],
		action_description?: IDKitConfig['action_description'],
		partner?: IDKitConfig['partner']
	) {
		// Create an independent store instance for this session
		this.store = createWorldBridgeStore()

		// Initialize the client with the provided configuration
		void this.store.getState().createClient({
			app_id,
			action,
			signal,
			bridge_url,
			action_description,
			verification_level,
			partner,
		})
	}

	/**
	 * Polls for verification updates
	 */
	public async pollForUpdates(): Promise<void> {
		return this.store.getState().pollForUpdates()
	}

	/**
	 * Polls for updates and returns the current session status
	 */
	public async status(): Promise<SessionStatus> {
		await this.pollForUpdates()
		const state = this.store.getState()

		return {
			state: state.verificationState,
			result: state.result,
			errorCode: state.errorCode,
		}
	}

	/**
	 * Gets the current connector URI that can be used to start verification
	 */
	public get connectorURI(): string | null {
		return this.store.getState().connectorURI
	}

	/**
	 * Destroys the session and cleans up resources
	 */
	public destroy(): void {
		this.store.getState().reset()
	}
}

export default Session
