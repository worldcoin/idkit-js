import Button from '../Button'
import { useMemo } from 'react'
import { classNames } from '@/lib/utils'
import * as Dialog from '@radix-ui/react-dialog'
import { XMarkIcon } from '@heroicons/react/20/solid'
import WorldIDWordmark from '../Icons/WorldIDWordmark'
import EnterPhoneState from './States/EnterPhoneState'
import { AnimatePresence, motion } from 'framer-motion'
import QuestionMarkIcon from '../Icons/QuestionMarkIcon'
import useIDKitStore, { IDKITStage, IDKitStore } from '@/store/idkit'

const getParams = ({ open, setOpen, stage }: IDKitStore) => ({ isOpen: open, onOpenChange: setOpen, stage })

const IDKitWidget = () => {
	const { isOpen, onOpenChange, stage } = useIDKitStore(getParams)

	const StageContent = useMemo(() => {
		switch (stage) {
			case IDKITStage.ENTER_PHONE:
				return EnterPhoneState
			default:
				throw new Error('Invalid IDKit stage')
		}
	}, [stage])

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Trigger asChild>
				<Button type="button">Open</Button>
			</Dialog.Trigger>
			<AnimatePresence>
				{isOpen && (
					<Dialog.Portal forceMount>
						<Dialog.Overlay asChild>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 z-20 bg-black/50 backdrop-filter backdrop-blur-lg"
							/>
						</Dialog.Overlay>
						<Dialog.Content asChild>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.2 } }}
								style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
								className={classNames(
									'fixed z-50',
									'w-[95vw] max-w-md rounded-3xl pt-6 md:w-full',
									'bg-white shadow',
									'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
								)}
							>
								<div className="flex items-center justify-between mb-12 mx-6">
									<button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
										<QuestionMarkIcon className="w-1.5" />
									</button>
									<Dialog.Title className="font-medium text-gray-900">Enable dispatcher</Dialog.Title>
									<Dialog.Close className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
										<XMarkIcon className="h-4 w-4" />
									</Dialog.Close>
								</div>
								<div className="mb-12 mx-6">
									<StageContent />
								</div>
								<div className="bg-gray-100 rounded-b-3xl flex items-center justify-between py-3 px-6">
									<p className="text-sm text-gray-400 flex items-center space-x-1">
										<span>Verified with</span>{' '}
										<a href="https://id.worldcoin.org" target="_blank" rel="noreferrer">
											<WorldIDWordmark className="h-4 text-black" />
										</a>
									</p>
									<a href="#" className="text-sm text-gray-400 hover:underline">
										Privacy Policy
									</a>
								</div>
							</motion.div>
						</Dialog.Content>
					</Dialog.Portal>
				)}
			</AnimatePresence>
		</Dialog.Root>
	)
}

export default IDKitWidget
