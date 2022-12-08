import { Config } from './types/Config'
import useIDKitStore from './store/idkit'
import IDKitWidget from './components/IDKitWidget'
import { createRoot, Root } from 'react-dom/client'

let root: Root
let isInitialized = false

/**
 * Initializes IDKitWidget, should only be called once per app. Note that nothing will be shown until you call `open()`
 * @param config The IDKit configuration object
 */
export const init = (config: Config): void => {
	if (isInitialized) throw new Error('IDKit is already initialized')
	if (!config?.actionId) throw new Error('You must provide your Action ID')

	useIDKitStore.setState({ actionId: config.actionId })

	const startApp = () => {
		try {
			if (!isInitialized) {
				const node = document.createElement('div')
				document.body.appendChild(node)

				root = createRoot(node)
				root.render(<IDKitWidget />)

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

	root.unmount()
	isInitialized = false
}