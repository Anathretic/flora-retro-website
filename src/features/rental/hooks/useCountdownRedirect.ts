import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCountdownRedirectModel } from '../models/hooks.model';

export function useCountdownRedirect({ redirectTo, start, startCount }: useCountdownRedirectModel) {
	const [counter, setCounter] = useState(startCount);
	const router = useRouter();

	useEffect(() => {
		if (!start) return;

		setCounter(startCount);

		const interval = setInterval(() => {
			setCounter(prev => {
				if (prev <= 1) {
					clearInterval(interval);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [start, startCount]);

	useEffect(() => {
		if (start && counter === 0) {
			router.push(redirectTo);
		}
	}, [counter, start, redirectTo, router]);

	return counter;
}
