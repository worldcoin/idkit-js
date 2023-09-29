export const buffer_encode = (buffer: ArrayBuffer): string => {
	let encoded = ''

	const bytes = new Uint8Array(buffer)
	for (let i = 0; i < bytes.byteLength; i++) {
		encoded += String.fromCharCode(bytes[i])
	}

	return Buffer.from(encoded).toString('base64')
}

export const buffer_decode = (encoded: string): ArrayBuffer => {
	const byteCharacters = Buffer.from(encoded, 'base64').toString('utf-8')

	const byteNumbers = new Array(byteCharacters.length)
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i)
	}

	return new Uint8Array(byteNumbers)
}
