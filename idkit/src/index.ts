import useIDKit from './hooks/useIDKit'
import { CredentialType } from '@/types'
import QRCode from './components/QRCode'
import { solidityEncode } from './lib/hashing'
import { VerificationState } from './types/app'
import type { AppErrorCodes } from './types/app'
import IDKitWidget from '@/components/IDKitWidget'
import SignInButton from './components/SignInButton'
import useAppConnection from '@/services/walletconnect'
import type { WidgetProps, Config } from '@/types/config'
import type { ISuccessResult, IErrorState } from '@/types'
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
}

export { IDKitWidget, useIDKit, solidityEncode, internal, SignInWithWorldID, CredentialType, SignInButton }
export type { ISuccessResult, Config, WidgetProps, IErrorState, AppErrorCodes }
