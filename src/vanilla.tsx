import useIDKitStore from './store/idkit'
import { createRoot } from 'react-dom/client'
import IDKitWidget from './components/IDKitWidget'

let isInitialized = false

/**
 * Initializes IDKitWidget, will render the IDKitWidget box on the provided element. The box will be
 * disabled until `.activate()` is called.
 * @param elementInput ID of HTML element or DOM node to mount IDKitWidget on
 */
export const init = (): void => {
	const startApp = () => {
		try {
			if (!isInitialized) {
				const node = document.createElement('div')
				node.id = 'idkit-widget'
				document.body.appendChild(node)

				createRoot(node).render(<IDKitWidget />)
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

export const open = () => {
	if (!isInitialized) throw new Error('IDKitWidget is not initialized')

	useIDKitStore.setState({ open: true })
}

/**
 * Reset internal state. Useful for unit-testing
 */
export const reset = () => {
	console.warn('Advanced method intended for internal use! Avoid calling this method directly.')
	isInitialized = false
}
