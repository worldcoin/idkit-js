import useIDKit from './hooks/useIDKit'
import IDKitWidget from '@/components/IDKitWidget'
import type { WidgetProps, Config } from '@/types/config'
import { worldIDHash, validateABILikeEncoding } from './lib/hashing'
import type { ISuccessResult, SignalType, PhoneSignalProof, OrbSignalProof } from '@/types'

export { IDKitWidget, useIDKit, worldIDHash, validateABILikeEncoding }
export type { ISuccessResult, Config, SignalType, PhoneSignalProof, OrbSignalProof, WidgetProps }
