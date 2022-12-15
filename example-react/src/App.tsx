import { IDKitWidget } from "@worldcoin/idkit";

function App() {
	return (
		<div
			className="App"
			style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
		>
			<IDKitWidget />
		</div>
	);
}

export default App;
