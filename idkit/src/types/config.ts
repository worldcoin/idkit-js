import type { CallbackFn } from '.'

export type StringOrAdvanced = Array<[string, unknown]> | string
export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type IDKitConfig = {
	signal: string
	app_id: string
	action: string
	action_description?: string
	walletConnectProjectId?: string
}

type WidgetConfig = {
	autoClose?: boolean
	onSuccess?: CallbackFn
	theme?: 'dark' | 'light'
	enableTelemetry?: boolean
	handleVerify?: CallbackFn
	copy?: {
		title?: string
		heading?: string
		subheading?: string
		success?: string
	}
}

export type Config = IDKitConfig & WidgetConfig

export type WidgetProps = Config & {
	children?: ({ open }: { open: () => void }) => JSX.Element
}

export const DEFAULT_COPY = {
	title: 'World ID',
	heading: 'Verify your identity',
	subheading: "Unlock additional benefits by verifying you're a unique human doing this action once.",
	success: 'Your phone number has been verified',
} as const
