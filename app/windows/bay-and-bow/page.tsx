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

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
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
              <p className="text-gray-600 leading-relaxed">
                Every bay and bow window we install is custom-built to fit your specific opening. Our team handles
                the full scope of the project — including the structural support, roofing, seat board, and
                interior finish work — so the result is a complete, polished installation, not just a window
                dropped into a hole.
              </p>
            </div>
            <Image src="/bayandbow.jpg" alt="Bay and bow window installation adding curb appeal to a home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/bayandbow.jpg" alt="Bay and bow window exterior view" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Replacement window detail" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Interior view of replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Bay vs. Bow comparison */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Bay vs. Bow: Which Is Right for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Bay Window</h3>
              <ul className="space-y-2">
                {[
                  'Three-section design at 30° or 45° angles',
                  'Classic, traditional look',
                  'Easier structural integration',
                  'Side units can be operable for ventilation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-accent-mid mt-0.5 font-bold">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Bow Window</h3>
              <ul className="space-y-2">
                {[
                  'Four to six equal sections in a curved arc',
                  'Elegant, sweeping appearance',
                  'Maximizes panoramic view',
                  'Generous interior seat board area',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-accent-mid mt-0.5 font-bold">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Custom Built', body: 'Custom built to your exact measurements — no off-the-shelf compromises.' },
              { title: 'More Natural Light', body: 'Dramatically increases natural light and interior living space.' },
              { title: 'Curb Appeal', body: 'Adds significant curb appeal and increases home resale value.' },
              { title: 'Energy Efficient Glass', body: 'Energy-efficient glass options including triple pane krypton.' },
              { title: 'Complete Installation', body: 'Complete installation including structural support and interior trim.' },
              { title: 'Seat Board Included', body: 'Seat board included — creates a built-in reading nook or display area.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">✓</span>
                  <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image src="/bayandbow.jpg" alt="Bay window installation showing complete interior and exterior work" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Professional Installation Matters</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Bay and bow windows require proper structural support, waterproofing, and finish work that go
                beyond a standard window replacement. Our experienced crews have completed hundreds of these
                installations across the Quad Cities. We take full responsibility for every aspect of the
                project, from the rough opening to the final interior trim coat.
              </p>
              <ul className="space-y-4">
                {[
                  { name: 'Structural support and roofing included', desc: 'We handle the full scope — nothing left to another contractor.' },
                  { name: 'Seat board and interior trim', desc: 'Polished finish work for a complete, professional result.' },
                  { name: 'Energy-efficient glass options', desc: 'Triple pane krypton available for maximum winter performance.' },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.name}</span>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Windows Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/windows.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Bay and bow windows are a significant investment — and one of the most rewarding home
            improvements you can make. Contact us for a free estimate and let&apos;s talk through the options.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
