import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = ['', '/projets'];
  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: r === '' ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${base}/projets/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}