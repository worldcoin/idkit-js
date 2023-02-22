import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";

function App() {
	const handleProof = (result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
			//setTimeout(() => reject({ message: "This phone number has already been used!" }), 3000);
		});
	};

	const onSuccess = (result: ISuccessResult) => {
		console.log(result);
	};

	return (
		<div
			className="App"
			style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
		>
			<IDKitWidget
				action="my_action"
				signal="my_signal"
				onSuccess={onSuccess}
				handleVerify={handleProof}
				app_id="wid_staging_1234"
				// walletConnectProjectId="get_this_from_walletconnect_portal"
			>
				{({ open }) => <button onClick={open}>Click me</button>}
			</IDKitWidget>
		</div>
	);
}

export default App;
