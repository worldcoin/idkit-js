import { phone } from 'phone'
import CountryCodeSelect from './CountryCodeSelect'
import { StoreContext } from '@/contexts/StoreContext'
import { useContext, useEffect, useState } from 'react'

const PhoneInput = () => {
	const { setPhoneNumber } = useContext(StoreContext)
	const [countryCode, setCountryCode] = useState<string>('1')
	const [phoneInput, setPhoneInput] = useState<string>('')

	useEffect(() => {
		const validatedPhone = phone(`+${countryCode} ${phoneInput}`)
		if (!validatedPhone.isValid) {
			setPhoneNumber('')
			return
		}

		setPhoneNumber(validatedPhone.phoneNumber)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countryCode, phoneInput])

	return (
		<div>
			<label htmlFor="phone-number" className="sr-only block text-sm font-medium text-gray-700">
				Phone Number
			</label>
			<div className="relative mt-1 rounded-md bg-gray-100 py-4 px-3 shadow-sm">
				<div className="absolute inset-y-0 left-3 flex items-center">
					<label htmlFor="country" className="sr-only">
						Country
					</label>
					<CountryCodeSelect value={countryCode} onChange={setCountryCode} />
				</div>
				<input
					type="tel"
					id="phone-number"
					name="phone-number"
					value={phoneInput}
					placeholder="Phone number"
					onChange={e => setPhoneInput(e.target.value)}
					className="block w-full rounded-md border-transparent bg-transparent pl-24 focus:border-transparent focus:ring-transparent sm:text-sm"
				/>
			</div>
		</div>
	)
}

export default PhoneInput
