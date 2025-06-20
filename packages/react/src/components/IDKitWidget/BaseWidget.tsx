import { __ } from '@/lang'
import type { FC } from 'react'
import { IDKITStage } from '@/types'
import useMedia from '@/hooks/useMedia'
import { createPortal } from 'react-dom'
import Styles from '@/components/Styles'
import { ShadowHost } from './ShadowHost'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import XMarkIcon from '../Icons/XMarkIcon'
import ErrorState from './States/ErrorState'
import { ConfigSource } from '@/types/config'
import * as Toast from '@radix-ui/react-toast'
import type { IDKitStore } from '@/store/idkit'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import * as Dialog from '@radix-ui/react-dialog'
import type { WidgetProps } from '@/types/config'
import { Fragment, useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HostAppVerificationState from './States/HostAppVerificationState'

const getParams = ({ open, processing, onOpenChange, stage, setStage, setOptions }: IDKitStore) => ({
	stage,
	setStage,
	processing,
	setOptions,
	isOpen: open,
	onOpenChange,
})

const IDKitWidget: FC<WidgetProps> = ({
	children,
	show_modal = true,
	container_id,
	disable_default_modal_behavior = false,
	...config
}) => {
	const media = useMedia()

	const { isOpen, onOpenChange, stage, setOptions } = useIDKitStore(getParams, shallow)

	useEffect(() => {
		if (config.action === '') {
			throw new Error(__('Action cannot be an empty string.'))
		}
		setOptions(config, ConfigSource.PROPS)
	}, [config, setOptions])

	const StageContent = useMemo(() => {
		switch (stage) {
			case IDKITStage.WORLD_ID:
				return <WorldIDState show_modal={show_modal} />
			case IDKITStage.SUCCESS:
				return <SuccessState />
			case IDKITStage.ERROR:
				return <ErrorState />
			case IDKITStage.HOST_APP_VERIFICATION:
				return <HostAppVerificationState />
			default:
				throw new Error(__('Invalid IDKitStage :stage.', { stage }))
		}
	}, [stage, show_modal])

	const widgetContent = (
		<ShadowHost mode="open" id="idkit-widget">
			<Styles />
			<Toast.Provider>
				<Toast.Viewport className="flex justify-center" />
				<div
					id="widget-content-inline"
					className="relative flex flex-col bg-white p-4 focus:outline-none dark:bg-0d151d"
				>
					{StageContent}
				</div>
			</Toast.Provider>
		</ShadowHost>
	)

	if (!show_modal && container_id) {
		const containerElement = document.getElementById(container_id)
		if (containerElement) {
			return createPortal(widgetContent, containerElement)
		}
		console.warn(`Container element with id "${container_id}" not found. Rendering widget inline.`)
	}

	const avoidDefaultDomBehavior = (e: Event) => {
		if (disable_default_modal_behavior) {
			e.preventDefault()
		}
	}

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			{children?.({ open: () => onOpenChange(true) })}
			<Dialog.Portal forceMount>
				<Fragment>
					<AnimatePresence>
						{isOpen && (
							<ShadowHost mode="open" id="idkit-widget">
								<Styles />
								<div id="modal" className="fixed z-[9999] font-sans">
									<Dialog.Overlay asChild>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											className="fixed inset-0 bg-black/50 backdrop-blur-lg"
										/>
									</Dialog.Overlay>
									<div className="fixed inset-0 z-[9999] overflow-y-hidden md:overflow-y-auto">
										<div className="flex min-h-full items-end justify-center text-center md:items-center md:p-4">
											<Dialog.Title />
											<Dialog.Content
												asChild
												onPointerDownOutside={avoidDefaultDomBehavior}
												onInteractOutside={avoidDefaultDomBehavior}
											>
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
														'relative z-50 flex min-h-screen w-full flex-col bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 dark:bg-0d151d md:min-h-[35rem] md:max-w-md md:rounded-2xl'
													}
												>
													<Toast.Provider>
														<Toast.Viewport className="flex justify-center" />
														<div className="mx-6 mb-12 flex items-center justify-between">
															<Dialog.Close className="flex size-11 items-center justify-center rounded-full text-black dark:text-white">
																<XMarkIcon className="size-5" />
															</Dialog.Close>
														</div>
														<div className="relative mx-6 mb-6 flex flex-1 flex-col items-center justify-center">
															{StageContent}
														</div>
														<div className="flex items-center justify-center border-t border-f5f5f7 p-7 md:rounded-b-2xl">
															<a
																href="https://developer.worldcoin.org/privacy-statement"
																target="_blank"
																rel="noreferrer"
																className="text-sm text-657080 hover:underline"
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
							</ShadowHost>
						)}
					</AnimatePresence>
				</Fragment>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default IDKitWidget
