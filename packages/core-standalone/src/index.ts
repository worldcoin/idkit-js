import * as idkit from '@worldcoin/idkit-core'

if (typeof window !== 'undefined') {
	window.IDKitCore = idkit
}

declare global {
	interface Window {
		IDKitCore: typeof idkit
	}
}

export default idkit
