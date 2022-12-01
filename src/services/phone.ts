const ENDPOINT = 'https://developer.worldcoin.org'

export async function requestCode(phone_number: string, action_id: string) {
    const res = await fetch(ENDPOINT + '/api/v1/phone/request', {
        method: 'POST',
        body: JSON.stringify({
            phone_number,
            action_id,
            channel: 'sms', // FIXME
            ph_distinct_id: '' // FIXME
        })
    })
    if (res.ok) {
        return
    }
    throw await res.json()
}

export async function verifyCode(phone_number: string, code: string, action_id: string) {
    const res = await fetch(ENDPOINT + '/api/v1/phone/verify', {
        method: 'POST',
        body: JSON.stringify({
            phone_number,
            code,
            action_id,
            ph_distinct_id: '' // FIXME
        })
    })
    if (res.ok) {
        return await res.json()
    }
    throw await res.json()
}

export interface RequestCodeError {
    code: 'timeout' | 'max_attempts' | 'server_error'
    details: string
}

export function isRequestCodeError(error: unknown): error is RequestCodeError {
    return typeof error === 'object' && error !== null && (error as Record<string, unknown>).hasOwnProperty('code')
}

export interface VerifyCodeError {
    code: 'invalid_code'
    details: string
}

export function isVerifyCodeError(error: unknown): error is VerifyCodeError {
    return typeof error === 'object' && error !== null && (error as Record<string, unknown>).hasOwnProperty('code')
}
