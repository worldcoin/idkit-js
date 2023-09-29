import useIDKit from './hooks/useIDKit'
import { CredentialType } from '@/types'
import { ISuccessResult } from '@/types'
import QRCode from './components/QRCode'
import { solidityEncode } from './lib/hashing'
import IDKitWidget from '@/components/IDKitWidget'
import { WidgetProps, Config } from '@/types/config'
import SignInButton from './components/SignInButton'
import { VerificationState, AppErrorCodes } from './types/app'
import SignInWithWorldID from './components/SignInWithWorldID'
import { hashToField, validateABILikeEncoding, generateExternalNullifier } from './lib/hashing'

// NOTE: For internal use in other Worldcoin packages
const internal = {
	hashToField,
	validateABILikeEncoding,
	generateExternalNullifier,
	QRCode,
	VerificationState,
	AppErrorCodes,
}

export { IDKitWidget, useIDKit, solidityEncode, internal, SignInWithWorldID, CredentialType, SignInButton }
export type { ISuccessResult, Config, WidgetProps }
