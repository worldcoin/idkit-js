import { classNames } from '@/lib/utils'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import type { ChangeEvent, ClipboardEvent, KeyboardEvent, RefObject } from 'react'
import { createRef, memo, useCallback, useEffect, useMemo, useState } from 'react'

type Array6<T> = [T, T, T, T, T, T]

const fillValues = (value: string): Array6<string> => {
	return new Array(6).fill('').map((_, index) => value[index] || '') as Array6<string>
}

const getParams = ({ code, setCode }: IDKitStore) => ({ code, setCode })

const SMSCodeInput = ({ submitRef, disabled }: { submitRef: RefObject<HTMLButtonElement>; disabled?: boolean }) => {
	const { code, setCode } = useIDKitStore(getParams)

	const inputsRefs = useMemo(() => new Array(6).fill(null).map(() => createRef<HTMLInputElement>()), [])
	const [values, setValues] = useState<Array6<string>>(fillValues(''))
	const [focusedIndex, setFocusedIndex] = useState<number>(-1)

	useEffect(() => {
		if (!code) {
			setValues(fillValues(''))
		}
	}, [code])

	const selectInputContent = useCallback(
		(index: number) => {
			requestAnimationFrame(() => {
				inputsRefs[index].current?.select()
			})
		},
		[inputsRefs]
	)

	const setValue = useCallback(
		(value: string, index: number) => {
			const nextValues = [...values]
			nextValues[index] = value

			setValues(nextValues as Array6<string>)

			const stringifiedValues = nextValues.join('')

			setCode('')
			if (stringifiedValues.length !== 6) return

			setCode(stringifiedValues)
		},
		[setCode, values]
	)

	const focusInput = useCallback(
		(index: number) => {
			requestAnimationFrame(() => {
				inputsRefs[index]?.current?.focus()
			})
		},
		[inputsRefs]
	)

	const blurInput = useCallback(
		(index: number) => {
			requestAnimationFrame(() => {
				inputsRefs[index].current?.blur()
			})
		},
		[inputsRefs]
	)

	const onInputFocus = (index: number) => {
		if (!inputsRefs[index]?.current) return

		setFocusedIndex(index)
		selectInputContent(index)
	}

	const onInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>, index: number) => {
			const value = event.target.value.replace(values[index], '')

			if (!/^\d/.test(value)) return selectInputContent(index)

			if (value.length > 1) {
				setValues(fillValues(event.target.value))

				if (event.target.value.length !== 6) return

				setCode(event.target.value)
				return blurInput(index)
			}

			setValue(value, index)

			if (index === 5) {
				requestAnimationFrame(() => {
					submitRef.current?.focus()
				})
			} else focusInput(index + 1)
		},
		[blurInput, submitRef, focusInput, selectInputContent, setCode, setValue, values]
	)

	const onInputKeyDown = useCallback(
		(event: KeyboardEvent<HTMLInputElement>, index: number) => {
			if (event.key === 'Backspace' || event.key === 'Delete') {
				event.preventDefault()

				setValue('', focusedIndex)
				return focusInput(index - 1)
			}

			if (event.key === values[index]) {
				if (index === 5) return blurInput(index)

				focusInput(index + 1)
			}
		},
		[focusInput, blurInput, focusedIndex, setValue, values]
	)

	const onInputPaste = useCallback(
		(event: ClipboardEvent<HTMLInputElement>, index: number) => {
			event.preventDefault()

			const pastedValue = event.clipboardData.getData('text')
			const nextValues = pastedValue.slice(0, 6)

			if (!/^\d/.test(nextValues)) return

			setValues(fillValues(nextValues))
			if (nextValues.length !== 6) return focusInput(nextValues.length)

			setCode(nextValues)
			blurInput(index)
		},
		[blurInput, focusInput, setCode]
	)

	useEffect(() => {
		focusInput(0)
	}, [focusInput, inputsRefs])

	return (
		<fieldset className="flex items-center justify-center space-x-3">
			<legend className="sr-only">Enter your SMS code</legend>
			{inputsRefs.map((ref, i) => (
				<input
					ref={ref}
					key={i}
					maxLength={1}
					type="number"
					pattern="[0-9]*"
					value={values[i]}
					inputMode="numeric"
					autoComplete="one-time-code"
					// eslint-disable-next-line jsx-a11y/no-autofocus
					autoFocus={i === 0}
					onFocus={() => onInputFocus(i)}
					onPaste={event => onInputPaste(event, i)}
					onChange={event => onInputChange(event, i)}
					onKeyDown={event => onInputKeyDown(event, i)}
					className={classNames(
						'w-10 xs:w-12 aspect-[6/7] border-0 outline-0 rounded-xl text-center caret-transparent text-29343f dark:text-white',
						'bg-gray-100 dark:bg-29343f focus:bg-transparent',
						'ring ring-transparent focus:ring-5b52f3'
					)}
					disabled={disabled}
				/>
			))}
		</fieldset>
	)
}

export default memo(SMSCodeInput)
