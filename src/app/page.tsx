import { Footer, Header, Homepage } from '@/components';
import { homepageNavbarItems } from '@/components/Header/components/navbarData/navbarItems';

export default function Home() {
	return (
		<>
			<Header navbarItems={homepageNavbarItems} />
			<Homepage />
			<Footer />
		</>
	);
}
