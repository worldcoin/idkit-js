import useIDKit from './hooks/useIDKit'
import type { ISuccessResult } from '@/types'
import { solidityEncode } from './lib/hashing'
import IDKitWidget from '@/components/IDKitWidget'
import type { WidgetProps, Config } from '@/types/config'

export { IDKitWidget, useIDKit, solidityEncode }
export type { ISuccessResult, Config, WidgetProps }
