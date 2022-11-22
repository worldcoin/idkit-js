import 'twin.macro'
import ReactCountryFlag from 'react-country-flag'
import { allCountries } from 'country-telephone-data'
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
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
					<Listbox.Label tw="block text-sm font-medium text-gray-700 sr-only">Country Code</Listbox.Label>
					<div tw="relative">
						<Listbox.Button tw="flex items-center">
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
							<p tw="ml-2.5 mr-1">+{value}</p>
							<ChevronDownIcon tw="w-4 h-4 text-gray-600" aria-hidden="true" />
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options tw="absolute z-10 min-w-[20rem] mt-1 w-full px-1 overflow-y-scroll max-h-96 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{allCountries.map(country => (
									<Listbox.Option
										key={country.iso2}
										tw={
											'data-active:bg-indigo-50/50 data-selected-active:bg-indigo-500 data-selected:bg-indigo-500 data-selected:text-white data-selected:font-medium text-gray-900 relative flex items-center justify-between px-2 py-2 w-full rounded-md text-sm focus:bg-gray-100 focus:outline-none select-none'
										}
										value={country.iso2}
									>
										{({ selected }) => (
											<>
												<div tw="flex items-center">
													<ReactCountryFlag
														svg
														countryCode={country.iso2}
														style={{ width: 24, height: 24, flexShrink: 0 }}
													/>
													<p tw="mx-2 whitespace-pre-wrap text-left">{country.name}</p>
													{selected ? (
														<span tw="text-white">
															<CheckIcon tw="h-5 w-5" aria-hidden="true" />
														</span>
													) : null}
												</div>

												<span tw="font-normal">+{country.dialCode}</span>
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
