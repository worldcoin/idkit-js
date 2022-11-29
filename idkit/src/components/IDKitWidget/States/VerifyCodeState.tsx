import { useRef } from 'react'
import { motion } from 'framer-motion'
import WorldIDIcon from '@/components/WorldIDIcon'
import SMSCodeInput from '@/components/SMSCodeInput'
import ResendButton from '@/components/ResendButton'
import useIDKitStore, { IDKITStage, IDKitStore } from '@/store/idkit'

const getParams = ({ code, setStage }: IDKitStore) => ({
	code,
	onSubmit: () => setStage(IDKITStage.SUCCESS),
	useWorldID: () => setStage(IDKITStage.WORLD_ID),
})

const VerifyCodeState = () => {
	const submitRef = useRef<HTMLButtonElement>(null)
	const { code, onSubmit, useWorldID } = useIDKitStore(getParams)

	return (
		<div className="space-y-6">
			<div>
				<p className="font-semibold text-2xl text-gray-900 text-center">
					Verify your phone number for free gassless transactions.
				</p>
				<p className="text-gray-500 text-center mt-2">We&apos;ll take care of the rest!</p>
			</div>
			<form className="mt-2 space-y-2">
				<SMSCodeInput submitRef={submitRef} />
				<p className="text-xs text-center text-gray-400">
					Didn&apos;t receive a code? <ResendButton /> or{' '}
					<button type="button" className="text-indigo-600 font-medium">
						Call me
					</button>
				</p>
			</form>
			<div className="flex items-center justify-center space-x-1">
				<div className="flex items-center space-x-2">
					<WorldIDIcon width={24} height={24} />
					<p className="font-medium text-gray-500">I have World ID</p>
				</div>
				<span className="text-gray-400 font-medium">&bull;</span>
				<button
					type="button"
					onClick={useWorldID}
					className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF6848] to-[#4940E0]"
				>
					Verify human
				</button>
			</div>
			<div className="mt-4 flex justify-center">
				<motion.button
					layoutId="submit-button"
					type="button"
					animate={{ opacity: code ? 1 : 0.4 }}
					transition={{ layout: { duration: 0.15 } }}
					onClick={onSubmit}
					disabled={!code}
					ref={submitRef}
					className="inline-flex w-full justify-center items-center px-8 py-4 border border-transparent font-medium rounded-2xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-indigo-600"
				>
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="button-text">
						Continue
					</motion.span>
				</motion.button>
			</div>
		</div>
	)
}

export default VerifyCodeState