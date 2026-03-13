import { MetadataRoute } from 'next'
import { cities } from '@/lib/seo/cityData'

const BASE_URL = 'https://www.suburbanconstruction.com'

const staticPages = [
  { path: '/', priority: 1.0, changeFreq: 'weekly' },
  { path: '/contact', priority: 0.9, changeFreq: 'monthly' },
  { path: '/service-areas', priority: 0.9, changeFreq: 'monthly' },
  // Windows
  { path: '/windows/window-styles', priority: 0.8, changeFreq: 'monthly' },
  { path: '/windows/single-hung', priority: 0.7, changeFreq: 'monthly' },
  { path: '/windows/double-hung', priority: 0.7, changeFreq: 'monthly' },
  { path: '/windows/slider', priority: 0.7, changeFreq: 'monthly' },
  { path: '/windows/bay-and-bow', priority: 0.7, changeFreq: 'monthly' },
  { path: '/windows/garden-specialty', priority: 0.6, changeFreq: 'monthly' },
  { path: '/windows/casement', priority: 0.7, changeFreq: 'monthly' },
  { path: '/windows/basement', priority: 0.6, changeFreq: 'monthly' },
  { path: '/windows/egress', priority: 0.6, changeFreq: 'monthly' },
  { path: '/windows/krypton', priority: 0.8, changeFreq: 'monthly' },
  { path: '/windows/window-options', priority: 0.6, changeFreq: 'monthly' },
  { path: '/windows/window-installation', priority: 0.7, changeFreq: 'monthly' },
  { path: '/windows/storm', priority: 0.6, changeFreq: 'monthly' },
  { path: '/windows/replacement-windows-faq', priority: 0.7, changeFreq: 'monthly' },
  // Siding
  { path: '/siding/steel-siding', priority: 0.7, changeFreq: 'monthly' },
  { path: '/siding/composite-siding', priority: 0.7, changeFreq: 'monthly' },
  { path: '/siding/vinyl-siding', priority: 0.8, changeFreq: 'monthly' },
  { path: '/siding/insulated-siding', priority: 0.7, changeFreq: 'monthly' },
  { path: '/siding/siding-options', priority: 0.6, changeFreq: 'monthly' },
  { path: '/siding/siding-installation', priority: 0.7, changeFreq: 'monthly' },
  { path: '/siding/vinyl-siding-faq', priority: 0.6, changeFreq: 'monthly' },
  { path: '/siding/insulated-siding-faq', priority: 0.6, changeFreq: 'monthly' },
  // Doors
  { path: '/doors/door-styles', priority: 0.7, changeFreq: 'monthly' },
  { path: '/doors/entry', priority: 0.7, changeFreq: 'monthly' },
  { path: '/doors/easy-vent', priority: 0.6, changeFreq: 'monthly' },
  { path: '/doors/mini-blinds', priority: 0.5, changeFreq: 'monthly' },
  { path: '/doors/door-app', priority: 0.5, changeFreq: 'monthly' },
  // Gutters
  { path: '/gutters/seamless-gutters', priority: 0.7, changeFreq: 'monthly' },
  { path: '/gutters/shurflo', priority: 0.6, changeFreq: 'monthly' },
  { path: '/gutters/gutter-cap', priority: 0.7, changeFreq: 'monthly' },
  { path: '/gutters/gutter-installation', priority: 0.6, changeFreq: 'monthly' },
  { path: '/gutters/gutter-cap-faq', priority: 0.6, changeFreq: 'monthly' },
  // Patio
  { path: '/patio', priority: 0.6, changeFreq: 'monthly' },
  { path: '/patio/patio-awning', priority: 0.6, changeFreq: 'monthly' },
  { path: '/patio/swing-and-clean', priority: 0.5, changeFreq: 'monthly' },
  { path: '/patio/solar-shades', priority: 0.5, changeFreq: 'monthly' },
  { path: '/patio/awning-care', priority: 0.4, changeFreq: 'monthly' },
  { path: '/patio/canopies', priority: 0.5, changeFreq: 'monthly' },
  // About
  { path: '/about/our-story', priority: 0.6, changeFreq: 'yearly' },
  { path: '/about/meet-the-owners', priority: 0.5, changeFreq: 'yearly' },
  { path: '/about/showroom-tour', priority: 0.7, changeFreq: 'yearly' },
  { path: '/about/testimonials', priority: 0.7, changeFreq: 'monthly' },
  { path: '/about/in-the-news', priority: 0.4, changeFreq: 'monthly' },
  { path: '/about/referral-program', priority: 0.5, changeFreq: 'yearly' },
  // Resources
  { path: '/resources/faq', priority: 0.7, changeFreq: 'monthly' },
  { path: '/resources/condensation-faq', priority: 0.6, changeFreq: 'monthly' },
  { path: '/resources/convection-faq', priority: 0.5, changeFreq: 'monthly' },
  { path: '/resources/heater-cap-faq', priority: 0.5, changeFreq: 'monthly' },
  { path: '/resources/stain-formula-faq', priority: 0.4, changeFreq: 'monthly' },
  { path: '/resources/glossary', priority: 0.6, changeFreq: 'yearly' },
  { path: '/resources/recommended', priority: 0.5, changeFreq: 'yearly' },
  { path: '/resources/warranty-information', priority: 0.6, changeFreq: 'yearly' },
  { path: '/resources/downloads', priority: 0.5, changeFreq: 'monthly' },
  { path: '/resources/support', priority: 0.6, changeFreq: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ path, priority, changeFreq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority,
  }))

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/service-areas/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...cityEntries]
}
