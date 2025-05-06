/**
 * React Native-specific implementation of the CryptoAdapter
 */

import { CryptoAdapter } from './crypto-adapter'
import { buffer_decode, buffer_encode } from '../utils'
import { getCrypto } from '../platform'

export class ReactNativeCryptoAdapter implements CryptoAdapter {
  private encoder: TextEncoder
  private decoder: TextDecoder
  
  constructor() {
    // In React Native, these should be provided by polyfills
    this.encoder = new TextEncoder()
    this.decoder = new TextDecoder()
  }
  
  async generateKey(): Promise<{ key: CryptoKey; iv: Uint8Array }> {
    const crypto = getCrypto()
    return {
      iv: crypto.getRandomValues(new Uint8Array(12)),
      key: await crypto.subtle.generateKey(
        { name: 'AES-GCM', length: 256 }, 
        true, 
        ['encrypt', 'decrypt']
      ),
    }
  }
  
  async exportKey(key: CryptoKey): Promise<string> {
    const crypto = getCrypto()
    return buffer_encode(await crypto.subtle.exportKey('raw', key))
  }
  
  async encryptRequest(
    key: CryptoKey,
    iv: ArrayBuffer,
    request: string
  ): Promise<{ payload: string; iv: string }> {
    const crypto = getCrypto()
    return {
      iv: buffer_encode(iv),
      payload: buffer_encode(
        await crypto.subtle.encrypt(
          { name: 'AES-GCM', iv }, 
          key, 
          this.encoder.encode(request)
        )
      ),
    }
  }
  
  async decryptResponse(key: CryptoKey, iv: ArrayBuffer, payload: string): Promise<string> {
    const crypto = getCrypto()
    return this.decoder.decode(
      await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv }, 
        key, 
        buffer_decode(payload)
      )
    )
  }
}