import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/shurflo'])

const gutterFaqLinks = [
  { href: '/gutters/gutter-cap-faq', title: 'Gutter Cap FAQ', description: 'How the Gutter Cap system works, how it compares, and what installation involves.', icon: '🌧️' },
  { href: '/resources/heater-cap-faq', title: 'Heater Cap FAQ', description: 'How the Heater Cap gutter system prevents ice dams and keeps gutters clear in winter.', icon: '❄️' },
]

export default function ShurFloPage() {
  return (
    <>
      <PageHero
        title="Shur Flow Gutter System"
        subtitle="Micro-mesh filtration keeps gutters clear — 40-year warranty included"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[
          { label: 'Gutters', href: '/gutters/seamless-gutters' },
          { label: 'Shur Flow Gutter System' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Keep Gutters Clear Without the Climbing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cleaning gutters is one of the least enjoyable home maintenance tasks — and one of the
                most necessary. Clogged gutters overflow, saturate the fascia, leak into soffits, back
                up against the siding, and allow water to pool against the foundation. For homes
                surrounded by trees — which describes many properties in the Quad Cities and surrounding
                areas — gutter cleaning can be required two or more times per year.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Shur Flow gutter system addresses this problem with a stainless steel micro-mesh
                filter that covers the entire gutter opening. The mesh openings are small enough to
                block leaves, twigs, seeds, shingle granules, and most other debris while allowing
                rainfall to pass through freely. Water enters the gutter; debris stays on top of the
                filter and is carried off by wind or washed away by rain.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The system is backed by a 40-year warranty — one of the strongest in the gutter
                protection industry. Suburban Construction is your local professional installer for the
                Shur Flow system throughout the Quad Cities.
              </p>
            </div>
            <Image src="/shurflow1.jpg" alt="Shur Flow micro-mesh gutter protection system installed on home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/shurflow2.jpg" alt="Shur Flow gutter system with micro-mesh filter detail" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/shurflow1.jpg" alt="Gutter protection installed on seamless gutters" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/guttercap_logo.jpg" alt="Gutter protection system overview" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">How the Shur Flow System Works</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-2xl mx-auto">
            The Shur Flow micro-mesh filter is installed over your existing seamless gutters (or
            as part of a new gutter installation). The stainless steel mesh is supported by an
            aluminum frame that attaches directly to the gutter edge, creating a complete cover
            along the entire gutter run. The mesh&apos;s small perforations allow water molecules
            to pass through while physically blocking debris of any significant size.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Stainless Steel Mesh', body: 'Won\'t rust, won\'t degrade — built for decades of outdoor exposure.' },
              { title: 'Blocks All Debris', body: 'Blocks leaves, pine needles, seeds, shingle granules, and other debris.' },
              { title: 'Free-Flowing Water', body: 'Rainwater flows freely through the mesh and into the gutter channel.' },
              { title: 'Aluminum Frame', body: 'Aluminum support frame available in matching gutter color.' },
              { title: '40-Year Warranty', body: '40-year product warranty — one of the best in the gutter protection industry.' },
              { title: 'New or Existing', body: 'Compatible with new or existing seamless gutters.' },
              { title: 'Professional Install', body: 'Professional installation ensures proper fit and function throughout.' },
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
            <Image src="/shurflow2.jpg" alt="Shur Flow gutter protection installed showing clean gutter appearance" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Also Consider: The Gutter Cap System</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                We also install the Gutter Cap system, which uses a different technology — surface tension — to keep
                debris out of gutters. Some homeowners prefer one approach over the other. Our estimator can discuss
                the advantages of each and help you decide which is the better fit for your specific roof and tree
                canopy situation.
              </p>
              <ul className="space-y-4">
                {[
                  { href: '/gutters/gutter-cap', name: 'Gutter Cap System', desc: 'surface tension technology as an alternative approach' },
                  { href: '/gutters/seamless-gutters', name: 'Seamless Gutters', desc: 'custom fabricated on-site for a perfect fit' },
                  { href: '/gutters/gutter-installation', name: 'Installation Process', desc: 'how we engineer proper drainage for your home' },
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

      <RelatedFAQs items={gutterFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free Shur Flow gutter protection estimate
            throughout the Quad Cities.
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
