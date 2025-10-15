import { Buffer } from 'buffer/index.js'
import { CredentialType, VerificationLevel } from '@/types/config'

export const DEFAULT_VERIFICATION_LEVEL = VerificationLevel.Orb

export const buffer_encode = (buffer: ArrayBuffer): string => {
	return Buffer.from(buffer).toString('base64')
}

export const buffer_decode = (encoded: string): ArrayBuffer => {
	return Buffer.from(encoded, 'base64')
}

/**
 * @dev use to convert verification level to accepted credential types for proof request
 * @param verification_level
 * @returns
 */
export const verification_level_to_credential_types = (verification_level: VerificationLevel): string[] => {
	switch (verification_level) {
		case VerificationLevel.Device:
			// Intentionally exclude document and secure document for backwards compatibility with older app versions. This field is deprecated in newer app versions
			return [CredentialType.Orb, CredentialType.Device]
		case VerificationLevel.Document:
			return [CredentialType.Document, CredentialType.SecureDocument, CredentialType.Orb]
		case VerificationLevel.SecureDocument:
			return [CredentialType.SecureDocument, CredentialType.Orb]
		case VerificationLevel.Face:
			return [CredentialType.Face]
		case VerificationLevel.Orb:
			return [CredentialType.Orb]
		default:
			throw new Error(`Unknown verification level: ${verification_level}`)
	}
}

/**
 * @dev use to convert credential type to verification level upon proof response
 * @param credential_type
 * @returns
 */
export const credential_type_to_verification_level = (credential_type: CredentialType): VerificationLevel => {
	switch (credential_type) {
		case CredentialType.Orb:
			return VerificationLevel.Orb
		case CredentialType.SecureDocument:
			return VerificationLevel.SecureDocument
		case CredentialType.Document:
			return VerificationLevel.Document
		case CredentialType.Device:
			return VerificationLevel.Device
		case CredentialType.Face:
			return VerificationLevel.Face
		default:
			throw new Error(`Unknown credential_type: ${credential_type}`)
	}
}

/**
 * Validates if a received verification level is acceptable for the requested verification level
 * @param requestedLevel - The verification level requested by the RP
 * @param receivedLevel - The verification level received from the user
 * @returns true if the received level is acceptable, false otherwise
 *
 * @example
 * // Face level only accepts Face credentials
 * isValidCredential(VerificationLevel.Face, VerificationLevel.Face) // true
 * isValidCredential(VerificationLevel.Face, VerificationLevel.Orb) // false
 *
 * @example
 * // Device level accepts Device or Orb credentials
 * isValidCredential(VerificationLevel.Device, VerificationLevel.Device) // true
 * isValidCredential(VerificationLevel.Device, VerificationLevel.Orb) // true
 */
export const isValidCredential = (requestedLevel: VerificationLevel, receivedLevel: VerificationLevel): boolean => {
	switch (requestedLevel) {
		case VerificationLevel.Face:
			// Face level only accepts Face credentials
			return receivedLevel === VerificationLevel.Face
		case VerificationLevel.Orb:
			// Orb level only accepts Orb credentials
			return receivedLevel === VerificationLevel.Orb
		case VerificationLevel.SecureDocument:
			// SecureDocument accepts SecureDocument or Orb
			return receivedLevel === VerificationLevel.SecureDocument || receivedLevel === VerificationLevel.Orb
		case VerificationLevel.Document:
			// Document accepts Document, SecureDocument, or Orb
			return (
				receivedLevel === VerificationLevel.Document ||
				receivedLevel === VerificationLevel.SecureDocument ||
				receivedLevel === VerificationLevel.Orb
			)
		case VerificationLevel.Device:
			// Device accepts Device or Orb
			return receivedLevel === VerificationLevel.Device || receivedLevel === VerificationLevel.Orb
		default:
			return false
	}
}
