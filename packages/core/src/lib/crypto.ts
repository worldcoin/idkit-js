import { isBrowser } from 'browser-or-node'
import { buffer_decode, buffer_encode } from './utils'

// Get platform-compatible text encoder and decoder
const getTextEncoderDecoder = () => {
	try {
		return {
			encoder: new TextEncoder(),
			decoder: new TextDecoder(),
		}
	} catch (e) {
		throw new Error(
			'TextEncoder/TextDecoder not available. For React Native, install and import the text-encoding polyfill'
		)
	}
}

const { encoder, decoder } = getTextEncoderDecoder()

// Get platform-compatible Crypto implementation
const getCrypto = (): Crypto => {
	if (isBrowser) {
		return window.crypto
	}

	if (typeof globalThis !== 'undefined' && 'crypto' in globalThis) {
		return globalThis.crypto
	}

	throw new Error('Web Crypto API not available. For React Native, install and import react-native-get-random-values')
}

export const generateKey = async (): Promise<{ key: CryptoKey; iv: Uint8Array }> => {
	const crypto = getCrypto()

	return {
		iv: crypto.getRandomValues(new Uint8Array(12)),
		key: await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']),
	}
}

export const exportKey = async (key: CryptoKey): Promise<string> => {
	const crypto = getCrypto()
	return buffer_encode(await crypto.subtle.exportKey('raw', key))
}

export const encryptRequest = async (
	key: CryptoKey,
	iv: ArrayBuffer,
	request: string
): Promise<{ payload: string; iv: string }> => {
	const crypto = getCrypto()

	return {
		iv: buffer_encode(iv),
		payload: buffer_encode(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode(request))),
	}
}

export const decryptResponse = async (key: CryptoKey, iv: ArrayBuffer, payload: string): Promise<string> => {
	const crypto = getCrypto()

	return decoder.decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, buffer_decode(payload)))
}
