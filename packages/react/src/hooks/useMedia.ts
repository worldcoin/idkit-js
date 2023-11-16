import { useEffect, useState } from 'react'

const useMedia = (): 'desktop' | 'mobile' => {
	const [media, setMedia] = useState<'desktop' | 'mobile'>('desktop')

	useEffect(() => {
		const mql = window.matchMedia('(max-width: 768px)')

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
