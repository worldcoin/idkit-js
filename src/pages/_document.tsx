import { getCssText } from '@/../stitches.config'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
	static async getInitialProps(ctx: any) {
		try {
			const initialProps = await NextDocument.getInitialProps(ctx)

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{/* Stitches CSS for SSR */}
						<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
					</>
				),
			}
		} finally {
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
