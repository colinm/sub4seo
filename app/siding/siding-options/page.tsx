import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
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

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          <p className="text-gray-600 leading-relaxed mb-8">
            New siding is one of the highest-impact improvements you can make to your home. It protects
            the structural wall system from weather damage, improves energy efficiency, and dramatically
            transforms the curb appeal of any home. Our team handles everything from old siding removal
            to the final trim coat — backed by a lifetime workmanship guarantee.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Siding Product Lines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {sidingTypes.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block border border-gray-200 rounded-lg p-5 hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                <span className="inline-block mt-3 text-amber-500 text-sm font-medium group-hover:text-amber-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Color Selection</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our siding lines are available in a comprehensive palette of exterior colors — from
            traditional whites and earth tones to bold architectural colors. Color selection is
            one of the most exciting parts of a siding project, and we bring sample boards to
            every estimate so you can evaluate colors against your home&apos;s brick, stone, trim,
            and roofline in natural light.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Whites, creams, and off-whites for traditional looks
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Earth tones: tan, clay, khaki, beige, and warm gray
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Cool grays, blue-grays, and slate tones for modern homes
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Architectural greens, blues, and burgundy for distinctive homes
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trim, Soffit & Fascia</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A complete siding installation includes more than just the field panels. We also install
            corner posts, J-channels, starter strips, window and door trim, undersill trim, and
            specialty pieces that create clean, professional lines at every termination point. We
            offer pre-finished aluminum and vinyl trim in colors coordinated to match or contrast with
            your siding selection.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Aluminum soffit panels for overhangs and eaves — vented or solid
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Pre-finished aluminum fascia to cover wood fascia boards
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Window and door surrounds in coordinating colors
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Corner posts, inside corner trim, and utility trim pieces
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/siding/siding-installation" className="text-amber-600 hover:underline">
                Our Installation Process
              </Link>{' '}
              — step by step, from old siding removal to final cleanup
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/siding/vinyl-siding-faq" className="text-amber-600 hover:underline">
                Vinyl Siding FAQ
              </Link>{' '}
              — maintenance, durability, cost questions answered
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/siding/insulated-siding-faq" className="text-amber-600 hover:underline">
                Insulated Siding FAQ
              </Link>{' '}
              — energy savings and installation details
            </li>
          </ul>
        </div>
      </section>

      <section className="py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Siding Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/siding.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free siding estimate. We serve Davenport, Bettendorf,
            Moline, Rock Island, and a 90-mile radius throughout Iowa and Illinois.
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
