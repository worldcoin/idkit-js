import { memo, useState } from 'react'
import Countdown from 'react-countdown'

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
	const [nextTime, setNextTime] = useState<number | undefined>(new Date().getTime() + ONE_MINUTE)

	return (
		<button
			type="button"
			disabled={!!nextTime}
			className="font-medium text-indigo-500 disabled:cursor-wait disabled:text-gray-900"
		>
			Resend{' '}
			{nextTime && <Countdown onComplete={() => setNextTime(undefined)} date={nextTime} renderer={renderer} />}
		</button>
	)
}

export default memo(ResendButton)
