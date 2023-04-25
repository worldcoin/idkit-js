import type { AbiEncodedValue, CallbackFn, CredentialType, IExperimentalSuccessResult, ISuccessResult } from '.'

export type VerificationMethods = 'orb' | 'phone'
export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type IDKitConfig = {
	app_id: string
	action_description?: string
	signal?: AbiEncodedValue | string
	action?: AbiEncodedValue | string
	walletConnectProjectId?: string
	credential_types?: CredentialType[] // Accepted credentials for verification by the host app
}

export type WidgetConfig = {
	autoClose?: boolean
	theme?: 'dark' | 'light'
	enableTelemetry?: boolean
} & (
	| {
			experimental_methods?: never
			onSuccess?: CallbackFn<ISuccessResult>
			handleVerify?: CallbackFn<ISuccessResult>
	  }
	| {
			experimental_methods?: VerificationMethods[]
			onSuccess?: CallbackFn<IExperimentalSuccessResult>
			handleVerify?: CallbackFn<IExperimentalSuccessResult>
	  }
)

export type Config = IDKitConfig & Required<Pick<IDKitConfig, 'action'>> & WidgetConfig

export type WidgetProps = Config & {
	children?: ({ open }: { open: () => void }) => JSX.Element
}
