import { createRoot } from 'react-dom/client'
import { IDKitWidget } from './components/IDKitWidget'

const VanillaIDKitWidget = (): JSX.Element => <IDKitWidget />
let isInitialized = false

/**
 * Initializes IDKitWidget, will render the IDKitWidget box on the provided element. The box will be
 * disabled until `.activate()` is called.
 * @param elementInput ID of HTML element or DOM node to mount IDKitWidget on
 */
export const init = (elementInput: DocumentFragment | Element | string): void => {
	const mountNode = typeof elementInput === 'string' ? document.getElementById(elementInput) : elementInput

	const startApp = () => {
		try {
			if (!isInitialized) {
				const root = createRoot(mountNode as Element)
				root.render(<VanillaIDKitWidget />)
				isInitialized = true
			}
		} catch (error) {
			console.error('Error while rendering Widget', error)
		}
	}

	if (/complete|interactive|loaded/.test(document.readyState)) {
		// In case the document has finished parsing, document's readyState will
		// Be one of "complete", "interactive" or (non-standard) "loaded".
		startApp()
	} else {
		// The document is not ready yet, so wait for the DOMContentLoaded event
		document.addEventListener('DOMContentLoaded', startApp, false)
	}
}

/**
 * Reset internal state. Useful for unit-testing
 */
export const reset = () => {
	console.warn('Advanced method intended for internal use! Avoid calling this method directly.')
	isInitialized = false
}
