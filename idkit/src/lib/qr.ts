/**
 * Build data for QR Code
 */
export function buildQRData(uri: string, returnUrl?: string): string {
	const result = new window.URL('https://worldcoin.org/verify')
	result.searchParams.append('w', uri)

	// returnUrl optionally instructs the WLD app how to return to the website after the verification is complete (intended for mobile only).
	if (returnUrl) result.searchParams.append('r', returnUrl)

	console.log(`WC URI: ${uri}`) // DEBUG
	console.log(`WLD URL: ${result.toString()}`) // DEBUG

	return result.toString()
}
