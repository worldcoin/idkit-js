import { classNames } from '@/lib/utils'
import CheckIcon from './Icons/CheckIcon'
import ReactCountryFlag from 'react-country-flag'
import { allCountries } from 'country-telephone-data'
import ChevronDownIcon from './Icons/ChevronDownIcon'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'

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
		const List = listRef.current
		if (!List) return

		const bounds = List.getBoundingClientRect()

		List.style.maxHeight = `${window.innerHeight - bounds.top - 12}px`
	}, [])

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
					<Listbox.Button className="relative z-20 flex flex-none items-center">
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
						<ChevronDownIcon className="text-9eafc0 h-1.5 w-auto shrink-0 basis-4" aria-hidden="true" />
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
							className="dark:bg-29343f absolute inset-x-0 top-full z-10 mt-1.5 max-h-[var(--max-h,_0px)] w-full min-w-[calc(100vw_-_48px)] overflow-hidden rounded-2xl bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm md:max-h-96 md:min-w-[20rem]"
							unmount={false}
						>
							<div className="overflow-y-scroll px-2 py-1">
								{allCountries.map(country => (
									<Listbox.Option
										key={country.iso2}
										className={({ selected, active }) =>
											classNames(
												'dark:text-white',
												selected
													? 'bg-0d151d dark:bg-white text-white dark:text-0d151d font-medium'
													: active
													? 'bg-0d151d/5 dark:bg-ece8fb/10'
													: 'text-gray-900 dark:text-white',
												'relative flex items-center justify-between px-2 py-2 w-full rounded-xl text-sm focus:bg-gray-100 dark:focus:bg-ece8fb/25',
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
															<CheckIcon className="h-auto w-3" aria-hidden="true" />
														</span>
													) : null}
												</div>
												<span
													className={classNames(
														'font-medium',
														selected
															? 'text-white dark:text-0d151d'
															: 'text-0d151d dark:text-white'
													)}
												>
													+{country.dialCode}
												</span>
											</>
										)}
									</Listbox.Option>
								))}
							</div>
						</Listbox.Options>
					</Transition>
				</>
			)}
		</Listbox>
	)
}

export default CountryCodeSelect
