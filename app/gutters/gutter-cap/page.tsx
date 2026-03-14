import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/gutter-cap'])

export default function GutterCapPage() {
  return (
    <>
      <PageHero
        title="Gutter Cap System"
        subtitle="Never clean your gutters again — leaves fall off while water flows in"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[
          { label: 'Gutters', href: '/gutters/seamless-gutters' },
          { label: 'Gutter Cap System' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How the Gutter Cap System Works
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Gutter Cap system uses the principle of surface tension — the same physics that
                makes water cling to the side of a glass when you tilt it — to guide rainwater off
                your roof and into your gutters while allowing leaves and debris to fall harmlessly
                to the ground below.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Gutter Cap cover is a curved aluminum hood that fits over the top of your gutters.
                When rain hits the roof and flows to the eave, it follows the curve of the Gutter Cap
                and bends downward into the gutter opening, while leaves and larger debris — which
                don&apos;t have enough surface contact to bend with the water — continue in a straight
                path and fall off the edge. The result is a gutter that fills with water during rain
                events and empties completely afterward, with essentially no debris accumulation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Gutter Cap system has been protecting homes for decades and has an outstanding track
                record of performance. Suburban Construction is an authorized local installer serving
                the Quad Cities and the surrounding region.
              </p>
            </div>
            <Image src="/shurflow1.jpg" alt="Gutter Cap system installed on home keeping debris out" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/guttercap_logo.jpg" alt="Gutter Cap system logo and product overview" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/shurflow2.jpg" alt="Gutter protection installed on seamless gutters" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/shurflow1.jpg" alt="Close-up of gutter protection system" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* YouTube embed + Features */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/m2OHb9zzLOA"
              title="Gutter Cap System — How It Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Surface Tension Technology', body: 'Guides water in while leaves fall off naturally — no mesh to clog.' },
              { title: 'Heavy-Gauge Aluminum', body: 'Durable construction that is long-lasting and weather-resistant.' },
              { title: 'Works on All Debris', body: 'Works with virtually all leaf, twig, and debris types.' },
              { title: 'No Mesh Clogging', body: 'No mesh to clog with fine particles over time.' },
              { title: 'Aesthetically Clean', body: 'Looks like a solid gutter from street level.' },
              { title: 'Color Matched', body: 'Available in colors to match your gutters and home exterior.' },
              { title: 'New or Existing', body: 'Can be installed on existing gutters or as part of a new installation.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">✓</span>
                  <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image src="/shurflow2.jpg" alt="Gutter Cap installed on seamless gutters showing clean appearance" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Heater Cap Option for Iowa Winters</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                For homes in areas prone to ice dams — a common problem in the Quad Cities during
                freeze-thaw cycles — we offer the Heater Cap option. The Heater Cap incorporates a
                low-wattage heating element that prevents ice from forming in and around the gutter.
                This eliminates ice dams that can back water under shingles and into your home. Ask
                about the Heater Cap upgrade during your estimate.
              </p>
              <ul className="space-y-4">
                {[
                  { href: '/resources/heater-cap-faq', name: 'Learn more about Heater Cap', desc: 'prevents ice dams during Iowa freeze-thaw cycles' },
                  { href: '/gutters/shurflo', name: 'Also consider Shur Flow', desc: 'micro-mesh technology as an alternative' },
                  { href: '/gutters/gutter-cap-faq', name: 'View Gutter Cap FAQ', desc: 'answers to common questions about the system' },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <Link href={item.href} className="font-semibold text-accent hover:text-accent-dark">{item.name} →</Link>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free Gutter Cap estimate throughout the Quad Cities.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
