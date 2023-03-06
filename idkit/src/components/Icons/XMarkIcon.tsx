import type { FC, HTMLAttributes } from 'react'

const XMarkIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fill="none"
		strokeWidth="1.5"
		viewBox="0 0 10 10"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M9.243.758.758 9.243m8.485 0L.758.758" />
	</svg>
)

export default XMarkIcon
