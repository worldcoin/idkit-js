import type { AppErrorCodes } from './bridge'
import type { CredentialType } from './config'

export interface ISuccessResult {
	proof: string
	merkle_root: string
	nullifier_hash: string
	credential_type: CredentialType
}

export interface IErrorState {
	code: AppErrorCodes
	message?: string
}
