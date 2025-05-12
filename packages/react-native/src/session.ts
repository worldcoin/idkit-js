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
}

export class Session {
	private store: UseBoundStore<StoreApi<WorldBridgeStore>>

	constructor() {
		this.store = createWorldBridgeStore()
	}

	async create(
		app_id: IDKitConfig['app_id'],
		action: IDKitConfig['action'],
		options?: {
			signal?: IDKitConfig['signal']
			bridge_url?: IDKitConfig['bridge_url']
			verification_level?: IDKitConfig['verification_level']
			action_description?: IDKitConfig['action_description']
			partner?: IDKitConfig['partner']
		}
	): Promise<Session> {
		await this.store.getState().createClient({
			app_id,
			action,
			signal: options?.signal,
			bridge_url: options?.bridge_url,
			action_description: options?.action_description,
			verification_level: options?.verification_level,
			partner: options?.partner,
		})
		return this
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
	 * Gets the current session URI that can be used to start verification
	 */
	public get sessionURI(): string | null {
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
