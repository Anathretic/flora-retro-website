import { useEffect, useState } from 'react';
import { UseScrollStatusModel } from '../models/hooks.model';

export function useScrollStatus({ scrollRef, cart }: UseScrollStatusModel) {
	const [hasScroll, setHasScroll] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

	const handleScroll = () => {
		if (!scrollRef.current) return;
		const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

		setHasScroll(scrollHeight > clientHeight);
		setIsScrolled(scrollTop > 1);
		setIsScrolledToBottom(scrollTop + clientHeight >= scrollHeight - 1);
	};

	useEffect(() => {
		handleScroll();
	}, [cart]);

	useEffect(() => {
		if (!scrollRef.current) return;
		const el = scrollRef.current;

		el.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			el.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return { hasScroll, isScrolled, isScrolledToBottom };
}
