import useIDKit from './hooks/useIDKit'
import { solidityEncode } from './lib/hashing'
import IDKitWidget from '@/components/IDKitWidget'
import type { WidgetProps, Config } from '@/types/config'
import type { ISuccessResult, CredentialType } from '@/types'
import SignInWithWorldID from './components/SignInWithWorldID'
import { hashToField, validateABILikeEncoding, generateExternalNullifier } from './lib/hashing'

// NOTE: For internal use in other Worldcoin packages
const internal = {
	hashToField,
	validateABILikeEncoding,
	generateExternalNullifier,
}

export { IDKitWidget, useIDKit, solidityEncode, internal, SignInWithWorldID }
export type { ISuccessResult, Config, WidgetProps, CredentialType }
