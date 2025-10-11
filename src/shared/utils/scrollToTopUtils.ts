export const scrollToTop = (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
	if (e?.ctrlKey) return;
	const body = document.querySelector('#root');
	body?.scrollIntoView();
};

export const scrollToTopOnNavLogoClick = (ref: React.RefObject<HTMLDivElement | null>) => {
	if (ref.current) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	if (window.location.hash) {
		window.history.replaceState({}, document.title, window.location.pathname);
	}
};
