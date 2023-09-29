export type VerificationMethods = 'orb' | 'phone'

export enum IDKITStage {
	SELECT_METHOD = 'SELECT_METHOD', // EXPERIMENTAL
	ENTER_PHONE = 'ENTER_PHONE', // EXPERIMENTAL
	ENTER_CODE = 'ENTER_CODE', // EXPERIMENTAL
	WORLD_ID = 'WORLD_ID',
	PRIVACY = 'PRIVACY',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	HOST_APP_VERIFICATION = 'HOST_APP_VERIFICATION',
}

export interface IExperimentalSuccessResult {
	nullifier_hash: string
	credential_type: VerificationMethods
	proof_payload: OrbSignalProof | PhoneSignalProof
}

export type CallbackFn<T> = (result: T) => Promise<void> | void

// Error response received from World app through WalletConnect
export interface ExpectedErrorResponse {
	message: string
	stack: string
}

// ANCHOR: Experimental

export enum PhoneVerificationChannel {
	SMS = 'sms',
	Call = 'call',
}

export enum PhoneRequestErrorCodes {
	MAX_ATTEMPTS = 'max_attempts',
	TIMEOUT = 'timeout',
	UNSUPPORTED_COUNTRY = 'unsupported_country',
	SERVER_ERROR = 'server_error',
}

export interface OrbSignalProof {
	merkle_root: string
	proof: string
}
export interface PhoneSignalProof {
	timestamp: number
	signature: string
}
