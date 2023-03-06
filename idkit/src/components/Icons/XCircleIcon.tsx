import type { FC, HTMLAttributes } from 'react'

const XCircleIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fillRule="evenodd"
		clipRule="evenodd"
		fill="currentColor"
		viewBox="0 0 40 40"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M36.665 20c0 9.205-7.462 16.667-16.666 16.667-9.205 0-16.667-7.462-16.667-16.666 0-9.205 7.462-16.667 16.667-16.667 9.204 0 16.666 7.462 16.666 16.667Zm-11.068 5.6a1.25 1.25 0 0 1-1.768 0l-3.83-3.83-3.83 3.83a1.25 1.25 0 1 1-1.769-1.77L18.23 20l-3.83-3.83a1.25 1.25 0 1 1 1.768-1.768l3.83 3.83 3.83-3.83a1.25 1.25 0 0 1 1.768 1.767L21.767 20l3.83 3.83a1.25 1.25 0 0 1 0 1.769Z" />
	</svg>
)

export default XCircleIcon
