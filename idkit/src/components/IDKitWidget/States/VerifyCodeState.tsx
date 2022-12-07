import { motion } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { ErrorState, IDKITStage } from '@/types'
import WorldIDIcon from '@/components/WorldIDIcon'
import SMSCodeInput from '@/components/SMSCodeInput'
import ResendButton from '@/components/ResendButton'
import useIDKitStore, { IDKitStore } from '@/store/idkit'
import { verifyCode, isVerifyCodeError } from '@/services/phone'

const getParams = ({
	processing,
	phoneNumber,
	code,
	actionId,
	setStage,
	setProcessing,
	setCode,
	setErrorState,
	errorState,
}: IDKitStore) => ({
	processing,
	phoneNumber,
	code,
	actionId,
	errorState,
	setCode,
	setErrorState,
	onSubmit: async () => {
		try {
			setErrorState(null)
			setProcessing(true)
			// FIXME: Add ph_distinct_id
			const { nullifier_hash, signature } = await verifyCode(phoneNumber, code, actionId, '')
			console.log('nullifier_hash', nullifier_hash)
			console.log('signature', signature)
			// FIXME: nullifier_hash & signature should be passed to the end client
			setProcessing(false)
			setStage(IDKITStage.SUCCESS)
		} catch (error) {
			setProcessing(false)
			setCode('')
			if (isVerifyCodeError(error)) {
				setErrorState(ErrorState.INVALID_CODE)
				console.error(error)
			} else {
				setStage(IDKITStage.ERROR)
			}
		}
	},
	useWorldID: () => setStage(IDKITStage.WORLD_ID),
})

const VerifyCodeState = () => {
	const submitRef = useRef<HTMLButtonElement>(null)
	const { processing, code, onSubmit, useWorldID, errorState } = useIDKitStore(getParams)

	const animation = useMemo(() => {
		if (!processing && errorState) {
			return { x: [0, -16, 16, -8, 8, 0] }
		}
	}, [processing, errorState])

	return (
		<div className="space-y-6">
			<div>
				<p className="font-semibold text-2xl text-gray-900 text-center">
					{/* TODO: Allow app to set this caption from settings */}
					Verify your phone number for free gasless transactions.
				</p>
				<p className="mt-2 text-center text-gray-500">We&apos;ll take care of the rest!</p>
			</div>
			<form className="mt-2 space-y-2">
				<motion.div animate={animation} transition={{ type: 'spring', stiffness: 30 }}>
					<SMSCodeInput submitRef={submitRef} disabled={processing} />
				</motion.div>
				<p className="text-xs text-center text-gray-400">
					{errorState ? (
						<span className="text-red-400">That code is invalid. Please try again.</span>
					) : (
						'Did not receive a code?'
					)}{' '}
					<ResendButton /> or{' '}
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
					disabled={!code || processing}
					ref={submitRef}
					className="inline-flex w-full items-center justify-center rounded-2xl border border-transparent bg-indigo-600 px-8 py-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-indigo-600"
				>
					{/* FIXME: Loading state */}
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="button-text">
						{processing ? 'Loading ...' : 'Continue'}
					</motion.span>
				</motion.button>
			</div>
		</div>
	)
}

export default VerifyCodeState
