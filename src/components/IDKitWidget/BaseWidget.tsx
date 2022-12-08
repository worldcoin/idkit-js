import root from 'react-shadow'
import { FC, useMemo } from 'react'
import { IDKITStage } from '@/types'
import builtStyles from '@build/index.css'
import ErrorState from './States/ErrorState'
import * as Toast from '@radix-ui/react-toast'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import * as Dialog from '@radix-ui/react-dialog'
import WorldIDWordmark from '../Icons/WorldIDWordmark'
import EnterPhoneState from './States/EnterPhoneState'
import VerifyCodeState from './States/VerifyCodeState'
import { AnimatePresence, motion } from 'framer-motion'
import QuestionMarkIcon from '../Icons/QuestionMarkIcon'
import useIDKitStore, { IDKitStore } from '@/store/idkit'
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

	const StageContent = useMemo(() => {
		if (0) {
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
		}

		return SuccessState
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
										className="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-lg"
									/>
								</Dialog.Overlay>
								<div className="fixed inset-0 z-10 overflow-y-hidden md:overflow-y-auto">
									<div className="flex min-h-full items-end justify-center md:p-4 text-center sm:items-center">
										<Dialog.Content asChild>
											<motion.div
												layout
												animate={{ opacity: 1, scale: 1 }}
												initial={{ opacity: 0, scale: 0.9 }}
												transition={{ layout: { duration: 0.15 } }}
												exit={{ opacity: 0, transition: { duration: 0.2 } }}
												className={
													'relative w-full z-50 max-w-md rounded-t-3xl md:rounded-b-3xl pt-6 bg-white dark:bg-0d151d shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
												}
											>
												<Toast.Provider>
													<Toast.Viewport className="flex justify-center" />
													<div className="flex items-center justify-between mb-12 mx-6">
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
														className="mb-6 mx-6"
														layout="position"
														transition={{ layout: { duration: 0.15 } }}
													>
														<StageContent />
													</motion.div>
													<div className="bg-gray-100 dark:bg-29343f rounded-b-3xl flex items-center justify-between py-3 px-6">
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
														<a href="#" className="text-sm text-70868f hover:underline">
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