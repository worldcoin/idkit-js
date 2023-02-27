export enum AppErrorCodes {
	ConnectionFailed = 'connection_failed',
	VerificationRejected = 'verification_rejected',
	AlreadySigned = 'already_signed',
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
