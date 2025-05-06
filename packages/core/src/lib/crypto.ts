/**
 * Crypto operations with platform-specific adaptations
 */

import { isReactNative, isWeb } from './platform'
import { NullCryptoAdapter } from './adapters/crypto-adapter'
import type { CryptoAdapter } from './adapters/crypto-adapter'
import { WebCryptoAdapter } from './adapters/web-crypto-adapter'
import { ReactNativeCryptoAdapter } from './adapters/react-native-crypto-adapter'

// Create the appropriate adapter based on the environment
const createCryptoAdapter = (): CryptoAdapter => {
	if (isWeb()) {
		return new WebCryptoAdapter()
	}

	if (isReactNative()) {
		return new ReactNativeCryptoAdapter()
	}

	// For node or other environments
	try {
		return new ReactNativeCryptoAdapter() // This should also work for Node with webcrypto
	} catch (e) {
		console.warn('Using NullCryptoAdapter - crypto operations will fail', e)
		return new NullCryptoAdapter()
	}
}

// Singleton adapter instance
const cryptoAdapter = createCryptoAdapter()

// Export the same API surface as before, but delegating to the appropriate adapter
export const generateKey = async (): Promise<{ key: CryptoKey; iv: Uint8Array }> => {
	return cryptoAdapter.generateKey()
}

export const exportKey = async (key: CryptoKey): Promise<string> => {
	return cryptoAdapter.exportKey(key)
}

export const encryptRequest = async (
	key: CryptoKey,
	iv: ArrayBuffer,
	request: string
): Promise<{ payload: string; iv: string }> => {
	return cryptoAdapter.encryptRequest(key, iv, request)
}

export const decryptResponse = async (key: CryptoKey, iv: ArrayBuffer, payload: string): Promise<string> => {
	return cryptoAdapter.decryptResponse(key, iv, payload)
}
