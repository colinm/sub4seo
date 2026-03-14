import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/patio'])

const patioProducts = [
  {
    title: 'Patio Awnings',
    href: '/patio/patio-awning',
    description: 'Retractable and fixed awnings for shade and weather protection. Custom sizes and a wide selection of fabrics and colors.',
  },
  {
    title: 'Solar Shades',
    href: '/patio/solar-shades',
    description: 'Block UV rays and reduce heat gain while maintaining your outdoor view. Ideal for covered patios and porches.',
  },
  {
    title: 'Swing & Clean Windows',
    href: '/patio/swing-and-clean',
    description: 'Tilt-in porch windows that are easy to clean and perfect for porch enclosures that transition between open and closed.',
  },
  {
    title: 'Custom Canopies',
    href: '/patio/canopies',
    description: 'Professional canopy installations for outdoor spaces, commercial entries, and custom shade applications.',
  },
  {
    title: 'Awning Care & Maintenance',
    href: '/patio/awning-care',
    description: 'Keep your awning looking great with proper care. Cleaning instructions, storage tips, and fabric maintenance guidance.',
  },
]

export default function PatioPage() {
  return (
    <>
      <PageHero
        title="Patio Enclosures & Awnings"
        subtitle="Transform your outdoor living space into a place you can enjoy all year long"
        breadcrumbs={[{ label: 'Patio & Awnings' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Extend Your Living Space Outdoors
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A covered, comfortable outdoor living space is one of the most enjoyable home
            improvements you can make. In the Quad Cities, where summer afternoons can be hot and
            humid and spring evenings are perfect for sitting outside, the right patio awning,
            solar shade, or enclosure system can make a dramatic difference in how much you actually
            use your outdoor space.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction offers a complete line of patio and outdoor living products —
            from retractable awnings and fixed fabric canopies to solar shades and porch enclosure
            windows. Every product we install is custom-sized to fit your space and professionally
            installed by our experienced crew.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you want to create a shaded retreat off your back door, enclose an existing
            porch for three-season use, or add a professional canopy to a deck or patio space, we
            have a solution that fits your needs and your budget.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {patioProducts.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block border border-gray-200 rounded-lg p-5 hover:border-accent-muted hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                <span className="inline-block mt-3 text-accent-mid text-sm font-medium group-hover:text-accent">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Suburban Construction?</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Serving the Quad Cities since 1985 — decades of local outdoor product expertise
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Every product custom-sized to fit your specific space
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Professional installation crew with experience in all patio product types
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Free in-home estimate with no obligation
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Lifetime workmanship guarantee on all installations
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free patio and awning estimate throughout the
            Quad Cities area.
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
