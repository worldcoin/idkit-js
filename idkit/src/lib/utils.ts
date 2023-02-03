import type { Config } from '@/types/config'
import { DEFAULT_COPY } from '@/types/config'

export const classNames = (...classes: unknown[]): string => {
	return classes.filter(Boolean).join(' ')
}

export const randomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getCopy = (copy: Config['copy'], key: keyof typeof DEFAULT_COPY): string => {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	if (copy?.[key]) return copy[key]!

	return DEFAULT_COPY[key]
}
