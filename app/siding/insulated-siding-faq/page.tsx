import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion, { type FAQItem } from '@/components/shared/FAQAccordion'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/insulated-siding-faq'])

const faqs: FAQItem[] = [
  {
    question: 'How much energy will insulated siding save me?',
    answer:
      'Energy savings from insulated siding depend on the existing state of your wall insulation, your home\'s construction, and local climate conditions. Studies have shown that insulated vinyl siding can reduce heating and cooling costs by 5–20% compared to standard siding. The savings are greatest in older homes with minimal wall insulation, where the foam backing provides a meaningful improvement to the wall\'s total R-value. In the Quad Cities climate — with cold winters and hot summers — the payback period is typically favorable.',
  },
  {
    question: 'What is EPS foam and is it safe?',
    answer:
      'EPS stands for expanded polystyrene — the same material used in building insulation boards and protective packaging. It is a closed-cell foam that is resistant to moisture absorption, will not support mold growth, and does not off-gas volatile compounds. It has been used safely in building construction for decades and is fully compliant with all relevant building codes and standards. The foam backing on insulated siding is permanently bonded to the panel and does not require any special handling or precautions.',
  },
  {
    question: 'Does insulated siding cost significantly more than standard vinyl?',
    answer:
      'Insulated siding panels cost more per square foot than standard vinyl siding due to the foam backing. However, the premium is generally modest relative to the total project cost, and the energy savings over time can offset the additional upfront investment. We can provide a side-by-side comparison during your free estimate so you can make an informed decision about whether the upgrade makes sense for your home and budget.',
  },
  {
    question: 'Will insulated siding reduce noise from outside?',
    answer:
      'Yes. The EPS foam backing adds a meaningful layer of sound attenuation that standard siding does not provide. Homeowners who have installed insulated siding frequently mention reduced road noise, wind noise, and general exterior sound transmission as an unexpected benefit. This is particularly noticeable in homes near busy streets or in areas with significant ambient noise.',
  },
  {
    question: 'How is insulated siding installed differently from standard vinyl?',
    answer:
      'The installation process for insulated siding is similar to standard vinyl, with a few differences related to the additional thickness and weight of the panels. Fastening patterns are slightly different, and corner and trim accessories designed for insulated siding must be used to maintain consistent profiles at transitions. Our installation crews are fully trained and experienced with both standard and insulated siding, so the quality of the finished installation is the same regardless of which product you choose.',
  },
  {
    question: 'Can insulated siding be installed over existing siding?',
    answer:
      'While it is technically possible to install siding over existing siding in some situations, Suburban Construction does not recommend or practice this approach. Installing over old siding hides potential rot, moisture damage, and pest activity that should be addressed before new siding is installed. It also adds thickness that can cause problems at windows, doors, and other transitions. We always remove existing siding before installation, inspect the underlying sheathing, and address any issues found — this is the only way to ensure a long-lasting, problem-free result.',
  },
]

export default function InsulatedSidingFAQPage() {
  return (
    <>
      <PageHero
        title="Insulated Siding FAQ"
        subtitle="Answers to common questions about insulated siding energy savings and installation"
        bgImage="/sidinghouse.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Insulated Siding FAQ' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Common Questions About Insulated Siding
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Insulated siding is one of the more technically interesting exterior improvement options
            we offer. Here are the questions we hear most often from homeowners considering it.
          </p>

          <FAQAccordion items={faqs} />

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Learn More About Insulated Siding</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Visit our{' '}
              <Link href="/siding/insulated-siding" className="text-amber-600 hover:underline">
                Insulated Siding product page
              </Link>{' '}
              for a detailed overview of how the EPS foam backing works and the full list of benefits.
              Or contact us to discuss whether insulated siding is the right choice for your home.
            </p>
            <Link href="/contact" className="text-amber-600 hover:underline font-medium">
              Request a free estimate →
            </Link>
          </div>
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
            Contact Suburban Construction for a free estimate on insulated siding throughout the
            Quad Cities area.
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
