import type { FC, HTMLAttributes } from 'react'

const CloudErrorIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			fill="currentColor"
			d="M3.484 10.758A13.947 13.947 0 0 0 0 20c0 7.732 6.268 14 14 14h12.678L3.828 11.15a4.053 4.053 0 0 1-.344-.392Zm32.512 21.246A9.985 9.985 0 0 0 40 24c0-5.523-4.477-10-10-10-1.09 0-2.14.175-3.123.497C24.74 9.501 19.78 6 14 6c-1.228 0-2.419.158-3.554.455l25.55 25.55Z"
		/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="m3.121 4.322 33.234 33.234" />
	</svg>
)

export default CloudErrorIcon
