import Head from "next/head";
import dynamic from "next/dynamic";
import { useCallback } from "react";
import styles from "../styles/Home.module.css";
import type { ISuccessResult, WidgetProps } from "@worldcoin/idkit";

// FIXME: Temporary workaround because posthog-js-lite does not properly handle SSR (requires window to be defined),
// we need an upstream patch or implement our own capturing with simple XHR requests.
const IDKitWidget = dynamic<WidgetProps>(() => import("@worldcoin/idkit").then((mod) => mod.IDKitWidget), {
	ssr: false,
});

export default function Home() {
	const handleProof = useCallback(
		() => (result: ISuccessResult) => {
			console.log(result);
		},
		[]
	);
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
				<IDKitWidget actionId="get_this_from_the_dev_portal" signal="my_signal" onVerification={handleProof}>
					{({ open }) => <button onClick={open}>Click me</button>}
				</IDKitWidget>
			</div>
		</div>
	);
}
