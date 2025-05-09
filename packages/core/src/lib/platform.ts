import { isBrowser, isNode as isNodeBoolean } from 'browser-or-node'

export const isReactNative = (): boolean => {
	return typeof navigator !== 'undefined' && navigator.product === 'ReactNative'
}

export const isWeb = (): boolean => {
	return isBrowser
}

export const isNode = (): boolean => {
	return isNodeBoolean
}

// Define a type for the global object with the properties we need
interface GlobalWithCrypto {
	crypto?: Crypto
}

export const getGlobalObject = (): GlobalWithCrypto => {
	if (typeof globalThis !== 'undefined') return globalThis as GlobalWithCrypto
	if (typeof self !== 'undefined') return self as GlobalWithCrypto
	if (typeof window !== 'undefined') return window as GlobalWithCrypto
	// We don't need Node.js (global) support
	throw new Error('Unable to locate global object')
}

export const getCrypto = (): Crypto => {
	const globalObj = getGlobalObject()

	// For web environments
	if (typeof globalObj.crypto !== 'undefined') {
		return globalObj.crypto
	}

	throw new Error('Crypto API not available. For React Native, ensure polyfills are set up properly.')
}
