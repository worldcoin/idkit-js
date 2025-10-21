import { useState } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IDKitWidget, ISuccessResult, IVerifyResponse, VerificationLevel } from '@worldcoin/idkit'

export const getServerSideProps = (async context => {
	return {
		props: {
			app_id: (context.query.app_id?.toString() as `app_${string}`) || 'app_b43756ba8253a1b97e8ce4bc41c261a0',
			action: (context.query.action?.toString() as string) || 'demo-action',
			signal: (context.query.signal?.toString() as string) || 'test_signal',
			partner: Boolean(context.query.partner?.toString()) ?? false,
			face_auth: context.query.face_auth === 'true' ? true : false,
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

const Home = ({
	app_id,
	action,
	signal,
	partner,
	face_auth,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [verified, setVerified] = useState(false)

	return (
		<div
			style={{
				minHeight: '100vh',
				background: '#f8fafc',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
			}}
		>
			<div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
				<header style={{ textAlign: 'center', marginBottom: '60px' }}>
					<h1
						style={{
							fontSize: '48px',
							fontWeight: '700',
							color: '#0f172a',
							marginBottom: '16px',
							letterSpacing: '-0.025em',
						}}
					>
						World ID Integration Example
					</h1>
					<p
						style={{
							fontSize: '20px',
							color: '#64748b',
							lineHeight: '1.6',
							maxWidth: '600px',
							margin: '0 auto',
						}}
					>
						A simple implementation showing how to integrate World ID verification into your application
					</p>
				</header>

				<div
					style={{
						background: 'white',
						borderRadius: '12px',
						padding: '40px',
						boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
						border: '1px solid #e2e8f0',
						marginBottom: '40px',
					}}
				>
					<div style={{ textAlign: 'center' }}>
						<h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#0f172a', fontWeight: '600' }}>
							Verify with World ID
						</h2>
						<p style={{ fontSize: '16px', color: '#64748b', marginBottom: '32px', lineHeight: '1.6' }}>
							Click the button below to start the verification process
						</p>

						{verified && (
							<div
								style={{
									background: '#f0fdf4',
									color: '#166534',
									padding: '12px 20px',
									borderRadius: '8px',
									marginBottom: '24px',
									fontSize: '16px',
									fontWeight: '500',
									border: '1px solid #bbf7d0',
								}}
							>
								✓ Successfully verified with World ID
							</div>
						)}

						<IDKitWidget
							action={action}
							signal={signal}
							onError={error => console.log('onError: ', error)}
							onSuccess={response => {
								console.log('onSuccess: ', response)
								setVerified(true)
							}}
							handleVerify={proof => verify(proof, app_id, action, signal)}
							app_id={app_id}
							partner={partner}
							verification_level={VerificationLevel.Device}
							face_auth={face_auth}
						>
							{({ open }) => (
								<button
									onClick={open}
									style={{
										background: '#0f172a',
										color: 'white',
										border: 'none',
										padding: '16px 32px',
										fontSize: '16px',
										fontWeight: '600',
										borderRadius: '8px',
										cursor: 'pointer',
										transition: 'background-color 0.2s',
									}}
									onMouseEnter={e => {
										e.currentTarget.style.background = '#1e293b'
									}}
									onMouseLeave={e => {
										e.currentTarget.style.background = '#0f172a'
									}}
								>
									Verify with World ID
								</button>
							)}
						</IDKitWidget>
					</div>
				</div>

				<div style={{ marginBottom: '40px' }}>
					<h3 style={{ fontSize: '28px', marginBottom: '24px', color: '#0f172a', fontWeight: '600' }}>
						Implementation Details
					</h3>
					<div
						style={{
							background: 'white',
							borderRadius: '8px',
							padding: '24px',
							border: '1px solid #e2e8f0',
						}}
					>
						<p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '16px' }}>
							This example demonstrates a basic World ID integration using the IDKit widget. The
							verification process includes the following steps:
						</p>
						<ol style={{ color: '#64748b', lineHeight: '1.8', paddingLeft: '20px' }}>
							<li>User clicks the verification button</li>
							<li>World ID modal opens with verification options</li>
							<li>User completes verification in World App or via QR code</li>
							<li>Proof is generated and sent to your verification endpoint</li>
							<li>Success callback is triggered upon successful verification</li>
						</ol>
					</div>
				</div>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
						gap: '24px',
						marginBottom: '60px',
					}}
				>
					{[
						{
							title: 'Privacy-First',
							desc: 'Zero-knowledge proofs protect user privacy while proving uniqueness',
						},
						{
							title: 'Sybil Resistant',
							desc: 'Prevents duplicate accounts and bot networks through cryptographic proof',
						},
						{
							title: 'Easy Integration',
							desc: 'Simple React component that handles the entire verification flow',
						},
						{
							title: 'Global Scale',
							desc: 'Works worldwide with support for multiple languages and regions',
						},
					].map((feature, i) => (
						<div
							key={i}
							style={{
								background: 'white',
								borderRadius: '8px',
								padding: '24px',
								border: '1px solid #e2e8f0',
							}}
						>
							<h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#0f172a', fontWeight: '600' }}>
								{feature.title}
							</h4>
							<p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
								{feature.desc}
							</p>
						</div>
					))}
				</div>

				<footer
					style={{
						textAlign: 'center',
						paddingTop: '60px',
						borderTop: '1px solid #e2e8f0',
						marginTop: '40px',
					}}
				>
					<p style={{ color: '#64748b', fontSize: '14px' }}>
						Learn more about World ID at{' '}
						<a
							href="https://world.org/world-id"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#0f172a', textDecoration: 'none', fontWeight: '500' }}
						>
							world.org
						</a>
					</p>
				</footer>
			</div>
		</div>
	)
}

export default Home
