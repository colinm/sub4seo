import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/storm'])

export default function StormWindowsPage() {
  return (
    <>
      <PageHero
        title="Storm Windows"
        subtitle="Add an extra layer of insulation and weather protection to your existing windows"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Storm Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/storm.jpg" alt="Storm window installed over existing window for added insulation and weather protection" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Cost-Effective Energy Upgrade
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Storm windows are installed on the exterior of your existing windows, creating an additional
            air chamber between the two window layers. This dead air space acts as insulation, reducing
            heat transfer and improving the overall energy performance of the window assembly. For
            homeowners who are not ready to commit to full window replacement, storm windows can be a
            practical intermediate step.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Modern storm windows are a significant improvement over the old, clunky aluminum-frame storms
            that many Quad Cities homeowners remember. Today&apos;s units feature slim vinyl or aluminum
            frames, Low-E glass options, and triple-track designs that incorporate both the glass panel
            and a built-in screen — so you can ventilate in summer and button up tight for winter without
            removing or storing seasonal panels.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Storm windows are particularly useful on historic homes where original wood windows have
            architectural or historic value that full replacement would destroy. They can also make
            sense on rental properties where budget constraints make full replacement impractical in
            the near term.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Storm Windows</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Reduce heat loss through existing windows by 25–50%
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Block wind-driven rain and snow infiltration
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Reduce interior condensation by keeping the inner window surface warmer
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Low-E glass options available for improved solar performance
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Triple-track design combines glass and screen in one unit — no seasonal storage
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Significantly less expensive than full window replacement
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Custom fit to your existing window openings
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Storm Windows vs. Full Replacement
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              If your existing windows are in reasonably good structural condition but are simply single-pane
              or poorly insulated, storm windows can be a sensible upgrade. However, if your frames are
              rotting, warped, or air-infiltrating significantly at the sash edges, full replacement
              windows will outperform any storm window addition. Our consultants will give you an honest
              assessment during your free estimate.
            </p>
            <Link href="/windows/double-hung" className="text-amber-600 hover:underline font-medium">
              Explore full replacement window options →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ideal Applications</h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Historic homes where original windows must be preserved
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Rental properties seeking an affordable energy upgrade
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Homes with windows that are structurally sound but thermally poor
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Phased improvement plans where full replacement comes later
            </li>
          </ul>
        </div>
      </section>

      <section className="py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Windows Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/windows.pdf"
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
            Contact Suburban Construction for a free estimate on storm windows or full replacement
            windows throughout the Quad Cities.
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
