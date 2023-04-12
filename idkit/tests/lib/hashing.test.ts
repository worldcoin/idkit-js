import { hashToField, validateABILikeEncoding } from '@/lib/hashing'

describe('validateABILikeEncoding', () => {
	it('validates correct cases', () => {
		expect(
			validateABILikeEncoding('0x0000000000000000000000000000000000000000000000000000000000000000')
		).toBeTruthy() // uint8
		expect(
			validateABILikeEncoding('0x0000000000000000000000000000000000000000000000000000000000000001')
		).toBeTruthy() // bool
		expect(
			validateABILikeEncoding(
				'0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000a68656c6c6f576f726c6400000000000000000000000000000000000000000000'
			)
		).toBeTruthy() // string
		expect(
			validateABILikeEncoding('0x0000000000000000000000004976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41')
		).toBeTruthy() // address
		expect(
			validateABILikeEncoding(
				'0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000013100000000000000000000000000000000000000000000000000000000000000'
			)
		).toBeTruthy() // another string
	})

	it('rejects invalid cases', () => {
		expect(validateABILikeEncoding('0x123')).toBeFalsy() // too short
		expect(validateABILikeEncoding('????')).toBeFalsy() // invalid format
		expect(validateABILikeEncoding('0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41')).toBeFalsy() // improperly padded
		expect(validateABILikeEncoding('1')).toBeFalsy()
		expect(validateABILikeEncoding('🪙🪙🪙')).toBeFalsy() // invalid chars
		expect(
			validateABILikeEncoding('0x00000000000000000000000000000000000000@0000000000000000000000000')
		).toBeFalsy() // invalid chars
		expect(
			validateABILikeEncoding('0x000000000000000000000000000000000000000000000000000000000000000z')
		).toBeFalsy() // invalid chars
	})
})

describe('hashToField', () => {
	it('properly identifies an address as bytes', () => {
		const hashed = hashToField('0xaaad5A58AB11bc7eE9668f6b7fF52BDde0C64774')
		expect(hashed.digest).toEqual('0x0036434bc85c8a3564d1b3a2945690c43175fce6d0af9453c091ddec1f818fe5')
		expect(hashed.hash).toEqual(BigInt(hashed.digest))
	})
	it('properly identifies a number as bytes', () => {
		const hashed = hashToField('0x0000000000000000000000000000000000000000000000000000000000000001')
		expect(hashed.digest).toEqual('0x00b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0c')
		expect(hashed.hash).toEqual(BigInt(hashed.digest))
	})
	it('properly identifies a string as string', () => {
		const hashed = hashToField('wid_staging_1')
		expect(hashed.digest).toEqual('0x00287d53b28fff709bfe583d997b7ec96e89e2f621db8519cd0ffc2dfdce68e3')
		expect(hashed.hash).toEqual(BigInt(hashed.digest))
	})
})
