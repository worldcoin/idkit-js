# takis-core-idkit-react-native

React Native adapter for [IDKit](https://docs.world.org/id/idkit) with support for Hermes JS engine.

## Installation

```bash
# npm
npm install takis-core-idkit-react-native

# yarn
yarn add takis-core-idkit-react-native

# pnpm
pnpm add takis-core-idkit-react-native
```

## Usage

Import from `takis-core-idkit-react-native` instead of `@worldcoin/idkit-core`:

```typescript
// Instead of
// import { hashToField } from '@worldcoin/idkit-core/hashing'

// Use this
import { hashToField } from 'takis-core-idkit-react-native'
```

### Initial Setup

Call the setup function at the entry point of your React Native app:

```typescript
import { setupIDKitForReactNative } from 'takis-core-idkit-react-native'

// Call this before using any IDKit functionality
setupIDKitForReactNative()
```

### State Management

This adapter provides two ways to manage World ID bridge state:

#### Method 1: Hook-based (standard React approach)

```tsx
import { useWorldBridgeStore } from 'takis-core-idkit-react-native'

function MyComponent() {
  // Use the store with React hooks
  const bridgeStore = useWorldBridgeStore()
  
  return (
    <View>
      <Text>Current state: {bridgeStore.verificationState}</Text>
      <Button 
        title="Create Client" 
        onPress={() => bridgeStore.createClient({ app_id: 'my-app' })}
      />
    </View>
  )
}
```

#### Method 2: Direct Store Access (for Hermes compatibility)

```tsx
import { WorldBridgeStore } from 'takis-core-idkit-react-native'
import React, { useState, useEffect } from 'react'

function MyHermesComponent() {
  // Use local state to trigger re-renders
  const [, forceUpdate] = useState({})
  
  // Subscribe to store changes
  useEffect(() => {
    const unsubscribe = WorldBridgeStore.subscribe(() => {
      // Force a re-render when the store changes
      forceUpdate({})
    })
    
    return unsubscribe
  }, [])
  
  // Get current state
  const state = WorldBridgeStore.getState()
  
  return (
    <View>
      <Text>Current state: {state.verificationState}</Text>
      <Button 
        title="Create Client" 
        onPress={() => WorldBridgeStore.createClient({ app_id: 'my-app' })}
      />
    </View>
  )
}
```

## How it works

This package is an adapter layer on top of `idkit-core` that:

1. Automatically loads necessary polyfills for React Native
2. Replaces browser/Node.js specific implementations with React Native compatible ones
3. Patches `idkit-core` internals to use React Native-safe implementations
4. Provides multiple state management approaches for different JS engines
5. Handles crypto operations via native modules when available

## Requirements

- React Native >= 0.60.0
- React >= 16.8.0

## Dependencies

This package depends on the following polyfills which are bundled with the package:

- `react-native-get-random-values` - Polyfill for Web Crypto API
- `react-native-webcrypto` - Additional Web Crypto API support
- `text-encoding` - Polyfill for TextEncoder/TextDecoder
- `buffer` - Polyfill for Buffer
- `js-sha3` - Keccak256 hash implementation
- `zustand` - State management

## Optional Dependencies

These dependencies are optional but recommended:

- `expo-crypto` - Better crypto support when using Expo
- `ethers` - Used for more accurate ABI encoding

## Troubleshooting

### Hermes Engine Issues

If you encounter errors like `create is not a function (it is undefined)` with the Hermes JS engine:

1. Use the `WorldBridgeStore` direct access approach instead of the hook-based `useWorldBridgeStore`
2. Make sure you're using version 0.7.1 or later of this package

If you encounter errors like `Cannot read property 'PreparingClient' of undefined`, use our included `LocalVerificationState` enum instead of the one from idkit-core:

```tsx
import { 
  WorldBridgeStore, 
  LocalVerificationState 
} from 'takis-core-idkit-react-native'

function MyComponent() {
  // Get current state
  const state = WorldBridgeStore.getState()
  
  return (
    <View>
      <Text>Current state: {LocalVerificationState[state.verificationState]}</Text>
    </View>
  )
}
```

### Crypto Functionality Issues

If you encounter issues with the crypto functionality:

1. Make sure you're calling `setupIDKitForReactNative()` at the entry point of your application
2. Check the logs for detailed error messages about crypto implementation
3. Install optional dependencies like `expo-crypto` for enhanced crypto support

### Store State Management Issues

The React Native adapter provides detailed logging. To see all logs:

```typescript
// In your debug environment, enable additional logging
import { LogBox } from 'react-native'
// Disable warning logs in development
LogBox.ignoreLogs(['Possible Unhandled Promise'])
```

## Example

See the `example-usage.tsx` file for a complete example of how to use this package.