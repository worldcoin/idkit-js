import useIDKit from './hooks/useIDKit'
import { CredentialType } from '@/types'
import QRCode from './components/QRCode'
import type { ISuccessResult } from '@/types'
import { solidityEncode } from './lib/hashing'
import IDKitWidget from '@/components/IDKitWidget'
import useAppConnection from '@/services/walletconnect'
import type { WidgetProps, Config } from '@/types/config'
import { VerificationState, AppErrorCodes } from './types/app'
import SignInWithWorldID from './components/SignInWithWorldID'
import { hashToField, validateABILikeEncoding, generateExternalNullifier } from './lib/hashing'

// NOTE: For internal use in other Worldcoin packages
const internal = {
	hashToField,
	validateABILikeEncoding,
	generateExternalNullifier,
	QRCode,
	useAppConnection,
	VerificationState,
	AppErrorCodes,
}

export { IDKitWidget, useIDKit, solidityEncode, internal, SignInWithWorldID, CredentialType }
export type { ISuccessResult, Config, WidgetProps }
