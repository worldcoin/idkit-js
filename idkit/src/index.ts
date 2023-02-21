import useIDKit from './hooks/useIDKit'
import { solidityEncode } from './lib/hashing'
import IDKitWidget from '@/components/IDKitWidget'
import type { ISuccessResult, SignalType } from '@/types'
import type { WidgetProps, Config } from '@/types/config'

export { IDKitWidget, useIDKit, solidityEncode }
export type { ISuccessResult, Config, SignalType, WidgetProps }
