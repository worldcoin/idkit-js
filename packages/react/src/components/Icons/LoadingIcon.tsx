import type { SVGAttributes } from 'react'

const LoadingIcon = ({ className, ...props }: SVGAttributes<SVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		className={`animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
		{...props}
	>
		<circle cx="12" cy="12" r="10.75" stroke="#191C20" strokeOpacity=".16" strokeWidth="2.5" />
		<path
			fill="#191C20"
			d="M17.28 2.633c.338-.6.127-1.368-.505-1.642A12 12 0 0 0 7.459.892c-.638.261-.864 1.024-.539 1.632.326.607 1.08.827 1.725.584a9.504 9.504 0 0 1 6.897.073c.64.257 1.399.053 1.737-.548Z"
		/>
	</svg>
)

export default LoadingIcon
