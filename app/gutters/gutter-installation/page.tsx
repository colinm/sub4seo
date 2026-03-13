import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/gutter-installation'])

export default function GutterInstallationPage() {
  return (
    <>
      <PageHero
        title="Gutter Installation Process"
        subtitle="Assessment, custom fabrication, precise placement, and proper drainage engineering"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[
          { label: 'Gutters', href: '/gutters/seamless-gutters' },
          { label: 'Installation Process' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Proper Gutters Are an Engineering Problem
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A gutter system that performs well isn&apos;t just about the quality of the aluminum or
            the neatness of the installation. It&apos;s about understanding how water moves across
            your roof, how much volume your downspouts need to handle during heavy Iowa rainfall
            events, and where that water should be discharged to protect your foundation, siding,
            and landscaping.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction&apos;s gutter installation crew evaluates all of these factors
            before any material is fabricated. We design the downspout layout to move water as far
            from your foundation as practical, size the system appropriately for your roof&apos;s
            drainage area, and install every run with the correct slope to ensure complete drainage
            with no standing water.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Standing water in gutters is not normal or acceptable — it leads to mosquito breeding,
            premature corrosion, and overflow conditions that defeat the purpose of having gutters at
            all. Our installation standards prevent it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Installation Process</h2>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Free Assessment & Estimate</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We measure the total linear footage of gutter runs, evaluate the fascia board
                  condition, assess the roof drainage areas, and determine the optimal downspout
                  locations and sizing. We discuss color options and any add-ons such as Gutter Cap
                  or Shur Flow protection systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Old Gutter Removal & Fascia Inspection</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Existing gutters are removed and the fascia board behind them is inspected for rot
                  or damage. We address any fascia issues before installation — new gutters attached
                  to rotted fascia will fail quickly. We report our findings and discuss any needed
                  repairs with you before proceeding.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">On-Site Fabrication</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Using our portable roll-forming machine, we fabricate each gutter run to the exact
                  length needed for your home. This happens right in your driveway. There are no stock
                  lengths being cut down and pieced together — each run is a single continuous piece
                  from end to end.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Installation with Correct Slope</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gutters are installed with a slight slope toward the downspouts — typically 1/4 inch
                  of drop per 10 feet of run. This ensures water drains completely after every rain
                  event and never sits in the gutter channel. We use hidden hanger brackets on
                  appropriate spacing for strong, long-lasting support.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Downspout Placement & Connection</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Downspouts are cut, formed, and installed at the locations determined during the
                  assessment. Outlet extensions direct water away from the foundation. We connect
                  all end caps, corners, and miter joints with sealant to prevent leaks at the
                  points where seams are unavoidable.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Final Test & Cleanup</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We test the system and clean up all debris before leaving. You can expect a tidy
                  job site and a gutter system that is ready to perform from the first rain after
                  installation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Add Gutter Protection</h3>
            <p className="text-gray-700 leading-relaxed">
              New gutters are the ideal time to add a protection system that eliminates future
              cleaning. We install both{' '}
              <Link href="/gutters/gutter-cap" className="text-amber-600 hover:underline">Gutter Cap</Link>
              {' '}and{' '}
              <Link href="/gutters/shurflo" className="text-amber-600 hover:underline">Shur Flow</Link>
              {' '}systems — ask about including protection in your estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free gutter installation estimate throughout the
            Quad Cities.
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
