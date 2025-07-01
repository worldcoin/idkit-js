import type { SVGAttributes } from 'react'

const WarningIcon = (props: SVGAttributes<SVGElement>) => (
	<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<rect width="88" height="88" rx="44" fill="#FFAE00" />
		<rect opacity="0.2" width="88" height="88" rx="44" fill="url(#paint0_radial_117706_3182)" />
		<rect x="0.5" y="0.5" width="87" height="87" rx="43.5" stroke="url(#paint1_linear_117706_3182)" />
		<path
			d="M64.1707 59.5415H22.8298L43.4998 22.3354L64.1707 59.5415ZM42.1208 51.3003L42.1218 54.0503H44.8992L44.8982 51.3003H42.1208ZM42.1248 46.7085H44.8748V36.6255H42.1248V46.7085Z"
			fill="white"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_117706_3182"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)"
			>
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</radialGradient>
			<linearGradient
				id="paint1_linear_117706_3182"
				x1="44"
				y1="0"
				x2="44"
				y2="88"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" stopOpacity="0.3" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
)

export default WarningIcon
