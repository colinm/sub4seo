import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/casement'])

export default function CasementWindowsPage() {
  return (
    <>
      <PageHero
        title="Casement & Awning Windows"
        subtitle="Crank open for full ventilation — and seal tight against the elements when closed"
        bgImage="/casement1.jpg"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Casement & Awning Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/casement1.jpg" alt="Casement window cranked open for full ventilation" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/casement2.jpg" alt="Awning window installed in bathroom allowing ventilation during rain" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Maximum Ventilation, Maximum Seal
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Casement windows are hinged on one side and swing outward like a door, operated by a simple
            crank mechanism. Because the entire sash opens — not just half of it — casement windows provide
            100% of the window area as ventilation, making them the most efficient window style for moving
            air through a room. When closed, the sash presses firmly against the frame seal, creating an
            exceptionally tight, draft-free closure.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Awning windows work on the same principle but are hinged at the top and swing outward at the
            bottom. This configuration has a practical advantage: you can leave an awning window open
            during light rain and the water will run off the open sash rather than into the room. They&apos;re
            a popular choice for kitchens, bathrooms, and basements where ventilation is important even in
            wet weather.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Both casement and awning windows are Energy Star certified when paired with our Low-E glass
            options. The outward-swinging design means there are no sash tracks to accumulate dirt, and the
            crank mechanism is smooth and durable. Suburban Construction installs both styles throughout the
            Quad Cities with a lifetime workmanship guarantee.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Casement vs. Awning: Key Differences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Casement Windows</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Hinged on the left or right side
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Opens outward like a door
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Full sash area opens for ventilation
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Great for catching cross-breezes
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Awning Windows</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Hinged at the top
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Bottom swings outward
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Can stay open in light rain
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-amber-500 mt-0.5">✓</span>Ideal for high or low placements
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Full sash opening delivers maximum ventilation — more than any double-hung or slider
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Multi-point locking system creates a compression seal when closed
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Easy-turn crank mechanism — no lifting or straining required
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Energy Star certified options available with Low-E glass
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              No horizontal tracks to collect dirt or impede operation
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in a wide range of sizes, colors, and glass options
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Performance in the Quad Cities</h3>
            <p className="text-gray-700 leading-relaxed">
              The compression seal of a casement or awning window is inherently more airtight than the
              sliding seal of a hung or slider window. Combined with triple pane krypton glass, this makes
              casement windows among the most energy-efficient window types available — an important
              consideration given the Quad Cities&apos; cold winters and hot, humid summers.
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
            Contact us for a free estimate on casement or awning window installation across the Quad Cities.
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
