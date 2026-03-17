import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import FAQSchema from '@/components/seo/FAQSchema'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/seamless-gutters'])

const gutterFaqLinks = [
  { href: '/gutters/gutter-cap-faq', title: 'Gutter Cap FAQ', description: 'How the Gutter Cap system works, how it compares, and what installation involves.', icon: '🌧️' },
  { href: '/resources/heater-cap-faq', title: 'Heater Cap FAQ', description: 'How the Heater Cap gutter system prevents ice dams and keeps gutters clear in winter.', icon: '❄️' },
]

const gutterFaqs = [
  {
    question: 'What is the difference between seamless and sectional gutters?',
    answer: 'Sectional gutters are assembled from pre-cut pieces joined with seams — these seams are the most common point of failure and leaking. Seamless gutters are custom-fabricated on-site in one continuous piece to fit your home exactly. With no seams, there are no joints to fail, caulk to dry out, or sections to separate.',
  },
  {
    question: 'How long do seamless gutters last?',
    answer: 'Quality aluminum seamless gutters typically last 20–30 years with proper maintenance. When paired with a Gutter Cap or Shur Flow protection system, you eliminate the clogging that shortens gutter lifespan, making them last even longer.',
  },
  {
    question: 'What gutter size do I need?',
    answer: 'Most Quad Cities homes use 5-inch gutters, which handle the majority of rain events efficiently. Homes with steep roofs, large roof surfaces, or heavy rainfall areas may benefit from 6-inch gutters. Suburban Construction assesses your home and recommends the right size at no charge.',
  },
  {
    question: 'What is Gutter Cap and how does it work?',
    answer: 'Gutter Cap is a gutter protection system that uses surface tension to guide water into the gutter while leaves and debris slide off the edge. It eliminates the need for regular gutter cleaning. Suburban Construction is a local Gutter Cap dealer and installer serving the Quad Cities.',
  },
  {
    question: 'How much do seamless gutters cost?',
    answer: 'Seamless gutter installation typically costs $8–$15 per linear foot installed, depending on gutter size, material, and height. A typical Quad Cities home with 150–200 linear feet of gutter runs $1,200–$3,000. Suburban Construction provides free, no-pressure estimates.',
  },
]

export default function SeamlessGuttersPage() {
  return (
    <>
      <FAQSchema faqs={gutterFaqs} />
      <PageHero
        title="Seamless Gutters"
        subtitle="Custom fabricated on-site for a perfect fit — no seams means no leaks"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[{ label: 'Gutters' }]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Seamless Gutters Are the Superior Choice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Traditional sectional gutters are assembled from multiple pieces joined together with
                seam connectors. Those seams are the most vulnerable points in the entire gutter system —
                they&apos;re where debris accumulates, where water infiltrates, where caulking fails, and
                where leaks eventually develop. Seamless gutters eliminate this problem entirely by
                running a continuous, single piece of gutter from one end to the other, with joints only
                at inside corners, outside corners, and outlet connections.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction custom fabricates seamless gutters on-site at your home using a
                portable roll-forming machine that produces gutters to the exact length needed for your
                roofline. There is no inventory of stock lengths to puzzle together — every run of gutter
                is a single continuous piece matched precisely to your home. The result is a cleaner look
                and a dramatically more leak-resistant system.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Proper gutters are one of the most important protections your home has against water
                damage. They channel roof runoff away from your foundation, prevent water infiltration
                at the soffits and fascia, protect your landscaping from erosive runoff, and keep your
                basement or crawlspace dry. When gutters fail — whether from age, damage, or improper
                installation — the consequences for your home can be expensive.
              </p>
            </div>
            <Image src="/shurflow1.jpg" alt="Seamless gutters installed on home showing clean continuous profile" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/shurflow2.jpg" alt="Seamless gutter system with downspout detail" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/shurflow1.jpg" alt="Close-up of seamless gutter profile" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/guttercap_logo.jpg" alt="Gutter Cap protection system" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Features &amp; Benefits</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-2xl mx-auto">
            Standard residential gutters are 5 inches wide. We also offer 6-inch gutters, which
            are recommended for roofs with a steep pitch, large roof surface areas, or areas that
            experience heavy rainfall. Our estimator will evaluate your roof and recommend the
            appropriate size.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'On-Site Fabrication', body: 'Fabricated to the exact length required — no seams in the run.' },
              { title: '5-Inch & 6-Inch Profiles', body: 'Available in 5-inch K-style and 6-inch K-style profiles.' },
              { title: 'Pre-Painted Aluminum', body: 'Wide color selection in pre-painted aluminum — no painting required.' },
              { title: 'Hidden Hanger System', body: 'For a clean, fastener-free exterior appearance.' },
              { title: 'Foundation Protection', body: 'Protects foundation, siding, and landscaping from uncontrolled runoff.' },
              { title: 'Optimal Drainage', body: 'Downspouts positioned for efficient drainage to safe discharge points.' },
              { title: 'Protection Compatible', body: 'Compatible with Gutter Cap and Shur Flow gutter protection systems.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">✓</span>
                  <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image src="/shurflow2.jpg" alt="Gutter protection system installed on seamless gutters" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Protect Your Investment Further</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                New seamless gutters are an excellent time to add a gutter protection system that
                eliminates the need for regular gutter cleaning. We offer two proven options:
              </p>
              <ul className="space-y-4">
                {[
                  { href: '/gutters/gutter-cap', name: 'Gutter Cap', desc: 'surface tension principle keeps leaves out permanently' },
                  { href: '/gutters/shurflo', name: 'Shur Flow', desc: 'micro-mesh filter with 40-year warranty' },
                  { href: '/gutters/gutter-installation', name: 'Our Installation Process', desc: 'learn how we engineer proper drainage for your home' },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <Link href={item.href} className="font-semibold text-accent hover:text-accent-dark">{item.name}</Link>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedFAQs items={gutterFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free seamless gutter estimate throughout the
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

      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
        <Link href="/gutters/gutter-installation-cost" className="text-accent hover:text-accent-dark underline">Gutter Installation Cost Guide →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">Glossary of Terms →</Link>
      </div>
    </>
  )
}
