import { Metadata } from 'next';
import ArticlesAndAdvicesPage from '@/features/articles/pages/ArticlesAndAdvicesPage';

export const metadata: Metadata = {
	title: 'Artykuły i porady',
	description:
		'Zbiór inspiracji, wskazówek i porad, które pomogą Ci stworzyć wyjątkową oprawę ślubu i wydarzeń okolicznościowych. Przeczytaj nasze artykuły i przygotuj się perfekcyjnie.',
	alternates: {
		canonical: 'https://flora-retro.pl/artykuly-i-porady',
	},
	openGraph: {
		title: 'Artykuły i porady | Flora Retro',
		description:
			'Zbiór inspiracji, wskazówek i porad, które pomogą Ci stworzyć wyjątkową oprawę ślubu i wydarzeń okolicznościowych. Przeczytaj nasze artykuły i przygotuj się perfekcyjnie.',
		url: 'https://flora-retro.pl/artykuly-i-porady',
		type: 'website',
	},
};

export default function ArticlesAndAdvicesWrapper() {
	return (
		<>
			<ArticlesAndAdvicesPage />
		</>
	);
}
