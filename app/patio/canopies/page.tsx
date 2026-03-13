import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/patio/canopies'])

export default function CanopiesPage() {
  return (
    <>
      <PageHero
        title="Custom Canopies"
        subtitle="Outdoor shade solutions for patios, decks, entryways, and commercial spaces"
        breadcrumbs={[
          { label: 'Patio & Awnings', href: '/patio' },
          { label: 'Custom Canopies' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Custom-Built Shade for Any Outdoor Application
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Canopies are free-standing or post-mounted overhead shade structures that provide
            weather protection without requiring attachment to the building wall. This makes them
            versatile for applications where a standard awning isn&apos;t practical — including
            standalone patio areas away from the house, deck shade structures, carport covers,
            and commercial entryways.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike a pergola (which provides filtered sun through an open lattice), a canopy
            with a solid or woven fabric cover provides genuine weather protection — blocking
            light rain, reducing glare, and dramatically lowering the temperature of the shaded
            area below. The fabric can be removed or retracted at the end of the season for
            storage, extending its life significantly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction designs and installs custom canopies throughout Davenport,
            Bettendorf, Moline, Rock Island, and the surrounding Quad Cities region. We work
            with each customer to understand their space, goals, and budget before recommending
            a configuration and fabric selection.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Canopy Applications</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Freestanding patio shade structures over decks and patios
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Entryway canopies over commercial or residential doors
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Pool deck shade canopies for outdoor entertaining areas
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Walkway covers and carport canopies
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Outdoor dining and event spaces at restaurants and venues
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Pergola fabric tops and replacement covers
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Options</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Custom sizing — designed to fit your specific space dimensions
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Solution-dyed acrylic fabric — fade resistant, mildew resistant, UV blocking
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide range of fabric colors and patterns
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Aluminum frame construction in powder-coat colors to match your home
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Post-mounted configurations that don&apos;t require wall attachment
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Removable or retractable fabric panels for seasonal storage
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Professional installation with proper anchoring for wind resistance
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Not Sure Which Product You Need?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Awnings, canopies, and solar shades all serve different purposes and suit different
              applications. During your free estimate, our team will evaluate your space and
              recommend the product that best fits your goals — whether that&apos;s a wall-mounted
              awning, a freestanding canopy, or a combination of products.
            </p>
            <Link href="/contact" className="text-amber-600 hover:underline font-medium">
              Schedule a free estimate →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free canopy estimate throughout the Quad Cities.
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
