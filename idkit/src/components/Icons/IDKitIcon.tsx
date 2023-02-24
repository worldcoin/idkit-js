import type { FC, SVGAttributes } from 'react'

const IDKitIcon: FC<SVGAttributes<SVGElement>> = props => (
	<svg
		{...props}
		fill="none"
		stroke="currentColor"
		fillRule="evenodd"
		viewBox="0 0 26 26"
		strokeLinecap="round"
		strokeWidth="2"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="m18.026 10.352-3.76 3.758c-.699.7-1.839.7-2.538 0l-3.76-3.755M13 18.121v-1.907c0-.533.213-1.044.588-1.42l4.41-4.41m-5.032 7.738v-1.907a2.01 2.01 0 0 0-.588-1.42l-4.41-4.412" />
		<path
			fill="currentColor"
			fillRule="nonzero"
			d="M12.999 10.543a2.163 2.163 0 1 0 0-4.326 2.163 2.163 0 0 0 0 4.326Z"
		/>
		<path
			stroke="currentColor"
			d="M7.783 1h-2.61A4.174 4.174 0 0 0 1 5.174v2.609M18.217 25h2.61A4.174 4.174 0 0 0 25 20.826v-2.609m0-10.434v-2.61A4.174 4.174 0 0 0 20.826 1h-2.609M1 18.217v2.61A4.174 4.174 0 0 0 5.174 25h2.609"
		/>
	</svg>
)

export default IDKitIcon
