import useIDKit from './hooks/useIDKit'
import IDKitWidget from '@/components/IDKitWidget/index'
import type { WidgetProps, Config } from '@/types/config'
import { solidityEncode } from '@worldcoin/idkit-core/hashing'
import { verifyCloudProof } from '@worldcoin/idkit-core/backend'
import type { IVerifyResponse } from '@worldcoin/idkit-core/backend'
import type { ISuccessResult, IErrorState } from '@worldcoin/idkit-core'
import { VerificationLevel, VerificationState } from '@worldcoin/idkit-core'

export { IDKitWidget, useIDKit, solidityEncode, verifyCloudProof, VerificationLevel, VerificationState }
export type { ISuccessResult, IErrorState, IVerifyResponse, Config, WidgetProps }

// Session API
export { useSession } from '@/hooks/useSession'
export type { UseSessionConfig, UseSessionResult } from '@/hooks/useSession'
