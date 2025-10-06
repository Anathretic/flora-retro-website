import { useEffect } from 'react';

export const useScrollBlock = (shouldBlock: boolean) => {
	useEffect(() => {
		const body = document.body;

		if (shouldBlock) {
			body.classList.add('scroll-block');
		} else {
			body.classList.remove('scroll-block');
		}

		return () => {
			body.classList.remove('scroll-block');
		};
	}, [shouldBlock]);
};
