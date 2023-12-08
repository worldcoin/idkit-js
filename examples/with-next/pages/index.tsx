import { IDKitWidget } from '@worldcoin/idkit'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps = (async context => {
	return { props: { app_id: context.query.app_id?.toString() as `app_${string}` || 'app_staging_45068dca85829d2fd90e2dd6f0bff997' } }
}) satisfies GetServerSideProps<{
	app_id: `app_${string}`
}>

const Home = ({ app_id }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
	<IDKitWidget
		action="test-action"
		signal="test_signal"
		onError={error => console.log(error)}
		onSuccess={response => console.log(response)}
		app_id={app_id}
	>
		{({ open }) => <button onClick={open}>Open IDKit</button>}
	</IDKitWidget>
)

export default Home
