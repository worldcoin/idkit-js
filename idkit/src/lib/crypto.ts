import { encodeKey } from './hashing'

export const generateKey = (): Promise<CryptoKey> => {
	return window.crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
}

export const exportKey = async (key: CryptoKey): Promise<`0x${string}`> => {
	return encodeKey(await window.crypto.subtle.exportKey('raw', key))
}

export const getRequestId = async (key: CryptoKey): Promise<`0x${string}`> => {
	return encodeKey(await window.crypto.subtle.sign('HMAC', key, Buffer.from('world-id-v1')))
}

export const encryptRequest = async (key: CryptoKey, request: string): Promise<`0x${string}`> => {
	return encodeKey(await window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, Buffer.from(request)))
}

export const decryptResponse = async (key: CryptoKey, response: ArrayBuffer): Promise<string> => {
	return encodeKey(await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, key, response))
}
