export enum AppErrorCodes {
	ConnectionFailed = 'connection_failed',
	VerificationRejected = 'verification_rejected',
	MaxVerificationsReached = 'max_verifications_reached',
	AlreadySigned = 'already_signed', // NOTE: Deprecated, handled for backwards compatibility
	CredentialUnavailable = 'credential_unavailable',
	MalformedRequest = 'malformed_request',
	InvalidNetwork = 'invalid_network',
	InclusionProofFailed = 'inclusion_proof_failed',
	InclusionProofPending = 'inclusion_proof_pending',
	UnexpectedResponse = 'unexpected_response', // NOTE: when the World app returns an unexpected response
	FailedByHostApp = 'failed_by_host_app', // NOTE: Host app failed/rejected verification (does not come from World App / simulator)
	GenericError = 'generic_error',
	InvalidPhoneOTP = 'invalid_phone_otp', // NOTE: Experimental, only for phone verification
}

export enum VerificationState {
	PreparingClient = 'loading_widget',
	PollingForUpdates = 'awaiting_connection',
	Confirmed = 'confirmed',
	Failed = 'failed',
}
