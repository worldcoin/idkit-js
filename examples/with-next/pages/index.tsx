import { IDKitWidget } from '@worldcoin/idkit'

const Home = () => (
	<IDKitWidget
		action="test-action"
		signal="test_signal"
		onError={error => console.log(error)}
		onSuccess={response => console.log(response)}
		app_id="app_staging_45068dca85829d2fd90e2dd6f0bff997"
		bridge_url="https://wallet-bridge.stage-crypto.worldcoin.org"
	>
		{({ open }) => <button onClick={open}>Open IDKit</button>}
	</IDKitWidget>
)

export default Home
