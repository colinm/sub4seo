import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/casement'])

const windowFaqLinks = [
  { href: '/windows/replacement-windows-faq', title: 'Window FAQ', description: 'Replacement windows, installation timelines, energy savings, warranties, and more.', icon: '🪟' },
  { href: '/resources/condensation-faq', title: 'Condensation FAQ', description: 'What causes condensation on windows, what it means, and how to address it.', icon: '💧' },
  { href: '/resources/convection-faq', title: 'Convection FAQ', description: 'How convection causes heat loss through windows and how gas fills reduce it.', icon: '🌡️' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

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

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
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
              <p className="text-gray-600 leading-relaxed">
                Both casement and awning windows are Energy Star certified when paired with our Low-E glass
                options. The outward-swinging design means there are no sash tracks to accumulate dirt, and the
                crank mechanism is smooth and durable. Suburban Construction installs both styles throughout the
                Quad Cities with a lifetime workmanship guarantee.
              </p>
            </div>
            <Image src="/casement1.jpg" alt="Casement window cranked open for full ventilation" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/casement2.jpg" alt="Awning window installed in bathroom allowing ventilation during rain" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto" />
            <Image src="/casement1.jpg" alt="Casement window installed in home" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto" />
            <Image src="/window2.jpg" alt="Interior view of replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Maximum Ventilation', body: 'Full sash opening delivers maximum ventilation — more than any double-hung or slider.' },
              { title: 'Compression Seal', body: 'Multi-point locking system creates a compression seal when closed.' },
              { title: '90° Opening', body: 'Opens a full 90° for maximum airflow and easy exterior glass cleaning from inside.' },
              { title: 'Coved Glazing Beads', body: 'Coved glazing beads give the sash a refined, classic wood-like appearance.' },
              { title: 'FreedomMaxx Low-E HP Glass', body: 'FreedomMaxx Low-E HP high-performance glass standard; optional FreedomMaxx 10 upgrade available.' },
              { title: 'AllWeather Sloped Sill', body: 'AllWeather sloped sill channels water away from the frame and prevents infiltration.' },
              { title: 'Stainless Steel Hardware', body: 'Stainless steel operating hardware for smooth, corrosion-free operation.' },
              { title: 'EverLast PVC Vinyl', body: 'EverLast PVC vinyl never needs painting or staining.' },
              { title: 'Easy Operation', body: 'Easy-turn crank mechanism — no lifting or straining required.' },
              { title: 'Energy Star Certified', body: 'Energy Star certified options available with Low-E glass.' },
              { title: 'No Dirt-Trapping Tracks', body: 'No horizontal tracks to collect dirt or impede operation.' },
              { title: 'Wide Selection', body: 'Available in a wide range of sizes, colors, and glass options.' },
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
            <Image src="/casement2.jpg" alt="Awning window installed allowing ventilation in rain" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Casement vs. Awning: Key Differences
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Casement Windows</h3>
                  <ul className="space-y-2">
                    {[
                      'Hinged on the left or right side',
                      'Opens outward like a door',
                      'Full sash area opens for ventilation',
                      'Great for catching cross-breezes',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs font-bold">✓</span>
                        </span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Awning Windows</h3>
                  <ul className="space-y-2">
                    {[
                      'Hinged at the top',
                      'Bottom swings outward',
                      'Can stay open in light rain',
                      'Ideal for high or low placements',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs font-bold">✓</span>
                        </span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Energy Performance in the Quad Cities</h3>
              <p className="text-gray-700 leading-relaxed">
                The compression seal of a casement or awning window is inherently more airtight than the
                sliding seal of a hung or slider window. Combined with triple pane krypton glass, this makes
                casement windows among the most energy-efficient window types available — an important
                consideration given the Quad Cities&apos; cold winters and hot, humid summers.
              </p>
            </div>
            <Link href="/windows/krypton" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              Krypton Glass →
            </Link>
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

      <RelatedFAQs items={windowFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free estimate on casement or awning window installation across the Quad Cities.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
        <Link href="/windows/double-hung-vs-casement" className="text-accent hover:text-accent-dark underline">Double Hung vs. Casement →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/windows/window-replacement-cost" className="text-accent hover:text-accent-dark underline">Window Replacement Cost Guide →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">Glossary of Terms →</Link>
      </div>
    </>
  )
}
