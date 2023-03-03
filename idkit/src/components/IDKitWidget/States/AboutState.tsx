import { motion } from 'framer-motion'
import { classNames } from '@/lib/utils'
import WorldIDIcon from '@/components/WorldIDIcon'
import LockIcon from '@/components/Icons/LockIcon'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'

const AboutState = () => {
	return (
		<div className="space-y-6">
			<div className="">
				<div className="mb-12 space-y-6">
					<div className="flex items-center justify-center">
						<WorldcoinIcon className="h-8 w-8 text-black dark:text-white" />
					</div>
					<div className="space-y-2">
						<p className="font-sora text-xl font-semibold text-gray-900 dark:text-white">About Worldcoin</p>
						<p className="text-3c424b mx-auto max-w-xs text-center">
							Worldcoin is the largest network of real humans, where everyone has a World ID.
						</p>
					</div>
				</div>

				<div className="space-y-2">
					<div className="bg-f9fafb flex space-x-4 rounded-lg p-6">
						<div className="h-8 w-8 rounded-lg bg-black p-2.5">
							<WorldIDIcon className="h-3 w-3 text-white" />
						</div>
						<div className="space-y-1 text-left">
							<p className="text-0d151d font-medium">For unique humans</p>
							<p className="text-657080 text-sm">
								Anonymously prove you a real human with only one account.
							</p>
						</div>
					</div>
					<div className="bg-f9fafb flex space-x-4 rounded-lg p-6">
						<div className="h-8 w-8 rounded-lg bg-black p-2.5">
							<LockIcon className="h-3 w-3 text-white" />
						</div>
						<div className="space-y-1 text-left">
							<p className="text-0d151d font-medium">Private by design</p>
							<p className="text-657080 text-sm">
								Advanced cryptography to guarantee no one can track you across apps.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutState
