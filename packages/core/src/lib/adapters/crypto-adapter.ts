export interface CryptoAdapter {
	/**
	 * Generate a new encryption key and initialization vector
	 */
	generateKey(): Promise<{ key: CryptoKey; iv: Uint8Array }>

	/**
	 * Export a CryptoKey to a base64 string
	 */
	exportKey(key: CryptoKey): Promise<string>

	/**
	 * Encrypt a request string using the given key and IV
	 */
	encryptRequest(key: CryptoKey, iv: ArrayBuffer, request: string): Promise<{ payload: string; iv: string }>

	/**
	 * Decrypt a response payload using the given key and IV
	 */
	decryptResponse(key: CryptoKey, iv: ArrayBuffer, payload: string): Promise<string>
}
