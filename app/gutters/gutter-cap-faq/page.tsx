import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion, { type FAQItem } from '@/components/shared/FAQAccordion'
import SpeakableSchema from '@/components/seo/SpeakableSchema'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/gutter-cap-faq'])

const faqs: FAQItem[] = [
  {
    question: 'How does the Gutter Cap system keep leaves out?',
    answer:
      'The Gutter Cap system works on the principle of surface tension. A curved aluminum cover sits over the top of your gutter. When rainwater flows from the roof to the eave, it follows the curve of the Gutter Cap and bends down into the gutter opening. Leaves and larger debris don\'t have enough surface contact to follow the curve — they continue in a straight line and fall off the front edge to the ground below. Water gets in; leaves stay out.',
  },
  {
    question: 'What warranty does the Gutter Cap system come with?',
    answer:
      'The Gutter Cap system comes with a strong product warranty covering materials and performance. Suburban Construction also backs every Gutter Cap installation with our lifetime workmanship guarantee — if the installation itself ever causes a problem, we return and correct it at no charge. Contact us for current warranty specifics, as terms may vary by product configuration.',
  },
  {
    question: 'Will I ever need to maintain the Gutter Cap after installation?',
    answer:
      'The Gutter Cap system is designed to be virtually maintenance-free. In most installations, homeowners never need to touch their gutters again. In rare cases involving very fine pine needles or heavy tree pollen, a small amount of debris may accumulate on the surface of the cover and may occasionally need to be rinsed off — but this is a far less demanding task than traditional gutter cleaning. The interior of the gutter remains clear because the debris never enters.',
  },
  {
    question: 'How much does Gutter Cap cost compared to regular gutter cleaning?',
    answer:
      'The upfront cost of the Gutter Cap system is higher than a single gutter cleaning, but when compared against the ongoing cost of professional gutter cleaning (typically $100–$250 per cleaning, done 2–4 times per year for heavily treed properties), Gutter Cap can pay for itself in just a few years. Beyond the direct cost savings, you also eliminate the risk of falls from ladder climbing and the damage that clogged, overflowing gutters cause to your home.',
  },
  {
    question: 'How does Gutter Cap compare to other gutter guard products?',
    answer:
      'There are many gutter protection products on the market, ranging from cheap foam inserts to mesh screens to micro-mesh filters. The Gutter Cap is distinguished by its use of surface tension rather than filtration — it doesn\'t rely on small holes or mesh that can eventually clog with fine particles. Its heavy-gauge aluminum construction is also more durable than plastic or thin-gauge products. We also offer the Shur Flow micro-mesh system for situations where it may be better suited. Our estimator can discuss the pros and cons of each for your specific property.',
  },
  {
    question: 'Does Gutter Cap prevent ice damming?',
    answer:
      'Gutter Cap will minimize ice damming under the fascia or under the first row of shingles. Because Gutter Cap is mounted over the first row of shingles and under the second row, ice damming in that protected zone is uncommon — there is insulation under that portion of the roof, and the melt-freeze cycle is less likely to occur there. However, you may see icicles sooner with Gutter Cap than without it, because ice can no longer fill up the gutter first before spilling over. Considerably less damage will occur with ice on top of Gutter Cap than when it was inside the gutter. For complete elimination of ice damming in the gutter area, ask about the Heater Cap system, which adds a low-wattage heating element to keep the gutter and downspout clear of ice through the entire winter.',
  },
  {
    question: 'Why should I choose Gutter Cap over other products?',
    answer:
      'Gutter Cap has several design advantages that set it apart. It is made of X-10 aluminum alloy for sturdiness and durability. The panels are painted with a Kynar finish that will not fade or chalk — most competing systems will bleach out within 2–5 years. There are no vertical openings in the panel for debris to clog or mesh together. The system is low profile and, with proper color matching to the roof, nearly invisible. And the warranty is double lifetime for materials, performance, and — most importantly — labor. You will never get on a ladder to clean your gutters again, and you will never pay service fees to have problems fixed. The warranty is transferable to a new homeowner one time at no charge.',
  },
  {
    question: 'How does Gutter Cap compare to other gutter protection products?',
    answer: `There are many other gutter protection products available. Here is how Gutter Cap compares to the most common types:

Screens, mesh, and filters: These all have openings on top that become clogged quickly with falling debris. They can collapse from the weight of snow, ice, and birds. They are typically low in cost and low in performance, with limited or no warranties.

Vinyl products: Vinyl gutter covers tend to collapse at bending points under the weight of snow and ice. Expansion and contraction through the seasons can cause panels to shift away from their clip systems and into the gutter. Critters can chew through vinyl. Warranties are generally very weak. These products are cheap to install and cheap in performance.

Bracket or clip systems: Brackets can restrict the range of application for various roof pitches. Some systems use a bracket every 5 feet, creating weakness in the middle of the panel. Manufacturers frequently change bracket designs due to problems with previous versions (rust, warping). If the roof needs to be replaced, certain bracket systems cannot be reinstalled. The more components in a system, the more chance of installation error.

One-piece and two-piece integrated systems: These typically require homeowners to replace their existing gutters even if the gutters are in good condition. If any section is damaged by hail, roofers, or other causes, the entire cover or gutter-and-cover assembly must be replaced rather than just a short section. Some one-piece systems use 3-inch gutters, cutting water flow capacity in half.`,
  },
  {
    question: 'What is the Heater Cap and do I need it?',
    answer:
      'The Heater Cap is an optional upgrade that adds a low-wattage heating element to the Gutter Cap system. It is designed to prevent ice from forming in gutters and downspouts during freeze-thaw cycles, which are common in the Quad Cities winter. Ice dams occur when melting snow from the warm roof surface refreezes at the cold eave, eventually backing water under shingles and into the home. The Heater Cap prevents this by keeping the gutter and downspout clear of ice. It\'s particularly recommended for homes with north-facing or heavily shaded rooflines where ice tends to accumulate. We can assess your situation during the free estimate.',
  },
]

export default function GutterCapFAQPage() {
  return (
    <>
      <SpeakableSchema />
      <PageHero
        title="Gutter Cap FAQ"
        subtitle="Common questions about the Gutter Cap system, how it works, and what it costs"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[
          { label: 'Gutters', href: '/gutters/seamless-gutters' },
          { label: 'Gutter Cap FAQ' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Common Questions About the Gutter Cap System
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The Gutter Cap is one of our most popular products — and one that generates a lot of
            questions from homeowners who are tired of cleaning gutters. Here are the answers to
            the most common ones.
          </p>

          <FAQAccordion items={faqs} />

          <div className="mt-10 bg-accent-subtle border border-accent-faint rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">See It in Action</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Watch our Gutter Cap video demonstration to see the surface tension principle in
              action, or visit our{' '}
              <Link href="/gutters/gutter-cap" className="text-accent hover:underline">
                Gutter Cap product page
              </Link>{' '}
              for a full overview of the system.
            </p>
            <Link href="/contact" className="text-accent hover:underline font-medium">
              Request a free Gutter Cap estimate →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free Gutter Cap estimate throughout the Quad Cities.
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
