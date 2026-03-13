import type { Metadata } from 'next'

export interface PageSeoConfig {
  title: string
  description: string
  keywords?: string[]
  canonicalPath: string
  ogImage?: string
}

const SITE_NAME = 'Suburban Construction'
const BASE_URL = 'https://www.suburbanconstruction.com'
const DEFAULT_OG_IMAGE = '/main.jpg'

export function generatePageMetadata(config: PageSeoConfig): Metadata {
  const fullTitle = `${config.title} | ${SITE_NAME}`
  const ogImage = config.ogImage ?? DEFAULT_OG_IMAGE

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords?.join(', '),
    alternates: {
      canonical: `${BASE_URL}${config.canonicalPath}`,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${BASE_URL}${config.canonicalPath}`,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: [ogImage],
    },
  }
}
