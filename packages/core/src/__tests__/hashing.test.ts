import { describe, it, expect } from 'vitest'
import { hashToField, packAndEncode, solidityEncode, generateSignal, encodeAction } from '../lib/hashing'
import type { AbiEncodedValue } from '../types/config'

describe('hashToField', () => {
	it('returns a bigint hash and hex digest', () => {
		const result = hashToField('hello')
		expect(typeof result.hash).toBe('bigint')
		expect(result.digest).toMatch(/^0x[0-9a-f]{64}$/)
	})

	it('gives same output for same input', () => {
		const a = hashToField('test')
		const b = hashToField('test')
		expect(a.hash).toBe(b.hash)
		expect(a.digest).toBe(b.digest)
	})

	it('gives different output for different input', () => {
		const a = hashToField('hello')
		const b = hashToField('world')
		expect(a.hash).not.toBe(b.hash)
	})

	it('handles empty string', () => {
		const result = hashToField('')
		expect(typeof result.hash).toBe('bigint')
		expect(result.digest).toMatch(/^0x[0-9a-f]{64}$/)
	})

	it('handles hex input like an address', () => {
		const result = hashToField('0x0000000000000000000000000000000000000001')
		expect(typeof result.hash).toBe('bigint')
		expect(result.digest).toMatch(/^0x[0-9a-f]{64}$/)
	})
})

describe('packAndEncode', () => {
	it('encodes a single uint256 value', () => {
		const result = packAndEncode([['uint256', 1]])
		expect(typeof result.hash).toBe('bigint')
		expect(result.digest).toMatch(/^0x[0-9a-f]{64}$/)
	})

	it('encodes multiple values', () => {
		const result = packAndEncode([
			['address', '0x0000000000000000000000000000000000000001'],
			['uint256', 100],
		])
		expect(typeof result.hash).toBe('bigint')
	})

	it('gives same hash for same input', () => {
		const a = packAndEncode([['uint256', 42]])
		const b = packAndEncode([['uint256', 42]])
		expect(a.hash).toBe(b.hash)
	})
})

describe('solidityEncode', () => {
	it('returns an object with types and values', () => {
		const result = solidityEncode(['uint256'], [1])
		expect(result.types).toEqual(['uint256'])
		expect(result.values).toEqual([1])
	})

	it('throws if types and values have different lengths', () => {
		expect(() => solidityEncode(['uint256', 'address'], [1])).toThrow(
			'Types and values arrays must have the same length.'
		)
	})

	it('works with empty arrays', () => {
		const result = solidityEncode([], [])
		expect(result.types).toEqual([])
		expect(result.values).toEqual([])
	})
})

describe('generateSignal', () => {
	it('hashes undefined as empty string', () => {
		const result = generateSignal(undefined)
		const empty = hashToField('')
		expect(result.hash).toBe(empty.hash)
	})

	it('hashes a plain string signal', () => {
		const result = generateSignal('my-signal')
		expect(typeof result.hash).toBe('bigint')
	})

	it('handles AbiEncodedValue signal', () => {
		const signal = solidityEncode(['uint256'], [123]) as AbiEncodedValue
		const result = generateSignal(signal)
		expect(typeof result.hash).toBe('bigint')
	})
})

describe('encodeAction', () => {
	it('returns empty string for undefined', () => {
		expect(encodeAction(undefined as unknown as string)).toBe('')
	})

	it('returns the string as is for string input', () => {
		expect(encodeAction('my-action')).toBe('my-action')
	})

	it('formats AbiEncodedValue as type(value) pairs', () => {
		const action = solidityEncode(['uint256', 'address'], [1, '0xabc']) as AbiEncodedValue
		const result = encodeAction(action)
		expect(result).toBe('uint256(1),address(0xabc)')
	})

	it('handles single type AbiEncodedValue', () => {
		const action = solidityEncode(['uint256'], [42]) as AbiEncodedValue
		expect(encodeAction(action)).toBe('uint256(42)')
	})
})
