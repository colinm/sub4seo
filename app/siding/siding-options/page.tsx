import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/siding-options'])

const sidingTypes = [
  {
    title: 'Vinyl Siding — Freedom Series',
    href: '/siding/vinyl-siding',
    description: 'Our most popular option. Dozens of colors and profiles, virtually maintenance-free, and priced for every budget.',
  },
  {
    title: 'Insulated Vinyl Siding',
    href: '/siding/insulated-siding',
    description: 'EPS foam-backed panels improve R-value, reduce energy costs, and produce a thicker, more substantial look.',
  },
  {
    title: 'Steel Siding',
    href: '/siding/steel-siding',
    description: 'The most durable option available. Fire resistant, dent resistant, and color-fast in Iowa and Illinois climates.',
  },
  {
    title: 'Composite Siding',
    href: '/siding/composite-siding',
    description: 'Real wood fiber construction delivers authentic wood texture without the rot, painting, or maintenance.',
  },
]

export default function SidingOptionsPage() {
  return (
    <>
      <PageHero
        title="Siding Options"
        subtitle="Explore our complete line of siding products, colors, profiles, and accessories"
        bgImage="/sidinghouse.jpg"
        breadcrumbs={[{ label: 'Siding' }]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Right Siding for Every Home
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction has been installing exterior siding throughout the Quad Cities since
                1985. We offer a curated selection of siding products from manufacturers we trust — every
                line we carry has been vetted for quality, durability, and performance in the Iowa and
                Illinois climate. Whether you want the lowest-maintenance option available or the most
                authentic wood appearance, we have a product that fits your goals and budget.
              </p>
              <p className="text-gray-600 leading-relaxed">
                New siding is one of the highest-impact improvements you can make to your home. It protects
                the structural wall system from weather damage, improves energy efficiency, and dramatically
                transforms the curb appeal of any home. Our team handles everything from old siding removal
                to the final trim coat — backed by a lifetime workmanship guarantee.
              </p>
            </div>
            <Image src="/vinyl.jpg" alt="Vinyl siding installed on home showing clean low-maintenance finish" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Image src="/steel-siding.jpg" alt="Steel siding installed on home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/composite1.jpg" alt="Composite siding with wood grain texture" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/insulated.jpg" alt="Insulated siding with EPS foam backing" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/sidinghouse.jpg" alt="Completed siding installation on home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Siding Product Lines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sidingTypes.map((s) => (
              <Link key={s.href} href={s.href} className="block bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">✓</span>
                  <h3 className="font-bold text-gray-900 text-sm">{s.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{s.description}</p>
                <span className="inline-block mt-2 pl-5 text-accent-mid text-sm font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image src="/siding-installation.png" alt="Professional siding installation on Quad Cities home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Color Selection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our siding lines are available in a comprehensive palette of exterior colors — from
                traditional whites and earth tones to bold architectural colors. Color selection is
                one of the most exciting parts of a siding project, and we bring sample boards to
                every estimate so you can evaluate colors against your home&apos;s brick, stone, trim,
                and roofline in natural light.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Whites, creams, and off-whites for traditional looks',
                  'Earth tones: tan, clay, khaki, beige, and warm gray',
                  'Cool grays, blue-grays, and slate tones for modern homes',
                  'Architectural greens, blues, and burgundy for distinctive homes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trim, Soffit &amp; Fascia</h2>
              <ul className="space-y-3">
                {[
                  'Aluminum soffit panels for overhangs and eaves — vented or solid',
                  'Pre-finished aluminum fascia to cover wood fascia boards',
                  'Window and door surrounds in coordinating colors',
                  'Corner posts, inside corner trim, and utility trim pieces',
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

      {/* Additional Resources */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/siding/siding-installation', label: 'Our Installation Process', desc: 'Step by step, from old siding removal to final cleanup' },
              { href: '/siding/vinyl-siding-faq', label: 'Vinyl Siding FAQ', desc: 'Maintenance, durability, cost questions answered' },
              { href: '/siding/insulated-siding-faq', label: 'Insulated Siding FAQ', desc: 'Energy savings and installation details' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block bg-accent-subtle border border-accent-faint rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
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

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free siding estimate. We serve Davenport, Bettendorf,
            Moline, Rock Island, and a 90-mile radius throughout Iowa and Illinois.
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
