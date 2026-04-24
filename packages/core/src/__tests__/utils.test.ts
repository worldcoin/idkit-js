import { describe, it, expect } from 'vitest'
import { CredentialType, VerificationLevel } from '../types/config'
import {
	DEFAULT_VERIFICATION_LEVEL,
	buffer_encode,
	buffer_decode,
	verification_level_to_credential_types,
	credential_type_to_verification_level,
} from '../lib/utils'

describe('DEFAULT_VERIFICATION_LEVEL', () => {
	it('should be Orb', () => {
		expect(DEFAULT_VERIFICATION_LEVEL).toBe(VerificationLevel.Orb)
	})
})

describe('buffer_encode and buffer_decode', () => {
	it('encodes and decodes back to same data', () => {
		const original = new Uint8Array([1, 2, 3, 4, 5])
		const encoded = buffer_encode(original.buffer)
		const decoded = buffer_decode(encoded)
		const result = new Uint8Array(decoded)

		expect(result).toEqual(original)
	})

	it('encodes an empty buffer', () => {
		const empty = new Uint8Array([])
		const encoded = buffer_encode(empty.buffer)
		const decoded = buffer_decode(encoded)

		expect(new Uint8Array(decoded).length).toBe(0)
	})

	it('returns a base64 string', () => {
		const data = new Uint8Array([72, 101, 108, 108, 111]) // "Hello"
		const encoded = buffer_encode(data.buffer)

		// base64 only has these chars
		expect(encoded).toMatch(/^[A-Za-z0-9+/=]*$/)
	})
})

describe('verification_level_to_credential_types', () => {
	it('maps Device to Orb and Device', () => {
		const result = verification_level_to_credential_types(VerificationLevel.Device)
		expect(result).toEqual([CredentialType.Orb, CredentialType.Device])
	})

	it('maps Document to Document, SecureDocument, and Orb', () => {
		const result = verification_level_to_credential_types(VerificationLevel.Document)
		expect(result).toEqual([CredentialType.Document, CredentialType.SecureDocument, CredentialType.Orb])
	})

	it('maps SecureDocument to SecureDocument and Orb', () => {
		const result = verification_level_to_credential_types(VerificationLevel.SecureDocument)
		expect(result).toEqual([CredentialType.SecureDocument, CredentialType.Orb])
	})

	it('maps Orb to just Orb', () => {
		const result = verification_level_to_credential_types(VerificationLevel.Orb)
		expect(result).toEqual([CredentialType.Orb])
	})

	it('throws on unknown level', () => {
		expect(() => verification_level_to_credential_types('unknown' as VerificationLevel)).toThrow(
			'Unknown verification level'
		)
	})
})

describe('credential_type_to_verification_level', () => {
	it('maps Orb to Orb', () => {
		expect(credential_type_to_verification_level(CredentialType.Orb)).toBe(VerificationLevel.Orb)
	})

	it('maps SecureDocument to SecureDocument', () => {
		expect(credential_type_to_verification_level(CredentialType.SecureDocument)).toBe(
			VerificationLevel.SecureDocument
		)
	})

	it('maps Document to Document', () => {
		expect(credential_type_to_verification_level(CredentialType.Document)).toBe(VerificationLevel.Document)
	})

	it('maps Device to Device', () => {
		expect(credential_type_to_verification_level(CredentialType.Device)).toBe(VerificationLevel.Device)
	})

	it('throws on unknown type', () => {
		expect(() => credential_type_to_verification_level('unknown' as CredentialType)).toThrow(
			'Unknown credential_type'
		)
	})
})
