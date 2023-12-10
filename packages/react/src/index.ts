import useIDKit from './hooks/useIDKit'
import SignInButton from './components/SignInButton'
import IDKitWidget from '@/components/IDKitWidget/index'
import type { WidgetProps, Config } from '@/types/config'
import { solidityEncode } from '@worldcoin/idkit-core/hashing'
import SignInWithWorldID from './components/SignInWithWorldID'
import type { ISuccessResult, IErrorState } from '@worldcoin/idkit-core'
import { CredentialType, VerificationLevel } from '@worldcoin/idkit-core'

export { IDKitWidget, useIDKit, solidityEncode, SignInWithWorldID, CredentialType, SignInButton, VerificationLevel }
export type { ISuccessResult, IErrorState, Config, WidgetProps }
