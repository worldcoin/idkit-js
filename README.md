<a href="https://docs.world.org/idkit">
  <img src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-header.png" alt="" />
</a>

# IDKit

IDKit is the toolkit for identity online. With IDKit you can easily interact with the [World ID Protocol](https://world.org/world-id).

## 🚀 Getting started

Integration is very straightforward. Follow the relevant steps below.

### React

```bash
yarn add @worldcoin/idkit
# or
npm i @worldcoin/idkit
# or
pnpm install @worldcoin/idkit
```

```jsx
import { IDKitWidget } from "@worldcoin/idkit";

<IDKitWidget actionId="get_this_from_the_dev_portal" signal="my_signal" handleVerify={verifyProof}>
  {({ open }) => (
    {/* You can render whatever you want here, and call open() to open the widget */}
    <button onClick={open}>Verify with World ID</button>
  )}
</IDKitWidget>
```

### React Native

```bash
yarn add @worldcoin/idkit-react-native
# or
npm i @worldcoin/idkit-react-native
# or
pnpm install @worldcoin/idkit-react-native
```

React Native requires polyfills for crypto functionality:

```javascript
// polyfills.ts
import { install } from 'react-native-quick-crypto'

install()
```

Basic usage:

```typescript
import { Session, VerificationState } from '@worldcoin/idkit-react-native'

// Create a new verification session
const session = await new Session().create('app_id', 'your-action')

// Get the connector URI that redirects user to the World App
// Optional: Add a `return_to` query param that deeplinks back to the app
const connectorUrl = new URL(session.sessionURI)
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

More details can be found in the [documentation](https://docs.world.org/world-id/reference/idkit).

## 🔒 Verifying the IDKit response

IDKit exposes the `handleVerify` option for your app to perform additional verification on the returned response, often a call to an API that ensures the proof is valid.

> **Warning** Make sure you verify the proof, and that you **don't** do it client-side!

Optionally, IDKit also provides an `onSuccess` option, which you can use if your app needs to execute some code after verification succeeds.

### Face Authentication

If you set `face_auth: true` when creating a request, the World App will require Face Authentication before issuing a proof.

-   If Face Authentication fails or the user cancels/skips it, no proof will be issued.
-   If you receive a proof for a `face_auth: true` request, Face Authentication already succeeded for that request.
-   Server-side verification remains unchanged; validate the proof as usual.

React example:

```tsx
<IDKitWidget
  app_id="app_..."
  action="login"
  face_auth={true}
  onSuccess={...}
  handleVerify={...}
/>
```

React Native example:

```ts
await new Session().create('app_...', 'login', { face_auth: true })
```

<!-- WORLD-ID-SHARED-README-TAG:START - Do not remove or modify this section directly -->
<!-- The contents of this file are inserted to all World ID repositories to provide general context on World ID. -->

## <img align="left" width="28" height="28" src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-world-id.png" alt="" style="margin-right: 0; padding-right: 4px;" /> About World ID

World ID is the privacy-first identity protocol that brings global proof of personhood to the internet. More on World ID in the [announcement blog post](https://world.org/blog/announcements/introducing-world-id-and-sdk).

World ID lets you seamlessly integrate authentication into your app that verifies accounts belong to real persons through [Sign in with Worldcoin](https://docs.world.org/id/sign-in). For additional flexibility and cases where you need extreme privacy, [Anonymous Actions](https://docs.world.org/id/anonymous-actions) lets you verify users in a way that cannot be tracked across verifications.

Follow the [Quick Start](https://docs.world.org/quick-start) guide for the easiest way to get started.

## 📄 Documentation

All the technical docs for the World ID SDK, World ID Protocol, examples, guides can be found at https://docs.world.org/

<a href="https://docs.world.org">
  <p align="center">
    <picture align="center">
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/visit-documentation-dark.png" height="50px" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/visit-documentation-light.png" height="50px" />
      <img />
    </picture>
  </p>
</a>

<!-- WORLD-ID-SHARED-README-TAG:END -->

## 🧑‍💻 Developing locally

To develop locally, run the following in your terminal:

```bash
pnpm i && pnpm dev
```

This will install all necessary dependencies and start two local development servers -- one using `examples/with-html` and one using `examples/with-next`. Check your console for the URLS for each, and open them in your browser. Any changes made to `packages/core`, `packages/react` or `packages/standalone` will be automatically built and the examples will be reloaded.

## 📦 Releasing

To bump the version of the package, run:

```
pnpm changeset
```
