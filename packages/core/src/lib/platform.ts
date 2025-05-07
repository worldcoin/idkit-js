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

export const getGlobalObject = (): any => {
	if (typeof globalThis !== 'undefined') return globalThis
	if (typeof self !== 'undefined') return self
	if (typeof window !== 'undefined') return window
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
