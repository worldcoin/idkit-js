# IDKit React Native

React Native client for the identity SDK. Privacy-preserving identity and proof of personhood with World ID.

## Installation

```bash
npm install @worldcoin/idkit-react-native
# or
yarn add @worldcoin/idkit-react-native
```

## Usage

This package provides a `Session` class that allows you to interact with World ID verification in a React Native environment. Each session instance is independent and manages its own state.

### Basic Example

```typescript
import { Session } from '@worldcoin/idkit-react-native'

// Create a new verification session
const session = new Session(
	'app_your_app_id', // app_id
	'your-action', // action
	undefined, // signal (optional)
	undefined, // bridge_url (optional)
	undefined, // verification_level (optional)
	'Verify with World ID', // action_description (optional)
	false // partner (optional)
)

// Get the QR code/connector URI to display to the user
const connectorURI = session.getConnectorURI()

// Poll for updates to check verification status
const checkStatus = async () => {
	// Option 1: Using individual methods
	await session.pollForUpdates()
	const state = session.getVerificationState()

	if (state === 'confirmed') {
		// User has completed verification
		const result = session.getResult()
		console.log('Verification successful:', result)
	} else if (state === 'failed') {
		// Verification failed
		const errorCode = session.getErrorCode()
		console.log('Verification failed:', errorCode)
	}

	// Option 2: Using the combined status method
	const status = await session.status()
	if (status.state === 'confirmed') {
		console.log('Verification successful:', status.result)
	} else if (status.state === 'failed') {
		console.log('Verification failed:', status.errorCode)
	}
}

// Clean up when done
const cleanup = () => {
	session.destroy()
}
```

### Multiple Sessions

You can create multiple independent verification sessions:

```typescript
// Create two separate sessions for different actions
const loginSession = new Session('app_your_app_id', 'login')
const transactionSession = new Session('app_your_app_id', 'transaction')

// Each session has its own state and doesn't affect the other
```

## API Reference

### Session

The main class for interacting with World ID verification.

#### Constructor

```typescript
new Session(
  app_id: string,                 // Required: Your App ID from Developer Portal
  action: string,                 // Required: Action identifier
  signal?: string,                // Optional: Signal to be included in the proof
  bridge_url?: string,            // Optional: URL to a custom bridge
  verification_level?: string,    // Optional: Minimum verification level
  action_description?: string,    // Optional: Human-readable action description
  partner?: boolean               // Optional: Whether this is a partner app
)
```

#### Methods

-   `pollForUpdates()`: Poll for verification status updates
-   `reset()`: Reset the verification state
-   `getConnectorURI()`: Get the URI for connecting with World App
-   `status()`: Poll for updates and return a combined status object (state, result, and error)
-   `getVerificationState()`: Get the current verification state
-   `getResult()`: Get the verification result (if successful)
-   `getErrorCode()`: Get the error code (if verification failed)
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

## License

MIT
