import type { IPhoneSignal } from '@/types'

const API_BASE_URL = 'https://developer.worldcoin.org/api/v1'

export async function requestCode(phone_number: string, action_id: string, ph_distinct_id: string) {
	const res = await fetch(`${API_BASE_URL}/phone/request`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			phone_number,
			action_id,
			channel: 'sms', // FIXME
			ph_distinct_id,
		}),
	})
	if (res.ok) {
		return
	}
	throw await res.json()
}

export async function verifyCode(phone_number: string, code: string, action_id: string, ph_distinct_id: string) {
	const res = await fetch(`${API_BASE_URL}/phone/verify`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			phone_number,
			code,
			action_id,
			ph_distinct_id,
		}),
	})
	if (res.ok) {
		return (await res.json()) as IPhoneSignal
	}
	throw await res.json()
}

export interface RequestCodeError {
	code: 'max_attempts' | 'server_error' | 'timeout'
	details: string
}

export function isRequestCodeError(error: unknown): error is RequestCodeError {
	return (
		typeof error === 'object' &&
		error !== null &&
		Object.prototype.hasOwnProperty.call(error as Record<string, unknown>, 'code')
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
