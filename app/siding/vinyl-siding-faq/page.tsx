import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion, { type FAQItem } from '@/components/shared/FAQAccordion'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/vinyl-siding-faq'])

const faqs: FAQItem[] = [
  {
    question: 'How do I clean vinyl siding?',
    answer:
      'Vinyl siding is easy to clean. For light dirt and dust, a garden hose with a spray nozzle is usually sufficient. For more stubborn stains, use a soft-bristle brush with a mixture of 70% water and 30% white vinegar, or a commercially available siding cleaner. Avoid abrasive brushes or steel wool, which can scratch the surface. Always rinse from top to bottom and avoid directing pressurized water upward under the panels, which could force water behind the siding.',
  },
  {
    question: 'How durable is vinyl siding?',
    answer:
      'Modern vinyl siding from quality manufacturers is extremely durable. It resists moisture, rot, insects, and fungal growth. The color is integral to the material rather than applied as a surface coat, so it will never peel or chip. Standard vinyl can crack if struck with significant force in very cold temperatures, but quality products like our Freedom Series are formulated with impact modifiers that improve cold-weather performance. With proper installation, vinyl siding should last 30–40 years or more.',
  },
  {
    question: 'How much does vinyl siding installation cost?',
    answer:
      'The cost of vinyl siding installation varies based on the size of your home, the complexity of the exterior (gables, dormers, trim details), the product grade selected, and whether old siding removal and sheathing repairs are needed. We provide free, detailed estimates with no obligation. Most homeowners find that new siding is one of the best-return home improvement investments they can make, given the improvement in curb appeal, energy efficiency, and elimination of ongoing maintenance costs.',
  },
  {
    question: 'What colors and styles are available in vinyl siding?',
    answer:
      'Our Freedom Series vinyl siding is available in dozens of colors ranging from traditional whites and earth tones to deeper architectural colors. Profile options include traditional horizontal lap, dutch lap, beaded seam, and vertical siding for accents or full facades. We also offer shake and shingle panels for gable accents. We bring sample boards to every estimate so you can evaluate colors against your home in natural light.',
  },
  {
    question: 'Does vinyl siding help with energy efficiency?',
    answer:
      'Standard vinyl siding provides a modest improvement in energy efficiency compared to aged or deteriorating original siding with gaps and air infiltration points. For significantly improved energy efficiency, we recommend insulated vinyl siding, which adds an EPS foam backing to each panel. The foam fills the air gap between the siding and the sheathing, improving the wall\'s R-value and reducing heating and cooling costs. See our insulated siding page for more details.',
  },
  {
    question: 'Will vinyl siding increase my home\'s resale value?',
    answer:
      'Yes. Remodeling Magazine consistently ranks vinyl siding replacement among the highest-return home improvement projects in terms of cost recouped at resale. New siding dramatically improves curb appeal, which is one of the most significant factors in a buyer\'s first impression of a home. It also signals to buyers that the exterior has been well maintained, reducing their perception of near-term maintenance costs.',
  },
]

export default function VinylSidingFAQPage() {
  return (
    <>
      <PageHero
        title="Vinyl Siding FAQ"
        subtitle="Answers to the most common questions about vinyl siding"
        bgImage="/sidinghouse.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Vinyl Siding FAQ' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Common Questions About Vinyl Siding
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We&apos;ve been answering questions about vinyl siding for nearly four decades. Here are
            the most common ones. If you have a question that isn&apos;t covered here, please{' '}
            <Link href="/contact" className="text-amber-600 hover:underline">contact us</Link> —
            we&apos;re always happy to help.
          </p>

          <FAQAccordion items={faqs} />
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
            Contact Suburban Construction for a free, no-obligation vinyl siding estimate throughout
            the Quad Cities.
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
