'use client'

type Fetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

declare global {
	// eslint-disable-next-line no-var
	var cleanFetch: Fetch
}

/**
 * Uses `fetch` from a clean iFrame to prevent tampering with the global fetch object that may leak user data.
 * @returns
 */
const getCleanFetch = () => {
	const iframe = document.createElement('iframe')
	document.body.appendChild(iframe)
	const cleanFetch = iframe.contentWindow!.fetch
	document.body.removeChild(iframe)
	return cleanFetch
}

let cleanFetch: Fetch

if (!global.cleanFetch) global.cleanFetch = getCleanFetch()
// eslint-disable-next-line prefer-const
cleanFetch = global.cleanFetch

export default cleanFetch
