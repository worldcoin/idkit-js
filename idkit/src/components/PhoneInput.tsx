import { phone } from 'phone'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import CountryCodeSelect from './CountryCodeSelect'
import { Fragment, memo, useEffect, useState } from 'react'

const getParams = ({ setPhoneNumber }: IDKitStore) => ({ setFullPhone: setPhoneNumber })

const PhoneInput = ({ disabled, onSubmit }: { disabled?: boolean; onSubmit?: () => Promise<void> | void }) => {
	const { setFullPhone } = useIDKitStore(getParams)
	const [countryCode, setCountryCode] = useState<string>('1')
	const [phoneNumber, setPhoneNumber] = useState<string>('')

	useEffect(() => {
		const validatedPhone = phone(`+${countryCode} ${phoneNumber}`)
		if (!validatedPhone.isValid) {
			setFullPhone('')
			return
		}

		setFullPhone(validatedPhone.phoneNumber)
	}, [countryCode, phoneNumber, setFullPhone])

	return (
		<Fragment>
			<label htmlFor="phone-number" className="sr-only block text-sm font-medium text-gray-700">
				Phone Number
			</label>
			<div className="dark:bg-29343f relative mt-1 flex rounded-2xl border border-transparent bg-gray-100 py-4 px-3 shadow-sm transition-colors focus-within:border-[#5b52f3]">
				<div className="flex items-center">
					<label htmlFor="country" className="sr-only">
						Country
					</label>
					<CountryCodeSelect value={countryCode} onChange={setCountryCode} />
				</div>
				<input
					type="tel"
					id="phone-number"
					name="phone-number"
					value={phoneNumber}
					placeholder="Phone number"
					onChange={e => setPhoneNumber(e.target.value)}
					className="block w-full rounded-md border-transparent bg-transparent pl-6 focus:border-transparent focus:ring-transparent dark:text-white sm:text-sm"
					disabled={disabled}
					onKeyDown={e => e.key === 'Enter' && onSubmit?.()}
				/>
			</div>
		</Fragment>
	)
}

export default memo(PhoneInput)
