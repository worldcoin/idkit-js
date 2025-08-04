import { __, setLocalizationConfig, getLocalizationConfig, getCurrentLanguage, getSupportedLanguages } from './lang'
import type { SupportedLanguage } from './lang'
import QRCode from './components/QRCode'
import useIDKitStore from './store/idkit'
import { ConfigSource } from './types/config'

export { 
	QRCode, 
	__, 
	useIDKitStore, 
	ConfigSource,
	setLocalizationConfig,
	getLocalizationConfig,
	getCurrentLanguage,
	getSupportedLanguages,
}

export type { SupportedLanguage }
