import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, { DocumentContext } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				})
			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,
				styles: [
					<React.Fragment key="styles">
						{initialProps.styles}
						{sheet.getStyleElement()}
					</React.Fragment>,
				],
			}
		} finally {
			sheet.seal()
		}
	}
}
