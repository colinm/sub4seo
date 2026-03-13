import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/doors/mini-blinds'])

export default function MiniBlindDoorsPage() {
  return (
    <>
      <PageHero
        title="Doors with Built-In Mini Blinds"
        subtitle="Convenient light control with no dusting, no cords, and no hassle"
        breadcrumbs={[
          { label: 'Doors', href: '/doors/door-styles' },
          { label: 'Built-In Mini Blinds' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/mini-blinds.jpg" alt="Door with built-in mini blinds sealed between glass panes for dust-free light control" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Light Control Without the Maintenance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Doors with built-in mini blinds feature aluminum blind slats sealed between the inner
            and outer glass panes of the door&apos;s glass insert. The blinds are adjusted using a
            small control mechanism at the edge of the glass — typically a slider or dial — that
            tilts the slats open or closed and raises or lowers the blind stack. The entire assembly
            is permanently enclosed within the glass unit, which means the blinds are completely
            protected from dust, pet hair, curious children, and accidental damage.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The practical benefits are significant. Traditional blinds on doors must be dusted
            regularly, tend to catch on door handles and hardware, and — in the case of corded
            blinds — present a safety concern in homes with young children. Built-in mini blind
            doors eliminate all of these issues entirely.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            These doors are particularly popular for patio doors, back entry doors, and any door
            where light control and privacy are important but traditional window coverings are
            inconvenient or impractical. They&apos;re also an excellent choice for front entry
            doors with large glass inserts where privacy from the street is desired.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Blinds sealed between glass panes — zero dust accumulation
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              No cords dangling — eliminates the safety hazard for young children
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Blinds tilt open, tilt closed, or raise completely for full or partial privacy
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Clean, uncluttered look — no blind hardware to coordinate or replace
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Works in any season — no need to remove blinds for holiday decorating
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in steel and fiberglass door styles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in a range of glass insert sizes and configurations
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Professional installation with lifetime workmanship guarantee
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ideal Applications</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Built-in mini blind doors are versatile and work well in a wide range of situations:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Patio doors — control afternoon sun without covering the entire door opening
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Front entry doors with full-lite or half-lite glass inserts
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Back entry and mud room doors where privacy and light control are both needed
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Homes with pets or young children where cord-free operation is a safety priority
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Browse Our Full Door Selection</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Built-in mini blind inserts are available across many of our door product lines. Visit
              our door catalog to see the full range of options or ask about it during your free
              in-home estimate.
            </p>
            <Link href="/doors/door-app" className="text-amber-600 hover:underline font-medium">
              View the door catalog →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free door estimate throughout the Quad Cities.
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
