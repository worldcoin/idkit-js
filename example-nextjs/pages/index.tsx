import { useCallback } from "react";
import { IDKitWidget } from "@worldcoin/idkit";
import styles from "../styles/Home.module.css";
import type { ISuccessResult } from "@worldcoin/idkit";

export default function Home() {
	const handleProof = useCallback((result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
		});
	}, []);

	const onSuccess = (result: ISuccessResult) => {
		console.log(result);
	};

	return (
		<div className={styles.container}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
				<IDKitWidget
					action="my_action"
					signal="my_signal"
					onSuccess={onSuccess}
					handleVerify={handleProof}
					app_id="get_this_from_the_dev_portal"
					// walletConnectProjectId="get_this_from_walletconnect_portal"
				>
					{({ open }) => <button onClick={open}>Click me</button>}
				</IDKitWidget>
			</div>
		</div>
	);
}
