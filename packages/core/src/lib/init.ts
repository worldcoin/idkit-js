/**
 * Initialization functions for setting up environment-specific requirements
 */
import { isReactNative, getGlobalObject } from './platform'

/**
 * Attempts to set up required polyfills for React Native environment
 * This should be called early in the application setup
 */
export const setupReactNative = (): void => {
	if (!isReactNative()) {
		// Not in React Native environment, no need to set up
		return
	}

	console.log('Setting up IDKit for React Native environment')

	try {
		// Verify text encoding APIs are available
		verifyTextEncoding()

		// Setup crypto polyfills if needed
		setupCryptoPolyfills()

		console.log('IDKit setup for React Native completed successfully')
	} catch (e) {
		console.error('Error setting up IDKit for React Native:', e)
		throw new Error('Failed to set up React Native environment. Make sure react-native-quick-crypto is installed.')
	}
}

/**
 * Verify TextEncoder/TextDecoder are available
 */
function verifyTextEncoding(): void {
	// Verify TextEncoder/TextDecoder are available
	if (typeof TextEncoder === 'undefined' || typeof TextDecoder === 'undefined') {
		console.warn('TextEncoder/TextDecoder not available in this environment')

		// Modern React Native should have these APIs built-in
		// If missing, throw a clear error
		if (isReactNative()) {
			throw new Error(
				'TextEncoder/TextDecoder not available. Make sure you are using a recent version of React Native.'
			)
		}
	}
}

/**
 * Sets up crypto polyfills if needed
 * 
 * Note: This function is a backup for when the direct import in shim.ts doesn't work.
 * In most cases, users should import '@worldcoin/idkit-core/shim' which handles this directly.
 */
function setupCryptoPolyfills(): void {
  try {
    // Use Function constructor to avoid TypeScript errors with require
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    const requireFn = new Function('modulePath', 'return typeof require !== "undefined" ? require(modulePath) : null')
    const quickCrypto = requireFn('react-native-quick-crypto')
    
    if (quickCrypto && typeof quickCrypto.install === 'function') {
      quickCrypto.install()
      console.log('react-native-quick-crypto installed through init function')
    } else {
      console.warn('react-native-quick-crypto not found or install method is missing')
      throw new Error('Invalid react-native-quick-crypto module')
    }
  } catch (error) {
    console.error('Failed to setup crypto:', error)
    console.warn('Crypto polyfills not initialized. Please use the shim import directly: import "@worldcoin/idkit-core/shim"')
  }
  
  // Verify crypto is available
  const globalObj = getGlobalObject()
  if (typeof globalObj.crypto === 'undefined' || typeof globalObj.crypto.getRandomValues === 'undefined') {
    console.warn('Crypto API not available after setup attempts')
  } else {
    console.log('Crypto polyfills setup complete')
  }
}

/**
 * Automatically initialize based on environment
 * Call this at the entry point of your application
 */
export const init = (): void => {
	if (isReactNative()) {
		setupReactNative()
	}
	// Add other environment initializations as needed
}
