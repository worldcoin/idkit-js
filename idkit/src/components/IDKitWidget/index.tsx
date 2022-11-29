import { memo } from 'react'
import { StoreProvider } from '@/contexts/StoreContext'

import BaseWidget from './BaseWidget'

export const IDKitWidget = memo(function IDKitWidget() {
	return (
		<StoreProvider>
			<BaseWidget />
		</StoreProvider>
	)
})
