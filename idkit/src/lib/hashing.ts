import sha3 from 'js-sha3'
import type { AbiEncodedValue } from '@/types'
import { pack } from '@ethersproject/solidity'
import type { IDKitConfig } from '@/types/config'
import type { BytesLike } from '@ethersproject/bytes'
import { arrayify, concat, hexlify, isBytesLike } from '@ethersproject/bytes'

export interface HashFunctionOutput {
	hash: BigInt
	digest: string
}

/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. The function will try to determine the best hashing mechanism, if the string already looks like hex-encoded
 * bytes (e.g. `0x0000000000000000000000000000000000000000`), it will be hashed directly.
 * @param input Any string, hex-like string, bytes represented as a hex string.
 * @returns
 */
export function hashToField(input: Buffer | BytesLike): HashFunctionOutput {
	if (isBytesLike(input)) return hashEncodedBytes(input)

	return hashString(input as string)
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

	return hashEncodedBytes(pack(types, values))
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
function hashEncodedBytes(input: BytesLike): HashFunctionOutput {
	const hash = BigInt(keccak256(input)) >> BigInt(8)
	const rawDigest = hash.toString(16)

	return { hash, digest: `0x${rawDigest.padStart(64, '0')}` }
}

/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
function keccak256(value: BytesLike): string {
	const data = hexlify(concat([arrayify(value)]))

	return '0x' + sha3.keccak_256(arrayify(data))
}

export const validateABILikeEncoding = (value: string): boolean => {
	const ABI_REGEX = /^0x[\dabcdef]+$/
	return !!value.toString().match(ABI_REGEX) && value.length >= 66 // Because `0` contains 66 characters
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

export const generateExternalNullifier = (
	app_id: IDKitConfig['app_id'],
	action: IDKitConfig['action']
): HashFunctionOutput => {
	if (!action) return packAndEncode([['uint256', hashToField(app_id).hash]])
	if (typeof action === 'string') action = solidityEncode(['string'], [action])

	return packAndEncode([
		['uint256', hashToField(app_id).hash],
		...action.types.map((type, index) => [type, (action as AbiEncodedValue).values[index]] as [string, unknown]),
	])
}

export const encodeAction = (action: IDKitConfig['action']): string => {
	if (!action) return ''
	if (typeof action === 'string') return action

	return action.types.map((type, index) => `${type}(${action.values[index]})`).join(',')
}
