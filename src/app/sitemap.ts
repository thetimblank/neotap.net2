import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://neotap.net',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}
