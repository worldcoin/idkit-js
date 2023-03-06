import type { FC, HTMLAttributes } from 'react'

const ReloadIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.09 1.3a.75.75 0 0 1 .968.433l1.178 3.09a.75.75 0 0 1-1.08.915 7.25 7.25 0 0 0-9.937 9.886.75.75 0 1 1-1.298.752 8.75 8.75 0 0 1 10.27-12.703l-.535-1.406a.75.75 0 0 1 .434-.968Zm3.964 6.051a.75.75 0 0 1 1.025.274 8.75 8.75 0 0 1-10.27 12.703l.535 1.405a.75.75 0 0 1-1.402.534l-1.178-3.09a.75.75 0 0 1 1.08-.915 7.25 7.25 0 0 0 9.937-9.886.75.75 0 0 1 .273-1.025Z"
		/>
	</svg>
)

export default ReloadIcon
