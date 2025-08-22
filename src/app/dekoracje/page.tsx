import { Metadata } from 'next';
import DecorationsPage from '@/features/decorations/DecorationsPage';

export const metadata: Metadata = {
	title: 'Dekoracje ślubne i okolicznościowe',
	description:
		'Zanurz się w świecie kwiatów i dekoracji tworzonych z pasją. Flora Retro oferuje unikalne dekoracje ślubne i na specjalne okazje.',
	alternates: {
		canonical: 'https://flora-retro.pl/dekoracje',
	},
	openGraph: {
		title: 'Dekoracje ślubne i okolicznościowe | Flora Retro',
		description:
			'Zanurz się w świecie kwiatów i dekoracji tworzonych z pasją. Flora Retro oferuje unikalne dekoracje ślubne i na specjalne okazje.',
		url: 'https://flora-retro.pl/dekoracje',
		type: 'website',
	},
};

export default function DecorationsWrapper() {
	return (
		<>
			<DecorationsPage />
		</>
	);
}
