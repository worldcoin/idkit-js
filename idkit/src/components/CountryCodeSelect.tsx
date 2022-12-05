import { classNames } from '@/lib/utils'
import ReactCountryFlag from 'react-country-flag'
import { Fragment, useEffect, useState } from 'react'
import { allCountries } from 'country-telephone-data'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

type Props = {
	value: string
	onChange: (value: string) => void
}

const CountryCodeSelect = ({ value, onChange }: Props) => {
	const [countryCode, setCountryCode] = useState<string>('us')

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		onChange(allCountries.find(country => country.iso2 === countryCode)!.dialCode)
	}, [countryCode, onChange])

	return (
		<Listbox value={countryCode} onChange={setCountryCode}>
			{({ open }) => (
				<>
					<Listbox.Label className="sr-only block text-sm font-medium text-gray-700">
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
							<ChevronDownIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-1 max-h-96 w-full min-w-[20rem] overflow-y-scroll rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
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
