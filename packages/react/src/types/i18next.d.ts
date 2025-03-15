import 'i18next'
import type { defaultNS, resources } from '@/lang/i18n'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS
		resources: (typeof resources)['en']
	}
}
