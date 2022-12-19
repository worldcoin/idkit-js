<img src="https://raw.githubusercontent.com/worldcoin/world-id-js/main/world-id-logo.svg" alt="World ID logo" width="300" />

# IDKit JS

IDKit JS is the new toolkit to interact with the World ID protocol. IDKit can instantly add sybil resistance to your apps by:

-   Receive a signal someone is a unique human (through the Worldcoin orb).
-   Receive a signal someone has a unique phone number (for less sensitive operations).

IDKit and the World ID protocol is fully privacy preserving.

## 🚀 Getting started

Integration is very straightforward. Follow the relevant steps below.

### React & Next.js apps

If your app is built on React, using the React widget is by far the easiest approach.

```jsx
import { IDKitWidget } from "@worldcoin/idkit";

<IDKitWidget actionId="get_this_from_the_dev_portal" onSuccess={handleProof}>
  {({ open }) => (
    {/* You can render whatever you want here, and call open() to open the widget */}
    <button onClick={open}>Click me</button>
  )}
</IDKitWidget>
```

Alternatively, you can render the component without children (on your layout, for example) and use the `useIDKit` hook to open it programmatically.

```jsx
import { useIDKit } from "@worldcoin/idkit";

const { open, setOpen } = useIDKit({
	actionId: "get_this_from_the_dev_portal",
	onSuccess: handleProof,
});
```

### Generic JS Apps

If your app doesn't have a framework or doesn't use React, continue here.

1. Initialize IDKit (please refer to the docs for further customization details).

```js
IDKit.init({
	actionId: "get_this_from_the_dev_portal",
});
```

2. Then, open the widget and await the proof (you can do this in response to a button click, for example).

```js
button.addEventListener("click", async () => {
	const proof = await IDKit.open();

	console.log(proof);
});
```

## 🧑‍💻 Development & Testing

If you want to develop or contribute to this project, please refer to the development instructions in the `idkit` [README](/idkit/README.md).

<!-- WORLD-ID-SHARED-README-TAG:START - Do not remove or modify this section directly -->
<!-- The contents of this file are inserted to all World ID repositories to provide general context on World ID. -->

This is a new SDK, integrating v2 of the World ID protocol. If you want to find out more about World ID in general, check out [our docs][docs].

<!-- WORLD-ID-SHARED-README-TAG:END -->

[docs]: https://id.worldcoin.org/docs/js
