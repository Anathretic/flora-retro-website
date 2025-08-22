import { ClientFetchWithCacheModel } from '../models/utils.model';

export const clientFetchWithCache = async <T>({
	key,
	url,
	maxAgeMinutes = 60,
}: ClientFetchWithCacheModel): Promise<T | null> => {
	const cached = localStorage.getItem(key);

	if (cached) {
		try {
			const parsed = JSON.parse(cached);
			if (Date.now() - parsed.timestamp < maxAgeMinutes * 60 * 1000) {
				return parsed.data as T;
			}
		} catch {
			localStorage.removeItem(key);
		}
	}

	try {
		const res = await fetch(url);
		if (!res.ok) return null;
		const data = await res.json();
		localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
		return data;
	} catch (error) {
		console.error(`Błąd podczas pobierania danych z ${url}:`, error);
		return null;
	}
};
