import { hashToField } from './hashing'
import type { ISuccessResult } from '../types'
import { isNode, isDeno } from 'browser-or-node'

export interface IVerifyResponse {
	success: boolean
	code?: string
	detail?: string
	attribute?: string | null
}

export async function verifyCloudProof(
	proof: ISuccessResult,
	app_id: `app_${string}`,
	action: string,
	signal?: string
): Promise<IVerifyResponse> {
	if (!isNode && !isDeno) {
		throw new Error('verifyCloudProof can only be used in the backend.')
	}

	const response = await fetch(`https://developer.worldcoin.org/api/v2/verify/${app_id}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...proof,
			action,
			signal_hash: hashToField(signal ?? '').digest,
		}),
	})

	if (response.ok) {
		return { success: true }
	} else {
		return { success: false, ...(await response.json()) } as IVerifyResponse
	}
}
