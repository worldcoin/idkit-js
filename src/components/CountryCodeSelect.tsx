import { classNames } from '@/lib/utils'
import ReactCountryFlag from 'react-country-flag'
import { allCountries } from 'country-telephone-data'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'

type Props = {
	value: string
	onChange: (value: string) => void
}

const CountryCodeSelect = ({ value, onChange }: Props) => {
	const [countryCode, setCountryCode] = useState<string>('us')
	const listRef = useRef<HTMLUListElement>(null)

	// FIXME: temporary solution for scroll list
	useEffect(() => {
		const List = listRef.current

		if (!List) {
			return
		}

		let touchY = 0

		const handleWheel = (e: WheelEvent) => {
			List.scrollTop += e.deltaY
		}

		const handleTouchStart = (e: TouchEvent) => {
			touchY = List.scrollTop + e.touches[0].pageY
		}

		const handleTouchMove = (e: TouchEvent) => {
			List.scrollTop = touchY - e.touches[0].pageY
		}

		List.addEventListener('wheel', handleWheel)
		List.addEventListener('touchstart', handleTouchStart)
		List.addEventListener('touchmove', handleTouchMove)

		return () => {
			List.removeEventListener('wheel', handleWheel)
			List.removeEventListener('touchstart', handleTouchStart)
			List.removeEventListener('touchmove', handleTouchMove)
		}
	}, [])

	const handleSetListHeight = useCallback(() => {
		const List = listRef?.current

		if (!List) {
			return
		}

		const bounds = List.getBoundingClientRect()

		List.style.maxHeight = `${window.innerHeight - bounds.top - bounds.height}px`
	}, [])

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		onChange(allCountries.find(country => country.iso2 === countryCode)!.dialCode)
	}, [countryCode])

	return (
		<Listbox value={countryCode} onChange={setCountryCode}>
			{({ open }) => (
				<>
					<Listbox.Label className="block text-sm font-medium text-gray-700 sr-only">
						Country Code
					</Listbox.Label>
					<Listbox.Button className="flex items-center flex-none">
						<ReactCountryFlag
							svg
							countryCode={countryCode}
							style={{
								width: 24,
								height: 24,
								flexShrink: 0,
								objectFit: 'cover',
								borderRadius: '50%',
							}}
						/>
						<p className="ml-2.5 mr-1 dark:text-white">+{value}</p>
						<ChevronDownIcon className="w-4 h-4 text-9eafc0 shrink-0 basis-4" aria-hidden="true" />
					</Listbox.Button>

					<Transition
						show={open}
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						beforeEnter={handleSetListHeight}
						unmount={false}
					>
						<Listbox.Options
							ref={listRef}
							className="absolute z-10 inset-x-0 top-full mt-1.5 min-w-[calc(100vw_-_48px)] md:min-w-[20rem] max-h-[var(--max-h,_0px)] md:max-h-96 w-full px-2 overflow-y-scroll rounded-2xl bg-white dark:bg-29343f py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
							unmount={false}
						>
							{allCountries.map(country => (
								<Listbox.Option
									key={country.iso2}
									className={({ selected, active }) =>
										classNames(
											'dark:text-white',
											selected
												? 'bg-indigo-500 text-white font-medium'
												: active
												? 'bg-indigo-50/50 dark:bg-ece8fb/10'
												: 'text-gray-900 dark:text-white',
											'relative flex items-center justify-between px-2 py-2 w-full rounded-2xl text-sm focus:bg-gray-100 dark:focus:bg-ece8fb/25',
											'focus:outline-none select-none'
										)
									}
									value={country.iso2}
								>
									{({ selected }) => (
										<>
											<div className="flex items-center">
												<ReactCountryFlag
													svg
													countryCode={country.iso2}
													style={{ width: 24, height: 24, flexShrink: 0 }}
												/>
												<p className="mx-2 whitespace-pre-wrap">{country.name}</p>
												{selected ? (
													<span className="text-white">
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</div>

											<span
												className={classNames(
													'font-medium',
													selected ? 'text-white' : 'text-6445dd dark:text-white'
												)}
											>
												+{country.dialCode}
											</span>
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</>
			)}
		</Listbox>
	)
}

export default CountryCodeSelect
