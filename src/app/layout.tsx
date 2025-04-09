import { Montserrat, Dancing_Script } from 'next/font/google';
import type { Metadata } from 'next';
import '../styles/globals.scss';

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

const dancingScript = Dancing_Script({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dancing-script',
});

export const metadata: Metadata = {
	title: 'Flora Retro - Pracownia Dekoracji - Izabela Szczygieł',
	description:
		'Flora Retro to pracownia dekoracyjna tworząca niepowtarzalny klimat na Twoim weselu. Kwiaty, dekoracje i stylizacje ślubne z duszą.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body className={`${montserrat.variable} ${dancingScript.variable}`}>{children}</body>
		</html>
	);
}
