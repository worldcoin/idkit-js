import type { FC, HTMLAttributes } from 'react'

const CheckIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<rect width="88" height="88" rx="44" fill="#00C230" />
		<rect opacity="0.2" width="88" height="88" rx="44" fill="url(#paint0_radial_117706_3174)" />
		<rect x="0.5" y="0.5" width="87" height="87" rx="43.5" stroke="url(#paint1_linear_117706_3174)" />
		<path d="M29.5 45.5L37.5 53.5L57.5 33.5" stroke="white" strokeWidth="3" />
		<defs>
			<radialGradient
				id="paint0_radial_117706_3174"
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
				id="paint1_linear_117706_3174"
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

export default CheckIcon
