declare const brand: unique symbol
type Brand<T, TBrand extends string> = T & { [brand]: TBrand }

export type AbiEncodedValue = Brand<{ types: string[]; values: unknown[] }, 'AbiEncodedValue'>

export enum IDKITStage {
	WORLD_ID = 'WORLD_ID',
	PRIVACY = 'PRIVACY',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	HOST_APP_VERIFICATION = 'HOST_APP_VERIFICATION',
}

export enum CredentialType {
	Orb = 'orb',
	Phone = 'phone',
}

export interface ISuccessResult {
	proof: string
	merkle_root: string
	nullifier_hash: string
	credential_type: CredentialType
}

export type CallbackFn = (result: ISuccessResult) => Promise<void> | void

// Error response received from World app through WalletConnect
export interface ExpectedErrorResponse {
	message: string
	stack: string
}

export interface IErrorState {
	code: ErrorCodes
	message?: string
}

export enum ErrorCodes {
	GENERIC_ERROR = 'GENERIC_ERROR',
	REJECTED_BY_HOST_APP = 'REJECTED_BY_HOST_APP', // Host app rejected the verification request
}
