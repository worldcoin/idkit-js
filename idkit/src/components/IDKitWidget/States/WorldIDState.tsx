import { motion } from 'framer-motion'
import WorldIDQR from '@/components/Icons/WorldIDQR'
import { DevicePhoneMobileIcon } from '@heroicons/react/20/solid'

const WorldIDState = () => {
	return (
		<div className="space-y-6">
			<div className="relative -mt-6 flex items-center justify-center rounded-2xl border py-8">
				<WorldIDQR className="h-80 w-80" />
				<div className="absolute inset-x-0 -bottom-3 flex items-center justify-center">
					<p className="bg-white px-4 text-gray-300">or</p>
				</div>
			</div>
			<div>
				<motion.a
					layoutId="submit-button"
					href="https://worldcoin.org/download"
					target="_blank"
					transition={{ layout: { duration: 0.15 } }}
					className="inline-flex w-full items-center justify-center space-x-2 rounded-2xl border border-transparent bg-gray-200 px-8 py-4 font-medium text-gray-500 shadow-sm transition hover:bg-gray-300/50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed"
				>
					<DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="button-text">
						Download the Worldcoin app
					</motion.span>
				</motion.a>
			</div>
		</div>
	)
}

export default WorldIDState
