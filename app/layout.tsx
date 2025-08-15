import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
	title: 'HanaAI | Intelligent Kundeservice',
	description: 'Intelligent kundeservice løsninger med AI teknologi',
	generator: 'Next.js',
	icons: {
		icon: [{ url: '/favicon.svg' }, { url: '/favicon.ico' }],
		shortcut: '/favicon.svg',
		apple: '/favicon.svg',
	},
	keywords: [
		'AI kundeservice',
		'dansk AI',
		'kundesupport',
		'hanaai',
		'automatisering',
	],
	authors: [{ name: 'HanaAI' }],
	metadataBase: new URL('https://hanaai.dk'),
	openGraph: {
		title: 'HanaAI - Intelligent Kundeservice',
		description:
			'Professionel AI-drevet kundeservice løsning for danske virksomheder',
		url: 'https://hanaai.dk',
		siteName: 'HanaAI',
		locale: 'da_DK',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="da">
			<head>
				<style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
			</head>
			<body className={`${GeistSans.variable} ${GeistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
