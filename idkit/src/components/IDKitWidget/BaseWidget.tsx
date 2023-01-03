import type { FC } from 'react'
import root from 'react-shadow'
import { IDKITStage } from '@/types'
import Styles from '@build/index.css'
import useIDKitStore from '@/store/idkit'
import ErrorState from './States/ErrorState'
import AboutState from './States/AboutState'
import { ConfigSource } from '@/types/config'
import { DEFAULT_COPY } from '@/types/config'
import LoadingIcon from '../Icons/LoadingIcon'
import * as Toast from '@radix-ui/react-toast'
import type { IDKitStore } from '@/store/idkit'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import PrivacyState from './States/PrivacyState'
import * as Dialog from '@radix-ui/react-dialog'
import type { WidgetProps } from '@/types/config'
import { useEffect, useMemo, useState } from 'react'
import WorldIDWordmark from '../Icons/WorldIDWordmark'
import EnterPhoneState from './States/EnterPhoneState'
import VerifyCodeState from './States/VerifyCodeState'
import { AnimatePresence, motion } from 'framer-motion'
import QuestionMarkIcon from '../Icons/QuestionMarkIcon'
import { ArrowLongLeftIcon, XMarkIcon } from '@heroicons/react/20/solid'
import HostAppVerificationState from './States/HostAppVerificationState'

const getParams = ({ copy, open, processing, onOpenChange, stage, setStage, setOptions }: IDKitStore) => ({
	copy,
	stage,
	setStage,
	processing,
	setOptions,
	isOpen: open,
	onOpenChange,
})

const IDKitWidget: FC<WidgetProps> = ({ children, actionId, signal, onVerification, autoClose, copy }) => {
	const { isOpen, onOpenChange, processing, stage, setStage, setOptions, copy: _copy } = useIDKitStore(getParams)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		setOptions({ actionId, signal, onVerification, autoClose, copy }, ConfigSource.PROPS)
	}, [actionId, signal, onVerification, autoClose, copy, setOptions])

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
			case IDKITStage.ABOUT:
				return AboutState
			case IDKITStage.PRIVACY:
				return PrivacyState
			case IDKITStage.HOST_APP_VERIFICATION:
				return HostAppVerificationState
			default:
				throw new Error('Invalid IDKitStage.')
		}
	}, [stage])

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			{children?.({ open: () => onOpenChange(true) })}
			<Dialog.Portal forceMount>
				<root.div mode="open" id="idkit-widget">
					<Styles />
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
									<div className="flex min-h-full items-end justify-center text-center md:items-center md:p-4">
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
													'dark:bg-0d151d relative z-50 w-full rounded-t-3xl bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 md:max-w-md md:rounded-b-3xl'
												}
											>
												<Toast.Provider>
													<Toast.Viewport className="flex justify-center" />
													<div className="mx-6 mb-12 flex items-center justify-between">
														{stage == IDKITStage.ENTER_PHONE ? (
															<button
																onClick={() => setStage(IDKITStage.ABOUT)}
																className="dark:bg-d3dfea/15 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:text-white"
															>
																<QuestionMarkIcon className="w-1.5" />
															</button>
														) : [
																IDKITStage.ENTER_CODE,
																IDKITStage.WORLD_ID,
																IDKITStage.PRIVACY,
																IDKITStage.ABOUT,
														  ].includes(stage) ? (
															<button
																onClick={() => setStage(IDKITStage.ENTER_PHONE)}
																className="dark:bg-d3dfea/15 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:text-white"
															>
																<ArrowLongLeftIcon className="w-4" />
															</button>
														) : null}
														<Dialog.Title className="dark:text-d3dfea font-medium text-gray-900">
															{stage != IDKITStage.ABOUT &&
																(_copy?.title || DEFAULT_COPY.title)}
														</Dialog.Title>
														<Dialog.Close className="dark:bg-d3dfea/15 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:text-white">
															<XMarkIcon className="h-4 w-4" />
														</Dialog.Close>
													</div>
													<div className="relative">
														<motion.div
															className="mx-6 mb-6"
															layout="position"
															animate={{ visibility: processing ? 'hidden' : 'visible' }}
															transition={{ layout: { duration: 0.15 } }}
														>
															<StageContent />
														</motion.div>
														<AnimatePresence>
															{processing && (
																<motion.div
																	className="absolute inset-0 flex items-center justify-center"
																	initial={{ opacity: 0 }}
																	animate={{ opacity: 1 }}
																	exit={{ opacity: 0 }}
																>
																	<LoadingIcon className="h-24 w-24" />
																</motion.div>
															)}
														</AnimatePresence>
													</div>
													<div className="dark:bg-29343f flex items-center justify-between bg-gray-100 py-3 px-6 md:rounded-b-3xl">
														<p className="text-70868f flex items-center gap-1 text-sm">
															<span>Verified with</span>
															<a
																href="https://id.worldcoin.org"
																target="_blank"
																rel="noreferrer"
															>
																<WorldIDWordmark className="h-4 text-black dark:text-white" />
															</a>
														</p>
														<button
															onClick={() => setStage(IDKITStage.PRIVACY)}
															className="text-70868f text-sm hover:underline"
														>
															Privacy Policy
														</button>
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
