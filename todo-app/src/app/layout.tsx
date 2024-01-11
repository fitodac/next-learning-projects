import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './main.css'
import 'remixicon/fonts/remixicon.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'ToDo App',
	description: 'Made in Argentina',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`bg-slate-900 text-slate-400 ${inter.className}`}>
				{children}
			</body>
		</html>
	)
}
