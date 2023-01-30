import type { FC, HTMLAttributes } from 'react'

const InfoIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M14.665 7.999a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Zm-6-3.334a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Zm-1.333 1.5a.5.5 0 0 0 0 1h.167v4.167a.5.5 0 1 0 1 0V6.665a.5.5 0 0 0-.5-.5h-.667Z"
			clipRule="evenodd"
		/>
	</svg>
)

export default InfoIcon
