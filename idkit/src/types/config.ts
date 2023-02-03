import type { CallbackFn } from '.'

export type VerificationMethods = 'orb' | 'phone'
export type StringOrAdvanced = Array<[string, unknown]> | string
export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type Config = {
	autoClose?: boolean
	onSuccess?: CallbackFn
	theme?: 'dark' | 'light'
	signal: StringOrAdvanced
	enableTelemetry?: boolean
	handleVerify?: CallbackFn
	actionId: StringOrAdvanced
	methods?: VerificationMethods[]
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
	heading: 'Verify your identity',
	subheading: "Unlock additional benefits by verifying you're a unique human doing this action once.",
	success: 'Your phone number has been verified',
} as const
