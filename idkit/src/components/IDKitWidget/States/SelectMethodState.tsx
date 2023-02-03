import type { FC } from 'react'
import { IDKITStage } from '@/types'
import { motion } from 'framer-motion'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import { classNames, getCopy } from '@/lib/utils'
import WorldIDIcon from '@/components/WorldIDIcon'
import AboutWorldID from '@/components/AboutWorldID'
import type { VerificationMethods } from '@/types/config'
import DevicePhoneMobileIcon from '@/components/Icons/DevicePhoneMobileIcon'

const getParams = ({ setStage, methods, copy }: IDKitStore) => ({
	copy,
	methods,
	setStage,
})

const SelectMethodState = () => {
	const { copy, setStage, methods } = useIDKitStore(getParams)

	return (
		<div className="-mt-6 space-y-6">
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{getCopy(copy, 'heading')}
				</p>
				<p className="text-70868f mt-3 text-center md:mt-2">{getCopy(copy, 'subheading')}</p>
			</div>
			<div className="space-y-3">
				{methods.map((method, i) => (
					<MethodButton primary={i == 0} key={method} method={method} setStage={setStage} />
				))}
			</div>
			{methods.includes('orb') && (
				<div className="mt-4 flex justify-center">
					<p className="text-70868f text-sm">
						Don&apos;t have your World ID yet?{' '}
						<a
							className="text-4940e0 font-medium"
							target="_blank"
							href="https://worldcoin.org/download"
							rel="noreferrer"
						>
							Download Now
						</a>
					</p>
				</div>
			)}
			<AboutWorldID className="mt-8" />
		</div>
	)
}

const MethodButton: FC<{ primary: boolean; setStage: IDKitStore['setStage']; method: VerificationMethods }> = ({
	method,
	primary,
	setStage,
}) => (
	<motion.button
		whileTap={{ scale: 0.95 }}
		whileHover={{ scale: 1.05 }}
		transition={{ layout: { duration: 0.15 } }}
		layoutId={method == 'orb' ? 'worldid-button' : 'phone-button'}
		onClick={() => setStage(method == 'orb' ? IDKITStage.WORLD_ID : IDKITStage.ENTER_PHONE)}
		className={classNames(
			'flex w-full space-x-2 items-center px-4 py-4 border border-transparent font-medium rounded-2xl shadow-sm',
			primary
				? 'bg-0d151d dark:bg-white text-white dark:text-0d151d'
				: 'bg-d3dfea/30 dark:bg-29343f text-0d151d dark:text-white'
		)}
	>
		{method == 'orb' ? (
			<WorldIDIcon className="h-5 w-5 text-gray-400" />
		) : (
			<DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
		)}
		<motion.span
			className="flex-1 text-center"
			transition={{ layout: { duration: 0.15 } }}
			layoutId={method == 'orb' ? 'worldid-text' : 'phone-text'}
		>
			{method == 'orb' ? 'Verify with World ID' : 'Verify with Phone Number'}
		</motion.span>
	</motion.button>
)

export default SelectMethodState
