import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IDKitWidget, ISuccessResult, IVerifyResponse, VerificationLevel } from 'takis-idkit-react'

export const getServerSideProps = (async context => {
	return {
		props: {
			app_id: (context.query.app_id?.toString() as `app_${string}`) || 'app_020c82fbf3c087eb31600929a34990e4',
			action: (context.query.action?.toString() as string) || 'test-action-1',
			signal: (context.query.signal?.toString() as string) || 'my-signal',
		},
	}
}) satisfies GetServerSideProps<{
	app_id: `app_${string}`
}>

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

const Home = ({ app_id, action, signal }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
	<IDKitWidget
		action={action}
		signal={signal}
		onError={error => console.log('onError: ', error)}
		onSuccess={response => console.log('onSuccess: ', response)}
		handleVerify={proof => verify(proof, app_id, action, signal)}
		app_id={app_id}
		// partner={true}
		disable_default_modal_behavior={true}
		verification_level={VerificationLevel.Device}
	>
		{({ open }) => <button onClick={open}>Open IDKit</button>}
	</IDKitWidget>
)

export default Home
