'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import { Footer } from '@/components';

export default function PrivacyPolicyPage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
	}, []);

	return (
		<>
			<main>
				<div>
					<h1>Polityka prywatności</h1>
				</div>
			</main>
			<Footer />
		</>
	);
}
