export enum AppErrorCodes {
	ConnectionFailed = 'connection_failed',
	VerificationRejected = 'verification_rejected',
	MaxVerificationsReached = 'max_verifications_reached',
	AlreadySigned = 'already_signed', // NOTE: Deprecated, handled for backwards compatibility
	UnexpectedResponse = 'unexpected_response',
	CredentialUnavailable = 'credential_unavailable',
	MalformedRequest = 'malformed_request',
	InvalidNetwork = 'invalid_network',
	InclusionProofFailed = 'inclusion_proof_failed',
	InclusionProofPending = 'inclusion_proof_pending',
	GenericError = 'generic_error',
}

export enum VerificationState {
	LoadingWidget = 'loading_widget',
	AwaitingConnection = 'awaiting_connection',
	AwaitingVerification = 'awaiting_verification',
	Confirmed = 'confirmed',
	Failed = 'failed',
}
