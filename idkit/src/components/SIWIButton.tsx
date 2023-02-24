import IDKitIcon from './Icons/IDKitIcon'
import type { ButtonHTMLAttributes, FC } from 'react'

const SIWIButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => (
	<button className="flex items-center space-x-4 rounded-2xl bg-black px-14 py-5 text-white" {...props}>
		<IDKitIcon className="h-6 w-6" />
		<span className="font-sans text-base font-medium">Sign in with World ID</span>
	</button>
)

export default SIWIButton
