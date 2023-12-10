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
 * @deprecated use to transition to verification levels from credential types
 * @param verification_level
 * @returns
 */
export const verification_level_to_credential_types = (verification_level: VerificationLevel): string[] => {
	switch (verification_level) {
		case VerificationLevel.Lite:
			return [CredentialType.Orb, CredentialType.Device]
		case VerificationLevel.Orb:
			return [CredentialType.Orb]
		default:
			throw new Error(`Unknown verification level: ${verification_level}`)
	}
}
