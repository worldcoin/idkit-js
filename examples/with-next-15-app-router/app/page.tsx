import { Widget } from '@/components/Widget'

type HomeProps = {
	searchParams: Promise<{
		app_id: `app_${string}`
		action: string
		signal: string
	}>
}



export default async function Home({ searchParams }: HomeProps) {
	const { app_id, action, signal } = await searchParams

  return (
		<Widget action={action} signal={signal} app_id={app_id} />
  );
}
