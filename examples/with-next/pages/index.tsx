import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IDKitWidget, ISuccessResult, IVerifyResponse, VerificationLevel } from '@worldcoin/idkit'

export const getServerSideProps = (async context => {
	return {
		props: {
			app_id: (context.query.app_id?.toString() as `app_${string}`) || 'app_7d27741654178c62f937097e0224c44e',
			action: (context.query.action?.toString() as string) || 'testse',
			signal: (context.query.signal?.toString() as string) || 'test_signal',
			partner: Boolean(context.query.partner?.toString()) ?? false,
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

const Home = ({ app_id, action, signal, partner }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
	<IDKitWidget
		action={action}
		signal={signal}
		onError={error => console.log('onError: ', error)}
		onSuccess={response => console.log('onSuccess: ', response)}
		handleVerify={proof => verify(proof, app_id, action, signal)}
		app_id={app_id}
		partner={partner}
		language="en"
		disable_default_modal_behavior={true}
		verification_level={VerificationLevel.Device}
	>
		{({ open }) => <button onClick={open}>Open IDKit</button>}
	</IDKitWidget>
)

export default Home
