export type ValidationResponse = { valid: true } | { valid: false; errors: string[] }

export function validate_bridge_url(bridge_url: string, is_staging?: boolean): ValidationResponse {
	try {
		new URL(bridge_url)
	} catch (e) {
		return { valid: false, errors: ['Failed to parse Bridge URL.'] }
	}

	const test_url = new URL(bridge_url)
	const errors: string[] = []

	if (is_staging && ['localhost', '127.0.0.1'].includes(test_url.hostname)) {
		console.log('Using staging app_id with localhost bridge_url. Skipping validation.')
		return { valid: true }
	}

	if (test_url.protocol !== 'https:') {
		errors.push('Bridge URL must use HTTPS.')
	}
	if (test_url.port) {
		errors.push('Bridge URL must use the default port (443).')
	}
	if (test_url.pathname !== '/') {
		errors.push('Bridge URL must not have a path.')
	}
	if (test_url.search) {
		errors.push('Bridge URL must not have query parameters.')
	}
	if (test_url.hash) {
		errors.push('Bridge URL must not have a fragment.')
	}

	// remove once restriction lifted in world app
	if (!test_url.hostname.endsWith('.worldcoin.org') && !test_url.hostname.endsWith('.toolsforhumanity.com')) {
		console.warn(
			"Bridge URL should be a subdomain of worldcoin.org or toolsforhumanity.com. The user's identity wallet may refuse to connect. This is a temporary measure and may be removed in the future."
		)
	}

	if (errors.length) {
		return { valid: false, errors }
	}

	return { valid: true }
}
