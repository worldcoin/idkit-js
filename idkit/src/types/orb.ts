export enum OrbErrorCodes {
	ConnectionFailed = 'connection_failed',
	VerificationRejected = 'verification_rejected',
	AlreadySigned = 'already_signed',
	InvalidActionID = 'invalid_action_id',
	InvalidSignal = 'invalid_signal',
	UnexpectedResponse = 'unexpected_response',
	GenericError = 'generic_error',
}

export enum VerificationState {
	LoadingWidget = 'loading_widget',
	AwaitingConnection = 'awaiting_connection',
	AwaitingVerification = 'awaiting_verification',
	Confirmed = 'confirmed',
	Failed = 'failed',
}

export type OrbResponse = {
	proof: string
	merkle_root: string
	nullifier_hash: string
}
