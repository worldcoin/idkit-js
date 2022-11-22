import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default App
