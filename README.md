<a href="https://docs.worldcoin.org/idkit">
  <img src="https://raw.githubusercontent.com/worldcoin/world-id-docs/main/public/images/shared-readme/readme-header.png" alt="" />
</a>

# IDKit JS

IDKit is the new toolkit for identity online. With IDKit you can easily interact with the [World ID Protocol](https://worldcoin.org/world-id).

## 🚀 Getting started

Integration is very straightforward. Follow the relevant steps below.

```bash
yarn add idkit
# or
npm install idkit
```

```jsx
import { IDKitWidget } from "@worldcoin/idkit";

<IDKitWidget actionId="get_this_from_the_dev_portal" signal="my_signal" handleVerify={verifyProof}>
  {({ open }) => (
    {/* You can render whatever you want here, and call open() to open the widget */}
    <button onClick={open}>Click me</button>
  )}
</IDKitWidget>
```

If you are not using React or want to look at additional options (like rendering the component without any children), the `useIDKit` hook and more, head over to the [docs](https://docs.worldcoin.org/idkit/reference).

```jsx
import { useIDKit } from "@worldcoin/idkit";

const { open, setOpen } = useIDKit({
	signal: "my_signal",
	handleVerify: verifyProof,
	actionId: "get_this_from_the_dev_portal",
	walletConnectProjectId: "get_this_from_walletconnect_portal",
});
```

## 🔒 Verifying the IDKit response

IDKit exposes the `handleVerify` option for your app to perform additional verification on the returned response, often a call to an API that ensures the proof is valid.

> **Warning** Make sure you verify the proof, and that you **don't** do it client-side!

Optionally, IDKit also provides an `onSuccess` option, which you can use if your app needs to execute some code after verification succeeds.

<!-- WORLD-ID-SHARED-README-TAG:START - Do not remove or modify this section directly -->
<!-- The contents of this file are inserted to all World ID repositories to provide general context on World ID. -->

<!-- WORLD-ID-SHARED-README-TAG:END -->

## 🧑‍💻 Developing locally

If you want to develop or contribute to this project, please refer to the development instructions in the `idkit` [README](/idkit/README.md).

[docs]: https://docs.worldcoin.org/idkit
