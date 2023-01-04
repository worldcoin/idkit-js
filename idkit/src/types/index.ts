export enum IDKITStage {
	ENTER_PHONE = 'ENTER_PHONE',
	ENTER_CODE = 'ENTER_CODE',
	WORLD_ID = 'WORLD_ID',
	PRIVACY = 'PRIVACY',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	ABOUT = 'ABOUT',
	HOST_APP_VERIFICATION = 'HOST_APP_VERIFICATION',
}

export interface OrbSignalProof {
	merkle_root: string
	proof: string
}

export interface PhoneSignalProof {
	timestamp: number
	signature: string
}

export enum SignalType {
	Orb = 'orb',
	Phone = 'phone',
}

export interface ISuccessResult {
	signal_type: SignalType
	proof_payload: OrbSignalProof | PhoneSignalProof
	nullifier_hash: string
}

export type CallbackFn = (result: ISuccessResult) => Promise<void> | void

export interface IErrorState {
	code: ErrorCodes
	message?: string
}

export enum ErrorCodes {
	GENERIC_ERROR = 'GENERIC_ERROR',
	PHONE_ERROR = 'PHONE_ERROR', // Phone number is rejected
	INVALID_CODE = 'INVALID_CODE', // OTP code is invalid
	REJECTED_BY_HOST_APP = 'REJECTED_BY_HOST_APP', // Host app rejected the verification request
}

// Error response received from WLD app through WalletConnect
export interface ExpectedErrorResponse {
	message: string
	stack: string
}

export enum PhoneVerificationChannel {
	SMS = 'sms',
	Call = 'call',
}
