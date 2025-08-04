export type SupportedLanguage = 'en' | 'es' | 'th'

export interface LocalizationConfig {
	language?: SupportedLanguage
}

export interface TranslationStrings {
	'All set!': string
	'Your World ID is now connected': string
	'Transmitting verification to host app. Please wait...': string
	'Something went wrong': string
	'Verification Declined': string
	'Request cancelled': string
	'Connection to your wallet failed. Please try again.': string
	"You've cancelled the request in World App.": string
	'You have already verified the maximum number of times for this action.': string
	'It seems you do not have the verification level required by this app.': string
	'Invalid network. If you are the app owner, visit docs.world.org/test for details.': string
	'Your identity is still being registered. Please wait a few minutes and try again.': string
	"We couldn't complete your request. Please try again.": string
	'Try Again': string
	'Open World App': string
	'Hide QR Code': string
	'Display QR Code': string
	'QR Code copied': string
	'Connect your World ID': string
	'Use phone camera to scan the QR code': string
	'Connecting...': string
	'Please continue in app': string
	"You will be redirected to the app, please return to this page once you're done": string
	'Action cannot be an empty string.': string
	'Invalid IDKitStage :stage.': string
	'Terms & Privacy': string
}

export type TranslationKey = keyof TranslationStrings

export type Translations = {
	[K in SupportedLanguage]?: TranslationStrings
}
