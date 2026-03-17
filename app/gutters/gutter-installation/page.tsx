import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/gutter-installation'])

const gutterFaqLinks = [
  { href: '/gutters/gutter-cap-faq', title: 'Gutter Cap FAQ', description: 'How the Gutter Cap system works, how it compares, and what installation involves.', icon: '🌧️' },
  { href: '/resources/heater-cap-faq', title: 'Heater Cap FAQ', description: 'How the Heater Cap gutter system prevents ice dams and keeps gutters clear in winter.', icon: '❄️' },
]

export default function GutterInstallationPage() {
  return (
    <>
      <PageHero
        title="Gutter Installation Process"
        subtitle="Assessment, custom fabrication, precise placement, and proper drainage engineering"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[
          { label: 'Gutters', href: '/gutters/seamless-gutters' },
          { label: 'Installation Process' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Proper Gutters Are an Engineering Problem
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A gutter system that performs well isn&apos;t just about the quality of the aluminum or
                the neatness of the installation. It&apos;s about understanding how water moves across
                your roof, how much volume your downspouts need to handle during heavy Iowa rainfall
                events, and where that water should be discharged to protect your foundation, siding,
                and landscaping.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction&apos;s gutter installation crew evaluates all of these factors
                before any material is fabricated. We design the downspout layout to move water as far
                from your foundation as practical, size the system appropriately for your roof&apos;s
                drainage area, and install every run with the correct slope to ensure complete drainage
                with no standing water.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Standing water in gutters is not normal or acceptable — it leads to mosquito breeding,
                premature corrosion, and overflow conditions that defeat the purpose of having gutters at
                all. Our installation standards prevent it.
              </p>
            </div>
            <Image src="/shurflow1.jpg" alt="Gutter installation process showing seamless gutter fabrication on site" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/shurflow2.jpg" alt="Seamless gutter installation with downspout detail" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/install5.jpg" alt="Gutter installation crew working on home exterior" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/shurflow1.jpg" alt="Completed gutter installation showing clean finished appearance" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: '1. Free Assessment & Estimate', body: 'We measure gutter runs, evaluate fascia condition, assess drainage areas, and determine optimal downspout locations and sizing.' },
              { title: '2. Old Gutter Removal', body: 'Existing gutters are removed and the fascia board is inspected for rot or damage before any new material is installed.' },
              { title: '3. On-Site Fabrication', body: 'Using our portable roll-forming machine, we fabricate each run to the exact length needed — right in your driveway.' },
              { title: '4. Correct Slope Installation', body: 'Gutters are installed with a 1/4-inch drop per 10 feet of run to ensure complete drainage with no standing water.' },
              { title: '5. Downspout Placement', body: 'Downspouts are installed at assessed locations. Outlet extensions direct water away from the foundation.' },
              { title: '6. Final Test & Cleanup', body: 'We test the system and clean up all debris before leaving — ready to perform from the first rain after installation.' },
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
            <Image src="/shurflow2.jpg" alt="Completed gutter system with protection installed on home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Add Gutter Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                New gutters are the ideal time to add a protection system that eliminates future
                cleaning. We install both Gutter Cap and Shur Flow systems — ask about including
                protection in your estimate.
              </p>
              <ul className="space-y-4">
                {[
                  { href: '/gutters/gutter-cap', name: 'Gutter Cap System', desc: 'surface tension technology keeps leaves out permanently' },
                  { href: '/gutters/shurflo', name: 'Shur Flow System', desc: 'micro-mesh filter with 40-year warranty' },
                  { href: '/gutters/seamless-gutters', name: 'Seamless Gutters', desc: 'learn about our custom on-site fabricated gutter systems' },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <Link href={item.href} className="font-semibold text-accent hover:text-accent-dark">{item.name} →</Link>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedFAQs items={gutterFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free gutter installation estimate throughout the
            Quad Cities.
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
