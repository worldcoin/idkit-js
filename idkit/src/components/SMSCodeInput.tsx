import { memo } from 'react'
import { motion } from 'framer-motion'
import useIDKitStore from '@/store/idkit'
import type { IDKitStore } from '@/store/idkit'
import type { ClipboardEvent, RefObject } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { createRef, useCallback, useEffect, useMemo, useState } from 'react'

type Array6<T> = [T, T, T, T, T, T]

const fillValues = (value: string): Array6<string> => {
	return new Array(6).fill('').map((_, index) => value[index]) as Array6<string>
}

const getParams = ({ setCode }: IDKitStore) => ({ setCode })

const SMSCodeInput = ({ submitRef }: { submitRef: RefObject<HTMLButtonElement> }) => {
	const { setCode } = useIDKitStore(getParams)

	const inputsRefs = useMemo(() => new Array(6).fill(null).map(() => createRef<HTMLInputElement>()), [])
	const [values, setValues] = useState<Array6<string>>(fillValues(''))
	const [focusedIndex, setFocusedIndex] = useState<number>(-1)

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
				<motion.input
					ref={ref}
					key={i}
					maxLength={1}
					animate={{ ['--tw-ring-color' as string]: focusedIndex === i ? '#1e40af' : '#e5e7eb' }}
					type="number"
					pattern="[0-9]*"
					value={values[i]}
					inputMode="numeric"
					autoComplete="one-time-code"
					onFocus={() => onInputFocus(i)}
					onPaste={event => onInputPaste(event, i)}
					onChange={event => onInputChange(event, i)}
					onKeyDown={event => onInputKeyDown(event, i)}
					className="w-12 h-14 border-0 bg-gray-100 rounded-xl text-center"
				/>
			))}
		</fieldset>
	)
}

export default memo(SMSCodeInput)
