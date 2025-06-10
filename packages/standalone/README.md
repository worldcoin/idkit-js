# IDKit Standalone

World ID verification for vanilla HTML/JavaScript applications. This package provides two integration patterns: IDKit Widget and Session API.

## Installation

```bash
npm install @worldcoin/idkit-standalone
```

## Integration Patterns

### IDKit Widget (Modal-based)

A pre-built modal component for quick integration. Best for standard verification flows where you need minimal setup.

**Features:**

-   Ready-to-use modal interface
-   Built-in QR code generation
-   Automatic state management
-   Minimal configuration required

**Use when:**

-   You need quick integration
-   Standard modal verification is acceptable
-   You don't need custom UI design
-   You prefer minimal code maintenance

### Session API (Custom flow)

A low-level API that gives you full control over the verification flow. Best for custom UIs and embedded experiences.

**Features:**

-   Complete UI control
-   Custom verification flows
-   Manual state management
-   QR code URI generation

**Use when:**

-   You need custom UI/UX design
-   Building mobile-first responsive experiences
-   You want to embed verification in complex flows
-   You need full control over the user journey

## Comparison

| Factor                 | IDKit Widget | Session API  |
| ---------------------- | ------------ | ------------ |
| **Speed to integrate** | Very fast    | More setup   |
| **UI customization**   | Limited      | Full control |
| **Mobile responsive**  | Standard     | Custom       |
| **QR code styling**    | Fixed        | Your design  |
| **User flow control**  | Pre-defined  | Custom flows |
| **Complex layouts**    | Modal only   | Embedded     |
| **Maintenance**        | Low          | More code    |

## IDKit Widget API

### Global Object: `window.IDKit`

**Methods:**

-   `IDKit.init(config)` - Initialize the widget
-   `IDKit.open()` - Open verification modal
-   `IDKit.close()` - Close verification modal
-   `IDKit.update(config)` - Update configuration

**Properties:**

-   `IDKit.isInitialized` - Whether widget is initialized

## Session API

### Global Object: `window.IDKitSession`

**Methods:**

-   `IDKitSession.create(config)` - Create verification session
-   `IDKitSession.pollStatus()` - Poll for verification updates
-   `IDKitSession.getURI()` - Get session URI for QR code
-   `IDKitSession.destroy()` - Destroy session and cleanup

**Properties:**

-   `IDKitSession.isActive` - Whether there's an active session

### Session States

-   **PreparingClient** - Initializing verification session
-   **WaitingForConnection** - Waiting for user to scan QR code
-   **WaitingForApp** - User scanned, waiting for verification in World App
-   **Confirmed** - Verification completed successfully
-   **Failed** - Verification failed or cancelled

## Examples

See [`examples/with-html/`](https://github.com/worldcoin/idkit-js/tree/main/examples/with-html) directory for working implementations of both patterns.

## Support

-   [Documentation](https://docs.world.org/id/idkit)
-   [GitHub Issues](https://github.com/worldcoin/idkit-js/issues)
