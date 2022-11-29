import { classNames } from '@/lib/utils'
import ReactCountryFlag from 'react-country-flag'
import { allCountries } from 'country-telephone-data'
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

type Props = {
	value: string
	onChange: (value: string) => void
}

const CountryCodeSelect = ({ value, onChange }: Props) => {
	const [countryCode, setCountryCode] = useState<string>('us')

	useEffect(() => {
		onChange(allCountries.find(country => country.iso2 === countryCode)!.dialCode)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countryCode])

	return (
		<Listbox value={countryCode} onChange={setCountryCode}>
			{({ open }) => (
				<>
					<Listbox.Label className="block text-sm font-medium text-gray-700 sr-only">
						Country Code
					</Listbox.Label>
					<div className="relative">
						<Listbox.Button className="flex items-center">
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
							<p className="ml-2.5 mr-1">+{value}</p>
							<ChevronDownIcon className="w-4 h-4 text-gray-600" aria-hidden="true" />
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 min-w-[20rem] mt-1 w-full px-1 overflow-y-scroll max-h-96 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{allCountries.map(country => (
									<Listbox.Option
										key={country.iso2}
										className={({ selected, active }) =>
											classNames(
												selected
													? 'bg-indigo-500 text-white font-medium'
													: active
													? 'bg-indigo-50/50'
													: 'text-gray-900',
												'relative flex items-center justify-between px-2 py-2 w-full rounded-md text-sm focus:bg-gray-100',
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

												<span className="font-normal">+{country.dialCode}</span>
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	)
}

export default CountryCodeSelect