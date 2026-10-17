import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static'; // 👈 LIGNE À AJOUTER

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}