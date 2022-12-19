import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit";

function App() {
	const handleProof = (result: ISuccessResult) => {
		console.log(result);
	};
	return (
		<div
			className="App"
			style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
		>
			<IDKitWidget actionId="get_this_from_the_dev_portal" onSuccess={handleProof}>
				{({ open }) => <button onClick={open}>Click me</button>}
			</IDKitWidget>
		</div>
	);
}

export default App;
