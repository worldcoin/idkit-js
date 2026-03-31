import { describe, it, expect } from 'vitest'
import { validate_bridge_url } from '../lib/validation'

describe('validate_bridge_url', () => {
	// valid urls
	it('accepts a valid https worldcoin url', () => {
		const result = validate_bridge_url('https://bridge.worldcoin.org')
		expect(result).toEqual({ valid: true })
	})

	it('accepts a valid https toolsforhumanity url', () => {
		const result = validate_bridge_url('https://bridge.toolsforhumanity.com')
		expect(result).toEqual({ valid: true })
	})

	// invalid urls
	it('rejects a url that cant be parsed', () => {
		const result = validate_bridge_url('not a url')
		expect(result).toEqual({ valid: false, errors: ['Failed to parse Bridge URL.'] })
	})

	it('rejects http urls', () => {
		const result = validate_bridge_url('http://bridge.worldcoin.org')
		expect(result.valid).toBe(false)
		if (!result.valid) {
			expect(result.errors).toContain('Bridge URL must use HTTPS.')
		}
	})

	it('rejects urls with custom port', () => {
		const result = validate_bridge_url('https://bridge.worldcoin.org:8080')
		expect(result.valid).toBe(false)
		if (!result.valid) {
			expect(result.errors).toContain('Bridge URL must use the default port (443).')
		}
	})

	it('rejects urls with a path', () => {
		const result = validate_bridge_url('https://bridge.worldcoin.org/some/path')
		expect(result.valid).toBe(false)
		if (!result.valid) {
			expect(result.errors).toContain('Bridge URL must not have a path.')
		}
	})

	it('rejects urls with query params', () => {
		const result = validate_bridge_url('https://bridge.worldcoin.org?key=value')
		expect(result.valid).toBe(false)
		if (!result.valid) {
			expect(result.errors).toContain('Bridge URL must not have query parameters.')
		}
	})

	it('rejects urls with a fragment', () => {
		const result = validate_bridge_url('https://bridge.worldcoin.org#section')
		expect(result.valid).toBe(false)
		if (!result.valid) {
			expect(result.errors).toContain('Bridge URL must not have a fragment.')
		}
	})

	it('returns multiple errors at once', () => {
		const result = validate_bridge_url('http://bridge.worldcoin.org:9000/path?q=1#frag')
		expect(result.valid).toBe(false)
		if (!result.valid) {
			expect(result.errors.length).toBeGreaterThanOrEqual(4)
		}
	})

	// staging / localhost
	it('allows localhost when staging is true', () => {
		const result = validate_bridge_url('http://localhost:3000', true)
		expect(result).toEqual({ valid: true })
	})

	it('allows 127.0.0.1 when staging is true', () => {
		const result = validate_bridge_url('http://127.0.0.1:3000', true)
		expect(result).toEqual({ valid: true })
	})

	it('rejects localhost when staging is false', () => {
		const result = validate_bridge_url('http://localhost:3000', false)
		expect(result.valid).toBe(false)
	})

	it('rejects localhost when staging is not set', () => {
		const result = validate_bridge_url('http://localhost:3000')
		expect(result.valid).toBe(false)
	})
})
