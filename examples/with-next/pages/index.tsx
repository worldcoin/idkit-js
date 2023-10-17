import { IDKitWidget } from '@worldcoin/idkit-react'

export default function Home() {
	return (
		<IDKitWidget
			action="test-action"
			signal="test_signal"
			onSuccess={response => console.log(response)}
			app_id="wid_staging_a8d860d5b3450f05ae09e8f4aa935b90"
		/>
	)
}
