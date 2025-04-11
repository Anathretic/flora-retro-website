import { Montserrat, Dancing_Script, Fleur_De_Leah } from 'next/font/google';
import type { Metadata } from 'next';
import Providers from '@/context/Providers';

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

const fleurDeLeah = Fleur_De_Leah({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-fleur-de-leah',
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
			<body className={`${montserrat.variable} ${dancingScript.variable} ${fleurDeLeah.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
