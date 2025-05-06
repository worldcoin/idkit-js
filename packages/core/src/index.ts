export {
	ISuccessResult,
	IErrorState,
	AppErrorCodes,
	VerificationState,
	AbiEncodedValue,
	CredentialType,
	VerificationLevel,
	IDKitConfig,
} from '@/types'

export { useWorldBridgeStore, WorldBridgeStore } from '@/bridge'

export { DEFAULT_VERIFICATION_LEVEL, verification_level_to_credential_types } from '@/lib/utils'

// Platform utilities
export { isReactNative, isWeb, isNode } from '@/lib/platform'

// Initialization helpers for different environments
export { init, setupReactNative } from '@/lib/init'
