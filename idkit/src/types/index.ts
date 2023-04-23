import type { AppErrorCodes } from './app'
import type { VerificationMethods } from './config'

declare const brand: unique symbol
type Brand<T, TBrand extends string> = T & { [brand]: TBrand }

export type AbiEncodedValue = Brand<{ types: string[]; values: unknown[] }, 'AbiEncodedValue'>

export enum IDKITStage {
	SELECT_METHOD = 'SELECT_METHOD',
	ENTER_PHONE = 'ENTER_PHONE',
	ENTER_CODE = 'ENTER_CODE',
	WORLD_ID = 'WORLD_ID',
	PRIVACY = 'PRIVACY',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
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

export interface ISuccessResult {
	nullifier_hash: string
	credential_type: VerificationMethods
	proof_payload: OrbSignalProof | PhoneSignalProof
}

export type CallbackFn = (result: ISuccessResult) => Promise<void> | void

// Error response received from World app through WalletConnect
export interface ExpectedErrorResponse {
	message: string
	stack: string
}

export interface IErrorState {
	code: AppErrorCodes
	message?: string
}
