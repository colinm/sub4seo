import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQAccordion from '@/components/shared/FAQAccordion'
import SpeakableSchema from '@/components/seo/SpeakableSchema'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/convection-faq'])

const convectionFaqs = [
  {
    question: 'What is convection?',
    answer:
      'Convection is a way energy transfers through glass. Especially in northern central climates, warmer air reacts with the cool inside pane of your windows. The air is cooled and becomes denser. This cool, dense air then drops to the floor and is immediately replaced by more warm air from above. You may perceive this as a cold draft coming from your windows — but it is not a draft. It is convection: a continuous cycle of warm air chilling against the glass, sinking, and drawing more warm air down in its place.',
  },
  {
    question: 'What can I do about convection?',
    answer:
      'When convection occurs, many people\'s instinct is to turn up the heat. However, this directly increases energy costs. For every 1°F drop in the interior glass surface temperature, energy costs increase approximately 2%. Turning the heat up simply compensates for the heat loss rather than stopping it. The better alternative is to install new windows that cut down on the convection process itself — keeping the interior glass surface warmer so that less heat is lost and the cycle slows.',
  },
  {
    question: 'What features should I look for in a window to reduce convection?',
    answer:
      'When looking for a window that saves energy and reduces convection, look for: multiple glazing (double or triple pane glass), gas fillers between the panes (argon or krypton, which are denser than air and resist convective flow), warm edge spacers (which keep the edges of the glass warmer, reducing the temperature differential that drives convection), and thermally resistant frame materials (which prevent heat from conducting around the glass edge). These features raise interior glass temperature, slow convection, and improve overall home comfort. New windows will help decrease convection, though it can still occur to some degree — these features minimize its effects.',
  },
  {
    question: 'What is convection in the context of windows?',
    answer:
      'Convection is a form of heat transfer that occurs through the movement of fluids — including gases like air. In a window, convection happens within the space between the glass panes. The gas in that space (air, argon, or krypton) absorbs heat from the warmer interior pane, rises, moves across to the cooler exterior pane, transfers heat to it, cools, and sinks — creating a circular flow. This movement continuously transfers heat from inside your home to the outside, reducing the window\'s insulating effectiveness.',
  },
  {
    question: 'How does convection cause heat loss through windows?',
    answer:
      'In a double or triple pane window, the gas fill between the panes is intended to act as an insulating barrier. However, when that gas is in motion — due to convection — it actively carries heat from the warm interior glass surface to the cold exterior glass surface. The result is heat loss that goes beyond simple conduction through the glass. Standard air-filled windows experience significant convection because air flows readily. The solution is to use a denser gas fill — argon or krypton — which resists convective movement due to its higher density and viscosity.',
  },
  {
    question: 'How do argon and krypton gas fills reduce convection?',
    answer:
      'Argon and krypton are inert gases that are denser and more viscous than air. This increased density and viscosity means the gas molecules resist movement — they do not flow and circulate as freely as air molecules do. The result is reduced convective heat transfer between the panes. Argon is the most commonly used gas fill and provides meaningful improvement over air-filled windows. Krypton performs even better than argon because it is denser and more viscous, making it the premium choice for maximum thermal performance.',
  },
  {
    question: 'Why is triple pane better than double pane for reducing convection?',
    answer:
      'Triple pane windows have two gas-filled spaces between three panes of glass, rather than one space between two panes. Each additional space creates another barrier to convective heat transfer. Additionally, each gas-filled chamber in a triple pane window is narrower than the single chamber in a comparable double pane window. Narrower chambers further restrict convective flow — there is simply less room for the gas to circulate. The combination of two chambers and the optimal narrow spacing, filled with krypton gas, gives triple pane krypton windows their exceptional insulating performance.',
  },
  {
    question: 'What is the practical impact of convection on my energy bills?',
    answer:
      'Convective heat loss through windows is a significant contributor to heating costs in cold climates like the Quad Cities. In winter, your furnace works harder to replace the heat lost through windows, and in summer, heat convected inward makes your air conditioner work harder. Upgrading from single-pane or old double-pane windows to modern triple pane krypton windows can reduce window heat transfer by up to 80% compared to standard double pane — a difference that shows up in your monthly energy bills, especially during the extreme temperature swings common in Iowa and Illinois.',
  },
  {
    question: 'How does low-E glass interact with convection and heat loss?',
    answer:
      'Low-E (low emissivity) glass coatings address a different type of heat transfer — radiation — rather than convection directly. However, low-E coatings and gas fills work together. The low-E coating reduces radiant heat transfer through the glass, while the gas fill reduces conductive and convective heat transfer through the space between panes. The best-performing windows combine both: triple pane glass with krypton fills and low-E coatings. This is what Suburban Construction offers in the FreedomMaxxx 10 system — addressing all three modes of heat transfer simultaneously.',
  },
]

export default function ConvectionFAQPage() {
  return (
    <>
      <SpeakableSchema />
      <PageHero
        title="Window Convection FAQ"
        subtitle="Understanding convection heat loss and how gas-filled windows address it"
        breadcrumbs={[
          { label: 'Resources', href: '/resources/faq' },
          { label: 'Convection FAQ' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Convection and Window Energy Efficiency
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Heat moves through and around windows in three ways: conduction (through solid materials),
            radiation (infrared energy), and convection (movement of gas between panes). Understanding
            convection helps explain why the gas fill in your windows matters — and why triple pane
            krypton glass is the most effective option available.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Here are answers to common questions about window convection from Suburban Construction&apos;s
            technical team.
          </p>

          <FAQAccordion items={convectionFaqs} />

          <div className="mt-8 bg-accent-subtle border border-accent-faint rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Interested in Triple Pane Krypton Windows?</h3>
            <p className="text-gray-600 text-sm mb-3">
              Suburban Construction specializes in triple pane krypton glass window installations —
              the most effective solution to convection and all other types of window heat loss.
            </p>
            <Link
              href="/windows/krypton"
              className="text-accent hover:text-accent-dark font-semibold underline text-sm"
            >
              Learn About Triple Pane Krypton Windows →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free estimate on triple pane krypton windows. We will measure, quote,
            and handle installation — backed by our lifetime workmanship guarantee.
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
