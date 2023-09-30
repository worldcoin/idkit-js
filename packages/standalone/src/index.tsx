import { createRoot, type Root } from 'react-dom/client'
import { IDKitWidget, Config } from '@worldcoin/idkit-react'
import { __, useIDKitStore, ConfigSource } from '@worldcoin/idkit-react/src/internal'

let root: Root
let isInitialized = false

/**
 * Initializes IDKitWidget, should only be called once per app. Note that nothing will be shown until you call `open()`
 * @param config The IDKit configuration object
 */
export const init = (config: Config): void => {
	if (isInitialized) throw new Error(__('IDKit is already initialized'))
	if (!config.app_id) throw new Error(__('You must provide your App ID & Action'))

	const startApp = () => {
		try {
			if (!isInitialized) {
				const node = document.createElement('div')
				document.body.appendChild(node)

				root = createRoot(node)
				root.render(<IDKitWidget {...config} />)

				isInitialized = true
			}
		} catch (error) {
			console.error(__('Error while rendering IDKit'), error)
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

export const update = (config: Config): void => {
	if (!isInitialized) throw new Error(__('IDKit is not initialized'))

	useIDKitStore.getState().setOptions(config, ConfigSource.PROPS)
}

export const open = () => {
	return new Promise((resolve, reject) => {
		if (!isInitialized) return reject(__('IDKitWidget is not initialized'))
		useIDKitStore.getState().addSuccessCallback(resolve, ConfigSource.MANUAL)
		useIDKitStore.setState({ open: true })
	})
}

/**
 * Reset internal state. Useful for unit-testing
 */
export const reset = () => {
	console.warn(__('Advanced method intended for internal use! Avoid calling this method directly.'))

	root.unmount()
	isInitialized = false
	useIDKitStore.destroy()
}
