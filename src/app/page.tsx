import Header from '@/shared/ui/Header/Header';
import Homepage from '@/features/home/Homepage';
import Footer from '@/shared/ui/Footer/Footer';
import { homepageNavbarItems } from '@/shared/ui/Header/components/navbarData/navbarItems';

export default function Home() {
	return (
		<>
			<Header navbarItems={homepageNavbarItems} />
			<Homepage />
			<Footer />
		</>
	);
}
