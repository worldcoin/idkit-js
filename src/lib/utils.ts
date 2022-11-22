export const classNames = (...classes: Array<string | boolean | undefined>): string => {
	return classes.filter(Boolean).join(' ')
}
