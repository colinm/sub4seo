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

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/composite1.jpg" alt="Composite siding installed on home showing authentic wood grain texture" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/composite2.jpg" alt="Close-up of composite siding profile showing depth and realistic wood appearance" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction installs composite siding from leading manufacturers throughout
            Davenport, Bettendorf, Moline, Rock Island, and the surrounding area. We handle the full
            installation including old siding removal, moisture barrier inspection, trim work, and
            cleanup — backed by our lifetime workmanship guarantee.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Authentic wood grain texture that vinyl cannot duplicate
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Real wood fiber composition for natural warmth and depth
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Moisture-resistant coating prevents rot, warping, and mold growth
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Will not peel, crack, or blister like painted wood
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide color selection including stained, painted, and natural finishes
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in lap, shingle, and panel profiles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Resistant to impact damage
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Typical manufacturer warranty of 30 years or more
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Ideal for Homes With Existing Wood Siding
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If your home currently has wood siding that is deteriorating, composite siding provides
              the perfect visual continuity — it will look like wood to any observer — while delivering
              the durability and low maintenance that modern homeowners expect. The transition is seamless
              from a curb appeal standpoint.
            </p>
          </div>

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
          <p className="text-gray-600 leading-relaxed">
            Compare our siding options:{' '}
            <Link href="/siding/vinyl-siding" className="text-amber-600 hover:underline">Vinyl Siding</Link>
            {' | '}
            <Link href="/siding/steel-siding" className="text-amber-600 hover:underline">Steel Siding</Link>
            {' | '}
            <Link href="/siding/insulated-siding" className="text-amber-600 hover:underline">Insulated Siding</Link>
          </p>
        </div>
      </section>

      <section className="py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Siding Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/siding.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free composite siding estimate throughout the Quad Cities.
          </p>
          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-amber-600 hover:text-amber-700 underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
