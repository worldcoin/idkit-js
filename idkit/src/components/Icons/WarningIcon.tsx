import type { FC, HTMLAttributes } from 'react'

const WarningIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 88 79">
		<path
			fillRule="evenodd"
			d="M40.614 21.943c1.476-2.59 5.297-2.59 6.773 0l12.787 22.444C61.61 46.906 59.742 50 56.788 50H31.213c-2.954 0-4.822-3.094-3.387-5.613l12.787-22.444Zm5.053 21.39a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0ZM45.251 30a1.25 1.25 0 1 0-2.5 0v8.333a1.25 1.25 0 1 0 2.5 0V30Z"
			clipRule="evenodd"
		/>
	</svg>
)

export default WarningIcon
