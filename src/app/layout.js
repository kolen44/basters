import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Basters',
	description: 'Service for anime fans',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<link rel='icon' href='/icon.webp' type='image/<generated>' sizes='32' />
			<body className={inter.className}>{children}</body>
		</html>
	)
}
