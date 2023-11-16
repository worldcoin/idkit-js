import useIDKit from './hooks/useIDKit'
import SignInButton from './components/SignInButton'
import { CredentialType } from '@worldcoin/idkit-core'
import IDKitWidget from '@/components/IDKitWidget/index'
import type { WidgetProps, Config } from '@/types/config'
import type { ISuccessResult } from '@worldcoin/idkit-core'
import { solidityEncode } from '@worldcoin/idkit-core/hashing'
import SignInWithWorldID from './components/SignInWithWorldID'

export { IDKitWidget, useIDKit, solidityEncode, SignInWithWorldID, CredentialType, SignInButton }
export type { ISuccessResult, Config, WidgetProps }
