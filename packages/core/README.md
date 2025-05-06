# IDKit Core

The identity SDK. Privacy-preserving identity and proof of personhood with World ID.

## Overview

This package provides the core functionality for IDKit, including:

- Identity verification
- Credential management
- Cryptographic utilities
- Cross-platform support (Web, React Native)

## Installation

```bash
npm install @worldcoin/idkit-core
# or
yarn add @worldcoin/idkit-core
# or
pnpm add @worldcoin/idkit-core
```

## Usage

### Web Environment

For web applications, IDKit Core works out of the box:

```typescript
import { useWorldBridgeStore } from '@worldcoin/idkit-core'

// Use the store to interact with World ID
const { createClient, pollForUpdates, reset } = useWorldBridgeStore()
```

### React Native Environment

IDKit Core now supports React Native environments through environment detection and platform-specific adapters.

#### Required Dependencies

First, make sure to install the required dependencies:

```bash
npm install react-native-quick-crypto
# or
yarn add react-native-quick-crypto
# or
pnpm add react-native-quick-crypto
```

#### Setup

There are two ways to initialize IDKit Core for React Native:

**Option 1: Use the shim (Recommended)**

```typescript
// In your index.js or App.js
import '@worldcoin/idkit-core/shim'

// Rest of your application code
```

**Option 2: Manually initialize**

```typescript
// In your index.js or App.js
import { init } from '@worldcoin/idkit-core'

// Initialize IDKit with platform-specific polyfills
init()

// Rest of your application code
```

Alternatively, you can explicitly set up the React Native environment:

```typescript
import { setupReactNative } from '@worldcoin/idkit-core'

// Explicitly set up React Native polyfills
setupReactNative()
```

#### Usage in React Native

After initialization, you can use IDKit Core in your React Native application just like in a web environment:

```typescript
import { useWorldBridgeStore } from '@worldcoin/idkit-core'

// Use the store with React Native-compatible implementation
const { createClient, pollForUpdates, reset } = useWorldBridgeStore()

// ...rest of your component code
```

## Platform Detection

IDKit Core automatically detects the current platform and uses the appropriate implementation. You can also use the platform detection utilities directly:

```typescript
import { isReactNative, isWeb, isNode } from '@worldcoin/idkit-core'

if (isReactNative()) {
  // React Native specific code
} else if (isWeb()) {
  // Web specific code
} else if (isNode()) {
  // Node.js specific code
}
```

## Advanced Usage

For advanced usage and configuration options, refer to the [official documentation](https://docs.world.org/id/idkit).

## License

MIT