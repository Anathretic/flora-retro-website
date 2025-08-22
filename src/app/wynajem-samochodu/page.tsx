import { Metadata } from 'next';
import CarHirePage from '@/features/car-hire/CarHirePage';

export const metadata: Metadata = {
	title: 'Wynajem samochodu',
	description: 'Stylowy wynajem zabytkowego samochodu na ślub i sesję zdjęciową. Dodaj klasy swojemu wyjątkowemu dniu.',
	alternates: {
		canonical: 'https://flora-retro.pl/wynajem-samochodu',
	},
	openGraph: {
		title: 'Wynajem samochodu | Flora Retro',
		description:
			'Stylowy wynajem zabytkowego samochodu na ślub i sesję zdjęciową. Dodaj klasy swojemu wyjątkowemu dniu.',
		url: 'https://flora-retro.pl/wynajem-samochodu',
		type: 'website',
	},
};

export default function CarHireWrapper() {
	return (
		<>
			<CarHirePage />
		</>
	);
}
