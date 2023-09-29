import useIDKit from './hooks/useIDKit'
import QRCode from './components/QRCode'
import IDKitWidget from '@/components/IDKitWidget'
import { WidgetProps, Config } from '@/types/config'
import SignInButton from './components/SignInButton'
import SignInWithWorldID from './components/SignInWithWorldID'
import { CredentialType, ISuccessResult, VerificationState, AppErrorCodes } from '@worldcoin/idkit-core/src/types'
import {
	solidityEncode,
	hashToField,
	validateABILikeEncoding,
	generateExternalNullifier,
} from '@worldcoin/idkit-core/src/lib/hashing'

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
