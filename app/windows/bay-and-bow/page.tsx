import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/bay-and-bow'])

export default function BayAndBowWindowsPage() {
  return (
    <>
      <PageHero
        title="Bay & Bow Windows"
        subtitle="Add space, light, and dramatic curb appeal to any room"
        bgImage="/bayandbow.jpg"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Bay & Bow Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/bayandbow.jpg" alt="Bay and bow window installation adding curb appeal to a home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Transform a Room with a Bay or Bow Window
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bay and bow windows project outward from the exterior wall of your home, creating an alcove of
            space inside and adding significant visual interest to the exterior. A bay window typically
            consists of three windows arranged at angles — usually a large picture window flanked by two
            smaller units — creating a classic architectural feature perfect for living rooms, dining rooms,
            and master bedrooms.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A bow window is similar but uses four, five, or six windows of equal size arranged in a gentle
            curve, producing a more sweeping, rounded look. Both configurations dramatically increase natural
            light, expand your interior view, and create a unique architectural focal point that significantly
            boosts curb appeal and resale value.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every bay and bow window we install is custom-built to fit your specific opening. Our team handles
            the full scope of the project — including the structural support, roofing, seat board, and
            interior finish work — so the result is a complete, polished installation, not just a window
            dropped into a hole.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Bay vs. Bow: Which Is Right for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Bay Window</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Three-section design at 30° or 45° angles
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Classic, traditional look
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Easier structural integration
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Side units can be operable for ventilation
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Bow Window</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Four to six equal sections in a curved arc
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Elegant, sweeping appearance
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Maximizes panoramic view
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Generous interior seat board area
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Custom built to your exact measurements — no off-the-shelf compromises
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Dramatically increases natural light and interior living space
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Adds significant curb appeal and increases home resale value
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Energy-efficient glass options including triple pane krypton
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Complete installation including structural support and interior trim
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Seat board included — creates a built-in reading nook or display area
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Installation Matters</h3>
            <p className="text-gray-700 leading-relaxed">
              Bay and bow windows require proper structural support, waterproofing, and finish work that go
              beyond a standard window replacement. Our experienced crews have completed hundreds of these
              installations across the Quad Cities. We take full responsibility for every aspect of the
              project, from the rough opening to the final interior trim coat.
            </p>
          </div>
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
            Bay and bow windows are a significant investment — and one of the most rewarding home
            improvements you can make. Contact us for a free estimate and let&apos;s talk through the options.
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
