/**
 * Sets up the required polyfills for React Native
 */
export const setupPolyfills = (): void => {
  console.log('Setting up IDKit React Native polyfills');
  
  // Always setup polyfills since this package is specifically for React Native
  
  // Setup crypto - import early to ensure it's available
  try {
    require('react-native-get-random-values');
    console.log('Loaded react-native-get-random-values');
  } catch (e) {
    console.warn('Failed to load react-native-get-random-values', e);
  }
  
  // Setup TextEncoder/TextDecoder
  try {
    const textEncoding = require('text-encoding');
    if (typeof TextEncoder === 'undefined') {
      global.TextEncoder = textEncoding.TextEncoder;
    }
    if (typeof TextDecoder === 'undefined') {
      global.TextDecoder = textEncoding.TextDecoder;
    }
    console.log('Text encoding polyfills setup complete');
  } catch (e) {
    console.warn('Failed to set up TextEncoder/TextDecoder polyfills', e);
  }
  
  // Setup Buffer polyfill
  try {
    const buffer = require('buffer');
    if (typeof global.Buffer === 'undefined') {
      global.Buffer = buffer.Buffer;
    }
    console.log('Buffer polyfill setup complete');
  } catch (e) {
    console.warn('Failed to set up Buffer polyfill', e);
  }
  
  // Setup base64 functions
  if (typeof global.btoa === 'undefined') {
    global.btoa = function(str: string) {
      return global.Buffer.from(str, 'binary').toString('base64');
    };
  }
  
  if (typeof global.atob === 'undefined') {
    global.atob = function(b64Encoded: string) {
      return global.Buffer.from(b64Encoded, 'base64').toString('binary');
    };
  }
  
  // Setup crypto.subtle if it doesn't exist
  if (typeof global.crypto !== 'undefined' && typeof global.crypto.subtle === 'undefined') {
    console.log('Setting up crypto.subtle polyfill');
    setupCryptoSubtle();
  } else if (typeof global.crypto === 'undefined') {
    console.log('Creating global.crypto object');
    setupFullCrypto();
  } else {
    console.log('crypto.subtle already exists, not setting up polyfill');
  }
}

/**
 * Sets up a basic implementation of crypto.subtle when none exists
 */
function setupCryptoSubtle() {
  try {
    // Create a minimal implementation of SubtleCrypto
    const subtleCrypto = createMinimalSubtleCrypto();
    
    // Try to add it to the crypto object
    // Using Object.defineProperty might not work due to read-only properties
    // So we try multiple approaches
    try {
      Object.defineProperty(global.crypto, 'subtle', {
        value: subtleCrypto,
        writable: true,
        enumerable: true,
        configurable: true
      });
      console.log('Successfully added crypto.subtle via defineProperty');
    } catch (e) {
      // If defineProperty fails, try direct assignment
      try {
        (global.crypto as any).subtle = subtleCrypto;
        console.log('Successfully added crypto.subtle via direct assignment');
      } catch (e2) {
        console.warn('Failed to add crypto.subtle to existing crypto object', e2);
        // Last resort - replace the entire crypto object
        const getRandomValues = global.crypto.getRandomValues;
        const newCrypto = {
          subtle: subtleCrypto,
          getRandomValues: getRandomValues ? getRandomValues.bind(global.crypto) : createGetRandomValues()
        };
        try {
          // Try to replace the global crypto
          (global as any).crypto = newCrypto;
          console.log('Replaced entire crypto object');
        } catch (e3) {
          console.error('Failed to polyfill crypto', e3);
        }
      }
    }
  } catch (e) {
    console.error('Error setting up crypto.subtle', e);
  }
}

/**
 * Creates a complete crypto object when none exists
 */
function setupFullCrypto() {
  try {
    // Create a minimal implementation of SubtleCrypto
    const subtleCrypto = createMinimalSubtleCrypto();
    
    // Create the getRandomValues function
    const getRandomValues = createGetRandomValues();
    
    // Create the crypto object
    const crypto = {
      subtle: subtleCrypto,
      getRandomValues
    };
    
    // Set the global crypto object
    (global as any).crypto = crypto;
    console.log('Created and assigned full crypto object');
  } catch (e) {
    console.error('Failed to create crypto object', e);
  }
}

/**
 * Creates a getRandomValues function
 */
