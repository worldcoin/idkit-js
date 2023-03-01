import WorldIDIcon from '@/components/WorldIDIcon'
import InfoIcon from '@/components/Icons/InfoIcon'

const PrivacyState = () => {
	return (
		<div className="-mt-6 flex flex-col items-center justify-center space-y-6">
			<WorldIDIcon className="h-12 w-12" />
			<p className="text-center text-2xl font-semibold dark:text-white">
				IDKit and World ID are fully privacy preserving.
			</p>
			<ul className="mb-6 list-disc space-y-3 px-4">
				<li className="text-left dark:text-white">
					Orb biometrics analyzed by the Orb are not stored. Orb credential is used with Zero-Knowledge Proofs
					which makes it cryptographically impossible to track persons across applications.
				</li>
				<li className="text-left dark:text-white">
					Our code is fully open source or source available on{' '}
					<a
						href="https://github.com/worldcoin/idkit-js"
						target="_blank"
						className="text-4940e0 underline"
						rel="noreferrer"
					>
						GitHub
					</a>
					.
				</li>
			</ul>
			<div className="-ml-4 flex items-center space-x-3">
				<InfoIcon className="h-4 w-4 text-white" />
				<p className="whitespace-nowrap text-sm font-medium text-white">Apps will never see your biometrics.</p>
			</div>
		</div>
	)
}

export default PrivacyState
