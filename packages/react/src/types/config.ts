import { ISuccessResult, IDKitConfig } from '@worldcoin/idkit-core/types'
import { CallbackFn, IExperimentalSuccessResult, VerificationMethods } from '.'

export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
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
			/** Called after the proof is returned from the World App, but before showing the success screen. Throwing an error in this screen will show the user a custom error. Used to perform additional validation when needed. */
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
