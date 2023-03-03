import type { FC, HTMLAttributes } from 'react'

const ArrowLongLeftIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fillRule="evenodd"
		clipRule="evenodd"
		fill="currentColor"
		viewBox="0 0 14 10"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M.47 4.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L2.81 5.75H13a.75.75 0 0 0 0-1.5H2.81l2.72-2.72A.75.75 0 0 0 4.47.47l-4 4Z" />
	</svg>
)

export default ArrowLongLeftIcon
