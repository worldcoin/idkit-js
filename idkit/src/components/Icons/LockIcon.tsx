import type { FC, HTMLAttributes } from 'react'

const LockIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 14">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M6 0a3.555 3.555 0 0 0-3.563 3.547v.052A3.001 3.001 0 0 0 0 6.547V11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6.547a3.001 3.001 0 0 0-2.438-2.948v-.052A3.555 3.555 0 0 0 5.999 0Zm2.437 3.547A2.432 2.432 0 0 0 5.999 1.12a2.432 2.432 0 0 0-2.437 2.427h4.875ZM7.5 8.773c0 .825-.671 1.494-1.5 1.494-.828 0-1.5-.669-1.5-1.494 0-.824.672-1.493 1.5-1.493.829 0 1.5.669 1.5 1.493Z"
			clipRule="evenodd"
		/>
	</svg>
)

export default LockIcon
