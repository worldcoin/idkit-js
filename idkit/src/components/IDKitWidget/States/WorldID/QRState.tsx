import type { FC } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import copy from 'copy-to-clipboard'
import useMedia from '@/hooks/useMedia'
import { classNames } from '@/lib/utils'
import { Qrcode } from '@/components/QRCode'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingIcon from '@/components/Icons/LoadingIcon'
import WorldcoinIcon from '@/components/Icons/WorldcoinIcon'

type Props = {
	qrData: {
		default: string
		mobile: string
	} | null
	showQR: boolean
	setShowQR: (show: boolean | ((state: boolean) => boolean)) => void
}

const QRState: FC<Props> = ({ qrData, showQR, setShowQR }) => {
	const media = useMedia()
	const [copiedLink, setCopiedLink] = useState(false)

	const copyLink = useCallback(() => {
		copy(qrData?.default ?? '')

		setCopiedLink(true)
		setTimeout(() => setCopiedLink(false), 2000)
	}, [qrData])

	return (
		<>
			<AnimatePresence>
				{(media == 'desktop' || showQR) && (
					<div className="border-f1f5f8 dark:border-f1f5f8/10 relative inline-flex items-center justify-center rounded-2xl border p-2">
						<div className="text-29343f dark:text-white">
							{qrData ? (
								<Qrcode data={media == 'desktop' ? qrData.default : qrData.mobile} />
							) : (
								<div className="flex h-[202px] w-[202px] items-center justify-center">
									<LoadingIcon className="h-24 w-24" />
								</div>
							)}
						</div>
					</div>
				)}
			</AnimatePresence>
			<div className="space-y-4">
				<motion.a
					whileTap={{ scale: 0.95 }}
					whileHover={{ scale: 1.05 }}
					transition={{ layout: { duration: 0.15 } }}
					layoutId={media == 'desktop' ? undefined : 'worldid-button'}
					href={qrData?.mobile}
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
						Open Worldcoin App
					</motion.span>
				</motion.a>
				<div className="space-x-2 md:hidden">
					<motion.button className="text-9eafc0 text-sm" onClick={() => setShowQR(state => !state)}>
						{showQR ? 'Hide QR Code' : 'Show QR Code instead'}
					</motion.button>
					{showQR && (
						<>
							<span className="text-9eafc0">&middot;</span>
							<button className="text-sm dark:text-white" onClick={copyLink}>
								{copiedLink ? 'Copied!' : 'Copy QR Code'}
							</button>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default QRState
