import root from 'react-shadow'
import { IDKITStage } from '@/types'
import useIDKitStore from '@/store/idkit'
import builtStyles from '@build/index.css'
import ErrorState from './States/ErrorState'
import * as Toast from '@radix-ui/react-toast'
import type { IDKitStore } from '@/store/idkit'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import * as Dialog from '@radix-ui/react-dialog'
import WorldIDWordmark from '../Icons/WorldIDWordmark'
import EnterPhoneState from './States/EnterPhoneState'
import VerifyCodeState from './States/VerifyCodeState'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect, useMemo, useState } from 'react'
import QuestionMarkIcon from '../Icons/QuestionMarkIcon'
import { ArrowLongLeftIcon, XMarkIcon } from '@heroicons/react/20/solid'

const getParams = ({ open, onOpenChange, stage, setStage }: IDKitStore) => ({
	isOpen: open,
	onOpenChange,
	stage,
	setStage,
})

type Props = {
	children?: ({ open }: { open: () => void }) => JSX.Element
}

const IDKitWidget: FC<Props> = ({ children } = {}) => {
	const { isOpen, onOpenChange, stage, setStage } = useIDKitStore(getParams)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => setIsMobile(window.innerWidth < 768), [])

	const StageContent = useMemo(() => {
		switch (stage) {
			case IDKITStage.ENTER_PHONE:
				return EnterPhoneState
			case IDKITStage.WORLD_ID:
				return WorldIDState
			case IDKITStage.ENTER_CODE:
				return VerifyCodeState
			case IDKITStage.SUCCESS:
				return SuccessState
			case IDKITStage.ERROR:
				return ErrorState
			default:
				throw new Error('Invalid IDKit stage')
		}
	}, [stage])

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			{children?.({ open: () => onOpenChange(true) })}
			<Dialog.Portal forceMount>
				<root.div styleSheets={[builtStyles]} mode="open" id="idkit-widget">
					<AnimatePresence>
						{isOpen && (
							<div className="fixed z-10 font-sans" id="modal">
								<Dialog.Overlay asChild>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="fixed inset-0 bg-black/50 backdrop-blur-lg"
									/>
								</Dialog.Overlay>
								<div className="fixed inset-0 z-10 overflow-y-hidden md:overflow-y-auto">
									<div className="flex min-h-full items-end justify-center md:p-4 text-center md:items-center">
										<Dialog.Content asChild>
											<motion.div
												layout
												animate={isMobile ? 'animateMob' : 'animate'}
												initial={isMobile ? 'initMob' : 'init'}
												exit={isMobile ? 'initMob' : 'init'}
												variants={{
													init: { opacity: 0, scale: 0.9 },
													initMob: { translateY: '100%' },
													animate: { opacity: 1, scale: 1 },
													animateMob: { translateY: 0 },
												}}
												transition={{ layout: { duration: 0.15 } }}
												className={
													'relative w-full z-50 md:max-w-md rounded-t-3xl md:rounded-b-3xl pt-6 bg-white dark:bg-0d151d shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
												}
											>
												<Toast.Provider>
													<Toast.Viewport className="flex justify-center" />
													<div className="mx-6 mb-12 flex items-center justify-between">
														{stage == IDKITStage.ENTER_PHONE ? (
															<button className="w-8 h-8 bg-gray-100 dark:bg-d3dfea/15 dark:text-white rounded-full flex items-center justify-center">
																<QuestionMarkIcon className="w-1.5" />
															</button>
														) : [IDKITStage.ENTER_CODE, IDKITStage.WORLD_ID].includes(
																stage
														  ) ? (
															<button
																onClick={() => setStage(IDKITStage.ENTER_PHONE)}
																className="w-8 h-8 bg-gray-100 dark:bg-d3dfea/15 rounded-full flex items-center justify-center"
															>
																<ArrowLongLeftIcon className="w-4" />
															</button>
														) : null}
														<Dialog.Title className="font-medium text-gray-900 dark:text-d3dfea">
															Enable dispatcher
														</Dialog.Title>
														<Dialog.Close className="w-8 h-8 bg-gray-100 dark:bg-d3dfea/15 dark:text-white rounded-full flex items-center justify-center">
															<XMarkIcon className="h-4 w-4" />
														</Dialog.Close>
													</div>
													<motion.div
														className="mx-6 mb-6"
														layout="position"
														transition={{ layout: { duration: 0.15 } }}
													>
														<StageContent />
													</motion.div>
													<div className="bg-gray-100 dark:bg-29343f md:rounded-b-3xl flex items-center justify-between py-3 px-6">
														<p className="text-sm text-70868f flex items-center gap-1">
															<span>Verified with</span>
															<a
																href="https://id.worldcoin.org"
																target="_blank"
																rel="noreferrer"
															>
																<WorldIDWordmark className="h-4 text-black dark:text-white" />
															</a>
														</p>
														<a href="#!" className="text-sm text-70868f hover:underline">
															Privacy Policy
														</a>
													</div>
												</Toast.Provider>
											</motion.div>
										</Dialog.Content>
									</div>
								</div>
							</div>
						)}
					</AnimatePresence>
				</root.div>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default IDKitWidget
