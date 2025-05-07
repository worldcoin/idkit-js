import { isReactNative, isWeb } from './platform'
import { NullCryptoAdapter } from './adapters/crypto-adapter'
import type { CryptoAdapter } from './adapters/crypto-adapter'
import { WebCryptoAdapter } from './adapters/web-crypto-adapter'
import { ReactNativeCryptoAdapter } from './adapters/react-native-crypto-adapter'

const createCryptoAdapter = (): CryptoAdapter => {
	if (isWeb()) {
		return new WebCryptoAdapter()
	}

	if (isReactNative()) {
		return new ReactNativeCryptoAdapter()
	}

	console.warn('Using NullCryptoAdapter - crypto operations will fail')
	return new NullCryptoAdapter()
}

const cryptoAdapter = createCryptoAdapter()

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
