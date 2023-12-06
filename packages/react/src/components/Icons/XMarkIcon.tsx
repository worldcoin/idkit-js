import type { FC, HTMLAttributes } from 'react'

const XMarkIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
		<path
			strokeWidth="1.5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m16.243 7.758-8.485 8.485m8.485 0L7.758 7.758"
		/>
	</svg>
)

export default XMarkIcon
