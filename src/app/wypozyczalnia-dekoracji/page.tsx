import { Metadata } from 'next';
import DecorationRentalPage from './DecorationRentalPage/DecorationRentalPage';

export const metadata: Metadata = {
	title: 'Wypożyczalnia dekoracji',
	description: 'Wypożycz wyjątkowe dekoracje na swój dzień. Oszczędnie, wygodnie i stylowo – sprawdź ofertę.',
	alternates: {
		canonical: 'https://flora-retro.pl/wypozyczalnia-dekoracji',
	},
	openGraph: {
		title: 'Wypożyczalnia dekoracji | Flora Retro',
		description: 'Wypożycz wyjątkowe dekoracje na swój dzień. Oszczędnie, wygodnie i stylowo – sprawdź ofertę.',
		url: 'https://flora-retro.pl/wypozyczalnia-dekoracji',
		type: 'website',
	},
};

export default function DecorationRentalWrapper() {
	return (
		<>
			<DecorationRentalPage />
		</>
	);
}
