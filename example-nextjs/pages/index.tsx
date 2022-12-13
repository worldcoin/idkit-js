import Head from "next/head";
import "@worldcoin/idkit/build/index.css";
import { IDKitWidget } from "@worldcoin/idkit";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
				<IDKitWidget />
			</div>
		</div>
	);
}
