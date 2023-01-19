import type { FC, HTMLAttributes } from 'react'

const CheckIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
	</svg>
)

export default CheckIcon
