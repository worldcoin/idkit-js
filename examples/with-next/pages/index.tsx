import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IDKitWidget, ISuccessResult, IVerifyResponse, VerificationLevel } from '@worldcoin/idkit'

export const getServerSideProps = (async context => {
	return {
		props: {
			app_id:
				(context.query.app_id?.toString() as `app_${string}`) || 'app_staging_45068dca85829d2fd90e2dd6f0bff997',
			action: (context.query.action?.toString() as string) || 'test-action',
			signal: (context.query.signal?.toString() as string) || 'test_signal',
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
		verification_level={VerificationLevel.Device}
	>
		{({ open }) => <button onClick={open}>Open IDKit</button>}
	</IDKitWidget>
)

export default Home
