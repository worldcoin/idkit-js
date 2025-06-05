import type { WorldBridgeStore } from './bridge'
import { createWorldBridgeStore } from './bridge'
import type { StoreApi, UseBoundStore } from 'zustand'
import type { IDKitConfig, VerificationState, ISuccessResult, AppErrorCodes } from './types'

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

	async create(config: IDKitConfig): Promise<Session> {
		await this.store.getState().createClient({
			app_id: config.app_id,
			action: config.action,
			signal: config.signal,
			bridge_url: config.bridge_url,
			action_description: config.action_description,
			verification_level: config.verification_level,
			partner: config.partner,
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
