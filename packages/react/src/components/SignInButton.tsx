import { __ } from '@/lang'
import { motion } from 'framer-motion'
import { keyframes } from '@stitches/react'
import type { MotionProps } from 'framer-motion'
import WorldcoinIcon from './Icons/WorldcoinIcon'
import type { ButtonHTMLAttributes, FC } from 'react'

const disco = keyframes({
	'0%': { transform: 'translateY(-50%) rotate(0deg)' },
	'100%': { transform: 'translateY(-50%) rotate(360deg)' },
})

const AnimatedBorder = styled.span({
	...tw`absolute inset-0 z-0 scale-x-[2.0] blur`,
	'&::before': {
		content: `''`,
		animation: `${disco} 1.5s linear infinite`,
		...tw`absolute inset-0 top-1/2 aspect-square bg-gradient-conic`,
	},
	variants: {
		theme: {
			dark: {
				'&::before': tw`from-black via-white/30 to-black`,
			},
			light: {
				'&::before': tw`from-f2f5f9 via-gray-200 to-gray-200`,
			},
		},
	},
})

type Props = ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & { theme?: 'dark' | 'light' }

const SignInButton: FC<Props> = ({ style, theme = 'light', ...props }) => (
	<motion.button
		whileTap={{ scale: 0.98 }}
		whileHover={{ scale: 1.02 }}
		style={{
			overflow: 'hidden',
			borderStyle: 'none',
			display: 'relative',
			padding: '1.5rem 6rem',
			borderRadius: '0.75rem',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			borderWidth: theme == 'dark' ? '1px' : '0px',
			...style,
		}}
		{...props}
	>
		<div
			style={{
				zIndex: 10,
				inset: '1px',
				display: 'grid',
				cursor: 'pointer',
				placeItems: 'center',
				position: 'absolute',
				borderRadius: '0.75rem',
				backgroundColor: theme == 'dark' ? '#000' : '#f2f5f9',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<WorldcoinIcon style={{ height: '1rem', width: '1rem' }} />
				<span
					style={{
						marginLeft: '1rem',
						fontSize: '0.875rem',
						lineHeight: '1.25rem',
						fontFamily: 'Rubik, ui-sans-serif, system-ui, -apple-system, sans-serif',
					}}
				>
					{__('Sign in with World ID')}
				</span>
			</div>
		</div>
		<AnimatedBorder aria-hidden theme={theme} />
	</motion.button>
)

export default SignInButton
