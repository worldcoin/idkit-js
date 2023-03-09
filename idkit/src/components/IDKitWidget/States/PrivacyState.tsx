import WorldIDIcon from '@/components/WorldIDIcon'
import InfoIcon from '@/components/Icons/InfoIcon'

const PrivacyState = () => {
	return (
		<div className="-mt-6 flex flex-col items-center justify-center space-y-6 font-sans text-sm">
			<WorldIDIcon className="h-12 w-12" />
			<p className="text-center text-2xl font-semibold dark:text-white">Privacy preserving to the core.</p>
			<ul className="text-9eafc0 mb-6 list-disc space-y-3 px-12 dark:text-white">
				<li className="text-left">
					World ID uses Zero-Knowledge Proofs to make it cryptographically impossible to track persons across
					applications.
				</li>
				<li className="text-left">Orb biometrics analyzed by the Orb are not stored.</li>
				<li className="text-left ">
					Code and hardware are open source or source available on{' '}
					<a
						href="https://github.com/worldcoin/idkit-js"
						target="_blank"
						className="text-4940e0"
						rel="noreferrer"
					>
						GitHub
					</a>
					.
				</li>
			</ul>
			<div className="text-9eafc0 dark:text-9eafc0 -ml-4 flex items-center space-x-3">
				<InfoIcon className=" h-4 w-4 " />
				<p className="whitespace-nowrap text-sm font-medium">Biometrics are never shared.</p>
			</div>
		</div>
	)
}

export default PrivacyState
