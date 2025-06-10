import { verifyCloudProof, IVerifyResponse } from '@worldcoin/idkit'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
	const body = await req.json()
	const { proof, app_id, action, signal } = body
	const response = (await verifyCloudProof(proof, app_id, action, signal)) as IVerifyResponse
	return NextResponse.json(response, {status: response.success ? 200 : 400})
}
