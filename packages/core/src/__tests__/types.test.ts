import { describe, it, expect } from 'vitest'
import { AppErrorCodes, VerificationState, ResponseStatus } from '../types/bridge'
import { CredentialType, VerificationLevel } from '../types/config'

describe('AppErrorCodes', () => {
	it('has all expected error codes', () => {
		expect(AppErrorCodes.ConnectionFailed).toBe('connection_failed')
		expect(AppErrorCodes.VerificationRejected).toBe('verification_rejected')
		expect(AppErrorCodes.MaxVerificationsReached).toBe('max_verifications_reached')
		expect(AppErrorCodes.CredentialUnavailable).toBe('credential_unavailable')
		expect(AppErrorCodes.MalformedRequest).toBe('malformed_request')
		expect(AppErrorCodes.InvalidNetwork).toBe('invalid_network')
		expect(AppErrorCodes.InclusionProofFailed).toBe('inclusion_proof_failed')
		expect(AppErrorCodes.InclusionProofPending).toBe('inclusion_proof_pending')
		expect(AppErrorCodes.UnexpectedResponse).toBe('unexpected_response')
		expect(AppErrorCodes.FailedByHostApp).toBe('failed_by_host_app')
		expect(AppErrorCodes.GenericError).toBe('generic_error')
	})

	it('has 11 error codes total', () => {
		const values = Object.values(AppErrorCodes)
		expect(values.length).toBe(11)
	})
})

describe('VerificationState', () => {
	it('has all expected states', () => {
		expect(VerificationState.PreparingClient).toBe('loading_widget')
		expect(VerificationState.WaitingForConnection).toBe('awaiting_connection')
		expect(VerificationState.WaitingForApp).toBe('awaiting_app')
		expect(VerificationState.Confirmed).toBe('confirmed')
		expect(VerificationState.Failed).toBe('failed')
	})

	it('has 5 states total', () => {
		const values = Object.values(VerificationState)
		expect(values.length).toBe(5)
	})
})

describe('ResponseStatus', () => {
	it('has all expected statuses', () => {
		expect(ResponseStatus.Retrieved).toBe('retrieved')
		expect(ResponseStatus.Completed).toBe('completed')
		expect(ResponseStatus.Initialized).toBe('initialized')
	})

	it('has 3 statuses total', () => {
		const values = Object.values(ResponseStatus)
		expect(values.length).toBe(3)
	})
})

describe('CredentialType', () => {
	it('has correct values', () => {
		expect(CredentialType.Orb).toBe('orb')
		expect(CredentialType.SecureDocument).toBe('secure_document')
		expect(CredentialType.Document).toBe('document')
		expect(CredentialType.Device).toBe('device')
	})
})

describe('VerificationLevel', () => {
	it('has correct values', () => {
		expect(VerificationLevel.Orb).toBe('orb')
		expect(VerificationLevel.SecureDocument).toBe('secure_document')
		expect(VerificationLevel.Document).toBe('document')
		expect(VerificationLevel.Device).toBe('device')
	})

	it('matches CredentialType values', () => {
		// these should have the same string values
		expect(VerificationLevel.Orb).toBe(CredentialType.Orb)
		expect(VerificationLevel.Device).toBe(CredentialType.Device)
		expect(VerificationLevel.Document).toBe(CredentialType.Document)
		expect(VerificationLevel.SecureDocument).toBe(CredentialType.SecureDocument)
	})
})
