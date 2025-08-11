import { useEffect, useState } from 'react'

const useMedia = (): 'desktop' | 'mobile' => {
	// Check media query during initialization if window is available
	const getInitialState = (): 'desktop' | 'mobile' => {
		if (typeof window !== 'undefined') {
			return window.matchMedia('(max-width: 1024px)').matches ? 'mobile' : 'desktop'
		}
		return 'desktop' // Default for SSR
	}

	const [media, setMedia] = useState<'desktop' | 'mobile'>(getInitialState())

	useEffect(() => {
		const mql = window.matchMedia('(max-width: 1024px)')

		const handleChange = (mql: MediaQueryList | MediaQueryListEvent) => setMedia(mql.matches ? 'mobile' : 'desktop')

		handleChange(mql)
		mql.addEventListener('change', handleChange)
		return () => {
			mql.removeEventListener('change', handleChange)
		}
	}, [])

	return media
}

export default useMedia
