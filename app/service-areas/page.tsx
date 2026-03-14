import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { cities } from '@/lib/seo/cityData'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/service-areas'])

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas"
        subtitle="Suburban Construction serves the Quad Cities and surrounding 90-mile radius"
        breadcrumbs={[{ label: 'Service Areas' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed text-lg mb-10 text-center max-w-3xl mx-auto">
            From our showroom and headquarters in Davenport, Iowa, Suburban Construction sends
            experienced installation crews throughout the Quad Cities and the surrounding 90-mile
            radius. Every city we serve gets the same lifetime workmanship guarantee and the same
            commitment to quality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Service Areas</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group border border-gray-200 rounded-xl p-5 hover:border-accent-muted hover:bg-accent-subtle transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-accent-mid" />
                  <h3 className="font-bold text-gray-900 group-hover:text-accent-dark">
                    {city.name}, {city.stateAbbr}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{city.county}</p>
                <p className="text-xs text-accent font-medium mt-2 group-hover:text-accent-dark">
                  View {city.name} service page →
                </p>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Don&apos;t See Your City?</h2>
            <p className="text-gray-600 mb-4">
              We serve the entire 90-mile radius from Davenport. If you&apos;re in the broader
              eastern Iowa or western Illinois area, chances are good that we can help. Additional
              cities we regularly serve include:
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              {['Milan, IL', 'Silvis, IL', 'Geneseo, IL', 'Orion, IL', 'Blue Grass, IA',
                'Long Grove, IA', 'Princeton, IA', 'Fulton, IL', 'Morrison, IL',
                'Kewanee, IL', 'Galesburg, IL', 'Iowa City, IA area'].map((city) => (
                <span key={city} className="px-3 py-1 bg-white border border-gray-200 rounded-full">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Call us at{' '}
              <a href="tel:+15633914000" className="text-accent font-medium">
                563-391-4000
              </a>{' '}
              to confirm we serve your area.
            </p>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382570.16!2d-90.8!3d41.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e22c16a2e2f26f%3A0x12a7e3e42c0b86b8!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Suburban Construction service area map"
            />
          </div>
        </div>
      </section>
    </>
  )
}
