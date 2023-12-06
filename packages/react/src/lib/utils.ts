export const classNames = (...classes: unknown[]): string => {
	return classes.filter(Boolean).join(' ')
}
