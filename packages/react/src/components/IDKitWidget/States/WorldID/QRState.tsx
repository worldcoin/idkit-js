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
								<div className="flex h-[244px] w-[244px] items-center justify-center">
									<QRPlaceholderIcon className="h-[244px] w-[244px] animate-pulse" />
								</div>
							)}
						</div>
					</div>
				</>
			)}
			<div className="space-y-4">
				<motion.a
					href={qrData ?? ''}
					whileTap={{ scale: 0.95 }}
					whileHover={{ scale: 1.05 }}
					transition={{ layout: { duration: 0.15 } }}
					layoutId={media == 'desktop' ? undefined : 'worldid-button'}
					className={classNames(
						'flex w-full space-x-2 items-center px-4 py-4 border border-transparent font-medium rounded-2xl shadow-sm',
						'bg-0d151d dark:bg-white text-white dark:text-0d151d md:hidden'
					)}
				>
					<WorldcoinIcon className="h-5 w-5" />
					<motion.span
						className="flex-1 text-center"
						transition={{ layout: { duration: 0.15 } }}
						layoutId={media == 'desktop' ? undefined : 'worldid-text'}
					>
						{__('Open Worldcoin App')}
					</motion.span>
				</motion.a>
				<div className="space-x-2 md:hidden">
					<motion.button className="text-sm text-9eafc0" onClick={() => setShowQR(state => !state)}>
						{showQR ? __('Hide QR Code') : __('Show QR Code instead')}
					</motion.button>
					{showQR && (
						<>
							<span className="text-9eafc0">&middot;</span>
							<button className="text-sm dark:text-white" onClick={copyLink}>
								{copiedLink ? __('Copied!') : __('Copy QR Code')}
							</button>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default QRState
