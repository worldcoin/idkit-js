import { encodeKey } from './hashing'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const generateKey = (): Promise<CryptoKeyPair> => {
	return window.crypto.subtle.generateKey(
		{ name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
		true,
		['encrypt', 'decrypt']
	)
}

export const exportKey = async (key: CryptoKey): Promise<string> => {
	const jwk = await window.crypto.subtle.exportKey('jwk', key)

	return Buffer.from(JSON.stringify(jwk)).toString('base64')
}

export const getRequestId = async (key: CryptoKey): Promise<`0x${string}`> => {
	return encodeKey(await window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, encoder.encode('world-id-v1')))
}

export const encryptRequest = async (key: CryptoKey, request: string): Promise<ArrayBuffer> => {
	return window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, encoder.encode(request))
}

export const decryptResponse = async (key: CryptoKey, response: ArrayBuffer): Promise<string> => {
	return decoder.decode(await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, key, response))
}
