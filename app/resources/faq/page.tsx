import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion from '@/components/shared/FAQAccordion'
import SpeakableSchema from '@/components/seo/SpeakableSchema'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/faq'])

const faqCategories = [
  {
    href: '/windows/replacement-windows-faq',
    title: 'Window FAQ',
    description: 'Replacement windows, installation timelines, energy savings, warranties, and more.',
    icon: '🪟',
  },
  {
    href: '/siding/vinyl-siding-faq',
    title: 'Siding FAQ',
    description: 'Vinyl and steel siding questions: durability, maintenance, cost, and color choices.',
    icon: '🏠',
  },
  {
    href: '/gutters/gutter-cap-faq',
    title: 'Gutter Cap FAQ',
    description: 'How the Gutter Cap system works, how it compares, and what installation involves.',
    icon: '🌧️',
  },
  {
    href: '/resources/condensation-faq',
    title: 'Condensation FAQ',
    description: 'What causes condensation on windows, what it means, and how to address it.',
    icon: '💧',
  },
  {
    href: '/resources/convection-faq',
    title: 'Convection FAQ',
    description: 'How convection causes heat loss through windows and how gas fills reduce it.',
    icon: '🌡️',
  },
  {
    href: '/resources/heater-cap-faq',
    title: 'Heater Cap FAQ',
    description: 'How the Heater Cap gutter system prevents ice dams and keeps gutters clear in winter.',
    icon: '❄️',
  },
  {
    href: '/resources/stain-formula-faq',
    title: 'Stain Formulas',
    description: 'How to get color match information for touch-ups on siding and windows.',
    icon: '🎨',
  },
]

const generalFaqs = [
  {
    question: 'How long has Suburban Construction been in business?',
    answer:
      'Suburban Construction was founded in 1985 by Brian D. Girskis in Bettendorf, Iowa. We have been serving the Quad Cities and surrounding areas for over 40 years, completing more than 35,000 installations.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the greater Quad Cities area and a 90-mile radius, including Davenport, Bettendorf, Moline, Rock Island, East Moline, Muscatine, Clinton, DeWitt, Sterling, Rock Falls, and many more communities in eastern Iowa and western Illinois.',
  },
  {
    question: 'Do you offer a warranty on your work?',
    answer:
      'Yes. Suburban Construction provides a lifetime workmanship guarantee on all installations. This covers defects in installation — meaning if something goes wrong due to how a product was installed, we will make it right at no charge. We also handle manufacturer warranty claims on behalf of customers for the AMI / Freedom Series products we install.',
  },
  {
    question: 'How do I get an estimate?',
    answer:
      'You can request a free estimate by calling us at 563-391-4000 or 1-800-717-3066 during business hours (Monday–Friday 7:30 AM–4:30 PM), or by using our online contact form. We will schedule a convenient time to visit your home, measure, and provide a written quote with no pressure or obligation.',
  },
  {
    question: 'Can I see products before I decide?',
    answer:
      'Absolutely. Our showroom at 3602 North Harrison in Davenport, Iowa is open Monday through Friday 7:30 AM–4:30 PM and Saturday by appointment. You can see full-size window, door, and siding displays, operate products yourself, and compare options side by side. We encourage homeowners to visit before making any decisions.',
  },
]

export default function FAQPage() {
  return (
    <>
      <SpeakableSchema />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products, services, and process"
        breadcrumbs={[{ label: 'Resources' }, { label: 'FAQ' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Specialized FAQ Pages
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Browse our topic-specific FAQ sections for detailed answers about each product or
            subject area.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {faqCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:border-accent-muted hover:shadow-md transition-all"
              >
                <span className="text-2xl flex-shrink-0">{cat.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{cat.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            General Questions
          </h2>
          <FAQAccordion items={generalFaqs} />
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Don&apos;t See Your Question?
          </h2>
          <p className="text-gray-600 mb-6">
            Call us or stop by the showroom. We are happy to answer any questions about your
            specific situation with no pressure or obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:5633914000"
              className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-3 rounded border border-gray-300 transition-colors"
            >
              Call 563-391-4000
            </a>
          </div>
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
