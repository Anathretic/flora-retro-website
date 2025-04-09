import { About, Blog, Contact, Footer, Header, Offer, Opinions, Welcome } from '@/components';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Welcome />
				<About />
				<Offer />
				<Opinions />
				<Blog />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
