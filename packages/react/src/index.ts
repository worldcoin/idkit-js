import useIDKit from './hooks/useIDKit'
import IDKitWidget from '@/components/IDKitWidget/index'
import type { WidgetProps, Config } from '@/types/config'
import { VerificationLevel } from '@worldcoin/idkit-core'
import { solidityEncode } from '@worldcoin/idkit-core/hashing'
import type { ISuccessResult, IErrorState } from '@worldcoin/idkit-core'

export { IDKitWidget, useIDKit, solidityEncode, VerificationLevel }
export type { ISuccessResult, IErrorState, Config, WidgetProps }
