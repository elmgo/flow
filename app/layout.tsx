import type { Metadata } from 'next'
import { Inter, Karla } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600'],
})

const karla = Karla({
	variable: '--font-karla',
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600'],
})

export const metadata: Metadata = {
	title: 'Flow',
	description: 'Flow',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${karla.variable} antialiased`}>
				<div>{children}</div>
			</body>
		</html>
	)
}
