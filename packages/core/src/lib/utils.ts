import { CredentialType } from '..'
import type { IDKitConfig } from '..'
import { Buffer } from 'buffer/index.js'

export const DEFAULT_CREDENTIAL_TYPES = [CredentialType.Orb]

export const buffer_encode = (buffer: ArrayBuffer): string => {
	return Buffer.from(buffer).toString('base64')
}

export const buffer_decode = (encoded: string): ArrayBuffer => {
	return Buffer.from(encoded, 'base64')
}

export const credential_types_or_default = (credential_types: IDKitConfig['credential_types']): CredentialType[] => {
	return credential_types?.length ? credential_types : DEFAULT_CREDENTIAL_TYPES
}
