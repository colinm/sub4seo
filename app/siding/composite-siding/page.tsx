import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/composite-siding'])

export default function CompositeSidingPage() {
  return (
    <>
      <PageHero
        title="Composite Siding"
        subtitle="The beauty of real wood — without the rot, painting, and maintenance that comes with it"
        bgImage="/composite1.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Composite Siding' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Real Wood Look, Zero Wood Headaches
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Composite siding captures the warm, textured appearance of real cedar or wood lap siding
                without any of the ongoing maintenance that natural wood demands. It is made from real wood
                fibers encased in a moisture-resistant polymer coating — giving you the authentic grain
                pattern and dimensional depth that vinyl cannot replicate, combined with the weather and rot
                resistance that wood never had.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For Quad Cities homeowners who love the look of traditional wood siding but are tired of
                painting, caulking, and replacing rotted boards every few years, composite siding is a
                transformative upgrade. It will not absorb water, will not rot, and will not attract insects
                — three of the primary failure modes of natural wood siding in the Iowa and Illinois climate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction installs composite siding from leading manufacturers throughout
                Davenport, Bettendorf, Moline, Rock Island, and the surrounding area. We handle the full
                installation including old siding removal, moisture barrier inspection, trim work, and
                cleanup — backed by our lifetime workmanship guarantee.
              </p>
            </div>
            <Image src="/composite1.jpg" alt="Composite siding installed on home showing authentic wood grain texture" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/composite2.jpg" alt="Close-up of composite siding profile showing depth and realistic wood appearance" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/sidinghouse.jpg" alt="Home with new composite siding installed" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/siding-installation.png" alt="Professional siding installation in progress" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Authentic Wood Grain', body: 'Wood grain texture that vinyl cannot duplicate.' },
              { title: 'Real Wood Fibers', body: 'Real wood fiber composition for natural warmth and depth.' },
              { title: 'Moisture Resistant', body: 'Moisture-resistant coating prevents rot, warping, and mold growth.' },
              { title: 'No Peeling', body: 'Will not peel, crack, or blister like painted wood.' },
              { title: 'Wide Color Selection', body: 'Including stained, painted, and natural finishes.' },
              { title: 'Multiple Profiles', body: 'Available in lap, shingle, and panel profiles.' },
              { title: 'Impact Resistant', body: 'Resistant to impact damage from hail and debris.' },
              { title: 'Long Warranty', body: 'Typical manufacturer warranty of 30 years or more.' },
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
            <Image src="/composite2.jpg" alt="Close-up of composite siding showing wood grain detail" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Ideal for Homes With Existing Wood Siding
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                If your home currently has wood siding that is deteriorating, composite siding provides
                the perfect visual continuity — it will look like wood to any observer — while delivering
                the durability and low maintenance that modern homeowners expect. The transition is seamless
                from a curb appeal standpoint.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How Composite Compares to Other Siding Types
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Composite siding sits between vinyl and steel in the durability spectrum. It is more
                durable than standard vinyl and offers a far more authentic wood appearance, but it typically
                costs more than vinyl. Compared to real wood, composite is significantly more durable,
                requires virtually no maintenance, and costs less in the long run when you factor out
                painting cycles and board replacements.
              </p>
              <ul className="space-y-3">
                {[
                  { name: 'Vinyl Siding', href: '/siding/vinyl-siding' },
                  { name: 'Steel Siding', href: '/siding/steel-siding' },
                  { name: 'Insulated Siding', href: '/siding/insulated-siding' },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <Link href={item.href} className="font-semibold text-accent hover:text-accent-dark">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Siding Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/siding.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free composite siding estimate throughout the Quad Cities.
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
