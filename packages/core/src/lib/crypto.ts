import { isReactNative, isWeb } from './platform'
import type { CryptoAdapter } from './adapters/crypto-adapter'
import { WebCryptoAdapter } from './adapters/web-crypto-adapter'
import { ReactNativeCryptoAdapter } from './adapters/react-native-crypto-adapter'

// Singleton instance of the crypto adapter
let cryptoAdapterInstance: CryptoAdapter | null = null

const getCryptoAdapter = (): CryptoAdapter => {
	if (cryptoAdapterInstance) {
		return cryptoAdapterInstance
	}

	if (isWeb()) {
		cryptoAdapterInstance = new WebCryptoAdapter()
		return cryptoAdapterInstance
	}

	if (isReactNative()) {
		cryptoAdapterInstance = new ReactNativeCryptoAdapter()
		return cryptoAdapterInstance
	}

	throw new Error('Unsupported platform')
}

export const generateKey = async (): Promise<{ key: CryptoKey; iv: Uint8Array }> => {
	return getCryptoAdapter().generateKey()
}

export const exportKey = async (key: CryptoKey): Promise<string> => {
	return getCryptoAdapter().exportKey(key)
}

export const encryptRequest = async (
	key: CryptoKey,
	iv: ArrayBuffer,
	request: string
): Promise<{ payload: string; iv: string }> => {
	return getCryptoAdapter().encryptRequest(key, iv, request)
}

export const decryptResponse = async (key: CryptoKey, iv: ArrayBuffer, payload: string): Promise<string> => {
	return getCryptoAdapter().decryptResponse(key, iv, payload)
}
