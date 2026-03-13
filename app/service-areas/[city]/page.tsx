import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { cities, getCityBySlug, getNearbyCities } from '@/lib/seo/cityData'
import { getTestimonialsByCity } from '@/lib/testimonials'
import PageHero from '@/components/shared/PageHero'
import LeadCaptureForm from '@/components/shared/LeadCaptureForm'
import Link from 'next/link'
import { MapPin, Star, Phone } from 'lucide-react'

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  return generatePageMetadata({
    title: `Replacement Windows & Siding in ${city.name}, ${city.state}`,
    description: `Suburban Construction provides replacement windows, siding, doors, and gutters in ${city.name}, ${city.stateAbbr}. Family owned since 1985. Lifetime workmanship guarantee. Free estimates.`,
    keywords: [
      `replacement windows ${city.name} ${city.stateAbbr}`,
      `siding contractor ${city.name}`,
      `home improvement ${city.name} ${city.stateAbbr}`,
      `doors ${city.name} ${city.county}`,
      `gutters ${city.name} Iowa Illinois`,
      `Suburban Construction ${city.name}`,
    ],
    canonicalPath: `/service-areas/${city.slug}`,
    ogImage: '/main.jpg',
  })
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const nearbyCities = getNearbyCities(city)
  const cityTestimonials = getTestimonialsByCity(city.name).slice(0, 3)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Suburban Construction',
    url: 'https://www.suburbanconstruction.com',
    telephone: ['+15633914000', '+18007173066'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3602 North Harrison',
      addressLocality: 'Davenport',
      addressRegion: 'IA',
      postalCode: '52806',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedIn: { '@type': 'State', name: city.state },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.suburbanconstruction.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://www.suburbanconstruction.com/service-areas' },
      { '@type': 'ListItem', position: 3, name: `${city.name}, ${city.stateAbbr}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title={city.headline}
        subtitle={`Serving ${city.name} and ${city.county} since 1985`}
        breadcrumbs={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${city.name}, ${city.stateAbbr}` },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed text-lg">{city.intro}</p>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Home Improvement Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Replacement Windows', href: '/windows/window-styles', desc: 'Triple pane krypton, double hung, bay & bow, casement, and more.' },
              { title: 'Siding', href: '/siding/vinyl-siding', desc: 'Vinyl, steel, composite, and insulated siding options.' },
              { title: 'Doors', href: '/doors/door-styles', desc: 'Entry doors, storm doors, mini-blinds options.' },
              { title: 'Gutters', href: '/gutters/seamless-gutters', desc: 'Seamless gutters, Gutter Cap, Shur Flow, Heater Cap.' },
            ].map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="bg-white rounded-lg p-5 border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-700">{svc.title}</h3>
                <p className="text-sm text-gray-600">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from this city */}
      {cityTestimonials.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What {city.name} Homeowners Say
            </h2>
            <div className="space-y-4">
              {cityTestimonials.map((t) => (
                <div key={t.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-3 italic">&ldquo;{t.quote}&rdquo;</blockquote>
                  <p className="font-semibold text-gray-900 text-sm">— {t.name}, {t.city}, {t.state}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/about/testimonials" className="text-amber-600 hover:text-amber-700 font-semibold text-sm">
                Read all testimonials →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Lead capture */}
      <section className="py-12" style={{ backgroundColor: '#2a2e40' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get a Free Estimate in {city.name}
          </h2>
          <p className="text-gray-300 mb-8">
            No pressure. No obligation. Just expert advice and honest pricing.
          </p>
          <LeadCaptureForm prefilledCity={city.name} />
          <p className="text-gray-500 text-sm mt-4">
            Or call us:{' '}
            <a href="tel:+15633914000" className="text-amber-400 hover:text-amber-300 font-semibold">
              563-391-4000
            </a>
          </p>
        </div>
      </section>

      {/* Nearby areas */}
      {nearbyCities.length > 0 && (
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nearby Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.slug}`}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-amber-400 hover:text-amber-700 transition-colors text-sm text-gray-600"
                >
                  <MapPin className="w-3 h-3" />
                  {nearby.name}, {nearby.stateAbbr}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium hover:bg-amber-100 transition-colors"
              >
                View all service areas →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Serving {city.name} Since 1985
          </h2>
          <p className="text-gray-600 mb-6">
            Call Suburban Construction today for a free in-home estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15633914000"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded transition-colors"
            >
              <Phone className="w-4 h-4" />
              563-391-4000
            </a>
            <Link
              href="/contact"
              className="border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 font-bold px-8 py-3 rounded transition-colors"
            >
              Online Request
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
