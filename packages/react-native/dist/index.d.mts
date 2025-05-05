import { HashFunctionOutput } from 'idkit-core/hashing';
import { AbiEncodedValue } from 'idkit-core/build/types/config';
export { CredentialType, IDKitConfig, ISuccessResult, VerificationLevel, VerificationState } from 'idkit-core';

/**
 * Adapter for Buffer encoding/decoding in React Native
 */
declare const buffer_encode: (buffer: ArrayBuffer) => string;
declare const buffer_decode: (encoded: string) => ArrayBuffer;

/**
 * React Native compatible implementation of hashing functions
 * Uses production-ready libraries for cryptographic operations
 */

/**
 * Hashes an input using keccak256 hash function
 * Compatible with the idkit-core implementation
 */
declare function hashToField(input: string | Uint8Array): HashFunctionOutput;
/**
 * Pack and encode ABI values
 * Uses the same keccak256 hashing for consistency
 */
declare function packAndEncode(input: [string, unknown][]): HashFunctionOutput;
/**
 * Encode Solidity ABI types and values
 */
declare const solidityEncode: (types: string[], values: unknown[]) => AbiEncodedValue;

/**
 * Crypto adapter for React Native
 * Provides a robust implementation that works in all environments
 */
declare const getTextEncoderDecoder: () => {
    encoder: TextEncoder;
    decoder: TextDecoder;
};
declare const getCrypto: () => Crypto;
declare const generateKey: () => Promise<{
    key: CryptoKey;
    iv: Uint8Array;
}>;
declare const exportKey: (key: CryptoKey) => Promise<string>;
declare const encryptRequest: (key: CryptoKey, iv: ArrayBuffer, request: string) => Promise<{
    payload: string;
    iv: string;
}>;
declare const decryptResponse: (key: CryptoKey, iv: ArrayBuffer, payload: string) => Promise<string>;

/**
 * React Native adapter for IDKit
 *
 * This package provides React Native compatible implementations
 * of idkit-core functionality. All crypto operations use
 * production-ready libraries.
 *
 * Version 0.7.1 - Updated with Hermes compatibility fixes
 */

declare let useWorldBridgeStore: any;

declare const setupIDKitForReactNative: () => void;

export { buffer_decode, buffer_encode, decryptResponse, encryptRequest, exportKey, generateKey, getCrypto, getTextEncoderDecoder, hashToField, packAndEncode, setupIDKitForReactNative, solidityEncode, useWorldBridgeStore };
