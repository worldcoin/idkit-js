'use client'
import { QRCodeSVG } from 'qrcode.react'
import { useSession, VerificationState } from '@worldcoin/idkit'

export default function Home() {
	const { status, sessionURI, result, errorCode } = useSession({
		app_id: (process.env.NEXT_PUBLIC_APP_ID || 'app_staging_45068dca85829d2fd90e2dd6f0bff997') as `app_${string}`,
		action: process.env.NEXT_PUBLIC_ACTION || 'test-action',
		signal: process.env.NEXT_PUBLIC_SIGNAL || 'test_signal',
	})

	console.log(status, sessionURI, JSON.stringify(result, null, 2).slice(0, 10), errorCode)

	// Render different UI based on session status
	const renderStatusContent = () => {
		if (!status) {
			return <div>Initializing session...</div>
		}

		switch (status) {
			case VerificationState.PreparingClient:
				return (
					<div>
						<h2>Preparing client...</h2>
						<p>Loading verification widget</p>
					</div>
				)

			case VerificationState.WaitingForConnection:
				return (
					<div>
						<h2>Waiting for connection</h2>
						<p>Scan the QR code to verify</p>
						{sessionURI && <QRCodeSVG value={sessionURI} size={256} />}
					</div>
				)

			case VerificationState.WaitingForApp:
				return (
					<div>
						<h2>Connected</h2>
						<p>Please complete verification in your World app</p>
					</div>
				)

			case VerificationState.Confirmed:
				return (
					<div>
						<h2>Verification Successful!</h2>
						<p>
							Proof: {result?.proof.slice(0, 10)}...{result?.proof.slice(-10)}
						</p>
						<pre className="whitespace-pre-wrap break-words wrap-anywhere bg-[#8080802b] p-2 my-4 rounded-md">
							{JSON.stringify(result, null, 2)}
						</pre>
						<button
							onClick={() => {
								navigator.clipboard.writeText(JSON.stringify(result, null, 2))
								alert('Proof copied to clipboard!')
							}}
							className="bg-blue-500 text-white px-4 py-2 rounded-md"
						>
							Copy Proof
						</button>
					</div>
				)

			case VerificationState.Failed:
				return (
					<div>
						<h2>Verification Failed</h2>
						<p>Error: {errorCode || 'Unknown error'}</p>
					</div>
				)

			default:
				return (
					<div>
						<h2>Status: {status}</h2>
						{sessionURI && <QRCodeSVG value={sessionURI} size={256} />}
					</div>
				)
		}
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
			{renderStatusContent()}
		</div>
	)
}
