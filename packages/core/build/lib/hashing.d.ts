import type { IDKitConfig } from '@/types/config';
import type { AbiEncodedValue } from '@/types/config';
export interface HashFunctionOutput {
    hash: bigint;
    digest: `0x${string}`;
}
/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. The function will try to determine the best hashing mechanism, if the string already looks like hex-encoded
 * bytes (e.g. `0x0000000000000000000000000000000000000000`), it will be hashed directly.
 * @param input Any string, hex-like string, bytes represented as a hex string.
 * @returns
 */
export declare function hashToField(input: Uint8Array | `0x${string}` | string): HashFunctionOutput;
export declare function packAndEncode(input: [string, unknown][]): HashFunctionOutput;
export declare const validateABILikeEncoding: (value: string) => boolean;
export declare const solidityEncode: (types: string[], values: unknown[]) => AbiEncodedValue;
export declare const generateSignal: (signal: IDKitConfig['signal']) => HashFunctionOutput;
export declare const generateExternalNullifier: (app_id: IDKitConfig['app_id'], action: IDKitConfig['action']) => HashFunctionOutput;
export declare const encodeAction: (action: IDKitConfig['action']) => string;
