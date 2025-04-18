'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer } from '@/components';

export default function ArticlesAndAdvicesPage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<main>
				<div>
					<h1>Artykuły i porady</h1>
				</div>
			</main>
			<Footer />
		</>
	);
}
