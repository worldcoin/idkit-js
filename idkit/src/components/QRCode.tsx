import { classNames } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling-new'
import { renderToString } from 'react-dom/server'
import WorldcoinLogomark from './Icons/WorldcoinLogomark'

const logoB64 = window.btoa(renderToString(<WorldcoinLogomark style={{ color: '#6445DD' }} />))

const qrcode = new QRCodeStyling({
	width: 200,
	height: 200,
	type: 'svg',
	image: `data:image/svg+xml;base64,${logoB64}`,
	cornersSquareOptions: {
		type: 'extra-rounded',
	},
	cornersDotOptions: {
		type: 'dot',
	},
	dotsOptions: {
		color: 'currentColor',
		type: 'extra-rounded',
	},
	backgroundOptions: {
		color: 'transparent',
	},
	imageOptions: {
		margin: 4,
		hideBackgroundDots: true,
	},
})

type Props = {
	data: string
	className?: string
}

export const Qrcode = ({ data, className = '' }: Props): JSX.Element => {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!ref.current) return

		qrcode.append(ref.current)
	}, [])

	useEffect(() => {
		qrcode.update({ data })
	}, [data])

	return (
		<div
			ref={ref}
			className={classNames(
				className,
				'relative z-0 flex items-center justify-center rounded border box-border border-white/10 dark:border-black/10 [&_*]:text-black dark:[&_*]:text-white'
			)}
		/>
	)
}
