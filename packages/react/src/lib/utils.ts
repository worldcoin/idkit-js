export const classNames = (...classes: unknown[]): string => {
	return classes.filter(Boolean).join(' ')
}

export const randomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
