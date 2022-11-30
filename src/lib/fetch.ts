'use client'

type Fetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

declare global {
	var cleanFetch: Fetch
}

const getCleanFetch = () => {
	const iframe = document.createElement('iframe')
	document.body.appendChild(iframe)
	const cleanFetch = iframe.contentWindow!.fetch
	document.body.removeChild(iframe)
	return cleanFetch
}

let cleanFetch: Fetch

if (!global.cleanFetch) global.cleanFetch = getCleanFetch()
cleanFetch = global.cleanFetch

export default cleanFetch
