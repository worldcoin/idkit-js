import { motion } from 'framer-motion'
import useIDKitStore from '@/store/idkit'
import * as Toast from '@radix-ui/react-toast'
import type { IDKitStore } from '@/store/idkit'
import PhoneInput from '@/components/PhoneInput'
import { classNames, getCopy } from '@/lib/utils'
import WorldIDIcon from '@/components/WorldIDIcon'
import AboutWorldID from '@/components/AboutWorldID'
import XMarkIcon from '@/components/Icons/XMarkIcon'
import { isRequestCodeError, requestCode } from '@/services/phone'
import { getTelemetryId, telemetryPhoneTyped } from '@/lib/telemetry'
import { ErrorCodes, IDKITStage, PhoneRequestErrorCodes, PhoneVerificationChannel } from '@/types'

const getParams = ({
	processing,
	errorState,
	phoneNumber,
	stringifiedActionId,
	setStage,
	methods,
	setProcessing,
	setErrorState,
	copy,
}: IDKitStore) => ({
	copy,
	processing,
	errorState,
	phoneNumber,
	stringifiedActionId,
	showAbout: methods.length == 1,
	hasWorldID: methods.includes('orb'),
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
			console.error(error)
			setProcessing(false)
			let message: string | undefined = undefined
			if (isRequestCodeError(error)) {
				message = (Object.values(PhoneRequestErrorCodes).includes(error.code) && error.detail) || undefined
				if (error.code !== PhoneRequestErrorCodes.TIMEOUT) {
					setStage(IDKITStage.ERROR)
				}
			} else {
				setStage(IDKITStage.ERROR)
			}
			setErrorState({ code: ErrorCodes.PHONE_OTP_REQUEST_ERROR, message })
		}
	},
	onResetErrorState: () => {
		setErrorState(null)
	},
})

const EnterPhoneState = () => {
	const {
		copy,
		phoneNumber,
		processing,
		showAbout,
		onSubmit,
		errorState,
		onResetErrorState,
		hasWorldID,
		useWorldID,
	} = useIDKitStore(getParams)

	return (
		<div className="-mt-6 space-y-6">
			<Toast.Root
				className="absolute -mt-1 flex gap-4 rounded-md bg-[#fecaca] p-3 shadow-lg"
				open={!!errorState}
				onOpenChange={onResetErrorState}
				asChild
			>
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Toast.Title className="text-xs font-medium text-red-600">
						{/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
						{errorState?.message || 'Unable to send code. Please try again.'}
					</Toast.Title>
					<Toast.Action altText="Close">
						<XMarkIcon className="h-4 w-4" />
					</Toast.Action>
				</motion.div>
			</Toast.Root>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{getCopy(copy, 'heading')}
				</p>
				<p className="text-70868f mt-3 text-center md:mt-2">{getCopy(copy, 'subheading')}</p>
			</div>
			<div className="mt-2 space-y-2">
				<PhoneInput disabled={processing} onSubmit={onSubmit} />
				<p className="text-9eafc0 dark:text-9eafc0 text-center text-xs">
					We&apos;ll call or text to confirm your number. No data is stored.
				</p>
			</div>
			<div className="mt-4 flex justify-center">
				<motion.button
					animate={{ opacity: phoneNumber ? 1 : 0.4 }}
					type="button"
					whileTap={{ scale: phoneNumber ? 0.95 : 1 }}
					whileHover={{ scale: phoneNumber ? 1.05 : 1 }}
					transition={{ layout: { duration: 0.15 } }}
					onClick={() => void onSubmit()}
					layoutId="phone-button"
					disabled={!phoneNumber || processing}
					className={classNames(
						'flex w-full items-center justify-center px-8 py-4 border border-transparent font-medium rounded-xl shadow-sm',
						'bg-0d151d dark:bg-white text-white dark:text-0d151d',
						'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
						'disabled:cursor-not-allowed disabled:bg-d3dfea dark:disabled:bg-29343f'
					)}
				>
					<motion.span transition={{ layout: { duration: 0.15 } }} layoutId="phone-text">
						Continue
					</motion.span>
				</motion.button>
			</div>
			{showAbout && <AboutWorldID />}
			{hasWorldID && (
				<div className="hidden space-y-3 md:block">
					<div className="flex items-center justify-between space-x-6">
						<div className="bg-f2f5f9 dark:bg-29343f h-px flex-1" />
						<p className="text-9eafc0 dark:text-596673 text-xs">or</p>
						<div className="bg-f2f5f9 dark:bg-29343f h-px flex-1" />
					</div>
					<div className="flex items-center justify-center">
						<button onClick={useWorldID} className="flex items-center space-x-2">
							<WorldIDIcon />
							<p className="text-0d151d text-sm font-medium dark:text-white">Verify with World ID</p>
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default EnterPhoneState
