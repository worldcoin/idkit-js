import { translations } from './translations'
import type { LocalizationConfig, SupportedLanguage, TranslationStrings } from './types'

let currentConfig: LocalizationConfig = {}

export const setLocalizationConfig = (config: LocalizationConfig): void => {
	currentConfig = config
}

export const getLocalizationConfig = (): LocalizationConfig => currentConfig

const detectBrowserLanguage = (): SupportedLanguage | undefined => {
	for (const lang of navigator.languages) {
		const [language] = lang.split('-')
		const normalizedLang = language.toLowerCase() as SupportedLanguage
		if (normalizedLang in translations) {
			return normalizedLang
		}
	}

	return undefined
}

export const getCurrentLanguage = (): SupportedLanguage => {
	const config = getLocalizationConfig()

	// 1. Use explicitly set language if provided
	if (config.language && config.language in translations) {
		return config.language
	}

	// 2. Try to detect from browser
	const browserLang = detectBrowserLanguage()
	if (browserLang) {
		return browserLang
	}

	// 3. Fall back to English
	return 'en'
}

export const getTranslations = (): TranslationStrings | undefined => {
	const currentLang = getCurrentLanguage()
	return translations[currentLang]
}

export const getSupportedLanguages = (): SupportedLanguage[] => {
	return Object.keys(translations) as SupportedLanguage[]
}
