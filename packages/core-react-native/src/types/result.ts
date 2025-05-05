import type { AppErrorCodes } from './bridge'
import type { VerificationLevel } from './config'

export interface ISuccessResult {
	proof: string
	merkle_root: string
	nullifier_hash: string
	verification_level: VerificationLevel
}

export interface IErrorState {
	code: AppErrorCodes
	message?: string
}
