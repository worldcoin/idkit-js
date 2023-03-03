import type { FC, SVGAttributes } from 'react'

const WorldIDIcon: FC<SVGAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12">
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2.145"
			d="M10.876 3.785 7.274 7.22a1.784 1.784 0 0 1-2.433 0L1.238 3.788"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2.145"
			d="M6.055 10.88V9.136c0-.487.203-.954.564-1.297l4.225-4.027m-4.816 7.064V9.134c0-.487-.204-.954-.564-1.297l-4.226-4.03"
		/>
		<path
			fill="currentColor"
			d="M6.057 3.955c1.145 0 2.073-.884 2.073-1.975C8.13.888 7.202.004 6.057.004S3.984.888 3.984 1.98c0 1.09.928 1.975 2.073 1.975Z"
		/>
	</svg>
)

export default WorldIDIcon
