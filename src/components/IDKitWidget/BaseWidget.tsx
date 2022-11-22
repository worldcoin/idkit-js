import 'twin.macro'
import Button from '../Button'
import { useMemo } from 'react'
import ErrorState from './States/ErrorState'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import * as Dialog from '@radix-ui/react-dialog'
import WorldIDWordmark from '../Icons/WorldIDWordmark'
import EnterPhoneState from './States/EnterPhoneState'
import VerifyCodeState from './States/VerifyCodeState'
import { AnimatePresence, motion } from 'framer-motion'
import QuestionMarkIcon from '../Icons/QuestionMarkIcon'
import useIDKitStore, { IDKITStage, IDKitStore } from '@/store/idkit'
import { ArrowLongLeftIcon, XMarkIcon } from '@heroicons/react/20/solid'

const getParams = ({ open, onOpenChange, stage, setStage }: IDKitStore) => ({
	isOpen: open,
	onOpenChange,
	stage,
	setStage,
})

const IDKitWidget = () => {
	const { isOpen, onOpenChange, stage, setStage } = useIDKitStore(getParams)

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
			<Dialog.Trigger asChild>
				<Button type="button">Open</Button>
			</Dialog.Trigger>
			<AnimatePresence>
				{isOpen && (
					<Dialog.Portal forceMount>
						<div tw="fixed z-10">
							<Dialog.Overlay asChild>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									tw="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-lg"
								/>
							</Dialog.Overlay>
							<div tw="fixed inset-0 z-10 overflow-y-auto">
								<div tw="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
									<Dialog.Content asChild>
										<motion.div
											layout
											animate={{ opacity: 1, scale: 1 }}
											initial={{ opacity: 0, scale: 0.9 }}
											transition={{ layout: { duration: 0.15 } }}
											exit={{ opacity: 0, transition: { duration: 0.2 } }}
											tw={
												'relative z-50 w-[95vw] max-w-md rounded-3xl pt-6 md:w-full bg-white shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
											}
										>
											<div tw="flex items-center justify-between mb-12 mx-6">
												{stage == IDKITStage.ENTER_PHONE ? (
													<button tw="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
														<QuestionMarkIcon tw="w-1.5" />
													</button>
												) : [IDKITStage.ENTER_CODE, IDKITStage.WORLD_ID].includes(stage) ? (
													<button
														onClick={() => setStage(IDKITStage.ENTER_PHONE)}
														tw="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
													>
														<ArrowLongLeftIcon tw="w-4" />
													</button>
												) : null}
												<Dialog.Title tw="font-medium text-gray-900">
													Enable dispatcher
												</Dialog.Title>
												<Dialog.Close tw="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
													<XMarkIcon tw="h-4 w-4" />
												</Dialog.Close>
											</div>
											<motion.div
												tw="mb-6 mx-6"
												layout="position"
												transition={{ layout: { duration: 0.15 } }}
											>
												<StageContent />
											</motion.div>
											<div tw="bg-gray-100 rounded-b-3xl flex items-center justify-between py-3 px-6">
												<p tw="text-sm text-gray-400 flex items-center space-x-1">
													<span>Verified with</span>{' '}
													<a href="https://id.worldcoin.org" target="_blank" rel="noreferrer">
														<WorldIDWordmark tw="h-4 text-black" />
													</a>
												</p>
												<a href="#" tw="text-sm text-gray-400 hover:underline">
													Privacy Policy
												</a>
											</div>
										</motion.div>
									</Dialog.Content>
								</div>
							</div>
						</div>
					</Dialog.Portal>
				)}
			</AnimatePresence>
		</Dialog.Root>
	)
}

export default IDKitWidget
