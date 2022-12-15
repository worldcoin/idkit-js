import type { CallbackFn } from '.'

export type Config = {
	actionId: string
	autoClose?: boolean
	onSuccess?: CallbackFn
	copy: {
		title: string
		heading: string
		subheading: string
		success: string
	}
}
