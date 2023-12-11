import type { SVGAttributes } from 'react'

const WarningIcon = (props: SVGAttributes<SVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
		<circle
			cx="50"
			cy="50"
			r="49.375"
			fill="url(#warning-a)"
			fillOpacity=".65"
			stroke="url(#warning-b)"
			strokeWidth="1.25"
		/>
		<g filter="url(#warning-c)">
			<circle cx="50" cy="50" r="35" fill="#fff" />
			<circle cx="50" cy="50" r="34.432" stroke="#FFE999" strokeWidth="1.136" />
		</g>
		<path
			fill="#FFB200"
			fillRule="evenodd"
			d="M47.46 40.207c1.107-1.943 3.973-1.943 5.08 0l9.59 16.834c1.076 1.888-.324 4.209-2.54 4.209H40.41c-2.216 0-3.616-2.32-2.54-4.21l9.59-16.833Zm3.79 16.043a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.313-10a.937.937 0 1 0-1.875 0v6.25a.938.938 0 0 0 1.875 0v-6.25Z"
			clipRule="evenodd"
		/>
		<defs>
			<linearGradient id="warning-a" x1="50" x2="50" y1="0" y2="100" gradientUnits="userSpaceOnUse">
				<stop stopColor="#FFDA66" />
				<stop offset="1" stopColor="#FFDA66" stopOpacity="0" />
			</linearGradient>
			<linearGradient id="warning-b" x1="50" x2="50" y1="0" y2="100" gradientUnits="userSpaceOnUse">
				<stop stopColor="#FFDA66" />
				<stop offset=".713" stopColor="#FFDA66" stopOpacity="0" />
			</linearGradient>
			<filter
				id="warning-c"
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
				<feColorMatrix values="0 0 0 0 1 0 0 0 0 0.913725 0 0 0 0 0.6 0 0 0 0.45 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_39_758" />
				<feBlend in="SourceGraphic" in2="effect1_dropShadow_39_758" result="shape" />
			</filter>
		</defs>
	</svg>
)

export default WarningIcon
