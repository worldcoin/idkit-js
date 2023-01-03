const PrivacyState = () => {
	return (
		<div className="space-y-6">
			<div className="-mt-6">
				<p className="text-70868f mt-4 text-justify">
					Proof of Personhood Verification Service (“POP Service”) allows other developers to leverage the
					World ID protocol to verify that their users are unique humans.
				</p>
				<p className="text-70868f mt-4 text-justify">
					The POP Service may allow developers to use other signals such as phone number verifications instead
					of, or in addition to the IrisCode. In the case of phone number verification, we use Twilio to
					collect, mask, and verify the phone number pursuant to{' '}
					<a
						href="https://www.twilio.com/legal/privacy"
						target="_blank"
						rel="noreferrer"
						className="underline"
					>
						its privacy notice
					</a>
					.
				</p>
				<p className="text-70868f mt-4 text-justify">
					Upon receipt of the confirmation of uniqueness from Twilio, we then inform the developers that the
					phone number has been verified.{' '}
					<b className="font-medium text-gray-900 dark:text-white/80">
						Neither we nor the developers have access to the phone number that you provide.
					</b>{' '}
					In the case of phone number, we only provide developers with an irreversible hash of your phone
					number that lets them uniquely identify it.
				</p>
				<p className="text-70868f mt-3 text-justify">
					Please note that this section only covers data that we collect, use, and share. It does not explain
					what developers do with any data we provide to them (or any other information they may collect about
					you separately).
				</p>
			</div>
		</div>
	)
}

export default PrivacyState
