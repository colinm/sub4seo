import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { cities } from '@/lib/seo/cityData'

export default function ServiceAreasSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Proudly Serving the Quad Cities &amp; Surrounding Areas
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From our showroom in Davenport, Iowa, we serve homeowners throughout the Quad Cities and
            the surrounding 90-mile radius.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* City grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-400 rounded-lg transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700">
                    {city.name}, {city.stateAbbr}
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center">
              ...and the surrounding 90-mile radius including Milan, Silvis, Geneseo, Blue Grass, Long Grove, and more.
            </p>
            <div className="text-center mt-4">
              <Link
                href="/service-areas"
                className="inline-block text-amber-600 hover:text-amber-700 font-semibold text-sm"
              >
                View all service areas →
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191285.08738434456!2d-90.80012!3d41.5623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e22c16a2e2f26f%3A0x12a7e3e42c0b86b8!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suburban Construction Service Area Map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
