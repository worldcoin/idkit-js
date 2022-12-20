import type { CallbackFn } from '.'

export type Config = {
	actionId: string
	autoClose?: boolean
	onSuccess?: CallbackFn
	enableTelemetry?: boolean
	copy?: {
		title?: string
		heading?: string
		subheading?: string
		success?: string
	}
}

export const DEFAULT_COPY = {
	title: 'World ID',
	heading: 'Verify your phone number',
	subheading: "We'll take care of the rest!",
	success: 'Your phone number has been verified',
}