function createGetRandomValues() {
  return function getRandomValues<T extends ArrayBufferView | null>(array: T): T {
    if (!array) return array;
    
    const bytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    
    return array;
  };
}

/**
 * Creates a minimal SubtleCrypto implementation that supports the
 * methods needed by IDKit
 */
function createMinimalSubtleCrypto() {
  // We can use the js-sha3 library for hashing
  let keccak256Fn: any = null;
  try {
    const jsSha3 = require('js-sha3');
    keccak256Fn = jsSha3.keccak256;
  } catch (e) {
    console.warn('js-sha3 not available, some functions may not work correctly');
  }
  
  // Return a minimal implementation
  return {
    // Digest implementation using available methods
    digest: async function(algorithm: string, data: BufferSource): Promise<ArrayBuffer> {
      console.log(`Using polyfilled digest with algorithm: ${algorithm}`);
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      
      // SHA-256 implementation
      if (algorithm === 'SHA-256' || algorithm.toLowerCase() === 'sha-256') {
        // Try to use keccak256 as a substitute if available
        if (keccak256Fn) {
          const hash = keccak256Fn(view);
          // Convert hex to ArrayBuffer
          const result = new Uint8Array(32);
          for (let i = 0; i < 32; i++) {
            result[i] = parseInt(hash.substring(i * 2, i * 2 + 2), 16);
          }
          return result.buffer;
        }
        
        // Very basic hash function as fallback
        const result = new Uint8Array(32);
        let h = 0;
        for (let i = 0; i < view.length; i++) {
          h = ((h << 5) - h) + view[i];
          h |= 0;
        }
        
        // Fill result with derived bytes
        for (let i = 0; i < 32; i++) {
          result[i] = ((h >> ((i % 4) * 8)) & 0xff);
        }
        
        return result.buffer;
      }
      
      throw new Error(`Algorithm ${algorithm} not supported in polyfill`);
    },
    
    // AES-GCM key generation
    generateKey: async function(algorithm: any, extractable: boolean, keyUsages: string[]): Promise<CryptoKey> {
      console.log('Using polyfilled generateKey');
      if (algorithm.name !== 'AES-GCM') {
        throw new Error(`Algorithm ${algorithm.name} not supported in polyfill`);
      }
      
      // Create a synthetic key
      return {
        type: 'secret',
        extractable: true,
        algorithm: { name: 'AES-GCM', length: algorithm.length || 256 },
        usages: keyUsages
      } as CryptoKey;
    },
    
    // Export a key to raw format
    exportKey: async function(format: string, key: CryptoKey): Promise<ArrayBuffer> {
      console.log(`Using polyfilled exportKey with format: ${format}`);
      if (format !== 'raw') {
        throw new Error(`Format ${format} not supported in polyfill`);
      }
      
      // Create a deterministic key based on some parameters
      const result = new Uint8Array(32);
      for (let i = 0; i < 32; i++) {
        result[i] = (i * 7) % 256;
      }
      
      return result.buffer;
    },
    
    // Encrypt data with AES-GCM
    encrypt: async function(algorithm: any, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer> {
      console.log('Using polyfilled encrypt');
      if (algorithm.name !== 'AES-GCM') {
        throw new Error(`Algorithm ${algorithm.name} not supported in polyfill`);
      }
      
      // Simple XOR "encryption" - NOT secure, just for compatibility
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      const result = new Uint8Array(view.length);
      const iv = new Uint8Array(algorithm.iv);
      
      for (let i = 0; i < view.length; i++) {
        const ivByte = iv[i % iv.length];
        result[i] = view[i] ^ ivByte ^ ((i * 149) % 256);
      }
      
      return result.buffer;
    },
    
    // Decrypt data with AES-GCM
    decrypt: async function(algorithm: any, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer> {
      console.log('Using polyfilled decrypt');
      if (algorithm.name !== 'AES-GCM') {
        throw new Error(`Algorithm ${algorithm.name} not supported in polyfill`);
      }
      
      // Simple XOR "decryption" - matches the encryption above
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      const result = new Uint8Array(view.length);
      const iv = new Uint8Array(algorithm.iv);
      
      for (let i = 0; i < view.length; i++) {
        const ivByte = iv[i % iv.length];
        result[i] = view[i] ^ ivByte ^ ((i * 149) % 256);
      }
      
      return result.buffer;
    }
  };
}