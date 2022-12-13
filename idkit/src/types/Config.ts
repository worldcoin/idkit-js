import type { CallbackFn } from '.'

export type Config = {
	actionId: string
	autoClose?: boolean
	onSuccess?: CallbackFn
	copy: {
		heading: string
		subheading: string
		success: string
	}
}
