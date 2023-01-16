import type { CallbackFn } from '.'

export type StringOrAdvanced = Array<[string, unknown]> | string
export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type Config = {
	signal: StringOrAdvanced
	actionId: StringOrAdvanced
	autoClose?: boolean
	onSuccess?: CallbackFn
	onVerification?: CallbackFn
	enableTelemetry?: boolean
	copy?: {
		title?: string
		heading?: string
		subheading?: string
		success?: string
	}
}

export type WidgetProps = Config & {
	children?: ({ open }: { open: () => void }) => JSX.Element
}

export const DEFAULT_COPY = {
	title: 'World ID',
	heading: 'Verify your phone number',
	subheading: "We'll take care of the rest!",
	success: 'Your phone number has been verified',
}
