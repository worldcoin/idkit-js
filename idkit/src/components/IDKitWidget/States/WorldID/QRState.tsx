import type { FC } from 'react'
import { motion } from 'framer-motion'
import useMedia from '@/hooks/useMedia'
import { classNames } from '@/lib/utils'
import { Qrcode } from '@/components/QRCode'
import WorldIDQR from '@/components/Icons/WorldIDQR'
import DevicePhoneMobileIcon from '@/components/Icons/DevicePhoneMobileIcon'

type Props = {
	qrData: {
		default: string
		mobile: string
	} | null
}

const QRState: FC<Props> = ({ qrData }) => {
	const media = useMedia()

	return (
		<>
			<div className="border-f1f5f8 dark:border-f1f5f8/10 relative inline-flex items-center justify-center rounded-2xl border p-2">
				<div className="text-29343f dark:text-white">
					{qrData ? (
						<Qrcode data={media == 'desktop' ? qrData.default : qrData.mobile} />
					) : (
						<WorldIDQR className="h-80 w-80 animate-pulse opacity-20" />
					)}
				</div>
			</div>
		</>
	)
}

export default QRState
