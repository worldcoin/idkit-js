/**
 * Build data for QR Code
 */
export function buildQRData(uri: string, returnUrl?: string): string {
	const result = new window.URL('https://worldcoin.org/verify')

	// Safari does not support lookbehind: https://stackoverflow.com/q/51568821
	const topicRegex = /(?:wc:)(.*?)(?=@)/
	const versionRegex = /(?:@)(.*?)(?=(\?|$))/
	const relayRegex = /(?:relay-protocol=)(.*?)(?=(&|$))/
	const keyRegex = /(?:symKey=)(.*?)(?=(&|$))/

	const topic = uri.match(topicRegex)
	const version = uri.match(versionRegex)
	const relay = uri.match(relayRegex)
	const key = uri.match(keyRegex)

	if (topic) result.searchParams.append('t', topic[0])
	if (version) result.searchParams.append('v', version[0])
	if (relay) result.searchParams.append('p', relay[0])
	if (key) result.searchParams.append('k', key[0])

	// returnUrl optionally instructs the WLD app how to return to the website after the verification is complete (intended for mobile only).
	if (returnUrl) result.searchParams.append('r', returnUrl)

	console.log(`WC URI: ${uri}`) // DEBUG
	console.log(`WLD URL: ${result.toString()}`) // DEBUG

	return result.toString()
}
