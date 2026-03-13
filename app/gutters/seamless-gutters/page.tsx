import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/seamless-gutters'])

export default function SeamlessGuttersPage() {
  return (
    <>
      <PageHero
        title="Seamless Gutters"
        subtitle="Custom fabricated on-site for a perfect fit — no seams means no leaks"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[{ label: 'Gutters' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Seamless Gutters Are the Superior Choice
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Traditional sectional gutters are assembled from multiple pieces joined together with
            seam connectors. Those seams are the most vulnerable points in the entire gutter system —
            they&apos;re where debris accumulates, where water infiltrates, where caulking fails, and
            where leaks eventually develop. Seamless gutters eliminate this problem entirely by
            running a continuous, single piece of gutter from one end to the other, with joints only
            at inside corners, outside corners, and outlet connections.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction custom fabricates seamless gutters on-site at your home using a
            portable roll-forming machine that produces gutters to the exact length needed for your
            roofline. There is no inventory of stock lengths to puzzle together — every run of gutter
            is a single continuous piece matched precisely to your home. The result is a cleaner look
            and a dramatically more leak-resistant system.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Proper gutters are one of the most important protections your home has against water
            damage. They channel roof runoff away from your foundation, prevent water infiltration
            at the soffits and fascia, protect your landscaping from erosive runoff, and keep your
            basement or crawlspace dry. When gutters fail — whether from age, damage, or improper
            installation — the consequences for your home can be expensive.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5-Inch vs. 6-Inch Gutters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Standard residential gutters are 5 inches wide. We also offer 6-inch gutters, which
            are recommended for roofs with a steep pitch, large roof surface areas, or areas that
            experience heavy rainfall. Our estimator will evaluate your roof and recommend the
            appropriate size.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Fabricated on-site to the exact length required — no seams in the run
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in 5-inch K-style and 6-inch K-style profiles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide color selection in pre-painted aluminum — no painting required
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Hidden hanger system for a clean, fastener-free exterior appearance
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Protects foundation, siding, and landscaping from uncontrolled runoff
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Downspouts positioned for efficient drainage to safe discharge points
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Compatible with Gutter Cap and Shur Flow gutter protection systems
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Protect Your Investment Further</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              New seamless gutters are an excellent time to add a gutter protection system that
              eliminates the need for regular gutter cleaning. We offer two proven options:
            </p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>
                •{' '}
                <Link href="/gutters/gutter-cap" className="text-amber-600 hover:underline">
                  Gutter Cap
                </Link>{' '}
                — surface tension principle keeps leaves out permanently
              </li>
              <li>
                •{' '}
                <Link href="/gutters/shurflo" className="text-amber-600 hover:underline">
                  Shur Flow
                </Link>{' '}
                — micro-mesh filter with 40-year warranty
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free seamless gutter estimate throughout the
            Quad Cities area.
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
