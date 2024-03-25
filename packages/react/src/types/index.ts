export enum IDKITStage {
	WORLD_ID = 'WORLD_ID',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	HOST_APP_VERIFICATION = 'HOST_APP_VERIFICATION',
}

export type CallbackFn<T> = (result: T) => Promise<void> | void
