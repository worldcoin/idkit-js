/**
 * Platform detection utilities
 */

import { isBrowser, isNode as isNodeBoolean } from 'browser-or-node'

/**
 * Detect React Native environment
 */
export const isReactNative = (): boolean => {
	return typeof navigator !== 'undefined' && navigator.product === 'ReactNative'
}

/**
 * Detect Web environment
 */
export const isWeb = (): boolean => {
	return isBrowser
}

/**
 * Detect Node.js environment - not used in this context
 */
export const isNode = (): boolean => {
	return isNodeBoolean
}

/**
 * Get global object (window, self, or globalThis) based on environment
 */
export const getGlobalObject = (): any => {
	if (typeof globalThis !== 'undefined') return globalThis
	if (typeof self !== 'undefined') return self
	if (typeof window !== 'undefined') return window
	// We don't need Node.js (global) support
	throw new Error('Unable to locate global object')
}

/**
 * Get Crypto implementation appropriate for current environment
 */
export const getCrypto = (): Crypto => {
	const globalObj = getGlobalObject()

	// For web environments
	if (typeof globalObj.crypto !== 'undefined') {
		return globalObj.crypto
	}

	throw new Error('Crypto API not available. For React Native, ensure polyfills are set up properly.')
}
