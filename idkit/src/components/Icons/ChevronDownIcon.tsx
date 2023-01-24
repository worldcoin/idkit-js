import type { FC, HTMLAttributes } from 'react'

const ChevronDownIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
	</svg>
)

export default ChevronDownIcon
