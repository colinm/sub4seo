import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion from '@/components/shared/FAQAccordion'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/condensation-faq'])

const condensationFaqs = [
  {
    question: 'What causes condensation on windows?',
    answer:
      'Condensation forms when warm, moist indoor air comes into contact with a cold glass surface. When the glass surface temperature drops below the dew point of the air in the room, the moisture in the air condenses into water droplets on the glass. This is most common during winter when outdoor temperatures are low and indoor heating raises both room temperature and relative humidity. It is the same basic process that causes a cold glass of water to "sweat" on a warm day.',
  },
  {
    question: 'Is condensation between the panes of glass a problem?',
    answer:
      'Yes — condensation between the panes of a double or triple pane window is a serious problem that indicates the seal has failed. When the hermetic seal that contains the insulating gas fill (argon or krypton) breaks down, moist outdoor air can enter the space between the panes. When temperatures change, that moisture condenses on the interior glass surfaces, creating a foggy or streaky appearance that cannot be cleaned. A failed seal also means the gas fill has been lost, significantly reducing the window\'s insulating value. A window with seal failure should be replaced. Contact Suburban Construction at 563-391-4000 to assess your windows.',
  },
  {
    question: 'Does triple pane glass reduce condensation on the interior surface?',
    answer:
      'Yes, significantly. Triple pane windows keep the interior glass surface warmer than single or double pane windows. With more insulating layers between the cold outside air and the indoor glass surface, the interior pane stays closer to room temperature. Since condensation only forms when a surface drops below the dew point, a warmer interior glass surface means condensation is far less likely to occur. This is one of the practical everyday benefits of upgrading to triple pane krypton glass windows — less condensation, less moisture buildup around frames, and less cleaning.',
  },
  {
    question: 'How can I reduce condensation on my windows?',
    answer:
      'There are several approaches: (1) Lower indoor humidity by running bathroom and kitchen exhaust fans more consistently, using a dehumidifier in winter, and ensuring proper ventilation throughout your home. (2) Improve air circulation near windows by keeping window treatments open and allowing air movement across glass surfaces. (3) Check that the humidity setting on your humidifier is appropriate — many people run their humidifiers too high in winter. (4) Upgrade to triple pane windows, which keep interior glass surfaces warmer and significantly reduce the likelihood of condensation forming. If you are seeing excessive condensation, it may indicate that your home has moisture management issues worth addressing beyond just the windows.',
  },
  {
    question: 'Is condensation on the outside of my window normal?',
    answer:
      'Yes — exterior condensation is actually a sign that your window is working correctly. When the outdoor temperature drops below the dew point of the outdoor air and the exterior glass surface is cool enough (because the window is insulating well and not transferring indoor heat outward), moisture condenses on the outside. This happens most often in spring and fall, on cool mornings when overnight temperatures drop. It is temporary and will disappear as the day warms up. Exterior condensation means your window is doing its job of keeping indoor heat inside. It is the opposite of a problem.',
  },
  {
    question: 'Can condensation damage my home?',
    answer:
      'Persistent condensation on or around windows can contribute to problems over time. Repeated moisture exposure can stain or damage window frames, sills, and surrounding drywall. In severe cases it can contribute to mold growth. If you are seeing consistent, heavy condensation that pools on the sill or runs down the wall, it is worth investigating whether your windows are performing adequately and whether your home\'s humidity levels are appropriate. Suburban Construction can assess your current windows and help you determine whether an upgrade makes sense.',
  },
]

export default function CondensationFAQPage() {
  return (
    <>
      <PageHero
        title="Window Condensation FAQ"
        subtitle="Understanding condensation on windows — what it means and what to do about it"
        breadcrumbs={[
          { label: 'Resources', href: '/resources/faq' },
          { label: 'Condensation FAQ' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What You Need to Know About Window Condensation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Condensation on windows is one of the most common concerns homeowners bring to us. The
            good news is that most condensation is a natural phenomenon and not a sign that
            something is wrong with your windows. However, certain types of condensation are
            serious warning signs that your windows need attention.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Here are answers to the most common questions about window condensation, from our
            team at Suburban Construction.
          </p>

          <FAQAccordion items={condensationFaqs} />

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Download the AMI Condensation Guide</h3>
            <p className="text-gray-600 text-sm mb-3">
              Associated Materials Inc. has prepared a detailed brochure on window condensation.
              Download it for a thorough explanation of the topic.
            </p>
            <a
              href="/AMI_Condensation_brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 font-semibold underline text-sm"
            >
              Download Condensation Guide (PDF) →
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Questions About Your Specific Windows?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us and we will help you assess whether your windows are performing correctly
            and whether an upgrade makes sense for your home.
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
