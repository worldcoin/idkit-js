/**
 * ## Adding Translations
 * To add a new language:
 * 1. Create a new translation file in `src/lang/translations/[lang].ts`
 * 2. Implement all translation strings in the new file
 * 3. Add the language to the `translations` index
 * 4. Update the `SupportedLanguage` type in `src/lang/types.ts`
 */

import { getTranslations } from './localization'
import type { TranslationStrings } from './types'

const getLang = (): TranslationStrings | undefined => {
	return getTranslations()
}

/**
 * Translation function with type-safe parameter support
 *
 * Examples:
 * - __('Hello world')                                    // No parameters needed
 * - __('Invalid IDKitStage :stage.', { stage: 'init' }) // Parameter required
 */

type HasPlaceholder<T extends string> = T extends `${string}:${string}` ? true : false

// Extract placeholder names from string (handles punctuation after placeholder)
// "Hello :name!" → "name"
type GetPlaceholderName<T extends string> = T extends `:${infer Name}${infer Rest}`
	? Name extends `${infer Word}${' ' | ',' | ':' | '!' | '?' | '.'}${string}`
		? Word // Stop at punctuation
		: Name // Use full name if no punctuation
	: never

// Find all placeholders in a string
// "Hello :name, stage :stage!" → "name" | "stage"
type GetAllPlaceholders<T extends string> = T extends `${infer Before}:${infer After}`
	? GetAllPlaceholders<After> | GetPlaceholderName<`:${After}`>
	: never

type TranslationParams<T extends string> =
	GetAllPlaceholders<T> extends never ? never : { [K in GetAllPlaceholders<T>]: string }

const replaceParams = (str: string, params?: Record<string, string>): string => {
	if (!params) return str

	let result = str
	for (const [key, value] of Object.entries(params)) {
		result = result.replace(`:${key}`, value)
	}
	return result
}

export function __<T extends string>(
	str: T,
	...args: HasPlaceholder<T> extends true ? [params: TranslationParams<T>] : []
): string {
	const [params] = args

	if (typeof navigator === 'undefined' && typeof window === 'undefined') {
		return replaceParams(str, params)
	}

	const translated = getLang()?.[str as keyof TranslationStrings] ?? str
	return replaceParams(translated, params)
}

export { setLocalizationConfig, getLocalizationConfig, getCurrentLanguage, getSupportedLanguages } from './localization'
export type { SupportedLanguage, TranslationStrings } from './types'
