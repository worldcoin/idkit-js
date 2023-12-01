import type { FC, HTMLAttributes } from 'react'

const ErrorIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="49.375" fill="url(#a)" fillOpacity=".65" stroke="url(#b)" strokeWidth="1.25" />
		<g filter="url(#c)">
			<circle cx="50" cy="50" r="35" fill="#fff" />
			<circle cx="50" cy="50" r="34.432" stroke="#FFC9AD" strokeWidth="1.136" />
		</g>
		<path
			stroke="#FF4732"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3.75"
			d="m57.5 42.5-15 14.999m15 .001-15-14.999"
		/>
		<defs>
			<linearGradient id="a" x1="50" x2="50" y1="0" y2="100" gradientUnits="userSpaceOnUse">
				<stop stopColor="#FFA483" />
				<stop offset="1" stopColor="#FFA483" stopOpacity="0" />
			</linearGradient>
			<linearGradient id="b" x1="50" x2="50" y1="0" y2="100" gradientUnits="userSpaceOnUse">
				<stop stopColor="#FFA483" />
				<stop offset=".713" stopColor="#FFA483" stopOpacity="0" />
			</linearGradient>
			<filter
				id="c"
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
				<feColorMatrix values="0 0 0 0 1 0 0 0 0 0.788235 0 0 0 0 0.678431 0 0 0 0.45 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_39_740" />
				<feBlend in="SourceGraphic" in2="effect1_dropShadow_39_740" result="shape" />
			</filter>
		</defs>
	</svg>
)

export default ErrorIcon
