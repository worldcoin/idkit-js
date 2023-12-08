import { Buffer } from 'buffer/index.js'
import type { IDKitConfig } from '@/types/config'
import type { AbiEncodedValue } from '@/types/config'
import { encodePacked, isBytes, isHex, keccak256 } from 'viem'

export interface HashFunctionOutput {
	hash: bigint
	digest: `0x${string}`
}

/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. The function will try to determine the best hashing mechanism, if the string already looks like hex-encoded
 * bytes (e.g. `0x0000000000000000000000000000000000000000`), it will be hashed directly.
 * @param input Any string, hex-like string, bytes represented as a hex string.
 * @returns
 */
export function hashToField(input: Uint8Array | string): HashFunctionOutput {
	if (isBytes(input) || isHex(input)) return hashEncodedBytes(input)

	return hashString(input)
}

export function packAndEncode(input: [string, unknown][]): HashFunctionOutput {
	const [types, values] = input.reduce<[string[], unknown[]]>(
		([types, values], [type, value]) => {
			types.push(type)
			values.push(value)

			return [types, values]
		},
		[[], []]
	)

	return hashEncodedBytes(encodePacked(types, values))
}

/**
 * Converts an input to bytes and then hashes it with the World ID protocol hashing function.
 * @param input - String to hash
 * @returns hash
 */
function hashString(input: string): HashFunctionOutput {
	const bytesInput = Buffer.from(input)

	return hashEncodedBytes(bytesInput)
}

/**
 * Hashes raw bytes input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. Example use cases include when you're hashing an address to be verified in a smart contract.
 * @param input - Bytes represented as a hex string.
 * @returns
 */
function hashEncodedBytes(input: `0x${string}` | Uint8Array): HashFunctionOutput {
	const hash = BigInt(keccak256(input)) >> 8n
	const rawDigest = hash.toString(16)

	return { hash, digest: `0x${rawDigest.padStart(64, '0')}` }
}

export const solidityEncode = (types: string[], values: unknown[]): AbiEncodedValue => {
	if (types.length !== values.length) {
		throw new Error('Types and values arrays must have the same length.')
	}

	return { types, values } as AbiEncodedValue
}

export const generateSignal = (signal: IDKitConfig['signal']): HashFunctionOutput => {
	if (!signal || typeof signal === 'string') return hashToField(signal ?? '')

	return packAndEncode(signal.types.map((type, index) => [type, signal.values[index]]))
}

export const encodeAction = (action: IDKitConfig['action']): string => {
	if (!action) return ''
	if (typeof action === 'string') return action

	return action.types.map((type, index) => `${type}(${action.values[index]})`).join(',')
}
