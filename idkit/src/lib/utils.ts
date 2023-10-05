export const classNames = (...classes: unknown[]): string => {
	return classes.filter(Boolean).join(' ')
}

export const randomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export const buffer_encode = (buffer: ArrayBuffer): string => {
	return Buffer.from(buffer).toString('base64')
}

export const buffer_decode = (encoded: string): ArrayBuffer => {
	return Buffer.from(encoded, 'base64')
}
