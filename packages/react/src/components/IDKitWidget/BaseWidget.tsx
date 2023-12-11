import { __ } from '@/lang'
import type { FC } from 'react'
import root from 'react-shadow'
import { IDKITStage } from '@/types'
import useMedia from '@/hooks/useMedia'
import { classNames } from '@/lib/utils'
import Styles from '@/components/Styles'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import XMarkIcon from '../Icons/XMarkIcon'
import ErrorState from './States/ErrorState'
import { ConfigSource } from '@/types/config'
import * as Toast from '@radix-ui/react-toast'
import type { IDKitStore } from '@/store/idkit'
import PrivacyState from './States/PrivacyState'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import * as Dialog from '@radix-ui/react-dialog'
import type { WidgetProps } from '@/types/config'
import WorldcoinIcon from '../Icons/WorldcoinIcon'
import { Fragment, useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowLongLeftIcon from '../Icons/ArrowLongLeftIcon'
import HostAppVerificationState from './States/HostAppVerificationState'

const getParams = ({ open, processing, onOpenChange, stage, setStage, computed, setOptions }: IDKitStore) => ({
	stage,
	setStage,
	processing,
	setOptions,
	isOpen: open,
	onOpenChange,
	canGoBack: computed.canGoBack(stage),
})

const IDKitWidget: FC<WidgetProps> = ({ children, ...config }) => {
	const media = useMedia()

	const { isOpen, onOpenChange, stage, setStage, canGoBack, setOptions } = useIDKitStore(getParams, shallow)

	useEffect(() => {
		setOptions(config, ConfigSource.PROPS)
	}, [config, setOptions])

	const StageContent = useMemo(() => {
		switch (stage) {
			case IDKITStage.WORLD_ID:
				return WorldIDState
			case IDKITStage.SUCCESS:
				return SuccessState
			case IDKITStage.ERROR:
				return ErrorState
			case IDKITStage.PRIVACY:
				return PrivacyState
			case IDKITStage.HOST_APP_VERIFICATION:
				return HostAppVerificationState
			default:
				throw new Error(__('Invalid IDKitStage :stage.', { stage }))
		}
	}, [stage])

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			{children?.({ open: () => onOpenChange(true) })}
			<Dialog.Portal forceMount>
				<Fragment>
					<AnimatePresence>
						{isOpen && (
							<root.div mode="open" id="idkit-widget">
								<Styles />
								<div id="modal" className="fixed z-10 font-sans">
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
													layout={media == 'mobile' ? 'position' : true}
													exit={media == 'mobile' ? 'initMob' : 'init'}
													initial={media == 'mobile' ? 'initMob' : 'init'}
													animate={media == 'mobile' ? 'animateMob' : 'animate'}
													variants={{
														init: { opacity: 0, scale: 0.9 },
														initMob: { translateY: '100%' },
														animate: { opacity: 1, scale: 1 },
														animateMob: { translateY: 0 },
													}}
													transition={{ layout: { duration: 0.15 } }}
													className={
														'relative z-50 flex min-h-[35rem] w-full flex-col rounded-t-2xl bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 dark:bg-0d151d md:max-w-md md:rounded-b-2xl'
													}
												>
													<Toast.Provider>
														<Toast.Viewport className="flex justify-center" />
														<div className="mx-6 mb-12 flex items-center justify-between">
															<button
																onClick={() => setStage(IDKITStage.WORLD_ID)}
																disabled={!canGoBack}
																className={classNames(
																	!canGoBack && 'invisible pointer-events-none',
																	'dark:bg-d3dfea/15 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:text-white'
																)}
															>
																<ArrowLongLeftIcon className="w-4" />
															</button>

															<Dialog.Close className="flex items-center justify-center rounded-full dark:text-white">
																<XMarkIcon className="h-5 w-5" />
															</Dialog.Close>
														</div>
														<div className="relative mx-6 mb-6 flex flex-1 flex-col items-center justify-center">
															<StageContent />
														</div>
														<div className="flex items-center justify-between border-t border-f5f5f7 p-7 md:rounded-b-2xl">
															<a
																href="https://worldcoin.org/world-id"
																target="_blank"
																rel="noreferrer"
																className="flex items-center gap-1 text-sm text-9eafc0"
															>
																<WorldcoinIcon className="w-4 text-9eafc0 dark:text-white" />
																<span>{__('Powered by Worldcoin')}</span>
															</a>

															<a
																href="https://developer.worldcoin.org/privacy-statement"
																target="_blank"
																rel="noreferrer"
																className="text-sm text-9eafc0 hover:underline"
															>
																{__('Terms & Privacy')}
															</a>
														</div>
													</Toast.Provider>
												</motion.div>
											</Dialog.Content>
										</div>
									</div>
								</div>
							</root.div>
						)}
					</AnimatePresence>
				</Fragment>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default IDKitWidget
