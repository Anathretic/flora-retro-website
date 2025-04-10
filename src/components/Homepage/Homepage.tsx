'use client';

import { useEffect } from 'react';
import { useFooterLinksContext } from '@/hooks/useFooterLinksContext';
import AboutSection from './About/About';
import BlogSection from './Blog/Blog';
import ContactSection from './Contact/Contact';
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
			<AboutSection />
			<OfferSection />
			<OpinionsSection />
			<BlogSection />
			<ContactSection />
		</main>
	);
}
