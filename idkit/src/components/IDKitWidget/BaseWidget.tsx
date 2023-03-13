import type { FC } from 'react'
import root from 'react-shadow'
import { IDKITStage } from '@/types'
import Styles from '@build/index.css'
import useMedia from '@/hooks/useMedia'
import { classNames } from '@/lib/utils'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import XMarkIcon from '../Icons/XMarkIcon'
import ErrorState from './States/ErrorState'
import { ConfigSource } from '@/types/config'
import LoadingIcon from '../Icons/LoadingIcon'
import * as Toast from '@radix-ui/react-toast'
import type { IDKitStore } from '@/store/idkit'
import PrivacyState from './States/PrivacyState'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import * as Dialog from '@radix-ui/react-dialog'
import type { WidgetProps } from '@/types/config'
import { Fragment, useEffect, useMemo } from 'react'
import WorldIDWordmark from '../Icons/WorldIDWordmark'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowLongLeftIcon from '../Icons/ArrowLongLeftIcon'
import HostAppVerificationState from './States/HostAppVerificationState'

const getParams = ({
	copy,
	open,
	processing,
	onOpenChange,
	stage,
	setStage,
	theme,
	computed,
	setOptions,
}: IDKitStore) => ({
	copy,
	stage,
	theme,
	setStage,
	processing,
	setOptions,
	isOpen: open,
	onOpenChange,
	canGoBack: computed.canGoBack(stage),
})

const IDKitWidget: FC<WidgetProps> = ({
	children,
	app_id,
	action,
	action_description,
	theme,
	signal,
	walletConnectProjectId,
	handleVerify,
	onSuccess,
	autoClose,
	copy,
	credential_types,
}) => {
	const {
		isOpen,
		onOpenChange,
		processing,
		stage,
		setStage,
		canGoBack,
		setOptions,
		theme: _theme,
	} = useIDKitStore(getParams, shallow)
	const media = useMedia()

	useEffect(() => {
		setOptions(
			{
				app_id,
				action,
				action_description,
				signal,
				walletConnectProjectId,
				onSuccess,
				handleVerify,
				autoClose,
				copy,
				theme,
				credential_types,
			},
			ConfigSource.PROPS
		)
	}, [
		copy,
		app_id,
		action,
		theme,
		signal,
		autoClose,
		onSuccess,
		setOptions,
		handleVerify,
		action_description,
		walletConnectProjectId,
		credential_types,
	])

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
				throw new Error('Invalid IDKitStage.')
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
								<div
									id="modal"
									className={classNames(_theme == 'dark' && 'dark', 'fixed z-10 font-sans')}
								>
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
														'dark:bg-0d151d relative z-50 w-full rounded-t-2xl bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 md:max-w-md md:rounded-b-2xl'
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

															<Dialog.Close className="dark:bg-d3dfea/15 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:text-white">
																<XMarkIcon className="h-5 w-5" />
															</Dialog.Close>
														</div>
														<div className="relative">
															<motion.div
																className="mx-6 mb-6"
																layout="position"
																animate={{
																	visibility: processing ? 'hidden' : 'visible',
																}}
																transition={{ layout: { duration: 0.15 } }}
															>
																<StageContent />
															</motion.div>
															<AnimatePresence>
																{processing && (
																	<motion.div
																		className="absolute inset-0 flex items-center justify-center pb-10"
																		initial={{ opacity: 0 }}
																		animate={{ opacity: 1 }}
																		exit={{ opacity: 0 }}
																	>
																		<LoadingIcon className="h-24 w-24" />
																	</motion.div>
																)}
															</AnimatePresence>
														</div>
														<div className="flex items-center justify-between py-3 px-5 md:rounded-b-2xl">
															<p className="text-9eafc0 flex items-center gap-1 text-sm">
																<span>Verified with</span>
																<a
																	href="https://worldcoin.org/world-id"
																	target="_blank"
																	rel="noreferrer"
																>
																	<WorldIDWordmark className="text-0d151d h-4 dark:text-white" />
																</a>
															</p>
															{stage != IDKITStage.PRIVACY ? (
																<button
																	onClick={() => setStage(IDKITStage.PRIVACY)}
																	className="text-9eafc0 text-sm hover:underline"
																>
																	Privacy
																</button>
															) : (
																<a
																	target="_blank"
																	href="https://docs.worldcoin.org/privacy"
																	className="text-9eafc0 dark:text-9eafc0 text-sm hover:underline"
																	rel="noreferrer"
																>
																	Learn More &rarr;
																</a>
															)}
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
