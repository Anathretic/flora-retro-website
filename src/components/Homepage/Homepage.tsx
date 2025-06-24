'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';

import WelcomeSection from './Welcome/Welcome';
import IdeaSection from './Idea/Idea';
import OfferSection from './Offer/Offer';
import OpinionsSection from './Opinions/Opinions';
import BlogSection from './Blog/Blog';
import ContactSection from './Contact/Contact';

export default function Homepage() {
	const { setShowSpecialLinks } = useFooterLinksContext();

	useEffect(() => {
		setShowSpecialLinks(true);
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
