import { memo, useState } from 'react'
import Countdown from 'react-countdown'
import useIDKitStore from '@/store/idkit'
import { ErrorCodes, IDKITStage } from '@/types'
import { PhoneVerificationChannel } from '@/types'
import { isRequestCodeError, requestCode } from '@/services/phone'
import { getTelemetryId, telemetryRetryCode } from '@/lib/telemetry'

const ONE_MINUTE = 59 * 1000

const renderer = ({ minutes, seconds, completed }: { minutes: number; seconds: number; completed: boolean }) => {
	if (completed) return

	return (
		<span>
			in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
		</span>
	)
}

const ResendButton = () => {
	const { phoneNumber, stringifiedActionId, setProcessing, setStage, setErrorState } = useIDKitStore()
	const [nextTime, setNextTime] = useState<number | undefined>(new Date().getTime() + ONE_MINUTE)

	const handleRetry = async (channel: PhoneVerificationChannel) => {
		setNextTime(new Date().getTime() + ONE_MINUTE)
		try {
			setProcessing(true)
			await requestCode(phoneNumber, stringifiedActionId, channel, getTelemetryId())
			telemetryRetryCode(channel)
			setProcessing(false)
		} catch (error) {
			setProcessing(false)
			setNextTime(undefined)
			if (isRequestCodeError(error) && error.code !== 'server_error') {
				setErrorState({ code: ErrorCodes.GENERIC_ERROR })
				console.error(error)
			} else {
				setStage(IDKITStage.ERROR)
			}
		}
	}

	return (
		<>
			<button
				type="button"
				disabled={!!nextTime}
				className="font-medium text-indigo-500 disabled:cursor-wait disabled:text-gray-900 dark:disabled:text-white"
				onClick={() => void handleRetry(PhoneVerificationChannel.SMS)}
			>
				Resend{' '}
				{nextTime && (
					<Countdown onComplete={() => setNextTime(undefined)} date={nextTime} renderer={renderer} />
				)}
			</button>{' '}
			or{' '}
			<button
				type="button"
				className="font-medium text-indigo-500 disabled:cursor-wait disabled:text-gray-900 dark:disabled:text-white"
				disabled={!!nextTime}
				onClick={() => void handleRetry(PhoneVerificationChannel.Call)}
			>
				Call me
			</button>
		</>
	)
}

export default memo(ResendButton)
