import { __ } from '@/lang'
import { phone } from 'phone'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import { Fragment, memo, useEffect, useState } from 'react'
import CountryCodeSelect from './IDKitWidget/experimental/components/CountryCodeSelect'

const getParams = ({ setPhoneNumber }: IDKitStore) => ({ setPhoneNumber })

const PhoneInput = ({ disabled, onSubmit }: { disabled?: boolean; onSubmit?: () => Promise<void> | void }) => {
	const { setPhoneNumber } = useIDKitStore(getParams)
	const [countryCode, setCountryCode] = useState<string>('1')
	const [phoneNumberState, setPhoneNumberState] = useState<string>('')

	useEffect(() => {
		const validatedPhone = phone(`+${countryCode} ${phoneNumberState}`)
		if (!validatedPhone.isValid) {
			setPhoneNumber('')
			return
		}

		setPhoneNumber(validatedPhone.phoneNumber)
	}, [countryCode, phoneNumberState, setPhoneNumber])

	return (
		<Fragment>
			<label htmlFor="phone-number" className="sr-only block text-sm font-medium text-gray-700">
				{__('Phone Number')}
			</label>
			<div className="dark:bg-29343f focus-within:border-0d151d relative mt-1 flex rounded-2xl border-2 border-transparent bg-gray-100 py-2 px-3 shadow-sm transition-colors focus-within:bg-white dark:focus-within:border-white dark:focus-within:bg-transparent">
				<div className="flex items-center">
					<label htmlFor="country" className="sr-only">
						{__('Country')}
					</label>
					<CountryCodeSelect value={countryCode} onChange={setCountryCode} disabled={disabled} />
				</div>
				<input
					type="tel"
					name="phone-number"
					value={phoneNumberState}
					placeholder={__('Phone number')}
					onChange={e => setPhoneNumberState(e.target.value)}
					className="placeholder:text-9eafc0 block w-full rounded-md border-transparent bg-transparent pl-6 focus:border-transparent focus:ring-transparent dark:text-white sm:text-sm"
					disabled={disabled}
					onKeyDown={e => e.key === 'Enter' && void onSubmit?.()}
				/>
			</div>
		</Fragment>
	)
}

export default memo(PhoneInput)
