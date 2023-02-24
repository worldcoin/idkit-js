import type { FC } from 'react'
import { useMemo } from 'react'
import root from 'react-shadow'
import { useState } from 'react'
import { useCallback } from 'react'
import SIWIButton from './SIWIButton'
import type { ISuccessResult } from '..'
import IDKitWidget from './IDKitWidget/BaseWidget'
import type { IDKitConfig, WidgetConfig } from '@/types/config'

type Props = Omit<WidgetConfig, 'handleVerify' | 'onSuccess'> &
	Pick<IDKitConfig, 'app_id' | 'walletConnectProjectId'> & {
		nonce?: string
		onSuccess: (jwt: string) => void
		children?: ({ open }: { open: () => void }) => JSX.Element
	}

const SignInWithWorldID: FC<Props> = ({ onSuccess, app_id, nonce, children, ...props }) => {
	const [token, setToken] = useState<string>('')
	const signal = useMemo<string>(() => {
		if (nonce) return nonce
		return Date.now().toString()
	}, [nonce])

	const handleVerify = useCallback(
		async (proof: ISuccessResult) => {
			const response = await fetch('https://dev2.worldcoin.org/api/v1/oidc/authorize', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...proof, app_id, nonce: signal, response_type: 'implicit' }),
			})

			if (!response.ok) {
				if (response.status != 400) {
					throw new Error('Something went wrong when verifying your identity. Please try again.')
				}

				const error = (await response.json()) as { code: string; message: string }
				throw new Error(error.message)
			}

			const { jwt } = (await response.json()) as { jwt: string }
			setToken(jwt)
		},
		[app_id, signal]
	)

	const onIDKitSuccess = useCallback(() => void onSuccess(token), [onSuccess, token])

	return (
		<IDKitWidget
			{...props}
			action=""
			app_id={app_id}
			signal={signal}
			internal_isSIWI
			onSuccess={onIDKitSuccess}
			handleVerify={handleVerify}
		>
			{({ open }) => children?.({ open }) ?? <SIWIButton />}
		</IDKitWidget>
	)
}

export default SignInWithWorldID
