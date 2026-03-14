import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/patio/swing-and-clean'])

export default function SwingAndCleanPage() {
  return (
    <>
      <PageHero
        title="Swing & Clean Windows"
        subtitle="Tilt in for easy cleaning — the ideal window for porch enclosures"
        breadcrumbs={[
          { label: 'Patio & Awnings', href: '/patio' },
          { label: 'Swing & Clean Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Designed for Porch and Sunroom Enclosures
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Swing and clean windows are specifically designed for porch enclosure applications where
            standard tilt-in replacement windows may not be the right fit. They hinge on one side and
            swing inward or outward, allowing you to access the exterior glass surface for cleaning
            without any need for ladders, extension tools, or contorting around screen panels.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&apos;re enclosing an existing screen porch to create a three-season room, or if you
            have a sunroom or Florida room with windows that are difficult to clean because of their
            size, height, or configuration, swing and clean windows are an excellent solution. The
            swinging action provides a wide, unobstructed path to both sides of the glass from inside
            the enclosed space.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction installs swing and clean windows throughout the Quad Cities as part
            of porch enclosure projects or as standalone replacements for hard-to-clean sunroom
            windows. We custom-order each unit to fit your specific opening and handle all
            installation and finish work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Side-hinged sash swings in for complete exterior glass access from inside
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              No ladders or tools required for cleaning — safe and easy
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Available in large sizes suitable for porch panel applications
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Energy-efficient glass options for three-season enclosures
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Weatherstripping provides a good seal when closed against wind and cold
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Operable for ventilation — enjoy fresh air on comfortable days
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Multiple frame colors and glass options available
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ideal for Porch Enclosure Projects
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A screen porch enclosure project — converting an open screen porch into a three-season
            or four-season room — requires windows that fit into the porch structure while providing
            practical, manageable operation. Swing and clean windows meet this need perfectly. They
            work well in the wide, low-profile openings typical of porch framing, and their
            swing-in operation is particularly convenient when the windows are positioned over a
            porch railing or furniture.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Combined with{' '}
            <Link href="/patio/solar-shades" className="text-accent hover:underline">
              solar shades
            </Link>{' '}
            or an{' '}
            <Link href="/patio/patio-awning" className="text-accent hover:underline">
              awning
            </Link>
            {' '}overhead, swing and clean windows can transform an ordinary porch into a comfortable
            outdoor room that extends your enjoyable living season well beyond the few weeks of
            perfect weather.
          </p>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free porch enclosure or swing and clean window
            estimate throughout the Quad Cities.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
