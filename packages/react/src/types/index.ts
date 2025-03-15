export enum IDKITStage {
	WORLD_ID = 'WORLD_ID',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	HOST_APP_VERIFICATION = 'HOST_APP_VERIFICATION',
}

export type CallbackFn<T> = (result: T) => Promise<void> | void

export enum AppErrorCodes {
	ConnectionFailed = 'connection_failed',
	VerificationRejected = 'verification_rejected',
	MaxVerificationsReached = 'max_verifications_reached',
	CredentialUnavailable = 'credential_unavailable',
	MalformedRequest = 'malformed_request',
	InvalidNetwork = 'invalid_network',
	InclusionProofFailed = 'inclusion_proof_failed',
	InclusionProofPending = 'inclusion_proof_pending',
	UnexpectedResponse = 'unexpected_response', // NOTE: when the World app returns an unexpected response
	FailedByHostApp = 'failed_by_host_app', // NOTE: Host app failed/rejected verification (does not come from World App / simulator)
	GenericError = 'generic_error',
}
