import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/doors/entry'])

export default function EntryDoorsPage() {
  return (
    <>
      <PageHero
        title="Entry Doors"
        subtitle="Beautiful, energy-efficient entry doors that make a lasting first impression"
        breadcrumbs={[
          { label: 'Doors', href: '/doors/door-styles' },
          { label: 'Entry Doors' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/entry.png" alt="Energy-efficient entry door installed on Quad Cities home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/designdoor.png" alt="Design door showing decorative glass insert and custom finish options" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The First Thing Everyone Sees
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your entry door does more than just open and close. It&apos;s the centerpiece of your
            home&apos;s exterior, a critical component of your home&apos;s energy envelope, and often
            the first security decision a potential intruder considers. A beautiful, properly installed
            entry door improves curb appeal, reduces heat loss, and gives your family confidence that
            the home is secure.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction installs entry doors from Therma-Tru, one of the leading door
            manufacturers in North America. Therma-Tru doors are known for exceptional craftsmanship,
            wide style selection, and outstanding energy performance. Whether you&apos;re looking for
            a classic painted fiberglass door, a rich wood-grain stained door, or a sleek modern
            steel door, the Therma-Tru product line has options that will complement your home
            beautifully.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We custom-order every entry door to fit your specific opening and your specific taste.
            We then install it with precision — properly shimmed, sealed, weatherstripped, and
            hardware-fitted — ensuring it operates perfectly and maintains its energy efficiency
            for decades.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fiberglass vs. Steel Entry Doors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Fiberglass Doors</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Exceptional wood-grain texture — looks like real wood</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Can be stained or painted to any color</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Will not rust, rot, warp, or dent</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Superior energy efficiency (5x more insulating than steel)</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Wide glass insert options</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Steel Doors</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Maximum security — extremely difficult to force</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Generally lower cost than fiberglass</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Good insulation value with foam core</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Can be painted; not recommended for staining</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Excellent for high-traffic and side entry doors</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Glass & Style Options</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            One of the most exciting aspects of choosing a new entry door is selecting the glass
            insert. Glass options range from clear full-lite panels to decorative art glass, privacy
            glass, and everything in between. We offer:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Decorative glass inserts in hundreds of patterns and privacy levels
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Sidelites and transoms to expand the entry and add light
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Full-lite, half-lite, and no-glass panel options
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Low-E glass for improved energy performance
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Hardware in matching finish: oil-rubbed bronze, satin nickel, bright brass, and more
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Browse the Full Door Catalog
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our door catalog features hundreds of styles, finishes, and glass options. You can
              browse it online or download a PDF brochure.
            </p>
            <Link href="/doors/door-app" className="text-amber-600 hover:underline font-medium">
              View the door catalog →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free entry door estimate throughout the Quad Cities.
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
