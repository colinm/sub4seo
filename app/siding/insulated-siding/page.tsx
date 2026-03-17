import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/insulated-siding'])

const sidingFaqLinks = [
  { href: '/siding/vinyl-siding-faq', title: 'Siding FAQ', description: 'Vinyl and steel siding questions: durability, maintenance, cost, and color choices.', icon: '🏠' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

export default function InsulatedSidingPage() {
  return (
    <>
      <PageHero
        title="Insulated Vinyl Siding"
        subtitle="EPS foam-backed panels that lower energy costs, add rigidity, and improve curb appeal"
        bgImage="/sidinghouse.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Insulated Siding' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Siding That Pays for Itself in Energy Savings
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Insulated vinyl siding is standard vinyl siding with a layer of expanded polystyrene (EPS)
                foam permanently bonded to the back of each panel. That foam fills the air gap between the
                siding and the sheathing, eliminating a common source of thermal loss in exterior walls and
                improving the overall R-value of the wall assembly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For Quad Cities homeowners, the energy benefit is real and measurable. Iowa and Illinois
                winters place significant heating demands on homes, and any improvement to the thermal
                envelope pays dividends on your energy bill every year for the life of the siding.
                Insulated siding is particularly effective on older homes where wall insulation may be
                minimal or degraded.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond energy performance, the foam backing adds structural rigidity to each panel. Insulated
                siding panels are noticeably thicker, stiffer, and more substantial-feeling than standard
                vinyl — producing a higher-quality appearance and greater resistance to denting from physical
                impacts. The overall effect is a home exterior that looks and feels more solid.
              </p>
            </div>
            <Image src="/insulated.jpg" alt="Insulated vinyl siding panel showing EPS foam backing for energy efficiency" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/siding1.png" alt="Vinyl siding profile detail" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/sidinghouse.jpg" alt="Home with new insulated siding installed" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
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
              { title: 'Continuous Insulation', body: 'EPS foam backing adds continuous insulation across the entire wall surface.' },
              { title: 'Improved R-Value', body: 'Improves wall R-value — reduces heating and cooling costs year-round.' },
              { title: 'Added Rigidity', body: 'Adds rigidity to each panel — produces a thicker, more substantial appearance.' },
              { title: 'Noise Reduction', body: 'Reduces exterior noise transmission — homes feel quieter.' },
              { title: 'Eliminates Air Gap', body: 'Eliminates the air gap that allows thermal bridging in standard siding installations.' },
              { title: 'All Colors & Profiles', body: 'Available in all Freedom Series colors and profiles.' },
              { title: 'No Maintenance', body: 'Same low-maintenance benefits as standard vinyl — no painting or caulking required.' },
              { title: 'Full Warranty', body: 'Lifetime manufacturer warranty; our lifetime workmanship guarantee included.' },
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
            <Image src="/siding1.png" alt="Vinyl siding profile showing insulation backing detail" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How the EPS Foam Backing Works</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Standard vinyl siding is installed over a wood or OSB sheathing surface, but the siding
                panel itself sits slightly off the wall — creating an air gap behind each panel. That air
                gap allows thermal bridging and convective looping that reduces wall insulation effectiveness.
                The EPS foam backing fills that gap, creating a continuous insulating layer across the full
                wall surface with no thermal bridges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The EPS foam used in insulated siding panels is moisture-resistant and will not support
                mold growth. It also provides a stable backing that reduces the &quot;oil-canning&quot;
                (wavy appearance) that can affect standard vinyl siding in temperature extremes.
              </p>
              <ul className="space-y-4">
                {[
                  { name: 'Especially valuable on older Quad Cities homes', desc: 'where wall insulation may be minimal or degraded' },
                  { name: 'No interior work required', desc: 'one of the few exterior improvements that measurably reduces energy consumption' },
                  { name: 'Same low maintenance as standard vinyl', desc: 'no painting or caulking ever required' },
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

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Especially Valuable on Older Quad Cities Homes</h3>
              <p className="text-gray-700 leading-relaxed">
                Many homes in Davenport, Bettendorf, Moline, and Rock Island were built with minimal wall
                insulation by today&apos;s standards. Adding insulated siding is one of the few exterior
                improvements that measurably reduces energy consumption without requiring interior work.
              </p>
            </div>
            <Link href="/contact" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              Get an Estimate →
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
            Contact Suburban Construction for a free insulated siding estimate throughout the Quad Cities.
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
