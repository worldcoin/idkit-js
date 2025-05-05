/**
 * React Native adapter for IDKit
 *
 * This package provides React Native compatible implementations
 * of idkit-core functionality. All crypto operations use
 * production-ready libraries.
 *
 * Version 0.7.1 - Updated with Hermes compatibility fixes
 */

// Setup polyfills immediately
import { setupPolyfills } from './platform'
setupPolyfills()

// Import our adapter implementations
import { buffer_encode, buffer_decode } from './adapters/buffer'
import { hashToField, packAndEncode, solidityEncode } from './adapters/hash'
import {
	getCrypto,
	getTextEncoderDecoder,
	generateKey,
	exportKey,
	encryptRequest,
	decryptResponse,
} from './adapters/crypto'

// Import and re-export types from idkit-core
import type { IDKitConfig, VerificationLevel, CredentialType, ISuccessResult, VerificationState } from 'idkit-core'

export type { IDKitConfig, VerificationLevel, CredentialType, ISuccessResult, VerificationState }

// Re-export the original store from idkit-core
// Try both direct and bridge-store imports for maximum compatibility
let useWorldBridgeStore
try {
	const { useWorldBridgeStore: directStore } = require('idkit-core')
	useWorldBridgeStore = directStore
} catch (e) {
	console.error('Failed to import useWorldBridgeStore', e)
	// Create a placeholder function that logs an error when used
	useWorldBridgeStore = () => {
		console.error('useWorldBridgeStore could not be loaded properly')
		return null
	}
}

export { useWorldBridgeStore }

// Patch idkit-core to work correctly with our React Native implementations
const patchIdkitCore = () => {
	try {
		// Try patching the crypto library directly
		try {
			const cryptoLib = require('idkit-core/build/lib/crypto')

			// Replace crypto functions if we were able to import the module
			if (cryptoLib) {
				console.log('Successfully imported idkit-core crypto module - patching')

				// Replace all the functions
				cryptoLib.getCrypto = getCrypto
				cryptoLib.generateKey = generateKey
				cryptoLib.exportKey = exportKey
				cryptoLib.encryptRequest = encryptRequest
				cryptoLib.decryptResponse = decryptResponse

				console.log('✅ Successfully patched crypto module functions')
			}
		} catch (e) {
			console.warn('Could not load idkit-core/build/lib/crypto:', e)
		}

		// Try patching the hash library
		try {
			const hashLib = require('idkit-core/build/lib/hashing')

			// Replace hash functions if we were able to import the module
			if (hashLib) {
				console.log('Successfully imported idkit-core hash module - patching')

				// Replace the functions
				hashLib.hashToField = hashToField
				hashLib.packAndEncode = packAndEncode
				hashLib.solidityEncode = solidityEncode

				console.log('✅ Successfully patched hash module functions')
			}
		} catch (e) {
			console.warn('Could not load idkit-core/build/lib/hashing:', e)
		}

		// Try patching the utils library
		try {
			const utilsLib = require('idkit-core/build/lib/utils')

			// Replace buffer functions if we were able to import the module
			if (utilsLib) {
				console.log('Successfully imported idkit-core utils module - patching')

				// Replace the functions
				utilsLib.buffer_encode = buffer_encode
				utilsLib.buffer_decode = buffer_decode

				console.log('✅ Successfully patched utils module functions')
			}
		} catch (e) {
			console.warn('Could not load idkit-core/build/lib/utils:', e)
		}

		console.log('🎉 Patching complete - idkit-core should now use our React Native implementations')
	} catch (error) {
		console.error('❌ Error patching idkit-core:', error)
	}
}

// Run the patching process
patchIdkitCore()

// Make our adapter versions available directly as well
export {
	buffer_encode,
	buffer_decode,
	getCrypto,
	getTextEncoderDecoder,
	generateKey,
	exportKey,
	encryptRequest,
	decryptResponse,
	hashToField,
	packAndEncode,
	solidityEncode,
}

// Export setup function for explicit initialization
export const setupIDKitForReactNative = (): void => {
	// Setup has already been done at import time,
	// but provide this for explicitness if users want it
	console.info('IDKit: React Native adapter ready')
}

// Auto-initialize
setupPolyfills()
console.info('IDKit React Native adapter initialized v0.7.1')
