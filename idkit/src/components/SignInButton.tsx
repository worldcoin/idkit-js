import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'
import { keyframes } from 'stitches.config'
import type { MotionProps } from 'framer-motion'
import WorldcoinIcon from './Icons/WorldcoinIcon'
import type { ButtonHTMLAttributes, FC } from 'react'

const MotionButton = motion(
	styled.button({
		...tw`relative overflow-hidden rounded-xl px-24 py-6 will-change-transform focus:outline-none border-none dark:border border-white/10`,
		variants: {
			theme: {
				dark: tw`bg-black`,
				light: tw`bg-f2f5f9`,
			},
		},
	})
)

const ButtonContent = styled.div({
	...tw`absolute inset-px z-10 grid place-items-center rounded-xl cursor-pointer`,
	variants: {
		theme: {
			dark: tw`bg-black`,
			light: tw`bg-f2f5f9`,
		},
	},
})

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

const TextContainer = tw.div`flex items-center space-x-4`
const ButtonLabel = tw.span`font-sans text-sm`

type Props = ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & { theme?: 'dark' | 'light' }

const SignInButton: FC<Props> = ({ className, theme = 'light', ...props }) => (
	<MotionButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} theme={theme} {...props}>
		<ButtonContent theme={theme}>
			<TextContainer>
				<WorldcoinIcon tw="h-4 w-4" />
				<ButtonLabel>Sign in with World ID</ButtonLabel>
			</TextContainer>
		</ButtonContent>
		<AnimatedBorder aria-hidden theme={theme} />
	</MotionButton>
)

export default SignInButton
