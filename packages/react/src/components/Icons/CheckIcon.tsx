import type { FC, HTMLAttributes } from 'react'

const CheckIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 8">
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.6"
			d="M9.868 1 3.771 7 1 4.273"
		/>
	</svg>
)

export default CheckIcon
