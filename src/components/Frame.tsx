import { createPortal } from 'react-dom'
import builtStyles from '@build/index.css'
import { FC, HTMLAttributes, PropsWithChildren, useLayoutEffect, useRef } from 'react'

type Props = PropsWithChildren<HTMLAttributes<HTMLIFrameElement>>

const Frame: FC<Props> = ({ children, ...props }) => {
	const frameRef = useRef<HTMLIFrameElement>(null)
	const frameHead = frameRef.current?.contentWindow?.document?.head
	const container = frameRef.current?.contentWindow?.document?.body

	useLayoutEffect(() => {
		requestAnimationFrame(() => {
			frameRef.current?.removeAttribute('srcdoc')
		})
	}, [])

	return (
		<iframe sandbox="allow-scripts allow-same-origin" src="about:blank" ref={frameRef} {...props}>
			{frameHead && createPortal(<style>{builtStyles}</style>, frameHead)}
			{container && createPortal(children, container)}
		</iframe>
	)
}

export default Frame
