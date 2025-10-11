import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://flora-retro.pl';
	const date = new Date();

	return [
		{
			url: `${baseUrl}/`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseUrl}/artykuly-i-porady`,
			lastModified: date,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/dekoracje`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/wynajem-samochodu`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/wypozyczalnia-dekoracji`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/scianki-balonowe`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/polityka-prywatnosci`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/artykuly-i-porady/magiczne-dekoracje-slubne`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/artykuly-i-porady/top-5-dekoracji-sali-weselnej`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/artykuly-i-porady/jak-wybrac-auto-do-slubu`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/artykuly-i-porady/dekoracje-na-przyjecia`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/artykuly-i-porady/stol-weselny-ktory-zachwyci`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/artykuly-i-porady/idealna-papeteria-slubna`,
			lastModified: date,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
	];
}
