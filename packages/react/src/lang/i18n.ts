import { createInstance } from 'i18next'
import enMessages from './messages/en.json'
import esMessages from './messages/es.json'

export const defaultNS = 'idkit'
export const resources = {
	en: {
		[defaultNS]: enMessages,
	},
	es: {
		[defaultNS]: esMessages,
	},
} as const

const i18n = createInstance({
	defaultNS,
	ns: [defaultNS],
	fallbackLng: 'en',
	debug: false,

	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},

	resources,
	initAsync: false,
})

void i18n.init()

export default i18n
