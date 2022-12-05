import { phone } from 'phone'
import { useEffect, useState } from 'react'
import CountryCodeSelect from './CountryCodeSelect'
import useIDKitStore, { IDKitStore } from '@/store/idkit'

const getParams = ({ setPhoneNumber }: IDKitStore) => ({ setFullPhone: setPhoneNumber })

const PhoneInput = () => {
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
	}, [countryCode, phoneNumber])

	return (
		<div>
			<label htmlFor="phone-number" className="sr-only block text-sm font-medium text-gray-700">
				Phone Number
			</label>
			<div className="relative mt-1 rounded-md shadow-sm bg-gray-100 py-4 px-3">
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
					value={phoneNumber}
					placeholder="Phone number"
					onChange={e => setPhoneNumber(e.target.value)}
					className="block w-full rounded-md border-transparent bg-transparent pl-24 focus:ring-transparent focus:border-transparent sm:text-sm"
				/>
			</div>
		</div>
	)
}

export default PhoneInput
