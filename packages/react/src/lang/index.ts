const translations: Record<string, Record<string, string> | undefined> = {}

const getLang = (): Record<string, string> | undefined => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- apparently `navigator.languages` can be undefined
	if (!navigator?.languages) return

	const supportedLang = navigator.languages.find(l => translations[l] != undefined) ?? ''

	return translations[supportedLang]
}

type CleanWord<T> = T extends `${string}${' ' | ',' | '!' | '?' | '.' | '`'}${string}`
	? never
	: T extends ''
	? never
	: T

type ExtractPlaceholders<S extends string> = S extends `${string}:${infer Placeholder}`
	? Placeholder extends `${infer Word}${' ' | ',' | '!' | '?' | '.' | '`'}${infer Rest}`
		? CleanWord<Word> | ExtractPlaceholders<Rest>
		: never
	: never

type NoPlaceholder<S extends string> = S extends `${string}:${string}` ? never : S
type PlaceholderValues<S extends string> = { [K in ExtractPlaceholders<S>]: string }

const replaceParams = <T extends string>(str: T, params?: PlaceholderValues<T>): string => {
	let replaced: string = str
	for (const [key, value] of Object.entries(params ?? {})) replaced = str.replace(`:${key}`, value as string)

	return replaced
}

export function __<S extends `${string}:${string}`>(str: S, params: PlaceholderValues<S>): string
export function __<S extends string>(str: NoPlaceholder<S>): string
export function __<S extends string>(str: S, params?: PlaceholderValues<S>): string {
	if (typeof navigator === 'undefined') return str

	return replaceParams(getLang()?.[str] ?? str, params)
}
