import useIDKit from './hooks/useIDKit'
import type { ISuccessResult } from '@/types'
import { solidityEncode } from './lib/hashing'
import IDKitWidget from '@/components/IDKitWidget'
import type { WidgetProps, Config } from '@/types/config'
import { hashToField, validateABILikeEncoding, generateExternalNullifier } from './lib/hashing'

// NOTE: For internal use in other Worldcoin packages
const internal = {
	hashToField,
	validateABILikeEncoding,
	generateExternalNullifier,
}

export { IDKitWidget, useIDKit, solidityEncode, internal }
export type { ISuccessResult, Config, WidgetProps }
