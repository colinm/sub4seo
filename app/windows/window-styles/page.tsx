import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/window-styles'])

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

      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
