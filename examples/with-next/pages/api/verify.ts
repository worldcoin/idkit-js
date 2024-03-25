import { NextApiRequest, NextApiResponse } from 'next'
import { verifyCloudProof, IVerifyResponse } from '@worldcoin/idkit'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method != 'POST') return res.status(405).json({ message: 'Method Not Allowed' })

	const { proof, app_id, action, signal } = req.body
	const response = (await verifyCloudProof(proof, app_id, action, signal)) as IVerifyResponse
	res.status(response.success ? 200 : 400).json(response)
}
