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
			return [CredentialType.Orb, CredentialType.Device]
		case VerificationLevel.Orb:
			return [CredentialType.Orb]
		default:
			throw new Error(`Unknown verification level: ${verification_level}`)
	}
}

/**
 * @dev use to convert credential type to verification level upon proof response
 * @param verification_level
 * @returns
 */
export const credential_type_to_verification_level = (credential_type: CredentialType): VerificationLevel => {
	switch (credential_type) {
		case CredentialType.Orb:
			return VerificationLevel.Orb
		case CredentialType.Device:
			return VerificationLevel.Device
		default:
			throw new Error(`Unknown credential_type: ${credential_type}`)
	}
}
