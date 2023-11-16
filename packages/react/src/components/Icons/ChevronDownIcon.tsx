import type { FC, HTMLAttributes } from 'react'

const ChevronDownIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.846"
			d="m1.004 1 4 4 4-4"
		/>
	</svg>
)

export default ChevronDownIcon
