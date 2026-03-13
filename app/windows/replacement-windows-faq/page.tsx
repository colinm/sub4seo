import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion, { type FAQItem } from '@/components/shared/FAQAccordion'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/replacement-windows-faq'])

const faqs: FAQItem[] = [
  {
    question: 'How much do replacement windows cost?',
    answer:
      'Replacement window costs vary depending on window style, size, glass options, and installation complexity. Single hung and double hung windows in standard sizes are the most affordable. Bay and bow windows, egress windows, and specialty shapes cost more due to their size and the additional work involved. We provide free, detailed estimates with no obligation. Most homeowners find that the energy savings make replacement windows one of the best-return investments in their home.',
  },
  {
    question: 'How long does window installation take?',
    answer:
      'Most full-house window replacement jobs are completed in a single day. A typical home with 10–15 windows usually takes 6–8 hours for an experienced two-person crew. Larger homes or projects involving specialty windows like bay, bow, or egress installations may require two days. We work efficiently and minimize the time your home is open to the elements during the process.',
  },
  {
    question: 'How much energy will I save with new windows?',
    answer:
      'Energy savings depend on the condition of your old windows and the glass system you choose for the replacements. Replacing single-pane windows with standard double-pane Low-E units typically reduces window-related heat loss by 30–50%. Upgrading to our FreedomMaxxx triple pane krypton glass system — which is 80% more energy efficient than standard double-pane units — can produce dramatically greater savings. Many customers report noticeably lower heating bills after the first full winter with new windows.',
  },
  {
    question: 'What warranty comes with replacement windows?',
    answer:
      'Our replacement windows come with a lifetime manufacturer\'s warranty covering the glass seal, frame, and hardware. If a glass seal ever fails (causing fogging between panes), the unit is replaced at no charge. We also provide a separate lifetime workmanship guarantee on our installation — if the installation itself ever causes a problem, we return and correct it at no cost to you.',
  },
  {
    question: 'What is the difference between triple pane and double pane glass?',
    answer:
      'Double pane windows have two glass layers with a single insulating air or gas space between them. Triple pane windows add a third glass layer and a second gas space, creating an additional thermal barrier. Our FreedomMaxxx triple pane krypton system uses krypton gas (which insulates 50% better than argon) and multi-layer Low-E coatings for a result that is up to 80% more energy efficient than a standard double-pane unit. For Quad Cities homeowners facing cold winters, the upgrade to triple pane krypton is often worth the additional investment.',
  },
  {
    question: 'How do I clean tilt-in replacement windows?',
    answer:
      'Tilt-in windows (available on our double hung and single hung lines) are designed for easy cleaning from inside your home. Simply release the tilt latches at the top corners of the sash, tilt the sash inward to a horizontal position, and clean the outer surface with a standard glass cleaner and soft cloth. Tilt the sash back up until it clicks into the closed position. We walk every customer through this process during the post-installation walkthrough.',
  },
  {
    question: 'Do you offer financing for window replacement projects?',
    answer:
      'Yes, we offer financing options for qualifying customers. Financing makes it possible to enjoy the energy savings and comfort improvements of new windows right away, rather than waiting to save the full purchase price. Ask about current financing programs during your free estimate appointment.',
  },
  {
    question: 'What brands of windows do you install?',
    answer:
      'Suburban Construction installs windows from manufacturers that meet our standards for quality, energy performance, and warranty support. We specialize in the Freedom Series product line, which includes the FreedomMaxxx triple pane krypton glass system. We have installed these products in thousands of Quad Cities homes since 1985 and stand confidently behind their performance and durability.',
  },
]

export default function ReplacementWindowsFAQPage() {
  return (
    <>
      <PageHero
        title="Replacement Windows FAQ"
        subtitle="Honest answers to the questions homeowners ask most often"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Replacement Windows FAQ' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Common Questions About Window Replacement
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We&apos;ve been answering questions about replacement windows since 1985. Below are the most
            common ones. If you don&apos;t find the answer you&apos;re looking for, call us or request a
            free estimate — we&apos;re happy to talk through any question without pressure.
          </p>

          <FAQAccordion items={faqs} />

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Have More Questions?</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our team is available by phone at{' '}
              <a href="tel:5633914000" className="text-amber-600 hover:underline font-medium">
                563-391-4000
              </a>{' '}
              or{' '}
              <a href="tel:18007173066" className="text-amber-600 hover:underline font-medium">
                1-800-717-3066
              </a>
              . You can also visit our showroom at 3602 North Harrison Street, Davenport, Iowa — open
              Monday through Friday, 7:30 AM to 4:30 PM.
            </p>
            <Link href="/contact" className="text-amber-600 hover:underline font-medium">
              Send us a message →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Windows Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/windows.pdf"
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
            Schedule a free, no-pressure in-home estimate. We serve Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding area.
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
