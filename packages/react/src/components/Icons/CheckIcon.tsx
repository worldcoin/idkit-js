import type { FC, HTMLAttributes } from 'react'

const CheckIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
		<circle
			cx="50"
			cy="50"
			r="49.375"
			fill="url(#success-a)"
			fillOpacity=".65"
			stroke="url(#success-b)"
			strokeWidth="1.25"
		/>
		<g filter="url(#success-c)">
			<circle cx="50" cy="50" r="35" fill="#fff" />
			<circle cx="50" cy="50" r="34.432" stroke="#CCEBCC" strokeWidth="1.136" />
		</g>
		<path
			stroke="#090"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3.75"
			d="m41.25 52.5 4.375 4.375 13.125-13.75"
		/>
		<defs>
			<linearGradient id="success-a" x1="50" x2="50" y1="0" y2="100" gradientUnits="userSpaceOnUse">
				<stop stopColor="#99D699" />
				<stop offset="1" stopColor="#99D699" stopOpacity="0" />
			</linearGradient>
			<linearGradient id="success-b" x1="50" x2="50" y1="0" y2="100" gradientUnits="userSpaceOnUse">
				<stop stopColor="#99D699" />
				<stop offset=".713" stopColor="#99D699" stopOpacity="0" />
			</linearGradient>
			<filter
				id="success-c"
				width="77.5"
				height="77.5"
				x="11.25"
				y="13.125"
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
				<feOffset dy="1.875" />
				<feGaussianBlur stdDeviation="1.875" />
				<feColorMatrix values="0 0 0 0 0.8 0 0 0 0 0.921569 0 0 0 0 0.8 0 0 0 0.45 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_39_712" />
				<feBlend in="SourceGraphic" in2="effect1_dropShadow_39_712" result="shape" />
			</filter>
		</defs>
	</svg>
)

export default CheckIcon
