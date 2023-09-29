import { CredentialType } from './config'
import type { AppErrorCodes } from './bridge'

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
