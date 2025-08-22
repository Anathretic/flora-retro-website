import { Metadata } from 'next';
import BalloonWallsPage from '@/features/balloon-walls/BalloonWallsPage';

export const metadata: Metadata = {
	title: 'Ścianki balonowe',
	description:
		'Balony z charakterem? Tak! Ścianki balonowe dodadzą energii i koloru Twojej uroczystości. Zobacz, jak mogę je dla Ciebie stworzyć.',
	alternates: {
		canonical: 'https://flora-retro.pl/scianki-balonowe',
	},
	openGraph: {
		title: 'Ścianki balonowe | Flora Retro',
		description:
			'Balony z charakterem? Tak! Ścianki balonowe dodadzą energii i koloru Twojej uroczystości. Zobacz, jak mogę je dla Ciebie stworzyć.',
		url: 'https://flora-retro.pl/scianki-balonowe',
		type: 'website',
	},
};

export default function BalloonWallsWrapper() {
	return (
		<>
			<BalloonWallsPage />
		</>
	);
}
