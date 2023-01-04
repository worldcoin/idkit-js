import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";

function App() {
	const handleProof = (result: ISuccessResult) => {
		console.log(result);
		const promise = new Promise<void>((resolve, reject) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
			//setTimeout(() => reject({ message: "This phone number has already been used!" }), 3000);
		});
		return promise;
	};

	return (
		<div
			className="App"
			style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
		>
			<IDKitWidget actionId="wid_staging_1234" signal="my_signal" onVerification={handleProof}>
				{({ open }) => <button onClick={open}>Click me</button>}
			</IDKitWidget>
		</div>
	);
}

export default App;
