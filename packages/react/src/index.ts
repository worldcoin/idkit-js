import useIDKit from './hooks/useIDKit'
import IDKitWidget from '@/components/IDKitWidget'
import { WidgetProps, Config } from '@/types/config'
import SignInButton from './components/SignInButton'
import SignInWithWorldID from './components/SignInWithWorldID'
import { solidityEncode } from '@worldcoin/idkit-core/build/hashing'
import { CredentialType, ISuccessResult } from '@worldcoin/idkit-core/build/types'

export { IDKitWidget, useIDKit, solidityEncode, SignInWithWorldID, CredentialType, SignInButton }
export type { ISuccessResult, Config, WidgetProps }
