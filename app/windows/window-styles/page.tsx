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

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/window1.jpg" alt="Replacement window styles available from Suburban Construction" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/window2.jpg" alt="Interior view of replacement window installed in Quad Cities home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          <p className="text-gray-600 leading-relaxed mb-8">
            All of our replacement windows are available with our exclusive FreedomMaxxx triple pane krypton
            glass system — the most energy-efficient window glass on the market. Upgrading your windows is one
            of the highest-return home improvement investments you can make, cutting energy costs and improving
            indoor comfort year-round in Iowa and Illinois climates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {windowTypes.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="block border border-gray-200 rounded-lg p-5 hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                  {w.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.description}</p>
                <span className="inline-block mt-3 text-amber-500 text-sm font-medium group-hover:text-amber-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Window Resources</h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/krypton" className="text-amber-600 hover:underline">
                Triple Pane Krypton Glass
              </Link>{' '}
              — the most energy-efficient glass system available
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/window-options" className="text-amber-600 hover:underline">
                Window Options & Upgrades
              </Link>{' '}
              — grids, hardware, glass coatings, and more
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/window-installation" className="text-amber-600 hover:underline">
                Our Installation Process
              </Link>{' '}
              — lifetime workmanship guarantee
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/storm" className="text-amber-600 hover:underline">
                Storm Windows
              </Link>{' '}
              — an affordable secondary protection option
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/replacement-windows-faq" className="text-amber-600 hover:underline">
                Replacement Windows FAQ
              </Link>{' '}
              — answers to the most common questions
            </li>
          </ul>
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
            Contact us for a free, no-pressure in-home estimate. We serve Davenport, Bettendorf, Moline,
            Rock Island, and a 90-mile radius throughout Iowa and Illinois.
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
