import { motion } from 'framer-motion'
import { classNames } from '@/lib/utils'

const AboutState = () => {
	return (
		<div className="space-y-6">
			<div className="-mt-6">
				<p className="text-center text-xl font-semibold text-gray-900 dark:text-white">
					Proving unique-humanness through biometrics, without intruding privacy.
				</p>
				<p className="text-70868f mt-4 text-center">
					World ID is a protocol that lets you prove a human is doing an action only once without revealing
					any personal data. Stop bots, stop abuse.
				</p>
				<p className="text-70868f mt-3 text-center">
					World ID uses a device called the Orb which takes a picture of a person&apos;s iris to verify they
					are a unique and alive human. The protocol uses Zero-knowledge proofs so no traceable information is
					ever public.
				</p>
			</div>
			<div>
				<motion.a
					layoutId="submit-button"
					href="https://id.worldcoin.org/"
					target="_blank"
					transition={{ layout: { duration: 0.15 } }}
					className={classNames(
						'inline-flex w-full justify-center space-x-2 items-center px-8 py-4 border border-transparent font-medium rounded-2xl shadow-sm',
						'text-gray-500 dark:text-70868f bg-gray-200 dark:bg-29343f hover:bg-gray-300/50 dark:hover:bg-29343f/50',
						'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 disabled:cursor-not-allowed transition'
					)}
				>
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="button-text">
						Learn more
					</motion.span>
				</motion.a>
			</div>
		</div>
	)
}

export default AboutState
