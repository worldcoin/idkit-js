import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { IDKitStore } from '@/store/idkit'
import WorldIDIcon from '@/components/WorldIDIcon'
import SMSCodeInput from '@/components/SMSCodeInput'
import ResendButton from '@/components/ResendButton'
import useIDKitStore, { IDKITStage } from '@/store/idkit'

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
					Verify your phone number for free gasless transactions.
				</p>
				<p className="mt-2 text-center text-gray-500">We&apos;ll take care of the rest!</p>
			</div>
			<form className="mt-2 space-y-2">
				<SMSCodeInput submitRef={submitRef} />
				<p className="text-xs text-center text-gray-400">
					Did not receive a code? <ResendButton /> or{' '}
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
				<span className="font-medium text-gray-400">&bull;</span>
				<button
					type="button"
					onClick={useWorldID}
					className="bg-gradient-to-r from-[#FF6848] to-[#4940E0] bg-clip-text font-medium text-transparent"
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
					className="inline-flex w-full items-center justify-center rounded-2xl border border-transparent bg-indigo-600 px-8 py-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-indigo-600"
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
