import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/sent'],
    },
    sitemap: 'https://www.suburbanconstruction.com/sitemap.xml',
  }
}
