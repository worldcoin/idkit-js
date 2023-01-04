import { motion } from 'framer-motion'
import { classNames } from '@/lib/utils'
import useIDKitStore from '@/store/idkit'
import { DEFAULT_COPY } from '@/types/config'
import type { IDKitStore } from '@/store/idkit'
import PhoneInput from '@/components/PhoneInput'
import WorldIDIcon from '@/components/WorldIDIcon'
import { isRequestCodeError, requestCode } from '@/services/phone'
import { getTelemetryId, telemetryPhoneTyped } from '@/lib/telemetry'
import { ErrorCodes, IDKITStage, PhoneVerificationChannel } from '@/types'

const getParams = ({
	processing,
	errorState,
	phoneNumber,
	stringifiedActionId,
	setStage,
	setProcessing,
	setErrorState,
	setErrorTitle,
	setErrorDetail,
	copy,
}: IDKitStore) => ({
	copy,
	processing,
	errorState,
	phoneNumber,
	stringifiedActionId,
	useWorldID: () => setStage(IDKITStage.WORLD_ID),
	onSubmit: async () => {
		try {
			setProcessing(true)
			setErrorState(null)
			await requestCode(phoneNumber, stringifiedActionId, PhoneVerificationChannel.SMS, getTelemetryId())
			telemetryPhoneTyped()
			setProcessing(false)
			setStage(IDKITStage.ENTER_CODE)
		} catch (error) {
			setProcessing(false)
			if (isRequestCodeError(error) && error.code !== 'server_error') {
				setErrorState({ code: ErrorCodes.GENERIC_ERROR })
				console.error(error)
			}
			setStage(IDKITStage.ERROR)
		}
	},
	onResetErrorState: () => {
		setErrorState(null)
	},
})

const EnterPhoneState = () => {
	const { copy, phoneNumber, processing, useWorldID, onSubmit } = useIDKitStore(getParams)

	return (
		<div className="space-y-6">
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
					{copy?.heading || DEFAULT_COPY.heading}
				</p>
				<p className="text-70868f mt-3 text-center md:mt-2">
					{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
					{copy?.subheading || DEFAULT_COPY.subheading}
				</p>
			</div>
			<div className="mt-2 space-y-2">
				<PhoneInput disabled={processing} onSubmit={onSubmit} />
				<p className="text-9eafc0 dark:text-596673 text-center text-xs">
					We&apos;ll call or text to confirm your number. No data is stored.
				</p>
			</div>
			<div className="flex items-center justify-center space-x-1">
				<div className="flex items-center space-x-2">
					<WorldIDIcon width={24} height={24} />
					<p className="text-9eafc0 dark:text-70868f font-medium">I have World ID</p>
				</div>
				<span className="font-medium text-gray-400">&bull;</span>
				<button
					onClick={useWorldID}
					className="bg-gradient-to-r from-[#FF6848] to-[#4940E0] bg-clip-text font-medium text-transparent"
				>
					Verify human
				</button>
			</div>
			<div className="mt-4 flex justify-center">
				<motion.button
					animate={{ opacity: phoneNumber ? 1 : 0.4 }}
					type="button"
					transition={{ layout: { duration: 0.15 } }}
					onClick={() => void onSubmit()}
					layoutId="submit-button"
					disabled={!phoneNumber || processing}
					className={classNames(
						'inline-flex items-center px-8 py-3 border border-transparent font-medium rounded-full shadow-sm',
						'text-white bg-indigo-600 hover:bg-indigo-700',
						'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
						'disabled:cursor-not-allowed disabled:bg-d3dfea dark:disabled:bg-29343f/50 disabled:text-9eafc0'
					)}
				>
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="button-text">
						Continue
					</motion.span>
				</motion.button>
			</div>
		</div>
	)
}

export default EnterPhoneState
