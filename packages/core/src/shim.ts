/**
 * React Native shim - provides explicit import for React Native users
 *
 * This is the recommended import to use at the top of a React Native app's entry point:
 * import '@worldcoin/idkit-core/shim'
 */

// Direct import of react-native-quick-crypto
// This mirrors exactly what core-react-native/src/shim.ts does
import { install } from 'react-native-quick-crypto'

// Install crypto polyfills
install()

console.log('react-native-quick-crypto installed successfully through shim')

// Export a helper function to make TypeScript recognize this as a proper module with exports
// This doesn't need to be used by consumers, but it ensures the .d.ts file isn't empty
// export const ensureCryptoIsAvailable = (): boolean => {
// 	return typeof globalThis.crypto.subtle !== 'undefined' && typeof globalThis.crypto.getRandomValues === 'function'
// }
export {}
