export const classNames = (...classes: Array<boolean | string | undefined>): string => {
	return classes.filter(Boolean).join(' ')
}
