import type { Metadata } from 'next';
import { Montserrat, Dancing_Script, Fleur_De_Leah } from 'next/font/google';
import Providers from '@/shared/context/Providers';
import CookieBanner from '@/shared/ui/CookieBanner/CookieBanner';

import '../shared/styles/variables.scss';
import '../shared/styles/globals.scss';

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
	metadataBase: new URL('https://flora-retro.pl/'),
	title: {
		default: 'Flora Retro - Pracownia Dekoracji - Izabela Szczygieł',
		template: '%s | Flora Retro',
	},
	description:
		'Flora Retro to pracownia dekoracyjna tworząca niepowtarzalny klimat na Twoim weselu. Kwiaty, dekoracje i stylizacje ślubne z duszą.',
	keywords: [
		'dekoracje ślubne',
		'florystyka',
		'wesele',
		'bukiety',
		'Flora Retro',
		'Izabela Szczygieł',
		'dekoracje weselne',
		'kwiaty na ślub',
		'aranżacje kwiatowe',
		'sala weselna dekoracje',
		'stylizacja ślubna',
		'wynajem samochodu do ślubu',
		'samochód ślubny',
		'auto do ślubu',
		'retro samochód na wesele',
		'wypożyczalnia samochodów ślubnych',
		'ślub w stylu retro',
		'ślubna inspiracja',
		'kwiaty na wesele',
		'dekoracje kościoła',
		'dekoracje plenerowe',
		'ślubna aranżacja stołów',
	],
	authors: [{ name: 'Izabela Szczygieł', url: 'https://flora-retro.pl/' }],
	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		url: 'https://flora-retro.pl/',
		siteName: 'Flora Retro',
		title: 'Flora Retro - Pracownia Dekoracji - Izabela Szczygieł',
		description:
			'Kwiaty, dekoracje i stylizacje ślubne z duszą. Pracownia dekoracyjna tworzona przez Izabelę Szczygieł.',
	},
	alternates: {
		canonical: 'https://flora-retro.pl/',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	category: 'Ślub i dekoracje',
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
				<CookieBanner />
			</body>
		</html>
	);
}
