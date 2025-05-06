/**
 * Web-specific implementation of the CryptoAdapter
 */

import { CryptoAdapter } from './crypto-adapter'
import { buffer_decode, buffer_encode } from '../utils'

export class WebCryptoAdapter implements CryptoAdapter {
  private encoder: TextEncoder
  private decoder: TextDecoder
  
  constructor() {
    this.encoder = new TextEncoder()
    this.decoder = new TextDecoder()
  }
  
  async generateKey(): Promise<{ key: CryptoKey; iv: Uint8Array }> {
    return {
      iv: window.crypto.getRandomValues(new Uint8Array(12)),
      key: await window.crypto.subtle.generateKey(
        { name: 'AES-GCM', length: 256 }, 
        true, 
        ['encrypt', 'decrypt']
      ),
    }
  }
  
  async exportKey(key: CryptoKey): Promise<string> {
    return buffer_encode(await window.crypto.subtle.exportKey('raw', key))
  }
  
  async encryptRequest(
    key: CryptoKey,
    iv: ArrayBuffer,
    request: string
  ): Promise<{ payload: string; iv: string }> {
    return {
      iv: buffer_encode(iv),
      payload: buffer_encode(
        await window.crypto.subtle.encrypt(
          { name: 'AES-GCM', iv }, 
          key, 
          this.encoder.encode(request)
        )
      ),
    }
  }
  
  async decryptResponse(key: CryptoKey, iv: ArrayBuffer, payload: string): Promise<string> {
    return this.decoder.decode(
      await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv }, 
        key, 
        buffer_decode(payload)
      )
    )
  }
}