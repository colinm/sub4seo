import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion from '@/components/shared/FAQAccordion'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/condensation-faq'])

const condensationFaqs = [
  {
    question: 'Do windows cause condensation?',
    answer:
      'No. Windows do not cause condensation — they serve as visible areas where moisture condenses, warning you that there is too much moisture inside your home. Windows don\'t manufacture water. Water on windows is condensation, and it is not a window problem. The solution does not come from the windows themselves; it comes from managing indoor humidity levels. If you see fog or moisture covering whole windows (not just the corners), that is a sign of a serious moisture buildup that may also be affecting your attic insulation, exterior paint, and interior walls.',
  },
  {
    question: 'What is condensation?',
    answer:
      'Condensation is the result of high humidity producing a "fog" once it hits a colder surface. The humidity is caused by excess water vapor in the home — most commonly seen as a foggy mirror after a hot shower. Condensation usually appears first on windows because glass surfaces have the lowest temperature of any interior surface in the home. When the glass surface drops below the dew point of the indoor air, moisture condenses on it.',
  },
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
    question: 'What causes high indoor humidity?',
    answer:
      'Humidity comes from excess water vapor in the air. All homes have a certain level of moisture due to everyday household activities. Cooking, laundry, and dishwashing alone can add up to five pounds of water vapor into the air daily. Other sources include plants, heating systems, and humidifiers. Seasonal changes, quick temperature swings, and recent construction or remodeling can also add excess humidity temporarily. During construction, large quantities of water are displaced into the air from building materials such as concrete, plaster, and drywall compound. After one season of heating, these materials typically dry out and condensation problems often disappear on their own.',
  },
  {
    question: 'Why wasn\'t condensation a problem in my home before?',
    answer:
      'Today\'s construction technology produces more energy-efficient, "tighter" homes. That is great for keeping your home comfortable, quieter, and cleaner — but by sealing your home you are also keeping moisture in. Older, draftier homes allowed moisture to escape naturally through constant infiltration of outside air. In a modern tight home, it is very easy to build up extremely high levels of indoor humidity, which shows up as condensation on your coldest surfaces — typically windows.',
  },
  {
    question: 'How can I reduce condensation on my windows?',
    answer:
      'There are several approaches: (1) Use kitchen and bathroom exhaust fans consistently — run them while humidity-producing activities are happening and let them run a while after. (2) Air out your kitchen, bathroom, and laundry room during or just after use, since outside air usually contains less water vapor. (3) If you have a furnace humidifier or other humidity device, check that it is set to produce only the appropriate amount of humidity — it may not be needed. (4) Make sure louvers in attic or basement crawl spaces are open and large enough. (5) Open the fireplace damper to allow moisture to escape. (6) Install ceiling fans to keep air circulating. (7) Dry heat from your furnace will help reduce relative humidity. (8) If condensation persists, ask your heating contractor about an outside air intake or additional ventilation. Reducing indoor humidity will eliminate most or all of the condensation.',
  },
  {
    question: 'Does the type of window affect how much condensation I see?',
    answer:
      'Sometimes. Bay and bow windows tend to experience more condensation than other window styles. This is because air circulation around those window types is more restricted, and since they project away from the insulated house wall, they can be a few degrees cooler in temperature. To reduce condensation on bay and bow windows, a good installer will insulate under the seat and head of the unit. As a secondary measure, placing a common electric fan near the window to improve air circulation can also help.',
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
              className="text-accent hover:text-accent-dark font-semibold underline text-sm"
            >
              Download Condensation Guide (PDF) →
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
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
