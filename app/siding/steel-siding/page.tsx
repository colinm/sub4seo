import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/steel-siding'])

const sidingFaqLinks = [
  { href: '/siding/vinyl-siding-faq', title: 'Siding FAQ', description: 'Vinyl and steel siding questions: durability, maintenance, cost, and color choices.', icon: '🏠' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

export default function SteelSidingPage() {
  return (
    <>
      <PageHero
        title="Steel Siding"
        subtitle="The most durable siding option available — fire resistant, dent resistant, and built to last"
        bgImage="/steel-siding.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Steel Siding' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Steel Is the Toughest Siding You Can Buy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Steel siding outperforms vinyl, composite, and wood in virtually every durability category.
                It is fire resistant, termite-proof, and significantly more impact resistant than vinyl —
                meaning it won&apos;t dent or crack from hail, flying debris, or accidental impacts the way
                vinyl siding can. For Quad Cities homeowners who have experienced hail storms or severe
                thunderstorms, steel siding is the obvious answer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Steel siding is also exceptionally well-suited to the Iowa and Illinois climate. It handles
                the region&apos;s dramatic temperature swings — from -20°F winter lows to 100°F+ summer
                highs — without warping, buckling, or degrading over time. The finish is baked on at the
                factory, not applied as a surface coating, which means the color is integral to the material
                and far more resistant to fading, chalking, and peeling than painted wood or cheaper
                alternatives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction has been installing steel siding throughout Davenport, Bettendorf,
                Moline, Rock Island, and the surrounding region for decades. We are experienced in proper
                installation techniques that account for steel&apos;s unique thermal expansion characteristics,
                ensuring a long-lasting, problem-free installation.
              </p>
            </div>
            <Image src="/steel-siding.jpg" alt="Steel siding installed on home showing durable impact-resistant finish" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/steel-reinforcement.jpg" alt="Steel siding reinforcement detail showing structural strength" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/sidinghouse.jpg" alt="Home with new siding installed" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/siding-installation.png" alt="Professional siding installation in progress" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Fire Resistant', body: 'Class A fire rating for maximum safety — steel is non-combustible.' },
              { title: 'Galvalume AZ-50 Steel', body: 'Roll-formed from 29 gauge Galvalume AZ-50 steel for maximum hail and dent resistance.' },
              { title: 'Kynar PVDF Finish', body: 'Kynar PVDF fluoropolymer finish seals the steel core — resists scratches, fading, chalking, and mildew.' },
              { title: 'Low-Gloss Rating of 7', body: 'Low-gloss rating of 7 creates a beautifully strong finish with superior scratch resistance.' },
              { title: 'UTS 45,000 / YTS 40,000 PSI', body: 'Ultimate Tensile Strength of 45,000 PSI and Yield Tensile Strength of 40,000 PSI — engineered to resist cracking and deforming.' },
              { title: '160 mph Wind Resistance', body: 'Independently tested to withstand hurricane-force winds exceeding 160 mph.' },
              { title: 'Minimal Thermal Expansion', body: 'Thermal expansion less than 1/8" over a 12\' panel — walls stay straight and uniform in any weather.' },
              { title: '1/2" Panel Projection', body: 'Deep 1/2" panel projection creates bold edges and dramatic shadow lines.' },
              { title: 'Virtually Maintenance-Free', body: 'No painting, caulking, or re-staining required.' },
              { title: 'Multiple Profiles', body: 'Available in horizontal lap, vertical, and board-and-batten profiles.' },
              { title: 'Climate-Ready', body: 'Handles extreme temperature swings without warping — ideal for Iowa and Illinois.' },
              { title: '50-Year Hail / 35-Year Warranty', body: 'Non-prorated, transferable warranty with 50-year hail protection and 35-year chalk and color change coverage.' },
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
            <Image src="/steel-reinforcement.jpg" alt="Steel siding reinforcement detail showing structural strength and quality" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Steel vs. Vinyl Siding</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Steel Siding Advantages</h3>
                  <ul className="space-y-2">
                    {[
                      'Far more impact resistant — won\'t dent from hail',
                      'Fire resistant (Class A rating)',
                      'Color baked in — superior fade resistance',
                      'Termite and pest proof',
                      'Can be repainted if desired',
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
                  <h3 className="font-bold text-gray-900 mb-2">Vinyl Siding Advantages</h3>
                  <ul className="space-y-2">
                    {[
                      'Lower initial cost',
                      'Lighter weight',
                      'Wide color and profile selection',
                      'Never needs painting',
                      'Good long-term durability in mild climates',
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
              <h3 className="text-lg font-bold text-gray-900 mb-1">Comparing Siding Options?</h3>
              <p className="text-gray-700 leading-relaxed">
                Browse our full siding lineup — vinyl, composite, insulated, and steel — to find the best fit for your home and budget.
              </p>
            </div>
            <Link href="/siding/siding-options" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              View All Siding →
            </Link>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Siding Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/siding.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <RelatedFAQs items={sidingFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free steel siding estimate. We serve Davenport,
            Bettendorf, Moline, Rock Island, and the surrounding Quad Cities area.
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
        <Link href="/siding/siding-replacement-cost" className="text-accent hover:text-accent-dark underline">Siding Replacement Cost Guide →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/siding/steel-vs-vinyl-siding" className="text-accent hover:text-accent-dark underline">Steel vs. Vinyl Siding →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">Glossary of Terms →</Link>
      </div>
    </>
  )
}
