import { useEffect, useState } from 'react';

export function useScrolled(threshold = 30): boolean {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > threshold);
		};

		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [threshold]);

	return isScrolled;
}
