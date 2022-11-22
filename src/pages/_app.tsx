import type { AppProps } from 'next/app'
import globalStyles from '@/styles/GlobalStyles'

const App = ({ Component, pageProps }: AppProps) => {
	globalStyles()
	return <Component {...pageProps} />
}

export default App
