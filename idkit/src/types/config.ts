import type { CallbackFn, AbiEncodedValue } from '.'

export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type IDKitConfig = {
	app_id: string
	action_description?: string
	walletConnectProjectId?: string
	signal: AbiEncodedValue | string
	action: AbiEncodedValue | string
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
