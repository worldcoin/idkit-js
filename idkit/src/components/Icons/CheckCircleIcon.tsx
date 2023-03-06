import type { FC, HTMLAttributes } from 'react'

const CheckCircleIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fillRule="evenodd"
		clipRule="evenodd"
		viewBox="0 0 40 40"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M19.999 36.667c9.204 0 16.666-7.462 16.666-16.666 0-9.205-7.462-16.667-16.666-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.204 7.462 16.666 16.667 16.666Zm7.653-20.899a1.25 1.25 0 0 0-1.973-1.535L19 22.82a.417.417 0 0 1-.607.054l-4.225-3.802a1.25 1.25 0 0 0-1.672 1.858l4.224 3.802a2.917 2.917 0 0 0 4.254-.377l6.678-8.587Z" />
	</svg>
)

export default CheckCircleIcon
