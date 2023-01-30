import type { FC } from 'react'
import { motion } from 'framer-motion'
import useMedia from '@/hooks/useMedia'
import { classNames } from '@/lib/utils'
import { Qrcode } from '@/components/QRCode'
import WorldIDQR from '@/components/Icons/WorldIDQR'
import LoadingIcon from '@/components/Icons/LoadingIcon'
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
						<div className="flex h-[202px] w-[202px] items-center justify-center">
							<LoadingIcon className="h-24 w-24" />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default QRState
