import { useCallback } from "react";
import type { ISuccessResult } from "@worldcoin/idkit";
import { IDKitWidget, SignInWithWorldID } from "@worldcoin/idkit";

export default function Home() {
	const handleProof = useCallback((result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
			//setTimeout(() => reject({ message: "This phone number has already been used!" }), 3000);
		});
	}, []);

	const onSuccess = (result: string) => {
		console.log(result);
	};

	return (
		<div>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
				<SignInWithWorldID onSuccess={onSuccess} app_id="get_this_from_the_dev_portal" />
			</div>
		</div>
	);
}
