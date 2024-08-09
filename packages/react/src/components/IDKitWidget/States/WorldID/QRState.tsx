import { __ } from '@/lang'
import type { FC } from 'react'
import copy from 'copy-to-clipboard'
import useMedia from '@/hooks/useMedia'
import { classNames } from '@/lib/utils'
import Qrcode from '@/components/QRCode'
import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'
import QRPlaceholderIcon from '@/components/Icons/QRPlaceholderIcon'
import clsx from 'clsx'

type Props = {
	qrData: string | null
	showQR: boolean
	setShowQR: (show: boolean | ((state: boolean) => boolean)) => void
}

const QRState: FC<Props> = ({ qrData, showQR, setShowQR }) => {
	const media = useMedia()
	const [copiedLink, setCopiedLink] = useState(false)

	const copyLink = useCallback(() => {
		copy(qrData ?? '')

		setCopiedLink(true)
		setTimeout(() => setCopiedLink(false), 2000)
	}, [qrData])

	return (
		<>
			<div className={clsx("md:hidden", {"mb-10 space-y-4": !showQR})}>
				<motion.a
					href={qrData ?? ''}
					whileTap={{ scale: 0.95 }}
					whileHover={{ scale: 1.05 }}
					transition={{ layout: { duration: 0.15 } }}
					layoutId={media == 'desktop' ? undefined : 'worldid-button'}
					className={clsx(
						'flex w-full items-center space-x-2 rounded-2xl border border-transparent p-4 font-medium shadow-sm',
						'bg-0d151d text-white dark:bg-white dark:text-0d151d', {hidden: showQR}
					)}
				>
					<WorldcoinIcon className="size-5" />
					<motion.span
						className="flex-1 text-center"
						transition={{ layout: { duration: 0.15 } }}
						layoutId={media == 'desktop' ? undefined : 'worldid-text'}
					>
						{__('Open Worldcoin App')}
					</motion.span>
				</motion.a>
				<div className={clsx("mb-3", {"space-y-4": !showQR})}>
					<div className={clsx("flex items-center space-x-4 ", {hidden: showQR})}>
						<hr className="flex-1" />
						<span className="text-xs font-medium text-9ba3ae">or</span>
						<hr className="flex-1" />
					</div>
					<motion.button
						className="w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b"
						onClick={() => setShowQR(state => !state)}
					>
						{showQR ? __('Hide QR Code') : __('Display QR Code')}
					</motion.button>
				</div>
			</div>
			{(media == 'desktop' || showQR) && (
				<>
					<AnimatePresence>
						{copiedLink && (
							<motion.div
								className="text-sm text-9eafc0"
								key="copied"
								initial="hidden"
								animate="visible"
								exit="exit"
								variants={{
									hidden: { opacity: 0, height: 0, marginTop: 0, y: 0 },
									visible: {
										opacity: 1,
										height: 'auto',
										marginTop: 8,
										y: -20,
										transition: {
											duration: 0.25,
											opacity: { delay: 0.05, duration: 0.2 },
											ease: 'easeInOut',
										},
									},
									exit: {
										opacity: 0,
										height: 0,
										marginTop: 0,
										y: 0,
										transition: {
											duration: 0.4,
											delay: 0.1,
											opacity: { duration: 0.25, delay: 0 },
											ease: 'easeInOut',
										},
									},
								}}
							>
								<span className="rounded-lg border border-f1f5f8 px-2 py-1 text-sm">
									{__('QR Code copied')}
								</span>
							</motion.div>
						)}
					</AnimatePresence>
					<div className="relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-2 dark:border-f1f5f8/10">
						<div className="text-29343f dark:text-white">
							{qrData ? (
								// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
								<div onClick={copyLink} className="cursor-pointer">
									<Qrcode data={qrData} size={244} />
								</div>
							) : (
								<div className="flex size-[244px] items-center justify-center">
									<QRPlaceholderIcon className="size-[244px] animate-pulse" />
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default QRState
