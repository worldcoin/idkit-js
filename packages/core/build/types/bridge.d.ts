export declare enum AppErrorCodes {
    ConnectionFailed = "connection_failed",
    VerificationRejected = "verification_rejected",
    MaxVerificationsReached = "max_verifications_reached",
    AlreadySigned = "already_signed",
    CredentialUnavailable = "credential_unavailable",
    MalformedRequest = "malformed_request",
    InvalidNetwork = "invalid_network",
    InclusionProofFailed = "inclusion_proof_failed",
    InclusionProofPending = "inclusion_proof_pending",
    UnexpectedResponse = "unexpected_response",
    FailedByHostApp = "failed_by_host_app",
    GenericError = "generic_error",
    InvalidPhoneOTP = "invalid_phone_otp"
}
export declare enum VerificationState {
    PreparingClient = "loading_widget",
    PollingForUpdates = "awaiting_connection",
    Confirmed = "confirmed",
    Failed = "failed"
}
