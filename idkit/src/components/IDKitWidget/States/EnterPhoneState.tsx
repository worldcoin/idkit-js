import { motion } from 'framer-motion'
import { useCallback, useContext } from 'react'
import PhoneInput from '@/components/PhoneInput'
import WorldIDIcon from '@/components/WorldIDIcon'
import { StoreContext, IDKITStage } from '@/contexts/StoreContext'

const EnterPhoneState = () => {
	const { phoneNumber, setStage } = useContext(StoreContext)

	const useWorldID = useCallback(() => setStage(IDKITStage.WORLD_ID), [setStage])
	const onSubmit = useCallback(() => setStage(IDKITStage.ENTER_CODE), [setStage])

	return (
		<div className="space-y-6">
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900">
					Verify your phone number for free gassless transactions.
				</p>
				<p className="mt-2 text-center text-gray-500">We&apos;ll take care of the rest!</p>
			</div>
			<div className="mt-2 space-y-2">
				<PhoneInput />
				<p className="text-center text-xs text-gray-400">
					We&apos;ll call or text to confirm your number. No data is stored.
				</p>
			</div>
			<div className="flex items-center justify-center space-x-1">
				<div className="flex items-center space-x-2">
					<WorldIDIcon width={24} height={24} />
					<p className="font-medium text-gray-500">I have World ID</p>
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
					onClick={onSubmit}
					layoutId="submit-button"
					disabled={!phoneNumber}
					className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-indigo-600"
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
