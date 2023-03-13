import type { CallbackFn, AbiEncodedValue, CredentialType } from '.'

export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type IDKitConfig = {
	app_id: string
	action_description?: string
	walletConnectProjectId?: string
	signal?: AbiEncodedValue | string
	action?: AbiEncodedValue | string
	credential_types?: CredentialType[] // Accepted credentials for verification by the host app
}

export type WidgetConfig = {
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

export type Config = IDKitConfig & Required<Pick<IDKitConfig, 'action'>> & WidgetConfig

export type WidgetProps = Config & {
	children?: ({ open }: { open: () => void }) => JSX.Element
}
