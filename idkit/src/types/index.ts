export enum IDKITStage {
	ENTER_PHONE = 'ENTER_PHONE',
	ENTER_CODE = 'ENTER_CODE',
	WORLD_ID = 'WORLD_ID',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
}

export interface IPhoneSignal {
	success: true
	nullifier_hash: string
	signature: string
}

export enum ErrorState {
	GENERIC_ERROR = 'GENERIC_ERROR',
	INVALID_CODE = 'INVALID_CODE', // OTP code is invalid
}
