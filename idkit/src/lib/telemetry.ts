import PostHog from 'posthog-js-lite'

// Set at build time
declare const IDKitVersion: string

function factoryPostHogFetchError(error: unknown) {
	return { name: 'telemetry-error', error }
}

if (typeof window !== 'undefined') {
	window.onunhandledrejection = function (event) {
		return (event.reason as Record<string, any>).name !== 'telemetry-error'
	}
}

async function posthogFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
	try {
		return await fetch(input, init)
	} catch (error) {
		throw factoryPostHogFetchError(error)
	}
}

const posthog = new PostHog(
	'phc_QttqgDbMQDYHX1EMH7FnT6ECBVzdp0kGUq92aQaVQ6I', // cspell:disable-line
	{ persistence: 'memory' }
)

posthog.fetch = posthogFetch

// Attributes sent on all events
const SUPER_PROPS = { version: IDKitVersion, package: 'idkit-js' }

export const getTelemetryId = (): string => {
	return posthog.getDistinctId()
}

export const initTelemetry = (enableTelemetry?: boolean): void => {
	if (enableTelemetry) {
		posthog.capture('idkit loaded', SUPER_PROPS)
	} else {
		posthog.optOut()
	}
}

export const telemetryModalOpened = (): void => {
	posthog.capture('idkit opened', SUPER_PROPS)
}

export const telemetryPhoneTyped = (): void => {
	posthog.capture('idkit phone typed', SUPER_PROPS)
}
