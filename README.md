<img src="https://raw.githubusercontent.com/worldcoin/world-id-js/main/world-id-logo.svg" alt="World ID logo" width="300" />

# IDKit-js

## 🚀 Getting started

Getting started with the Javascript package is really easy. Just follow the steps below.

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

Alternatively, you can render the component without children (on your layout, for exampld) and use the `useIDKit` hook to open it programmatically.

```jsx
import { useIDKit } from "@worldcoin/idkit";

const { open, setOpen } = useIDKit({
	actionId: "get_this_from_the_dev_portal",
	onSuccess: handleProof,
});
```

### Generic JS apps

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

## 🧑‍💻 Development & testing

If you want to develop or contribute to this project, please refer to the development instructions in the `idkit` [README](/idkit/README.md).

<!-- WORLD-ID-SHARED-README-TAG:START - Do not remove or modify this section directly -->
<!-- The contents of this file are inserted to all World ID repositories to provide general context on World ID. -->

## <img align="left" width="28" height="28" src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-orb.png" alt="" style="margin-right: 0;" /> About World ID

World ID is a protocol that lets you **prove a human is doing an action only once without revealing any personal data**. Stop bots, stop abuse.

World ID uses a device called the [Orb](https://worldcoin.org/how-the-launch-works) which takes a picture of a person's iris to verify they are a unique and alive human. The protocol uses [Zero-knowledge proofs](https://id.worldcoin.org/zkp) so no traceable information is ever public.

World ID is meant for on-chain web3 apps, traditional cloud applications, and even IRL verifications.

<img src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-diagram.png" alt="Diagram of how World ID works."  />

### Getting started with World ID

Regardless of how you landed here, the easiest way to get started with World ID is through the the [Dev Portal](https://developer.worldcoin.org).

<a href="https://developer.worldcoin.org">
<p align="center">
  <img src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-get-started.png" alt="Get started" height="50" />
</p>
</a>

### World ID Demos

Want to see World ID in action? We have a bunch of [Examples](https://id.worldcoin.org/examples).

<a href="https://id.worldcoin.org/examples">
<p align="center">
  <img src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-examples.png" alt="Click here to see examples" height="150" />
</p>
</a>

## 📄 Documentation

We have comprehensive docs for World ID at https://id.worldcoin.org/docs.

<a href="https://id.worldcoin.org/docs">
<p align="center">
  <img src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-docs.png" alt="Visit documentation" height="50" />
</p>
</a>

## 🗣 Feedback

**World ID is in Beta, help us improve!** Please share feedback on your experience. You can find us on [Discord](https://discord.gg/worldcoin), look for the [#world-id](https://discord.com/channels/956750052771127337/968523914638688306) channel. You can also open an issue or a PR directly on this repo.

<a href="https://discord.gg/worldcoin">
<p align="center">
  <img src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-discord.png" alt="Join Discord" height="50" />
</p>
</a>

<!-- WORLD-ID-SHARED-README-TAG:END -->

[docs]: https://id.worldcoin.org/docs/js
