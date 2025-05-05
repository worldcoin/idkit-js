/**
 * Adapter for Buffer encoding/decoding in React Native
 */

// Import Buffer from the buffer package
import { Buffer } from 'buffer'

export const buffer_encode = (buffer: ArrayBuffer): string => {
  // Use Buffer for consistent base64 encoding
  return Buffer.from(buffer).toString('base64')
}

export const buffer_decode = (encoded: string): ArrayBuffer => {
  // Use Buffer for consistent base64 decoding
  return Buffer.from(encoded, 'base64').buffer
}