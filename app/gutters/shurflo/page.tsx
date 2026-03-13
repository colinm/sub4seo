import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/shurflo'])

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

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          <p className="text-gray-600 leading-relaxed mb-6">
            The system is backed by a 40-year warranty — one of the strongest in the gutter
            protection industry. Suburban Construction is your local professional installer for the
            Shur Flow system throughout the Quad Cities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Shur Flow System Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Shur Flow micro-mesh filter is installed over your existing seamless gutters (or
            as part of a new gutter installation). The stainless steel mesh is supported by an
            aluminum frame that attaches directly to the gutter edge, creating a complete cover
            along the entire gutter run. The mesh&apos;s small perforations allow water molecules
            to pass through while physically blocking debris of any significant size.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Stainless steel micro-mesh — won&apos;t rust, won&apos;t degrade
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Blocks leaves, pine needles, seeds, shingle granules, and other debris
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Rainwater flows freely through the mesh and into the gutter
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Aluminum support frame in matching gutter color
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              40-year product warranty — one of the best in the industry
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Compatible with new or existing seamless gutters
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Professional installation ensures proper fit and function
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Also Consider: The Gutter Cap System
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We also install the{' '}
              <Link href="/gutters/gutter-cap" className="text-amber-600 hover:underline">
                Gutter Cap system
              </Link>
              , which uses a different technology — surface tension — to keep debris out of gutters.
              Some homeowners prefer one approach over the other. Our estimator can discuss the
              advantages of each and help you decide which is the better fit for your specific roof
              and tree canopy situation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free Shur Flow gutter protection estimate
            throughout the Quad Cities.
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
