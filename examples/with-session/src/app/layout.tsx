import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Worldcoin IDKit Session Example',
	description: 'Worldcoin IDKit Session Example',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
