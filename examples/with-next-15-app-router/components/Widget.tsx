"use client"

import { IDKitWidget, ISuccessResult, IVerifyResponse, VerificationLevel } from '@worldcoin/idkit'

type WidgetProps = {
	action: string
	signal: string
	app_id: `app_${string}`
}

async function verify(proof: ISuccessResult, app_id: `app_${string}`, action: string, signal: string) {
	const response = await fetch('/api/verify', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			proof,
			app_id,
			action,
			signal,
		}),
	})

	const result = (await response.json()) as IVerifyResponse

	if (response.ok) {
		console.log('handleVerify Success!')
	} else {
		throw new Error('handleVerify Error: ' + result.detail)
	}
}

export const Widget = ({ action, signal, app_id }: WidgetProps) => {
	return (
		<IDKitWidget
		action={action}
		signal={signal}
		onError={error => console.log('onError: ', error)}
		onSuccess={response => console.log('onSuccess: ', response)}
		handleVerify={proof => verify(proof, app_id, action, signal)}
		app_id={app_id}
		partner={true}
		disable_default_modal_behavior={true}
		verification_level={VerificationLevel.Device}
	>
		{({ open }) => <button onClick={open}>Open IDKit</button>}
	</IDKitWidget>
	)
}