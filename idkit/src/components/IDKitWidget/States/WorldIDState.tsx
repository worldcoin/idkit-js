import { motion } from 'framer-motion'
import { classNames } from '@/lib/utils'
import WorldIDQR from '@/components/Icons/WorldIDQR'
import { DevicePhoneMobileIcon } from '@heroicons/react/20/solid'

const WorldIDState = () => {
	return (
		<div className="space-y-6">
			<div className="border-f1f5f8 dark:border-f1f5f8/10 relative -mt-6 flex items-center justify-center rounded-2xl border py-8">
				<div className="text-29343f dark:text-white">
					<WorldIDQR className="h-80 w-80" />
				</div>
				<div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 items-center justify-center">
					<p className="text-d3dfea dark:bg-0d151d dark:text-596673 bg-white px-4">or</p>
				</div>
			</div>
			<div>
				<motion.a
					layoutId="submit-button"
					href="https://worldcoin.org/download"
					target="_blank"
					transition={{ layout: { duration: 0.15 } }}
					className={classNames(
						'inline-flex w-full justify-center space-x-2 items-center px-8 py-4 border border-transparent font-medium rounded-2xl shadow-sm',
						'text-gray-500 dark:text-70868f bg-gray-200 dark:bg-29343f hover:bg-gray-300/50 dark:hover:bg-29343f/50',
						'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 disabled:cursor-not-allowed transition'
					)}
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
