import type { FC, HTMLAttributes } from 'react'

const XMarkIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>
)

export default XMarkIcon
