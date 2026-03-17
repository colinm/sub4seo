import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/garden-specialty'])

const windowFaqLinks = [
  { href: '/windows/replacement-windows-faq', title: 'Window FAQ', description: 'Replacement windows, installation timelines, energy savings, warranties, and more.', icon: '🪟' },
  { href: '/resources/condensation-faq', title: 'Condensation FAQ', description: 'What causes condensation on windows, what it means, and how to address it.', icon: '💧' },
  { href: '/resources/convection-faq', title: 'Convection FAQ', description: 'How convection causes heat loss through windows and how gas fills reduce it.', icon: '🌡️' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

export default function GardenSpecialtyWindowsPage() {
  return (
    <>
      <PageHero
        title="Garden & Specialty Windows"
        subtitle="Bring the outdoors in — growing space, extra light, and unique architectural shapes"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Garden & Specialty Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Garden Windows: A Mini Greenhouse for Your Kitchen
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A garden window projects outward from the wall of your home — typically above a kitchen sink —
                creating an enclosed glass alcove with its own shelf space. Three glass sides and a glass roof
                let sunlight in from multiple angles, making it an ideal spot for growing fresh herbs, housing
                small plants, or simply displaying decorative items in a naturally lit setting.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond the practical benefits, a garden window adds visual interest to your kitchen both inside
                and out. The exterior projection creates an architectural detail that enhances curb appeal, while
                the interior glass box floods the area with natural light. If you spend a lot of time at your
                kitchen sink, a garden window transforms that view into something genuinely enjoyable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction installs garden windows throughout Davenport, Bettendorf, Moline, Rock
                Island, and the surrounding region. We custom-order each unit to fit your existing opening and
                handle all finish work for a clean, professional result.
              </p>
            </div>
            <Image src="/garden1.jpg" alt="Garden window projecting from kitchen wall with plants on shelf" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 gap-3">
            <Image src="/garden1.jpg" alt="Garden window projecting from kitchen wall with plants on shelf" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/garden2.jpg" alt="Specialty shaped window installed in a custom home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Garden Window Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Projects Outward', body: 'Creates a self-contained growing and display space beyond your wall.' },
              { title: 'Triple Glass Exposure', body: 'Glass on three sides plus a glass roof for maximum light exposure.' },
              { title: 'Built-In Shelf', body: 'Built-in seat board / shelf for plants, herbs, or decorative items.' },
              { title: 'Operable Side Vents', body: 'Side vents allow ventilation and temperature control.' },
              { title: 'Low-E Glass Standard', body: 'Energy-efficient Low-E glass standard; upgrade options available.' },
              { title: 'Multiple Frame Colors', body: 'Available in multiple frame colors to match your exterior.' },
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
            <Image src="/garden2.jpg" alt="Specialty shaped window installed in a custom home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Specialty Windows: When Standard Shapes Won&apos;t Do
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not every window opening is a standard rectangle. Many homes — especially older craftsman,
                Victorian, or custom-built properties — feature arched, circular, half-round, or other
                geometrically unique window openings. Specialty windows are custom-fabricated to fit these
                openings precisely, preserving the architectural character of your home while upgrading the
                energy performance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Common specialty shapes we supply and install include:
              </p>
              <ul className="space-y-3">
                {[
                  'Half-round and full-round windows for transom and decorative applications',
                  'Arched windows to complement curved door entries and formal rooms',
                  'Eyebrow and elliptical windows for attic and gable applications',
                  'Pentagon and octagon windows for custom accent applications',
                  'Trapezoid and triangle windows for vaulted ceiling areas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Have an Unusual Opening?</h3>
              <p className="text-gray-700 leading-relaxed">
                Don&apos;t assume that unusual window shapes can&apos;t be replaced with energy-efficient glass.
                In most cases, we can source a matching specialty unit that preserves the look of your home while
                dramatically upgrading its performance. Contact us to discuss your specific situation.
              </p>
            </div>
            <Link href="/contact" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              Contact Us →
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
            Contact Suburban Construction for a free estimate on garden or specialty windows throughout
            the Quad Cities area.
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
