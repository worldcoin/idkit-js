import sha3 from 'js-sha3'
import { pack } from '@ethersproject/solidity'
import type { BytesLike } from '@ethersproject/bytes'
import type { StringOrAdvanced } from '@/types/config'
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
export function worldIDHash(input: Buffer | BytesLike | StringOrAdvanced): HashFunctionOutput {
	if (Array.isArray(input)) return packAndEncode(input)
	if (isBytesLike(input)) return hashEncodedBytes(input)

	return hashString(input as string)
}

function packAndEncode(input: [string, unknown][]): HashFunctionOutput {
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
 * Using `worldIDHash` is recommended! Use this if you're certain you want to hash a string.
 * Converts an input to bytes and then hashes it with the World ID protocol hashing function.
 * @param input - String to hash
 * @returns hash
 */
export function hashString(input: string): HashFunctionOutput {
	const bytesInput = Buffer.from(input)

	return hashEncodedBytes(bytesInput)
}

/**
 * Using `worldIDHash` is recommended! Use this if you're certain you want to hash raw bytes.
 * Hashes raw bytes input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. Example use cases include when you're hashing an address to be verified in a smart contract.
 * @param input - Bytes represented as a hex string.
 * @returns
 */
export function hashEncodedBytes(input: BytesLike): HashFunctionOutput {
	const hash = BigInt(keccak256(input)) >> BigInt(8)
	const rawDigest = hash.toString(16)

	return { hash, digest: `0x${rawDigest.padStart(64, '0')}` }
}

/**
 * Partial implementation of `keccak256` hash from @ethersproject/solidity; only supports hashing a single BytesLike value
 * @param value value to hash
 * @returns
 */
export function keccak256(value: BytesLike): string {
	const data = hexlify(concat([arrayify(value)]))

	return '0x' + sha3.keccak_256(arrayify(data))
}

export const validateABILikeEncoding = (value: string): boolean => {
	const ABI_REGEX = /^0x[\dabcdef]+$/
	return !!value.toString().match(ABI_REGEX) && value.length >= 66 // Because `0` contains 66 characters
}
