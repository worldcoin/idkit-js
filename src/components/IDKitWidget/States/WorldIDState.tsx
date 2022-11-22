import 'twin.macro'
import { motion } from 'framer-motion'
import WorldIDQR from '@/components/Icons/WorldIDQR'
import { DevicePhoneMobileIcon } from '@heroicons/react/20/solid'

const WorldIDState = () => {
	return (
		<div tw="space-y-6">
			<div tw="-mt-6 relative flex items-center justify-center py-8 border rounded-2xl">
				<WorldIDQR tw="w-80 h-80" />
				<div tw="absolute inset-x-0 -bottom-3 flex items-center justify-center">
					<p tw="bg-white px-4 text-gray-300">or</p>
				</div>
			</div>
			<div>
				<motion.a
					layoutId="submit-button"
					href="https://worldcoin.org/download"
					target="_blank"
					transition={{ layout: { duration: 0.15 } }}
					tw="inline-flex w-full justify-center space-x-2 items-center px-8 py-4 border border-transparent font-medium rounded-2xl shadow-sm text-gray-500 bg-gray-200 hover:bg-gray-300/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 disabled:cursor-not-allowed transition"
				>
					<DevicePhoneMobileIcon tw="w-5 h-5 text-gray-400" />
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="button-text">
						Download the Worldcoin app
					</motion.span>
				</motion.a>
			</div>
		</div>
	)
}

export default WorldIDState
