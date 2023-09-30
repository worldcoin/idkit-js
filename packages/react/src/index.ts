import useIDKit from './hooks/useIDKit'
import IDKitWidget from '@/components/IDKitWidget'
import { WidgetProps, Config } from '@/types/config'
import SignInButton from './components/SignInButton'
import { solidityEncode } from '@worldcoin/idkit-core/hashing'
import SignInWithWorldID from './components/SignInWithWorldID'
import { CredentialType, ISuccessResult } from '@worldcoin/idkit-core/types'

export { IDKitWidget, useIDKit, solidityEncode, SignInWithWorldID, CredentialType, SignInButton }
export type { ISuccessResult, Config, WidgetProps }
