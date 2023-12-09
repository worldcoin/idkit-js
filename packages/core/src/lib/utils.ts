import { VerificationLevel } from '@/types/config'
import { Buffer } from 'buffer/index.js'

export const DEFAULT_VERIFICATION_LEVEL = VerificationLevel.Orb

export const buffer_encode = (buffer: ArrayBuffer): string => {
	return Buffer.from(buffer).toString('base64')
}

export const buffer_decode = (encoded: string): ArrayBuffer => {
	return Buffer.from(encoded, 'base64')
}

export const verification_level_to_credential_types = (verification_level: VerificationLevel): string[] => {
    switch (verification_level) {
        case VerificationLevel.Lite:
            return ['device', 'orb']
        case VerificationLevel.Orb:
            return ['orb']
        default:
            throw new Error(`Unknown verification level: ${verification_level}`)
    }
}
