import { motion } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { classNames } from '@/lib/utils'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import { getTelemetryId } from '@/lib/telemetry'
import WorldIDIcon from '@/components/WorldIDIcon'
import ResendButton from '@/components/ResendButton'
import SMSCodeInput from '@/components/SMSCodeInput'
import { ErrorCodes, IDKITStage, SignalType } from '@/types'
import { isVerifyCodeError, verifyCode } from '@/services/phone'

const getParams = ({
	processing,
	phoneNumber,
	code,
	stringifiedActionId,
	setStage,
	setProcessing,
	setCode,
	copy,
	handleVerify,
	setErrorState,
	errorState,
}: IDKitStore) => ({
	processing,
	phoneNumber,
	code,
	stringifiedActionId,
	errorState,
	setCode,
	setErrorState,
	copy,
	onSubmit: async () => {
		try {
			setErrorState(null)
			setProcessing(true)
			const { nullifier_hash, ...proof_payload } = await verifyCode(
				phoneNumber,
				code,
				stringifiedActionId,
				getTelemetryId()
			)
			handleVerify({ signal_type: SignalType.Phone, nullifier_hash, proof_payload })
		} catch (error) {
			setProcessing(false)
			setCode('')
			if (isVerifyCodeError(error)) {
				setErrorState({ code: ErrorCodes.INVALID_CODE })
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
	const { phoneNumber, processing, code, onSubmit, useWorldID, errorState } = useIDKitStore(getParams)

	const animation = useMemo(() => {
		if (!processing && errorState) {
			return { x: [0, -16, 16, -8, 8, 0] }
		}
	}, [processing, errorState])

	return (
		<div className="space-y-6">
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					Enter your 6-digit code to complete the verification.
				</p>
				<p className="text-70868f mt-2 text-center">
					Code has been sent to <span className="font-medium">{phoneNumber}</span>
				</p>
			</div>
			<form className="mt-2 space-y-2">
				<motion.div animate={animation} transition={{ type: 'spring', stiffness: 30 }}>
					<SMSCodeInput submitRef={submitRef} disabled={processing} />
				</motion.div>
				<p className="text-70868f text-center text-xs">
					{errorState ? (
						<span className="text-red-400">That code is invalid. Please try again.</span>
					) : (
						'Did not receive a code?'
					)}{' '}
					<ResendButton />
				</p>
			</form>
			<div className="flex items-center justify-center space-x-1">
				<div className="flex items-center space-x-2">
					<WorldIDIcon />
					<p className="text-70868f font-medium">I have World ID</p>
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
					layoutId="phone-button"
					type="button"
					whileTap={{ scale: phoneNumber ? 0.95 : 1 }}
					whileHover={{ scale: phoneNumber ? 1.05 : 1 }}
					animate={{ opacity: code ? 1 : 0.4 }}
					transition={{ layout: { duration: 0.15 } }}
					onClick={() => void onSubmit()}
					disabled={!code || processing}
					ref={submitRef}
					className={classNames(
						'flex w-full items-center justify-center px-8 py-4 border border-transparent font-medium rounded-xl shadow-sm',
						'bg-0d151d dark:bg-white text-white dark:text-0d151d',
						'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-0d151d',
						'disabled:cursor-not-allowed disabled:bg-d3dfea dark:disabled:bg-29343f'
					)}
				>
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="phone-text">
						Continue
					</motion.span>
				</motion.button>
			</div>
		</div>
	)
}

export default VerifyCodeState
