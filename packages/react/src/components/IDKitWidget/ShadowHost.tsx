import type React from 'react'
import ReactDOM from 'react-dom'
import type { ReactNode } from 'react'
import { useRef, useEffect, useState, useCallback } from 'react'

interface ShadowHostProps {
	children: ReactNode
	id: string
	mode?: ShadowRootInit['mode'] // 'open' or 'closed'
	delegatesFocus?: boolean // optional ShadowRootInit
}

/**
 * A self-contained Shadow DOM host that portals its children into shadowRoot.
 */
export const ShadowHost: React.FC<ShadowHostProps> = ({ id, children, mode = 'open', delegatesFocus = false }) => {
	const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null)

	// This ref callback runs exactly once per mounting node.
	const hostRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (node) {
				// Reuse existing shadowRoot if present, else attach a new one
				const root = node.shadowRoot ?? node.attachShadow({ mode, delegatesFocus })
				setShadowRoot(root)
			}
		},
		[mode, delegatesFocus]
	)

	return (
		<div ref={hostRef} id={id}>
			{shadowRoot && ReactDOM.createPortal(children, shadowRoot)}
		</div>
	)
}
