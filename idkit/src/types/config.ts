import type { AbiEncodedValue, CallbackFn, CredentialType, IExperimentalSuccessResult, ISuccessResult } from '.'

export type VerificationMethods = 'orb' | 'phone'
export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type IDKitConfig = {
	/** Unique identifier for the app verifying the action. This should be the action ID obtained from the Developer Portal. */
	app_id: string
	/** The description of the specific action (shown to users in World App). Only recommended for actions created on-the-fly. */
	action_description?: string
	/** For use when validating proofs on-chain. Read more on the [On-chain section](https://docs.worldcoin.org/advanced/on-chain). */
	signal?: AbiEncodedValue | string
	/** Identifier for the action the user is performing. Should be left blank for [Sign in with Worldcoin](https://docs.worldcoin.org/id/sign-in). */
	action?: AbiEncodedValue | string
	walletConnectProjectId?: string
	/** An array of credential types to allow for verification. Will accept any combination of "orb" & "phone". Defaults to orb. TypeScript apps can use the `CredentialType` enum. */
	credential_types?: CredentialType[] // Accepted credentials for verification by the host app
}

export type WidgetConfig = {
	/** Whether to automatically close the widget after a successful verification. Defaults to `false`. */
	autoClose?: boolean
	/** The theme to apply to the widget's UI. Defaults to `light`. */
	theme?: 'dark' | 'light'
	/** Whether opt-in telemetry is enabled. Very few events are sent, with no PII to help improve the project. Defaults to `false`. */
	enableTelemetry?: boolean
} & (
	| {
			/** Optionally enable the experimental verification flow. This flow is not recommended for production apps. */
			experimental_methods?: VerificationMethods[]
			/** Function to trigger when verification is successful. Should receive a single parameter of type `IExperimentalSuccessResult` which contains the proof details. */
			onSuccess: CallbackFn<IExperimentalSuccessResult>
			/** Called after the proof is returned from the World App, but before showing the success screen. Throwing in this screen will show the user a custom error. Used to perform additional validation when needed. */
			handleVerify?: CallbackFn<IExperimentalSuccessResult>
	  }
	| {
			experimental_methods?: never
			/** Function to trigger when verification is successful. Should receive a single parameter of type `ISuccessResult` which contains the proof details. */
			onSuccess: CallbackFn<ISuccessResult>
			/** Called after the proof is returned from the World App, but before showing the success screen. Throwing in this screen will show the user a custom error. Used to perform additional validation when needed. */
			handleVerify?: CallbackFn<ISuccessResult>
	  }
)

export type Config = IDKitConfig & Required<Pick<IDKitConfig, 'action'>> & WidgetConfig

export type WidgetProps = Config & {
	children?: ({ open }: { open: () => void }) => JSX.Element
}
