import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/vinyl-siding'])

export default function VinylSidingPage() {
  return (
    <>
      <PageHero
        title="Vinyl Siding — Freedom Series"
        subtitle="America's most popular siding choice — durable, beautiful, and virtually maintenance-free"
        bgImage="/vinyl.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Vinyl Siding' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/vinyl.jpg" alt="Vinyl siding installed on home showing clean low-maintenance finish" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/sidinghouse.jpg" alt="Home with new vinyl siding showing improved curb appeal" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Smart Choice for Quad Cities Homeowners
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vinyl siding is the most popular siding material in the United States — and it has earned
            that position by delivering exceptional value. It requires no painting, no caulking, no
            staining, and virtually no maintenance of any kind. A periodic washing with a garden hose
            is usually all it takes to keep it looking great for decades.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction installs the Freedom Series vinyl siding line, which we consider the
            best combination of value, quality, and aesthetic variety in the vinyl siding market. The
            Freedom Series is available in dozens of colors, multiple profiles (including traditional
            horizontal lap, dutch lap, and beaded styles), and several thickness grades to fit every
            budget and quality target.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The color in vinyl siding is integral to the material — not painted on. That means it
            won&apos;t peel, chip, or blister the way painted wood does. While vinyl can fade slightly
            over decades of UV exposure, the Freedom Series uses UV stabilizers that maintain color
            significantly better than budget vinyl products.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Freedom Series Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Virtually maintenance-free — no painting, no caulking, no rot
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Dozens of colors in a range of profiles and textures
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Color is integral to the material — won&apos;t peel or chip
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              UV stabilizers for superior color retention over time
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Insulated options available (see{' '}
              <Link href="/siding/insulated-siding" className="text-amber-600 hover:underline">
                Insulated Siding
              </Link>
              )
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Lightweight and easy to work with — minimal stress on structural framing
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Resistant to moisture, insects, and fungal growth
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Lifetime manufacturer warranty; our lifetime workmanship guarantee included
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Profiles</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>Traditional horizontal lap</strong> — the classic look for most home styles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>Dutch lap</strong> — a slight notch at the top of each course for shadow effect
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>Beaded seam</strong> — elegant curved bottom bead for a refined appearance
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>Vertical siding</strong> — modern, board-and-batten look for accents or full facades
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>Shake / shingle</strong> — coastal or craftsman aesthetic for gable accents
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Want More Energy Efficiency?</h3>
            <p className="text-gray-700 leading-relaxed">
              Upgrade to our insulated vinyl siding option, which adds EPS foam backing to each panel.
              The foam improves the wall&apos;s R-value, reduces energy costs, and adds rigidity to the
              panel — producing a thicker, more substantial appearance that many homeowners prefer.
            </p>
            <Link href="/siding/insulated-siding" className="inline-block mt-3 text-amber-600 hover:underline font-medium">
              Learn more about insulated siding →
            </Link>
          </div>
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
            Contact us for a free vinyl siding estimate. Serving Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding Quad Cities area.
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
