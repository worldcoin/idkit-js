import useIDKit from './hooks/useIDKit'
import { VerificationLevel } from 'idkit-core'
import { solidityEncode } from 'idkit-core/hashing'
import { verifyCloudProof } from 'idkit-core/backend'
import IDKitWidget from '@/components/IDKitWidget/index'
import type { WidgetProps, Config } from '@/types/config'
import type { IVerifyResponse } from 'idkit-core/backend'
import type { ISuccessResult, IErrorState } from 'idkit-core'

export { IDKitWidget, useIDKit, solidityEncode, verifyCloudProof, VerificationLevel }
export type { ISuccessResult, IErrorState, IVerifyResponse, Config, WidgetProps }
