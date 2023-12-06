import type { FC, HTMLAttributes } from 'react'

const ArrowLongLeftIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
	</svg>
)

export default ArrowLongLeftIcon
