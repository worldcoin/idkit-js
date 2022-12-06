import { phone } from 'phone'
import CountryCodeSelect from './CountryCodeSelect'
import useIDKitStore, { IDKitStore } from '@/store/idkit'
import { Fragment, memo, useEffect, useRef, useState } from 'react'

const getParams = ({ setPhoneNumber }: IDKitStore) => ({ setFullPhone: setPhoneNumber })

const PhoneInput = ({ disabled, onSubmit }: { disabled?: boolean; onSubmit?: () => Promise<void> | void }) => {
	const { setFullPhone } = useIDKitStore(getParams)
	const [countryCode, setCountryCode] = useState<string>('1')
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [listMaxHeight, setListMaxHeight] = useState<number | undefined>()
	const inputRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const validatedPhone = phone(`+${countryCode} ${phoneNumber}`)
		if (!validatedPhone.isValid) {
			setFullPhone('')
			return
		}

		setFullPhone(validatedPhone.phoneNumber)
	}, [countryCode, phoneNumber])

	useEffect(() => {
		const Input = inputRef.current

		if (!Input) {
			return
		}

		const handleListMaxHeight = () => {
			const InputBounds = Input.getBoundingClientRect()
			setListMaxHeight(window.innerHeight - InputBounds.top - InputBounds.height)
		}

		handleListMaxHeight()

		window.addEventListener('resize', handleListMaxHeight)

		return () => window.removeEventListener('resize', handleListMaxHeight)
	}, [])

	return (
		<Fragment>
			<label htmlFor="phone-number" className="sr-only block text-sm font-medium text-gray-700">
				Phone Number
			</label>
			<div
				className="relative mt-1 rounded-2xl shadow-sm flex bg-gray-100 py-4 px-3 border border-transparent focus-within:border-[#5b52f3] transition-colors"
				ref={inputRef}
			>
				<div className="flex items-center">
					<label htmlFor="country" className="sr-only">
						Country
					</label>
					<CountryCodeSelect value={countryCode} onChange={setCountryCode} listMaxHeight={listMaxHeight} />
				</div>
				<input
					type="tel"
					id="phone-number"
					name="phone-number"
					value={phoneNumber}
					placeholder="Phone number"
					onChange={e => setPhoneNumber(e.target.value)}
					className="block w-full rounded-md border-transparent bg-transparent pl-6 focus:ring-transparent focus:border-transparent sm:text-sm"
					disabled={disabled}
					onKeyDown={e => e.key === 'Enter' && onSubmit?.()}
				/>
			</div>
		</Fragment>
	)
}

export default memo(PhoneInput)
