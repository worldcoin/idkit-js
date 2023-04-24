import type { CallbackFn } from '.'

export type VerificationMethods = 'orb' | 'phone'
export type StringOrAdvanced = Array<[string, unknown]> | string
export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type IDKitConfig = {
	app_id: string
	signal: StringOrAdvanced
	action?: StringOrAdvanced
	walletConnectProjectId?: string
}

export type WidgetConfig = {
	experimentalMode?: boolean
	autoClose?: boolean
	onSuccess?: CallbackFn
	theme?: 'dark' | 'light'
	enableTelemetry?: boolean
	handleVerify?: CallbackFn
	methods?: VerificationMethods[]
}

export type Config = IDKitConfig & Required<Pick<IDKitConfig, 'action'>> & WidgetConfig

export type WidgetProps = Config & {
	children?: ({ open }: { open: () => void }) => JSX.Element
}
