import { encodeKey } from './hashing'
import { buffer_decode, buffer_encode } from './utils'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const generateKey = async (): Promise<{ key: CryptoKey; iv: Uint8Array }> => {
	return {
		iv: window.crypto.getRandomValues(new Uint8Array(12)),
		key: await window.crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']),
	}
}

export const exportKey = async (key: CryptoKey): Promise<string> => {
	return buffer_encode(await window.crypto.subtle.exportKey('raw', key))
}

export const getRequestId = async (key: CryptoKey, iv: Uint8Array): Promise<`0x${string}`> => {
	return encodeKey(await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode('world-id-v1')))
}

export const encryptRequest = async (
	key: CryptoKey,
	iv: Uint8Array,
	request: string
): Promise<{ payload: string; encrypted_iv: string }> => {
	return {
		payload: buffer_encode(
			await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode(request))
		),
		encrypted_iv: buffer_encode(await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, iv)),
	}
}

export const decryptResponse = async (key: CryptoKey, iv: Uint8Array, payload: string): Promise<string> => {
	return decoder.decode(await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, buffer_decode(payload)))
}
