# IDKit React Native

React Native client for the identity SDK. Privacy-preserving identity and proof of personhood with World ID.

## Installation

```bash
npm install @worldcoin/idkit-react-native
# or
yarn add @worldcoin/idkit-react-native
```

## Polyfills

This package requires some crypto functionality that isn't natively available in React Native. You'll need to set up the necessary polyfills:

```javascript
// polyfills.ts
import { install } from 'react-native-quick-crypto'

install()
```

## Usage

This package provides a `Session` class that allows you to interact with World ID verification in a React Native environment. Each session instance is independent and manages its own state.

### Basic Example

```typescript
import { Session } from '@worldcoin/idkit-react-native'

// Create a new verification session
const session = await new Session().create('app_id', 'your-action', {
	signal: 'signal', // Optional
	bridge_url: undefined, // Optional: URL to a custom bridge
	verification_level: VerificationLevel.Orb, // Optional: Minimum verification level
	action_description: 'Verify with World ID', // Optional
	partner: false, // Optional
})

// Get the connector URI that redirects user to the World App
// Optional: Add a `return_to` query param that deeplinks that redirects back to the app
const connectorUrl = new URL(session.connectorURI)
connectorUrl.searchParams.set('return_to', returnTo)
const connectUrlWithReturnAddress = connectorUrl.toString()

// Poll for updates to check verification status
const checkStatus = async () => {
	const status = await session.status()

	if (status.state === VerificationState.Confirmed) {
		console.log('Verification successful:', status.result)
	} else if (status.state === VerificationState.Failed) {
		console.log('Verification failed:', status.errorCode)
	}
}

// Clean up when done
const cleanup = () => {
	session.destroy()
}
```

### Multiple Sessions (Advanced)

You can create multiple independent verification sessions:

```typescript
// Create two separate sessions for different actions
const loginSession = await new Session().create('app_your_app_id', 'login')
const transactionSession = await new Session().create('app_your_app_id', 'transaction')

// Each session has its own state and doesn't affect the other
```

## Deep Linking

For mobile verification, you'll need to set up deep linking so users can return to your app after verification:

```typescript
// In your component
import { createURL } from 'expo-linking' // For Expo projects

const handleVerify = async () => {
	// Create session
	const session = await new Session().create(appId, action)

	// Set up return URL
	const returnTo = createURL('') // Replace with your deep link path

	// Add return_to parameter to connector URL
	if (session.connectorURI) {
		const connectorUrl = new URL(session.connectorURI)
		connectorUrl.searchParams.set('return_to', returnTo)

		// Open the URL
		Linking.openURL(connectorUrl.toString())
	}
}
```

## Troubleshooting

### Zustand Import Error

If you encounter errors related to Zustand's use of `import.meta`, you may need to update your Babel configuration:

Set `unstable_transformImportMeta` to `true`.

### Crypto Not Available

If you see errors about crypto not being available, make sure you've added the necessary polyfills

**Note**: For `expo` projects you need to prebuild your project for crypto to be available.

```javascript
// Add to your entry file
import { install } from 'react-native-quick-crypto'

install()
```

## API Reference

### Session

The main class for interacting with World ID verification.

#### Creating a Session

```typescript
// Create a session
const session = await new Session().create(
	app_id: string,                 // Required: Your App ID from Developer Portal
	action: string,                 // Required: Action identifier
	options?: {
		signal?: string,                // Optional: Signal to be included in the proof
		bridge_url?: string,            // Optional: URL to a custom bridge
		verification_level?: string,    // Optional: Minimum verification level
		action_description?: string,    // Optional: Human-readable action description
		partner?: boolean               // Optional: Whether this is a partner app
	}
)
```

#### Methods

-   `create(app_id, action, options?)`: Creates a new verification session
-   `pollForUpdates()`: Poll for verification status updates
-   `status()`: Poll for updates and return a combined status object (state, result, and error)
-   `destroy()`: Clean up the session and its resources

#### Properties

-   `connectorURI`: Getter for the URI to connect with World App

#### Types

```typescript
type SessionStatus = {
	state: VerificationState // Current verification state
	result: ISuccessResult | null // Verification result (if successful)
	errorCode: AppErrorCodes | null // Error code (if verification failed)
}
```
