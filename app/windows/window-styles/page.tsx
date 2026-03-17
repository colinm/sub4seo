import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQSchema from '@/components/seo/FAQSchema'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/window-styles'])

const windowFaqLinks = [
  { href: '/windows/replacement-windows-faq', title: 'Window FAQ', description: 'Replacement windows, installation timelines, energy savings, warranties, and more.', icon: '🪟' },
  { href: '/resources/condensation-faq', title: 'Condensation FAQ', description: 'What causes condensation on windows, what it means, and how to address it.', icon: '💧' },
  { href: '/resources/convection-faq', title: 'Convection FAQ', description: 'How convection causes heat loss through windows and how gas fills reduce it.', icon: '🌡️' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

const windowFaqs = [
  {
    question: 'How long does replacement window installation take?',
    answer: 'Most whole-home window replacement projects are completed in a single day. Individual window replacements typically take 30–60 minutes per window. Suburban Construction measures precisely beforehand so windows arrive ready to install.',
  },
  {
    question: 'What is the most energy-efficient window available?',
    answer: 'Suburban Construction offers triple pane krypton glass windows — the most energy-efficient replacement window on the market. Krypton gas fills both chambers between three panes of glass, providing up to 80% more energy efficiency than standard double-pane windows.',
  },
  {
    question: 'What window style is best for the Quad Cities climate?',
    answer: 'Double hung windows are the most popular choice for Quad Cities homeowners. Their dual operable sashes allow flexible ventilation in summer, and when paired with triple pane krypton glass, they provide excellent insulation against Iowa and Illinois winters.',
  },
  {
    question: 'Do replacement windows come with a warranty?',
    answer: 'Yes. All Suburban Construction windows come with a Lifetime Limited Transferable Warranty on the frame and glass, plus a Lifetime Glass Breakage Warranty. Our installation is covered by our own lifetime workmanship guarantee.',
  },
  {
    question: 'How much do replacement windows cost in the Quad Cities?',
    answer: 'Replacement window costs vary based on style, size, and glass package. Double hung windows typically range from $400–$900 per window installed. Triple pane krypton upgrades add efficiency but minimal cost. Suburban Construction provides free, no-pressure in-home estimates.',
  },
]

const windowTypes = [
  {
    title: 'Single Hung Windows',
    href: '/windows/single-hung',
    description:
      'Classic style with a fixed upper sash and operable lower sash. Affordable, energy efficient, and available in triple pane krypton.',
  },
  {
    title: 'Double Hung Windows',
    href: '/windows/double-hung',
    description:
      'Our most popular style — both sashes tilt in for easy cleaning and maximum ventilation control.',
  },
  {
    title: 'Slider / Glider Windows',
    href: '/windows/slider',
    description:
      'Open horizontally for wide views and effortless operation. Perfect for wider window openings.',
  },
  {
    title: 'Bay & Bow Windows',
    href: '/windows/bay-and-bow',
    description:
      'Create a dramatic focal point. Bay and bow windows add floor space, light, and serious curb appeal.',
  },
  {
    title: 'Garden & Specialty Windows',
    href: '/windows/garden-specialty',
    description:
      'Garden windows project outward to create a miniature greenhouse. Specialty shapes fit unique architectural openings.',
  },
  {
    title: 'Casement & Awning Windows',
    href: '/windows/casement',
    description:
      'Crank-operated for a full, unobstructed opening. Seals tightly when closed for excellent energy performance.',
  },
  {
    title: 'Basement Windows',
    href: '/windows/basement',
    description:
      'Bring natural light and fresh air into your basement. Properly sealed and moisture resistant.',
  },
  {
    title: 'Egress Windows',
    href: '/windows/egress',
    description:
      'Meet building code requirements for basement bedrooms. Provides a safe emergency exit and adds light.',
  },
]

export default function WindowStylesPage() {
  return (
    <>
      <FAQSchema faqs={windowFaqs} />
      <PageHero
        title="Window Styles"
        subtitle="Browse Our Complete Line of Replacement Windows"
        breadcrumbs={[{ label: 'Windows' }]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Right Window for Every Opening
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction has been installing replacement windows across the Quad Cities since 1985. We
                offer a complete lineup of window styles to match every architectural need, aesthetic preference,
                and budget. Whether you&apos;re replacing worn-out windows throughout an entire home or adding a
                dramatic bay window to your living room, our team will help you choose the best product and then
                install it right the first time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All of our replacement windows are available with our exclusive FreedomMaxxx triple pane krypton
                glass system — the most energy-efficient window glass on the market. Upgrading your windows is one
                of the highest-return home improvement investments you can make, cutting energy costs and improving
                indoor comfort year-round in Iowa and Illinois climates.
              </p>
            </div>
            <Image src="/window2.jpg" alt="Replacement window styles available from Suburban Construction" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/window2.jpg" alt="Interior view of replacement window installed in Quad Cities home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/bayandbow.jpg" alt="Bay and bow window exterior view" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/single-hung.jpg" alt="Single hung replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Window Styles We Install</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {windowTypes.map((w) => (
              <Link key={w.href} href={w.href} className="block bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">✓</span>
                  <h3 className="font-bold text-gray-900 text-sm">{w.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{w.description}</p>
                <span className="inline-block mt-2 pl-5 text-accent-mid text-sm font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FreedomMaxx Glass Tiers */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Glass Package</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            All window styles are available with three glass performance tiers — from high-performance
            double pane to our ultimate triple pane krypton system. Nearly 80% of a window&apos;s surface
            area is glass, so the glass package you choose has a major impact on energy performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Standard</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FreedomMaxx Low-E HP</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Double pane with multiple-layer vacuum-deposition Low-E glass filled with argon gas.
                Significantly more energy-efficient than a clear single-pane window.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Upgraded</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FreedomMaxx 7</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Triple pane with two Low-E glass panes and two argon gas chambers. A powerful shield
                against energy loss beyond standard double pane.
              </p>
            </div>
            <div className="bg-accent-subtle border border-accent-faint rounded-xl p-5 shadow-sm relative">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Best Performance</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FreedomMaxx 10</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Triple pane with two Low-E glass panes and two chambers of krypton gas — the densest,
                most insulating gas available. Our ultimate glass system for maximum energy efficiency.
              </p>
              <Link href="/windows/krypton" className="inline-block mt-3 text-sm font-semibold text-accent hover:text-accent-dark">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image src="/window2.jpg" alt="Replacement window installed in Quad Cities home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Additional Window Resources</h2>
              <ul className="space-y-4">
                {[
                  { href: '/windows/krypton', label: 'Triple Pane Krypton Glass', desc: 'the most energy-efficient glass system available' },
                  { href: '/windows/window-options', label: 'Window Options & Upgrades', desc: 'grids, hardware, glass coatings, and more' },
                  { href: '/windows/window-installation', label: 'Our Installation Process', desc: 'lifetime workmanship guarantee' },
                  { href: '/windows/storm', label: 'Storm Windows', desc: 'an affordable secondary protection option' },
                  { href: '/windows/replacement-windows-faq', label: 'Replacement Windows FAQ', desc: 'answers to the most common questions' },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <Link href={item.href} className="font-semibold text-accent hover:text-accent-dark">{item.label}</Link>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Windows Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/windows.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <RelatedFAQs items={windowFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free, no-pressure in-home estimate. We serve Davenport, Bettendorf, Moline,
            Rock Island, and a 90-mile radius throughout Iowa and Illinois.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
        <Link href="/windows/window-replacement-cost" className="text-accent hover:text-accent-dark underline">Window Replacement Cost Guide →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/windows/double-hung-vs-casement" className="text-accent hover:text-accent-dark underline">Double Hung vs. Casement →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">Glossary of Terms →</Link>
      </div>
    </>
  )
}
