import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/doors/door-styles'])

const doorTypes = [
  {
    title: 'Entry Doors',
    href: '/doors/entry',
    description:
      'Beautiful, energy-efficient fiberglass and steel entry doors from Therma-Tru. Available in dozens of styles, colors, and glass options to complement any home.',
  },
  {
    title: 'Easy Vent Storm Doors',
    href: '/doors/easy-vent',
    description:
      'Let in fresh air and keep bugs out with our Easy Vent storm doors. Available in retractable screen and ventilating glass styles.',
  },
  {
    title: 'Doors with Built-In Mini Blinds',
    href: '/doors/mini-blinds',
    description:
      'Enjoy convenient light control with no dusting and no cords. Built-in mini blinds are sealed between the glass layers for a clean, low-maintenance look.',
  },
]

export default function DoorStylesPage() {
  return (
    <>
      <PageHero
        title="Door Styles"
        subtitle="Entry doors, storm doors, and innovative built-in blind options for Quad Cities homes"
        breadcrumbs={[{ label: 'Doors' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/door.png" alt="Fiberglass entry door showing classic style and curb appeal" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/fiberclassicmain.jpg" alt="Fiber Classic entry door showcasing wood grain texture and glass insert options" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Front Door Makes a Statement
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your entry door is the focal point of your home&apos;s exterior. It&apos;s the first thing
            guests see and a critical component of your home&apos;s curb appeal. Beyond aesthetics, a
            quality entry door plays a significant role in your home&apos;s security and energy
            efficiency. An old, drafty door can account for a surprising amount of your home&apos;s
            heat loss during Quad Cities winters.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction has been installing doors throughout Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding area since 1985. We work with leading door manufacturers
            to provide products that combine beauty, performance, and durability — and we install every
            door with the care and precision that guarantees a weathertight, long-lasting result.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our door product lines include entry doors, storm doors, and specialty options like doors
            with built-in mini blinds. Browse the options below or contact us to schedule a free
            in-home estimate.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {doorTypes.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="block border border-gray-200 rounded-lg p-5 hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                  {d.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.description}</p>
                <span className="inline-block mt-3 text-amber-500 text-sm font-medium group-hover:text-amber-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">See It Before You Buy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Door selection involves a lot of decisions — style, color, glass insert, hardware finish,
            and sidelight options, among others. We make the selection process easier in several ways:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Visit our showroom at 3602 North Harrison, Davenport — see actual door samples in person
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Browse our{' '}
              <Link href="/doors/door-app" className="text-amber-600 hover:underline">
                door catalog
              </Link>{' '}
              including downloadable PDF brochures
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Watch our installation overview on YouTube to see the quality of our door work
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Request a free in-home estimate — we bring samples and discuss options at your home
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free door estimate throughout the Quad Cities.
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
