/**
 * This module is fully experimental. Usage is not yet supported except as individually shared.
 */
import type { PhoneRequestErrorCodes, PhoneSignalProof, PhoneVerificationChannel } from '@/types'

const API_BASE_URL = 'https://world-id-lens-bridge.vercel.app/api/v1/'

export async function requestCode(
	phone_number: string,
	app_id: string,
	channel: PhoneVerificationChannel,
	ph_distinct_id: string
): Promise<void> {
	const res = await post('/phone/request', {
		phone_number,
		app_id,
		channel,
		ph_distinct_id,
	})

	if (!res.ok) throw await res.json()
}

interface VerifyCodeSuccess extends Pick<PhoneSignalProof, 'signature' | 'timestamp'> {
	success: true
	nullifier_hash: string
}

export async function verifyCode(
	phone_number: string,
	code: string,
	app_id: string,
	ph_distinct_id: string
): Promise<VerifyCodeSuccess> {
	const res = await post('/phone/verify', {
		phone_number,
		code,
		app_id,
		ph_distinct_id,
	})
	if (!res.ok) throw await res.json()

	return res.json() as Promise<VerifyCodeSuccess>
}

interface RequestCodeError {
	code: PhoneRequestErrorCodes
	detail: string
}

export function isRequestCodeError(error: unknown): error is RequestCodeError {
	return (
		typeof error === 'object' &&
		error !== null &&
		Object.prototype.hasOwnProperty.call(error as Record<string, unknown>, 'code') &&
		Object.prototype.hasOwnProperty.call(error as Record<string, unknown>, 'detail')
	)
}

export interface VerifyCodeError {
	code: 'invalid_code'
	details: string
}

export function isVerifyCodeError(error: unknown): error is VerifyCodeError {
	return (
		typeof error === 'object' &&
		error !== null &&
		Object.prototype.hasOwnProperty.call(error as Record<string, unknown>, 'code')
	)
}

const post = (path: string, body: Record<string, string>) =>
	fetch(`${API_BASE_URL}${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
