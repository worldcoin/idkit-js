import type { AppErrorCodes } from './app'
import type { VerificationMethods } from './config'

declare const brand: unique symbol
type Brand<T, TBrand extends string> = T & { [brand]: TBrand }

export type AbiEncodedValue = Brand<{ types: string[]; values: unknown[] }, 'AbiEncodedValue'>

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

export enum CredentialType {
	Orb = 'orb',
	Phone = 'phone',
}

export interface IExperimentalSuccessResult {
	nullifier_hash: string
	credential_type: VerificationMethods
	proof_payload: OrbSignalProof | PhoneSignalProof
}

export interface ISuccessResult {
	proof: string
	merkle_root: string
	nullifier_hash: string
	credential_type: CredentialType
}

export type CallbackFn<T> = (result: T) => Promise<void> | void

export interface IErrorState {
	code: AppErrorCodes
	message?: string
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
