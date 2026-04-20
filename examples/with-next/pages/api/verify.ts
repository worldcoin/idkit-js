import { NextApiRequest, NextApiResponse } from 'next'
import { verifyCloudProof, IVerifyResponse } from '@worldcoin/idkit'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method != 'POST') return res.status(405).json({ message: 'Method Not Allowed' })

	const { proof, app_id, action, signal } = req.body

	// Validate app_id to avoid using arbitrary user input in upstream request URLs.
	const appIdPattern = /^app_[A-Za-z0-9_-]+$/
	if (typeof app_id !== 'string' || !appIdPattern.test(app_id)) {
		return res.status(400).json({ message: 'Invalid app_id format' })
	}

	const response = (await verifyCloudProof(proof, app_id, action, signal)) as IVerifyResponse
	res.status(response.success ? 200 : 400).json(response)
}
