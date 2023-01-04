export enum IDKITStage {
	ENTER_PHONE = 'ENTER_PHONE',
	ENTER_CODE = 'ENTER_CODE',
	WORLD_ID = 'WORLD_ID',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	ABOUT = 'ABOUT',
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

export type CallbackFn = (result: ISuccessResult) => void

export enum ErrorState {
	GENERIC_ERROR = 'GENERIC_ERROR',
	PHONE_ERROR = 'PHONE_ERROR', // Phone number is rejected
	INVALID_CODE = 'INVALID_CODE', // OTP code is invalid
}

// Error response received from WLD app through WalletConnect
export interface ExpectedErrorResponse {
	message: string
	stack: string
}
