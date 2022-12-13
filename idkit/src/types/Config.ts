import type { CallbackFn } from '.'

export type Config = {
	actionId: string
	autoClose?: boolean
	onSuccess?: CallbackFn
}
