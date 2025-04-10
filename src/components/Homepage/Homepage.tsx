'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';

import BlogSection from './Blog/Blog';
import ContactSection from './Contact/Contact';
import IdeaSection from './Idea/Idea';
import OfferSection from './Offer/Offer';
import OpinionsSection from './Opinions/Opinions';
import WelcomeSection from './Welcome/Welcome';

export default function Homepage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(false);
	}, []);

	return (
		<main>
			<WelcomeSection />
			<IdeaSection />
			<OfferSection />
			<OpinionsSection />
			<BlogSection />
			<ContactSection />
		</main>
	);
}
