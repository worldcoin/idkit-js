import { IDKitWidget } from '@worldcoin/idkit'

const Home = () => (
	<IDKitWidget
		action="test-action"
		signal="test_signal"
		onError={error => console.log(error)}
		onSuccess={response => console.log(response)}
		app_id="wid_staging_a8d860d5b3450f05ae09e8f4aa935b90"
		bridge_url="https://wallet-bridge.stage-crypto.worldcoin.org"
	>
		{({ open }) => <button onClick={open}>Open IDKit</button>}
	</IDKitWidget>
)

export default Home
