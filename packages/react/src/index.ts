import useIDKit from './hooks/useIDKit'
import { hashing } from '@worldcoin/idkit-core'
import { WidgetProps, Config } from '@/types/config'
import SignInButton from './components/SignInButton'
import IDKitWidget from '@/components/IDKitWidget/index'
import SignInWithWorldID from './components/SignInWithWorldID'
import { CredentialType, ISuccessResult } from '@worldcoin/idkit-core'

const solidityEncode = hashing.solidityEncode

export { IDKitWidget, useIDKit, solidityEncode, SignInWithWorldID, CredentialType, SignInButton }
export type { ISuccessResult, Config, WidgetProps }
