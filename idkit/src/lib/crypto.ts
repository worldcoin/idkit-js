import { encodeKey } from './hashing'

export const generateKey = (): Promise<CryptoKey> => {
	return window.crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
}

export const exportKey = async (key: CryptoKey): Promise<`0x${string}`> => {
	return encodeKey(await window.crypto.subtle.exportKey('raw', key))
}

export const hashKey = async (key: CryptoKey): Promise<`0x${string}`> => {
	const rawKey = await window.crypto.subtle.exportKey('raw', key)

	return encodeKey(await window.crypto.subtle.digest('SHA-256', rawKey))
}
