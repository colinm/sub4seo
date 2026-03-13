import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/doors/easy-vent'])

export default function EasyVentStormDoorsPage() {
  return (
    <>
      <PageHero
        title="Easy Vent Storm Doors"
        subtitle="Fresh air, insect protection, and weather defense — all in one door"
        breadcrumbs={[
          { label: 'Doors', href: '/doors/door-styles' },
          { label: 'Easy Vent Storm Doors' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/duel-vent.jpg" alt="Easy Vent storm door with dual ventilation panels open for fresh air" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/larson-retractable-screen-away.jpg" alt="Larson storm door with retractable screen retracted for full glass view" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ventilate Freely Without Compromising Protection
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A quality storm door gives you the best of both worlds on a pleasant Quad Cities spring or
            fall day: you can open your front or back door to let fresh air flow through the house
            while the storm door keeps insects, debris, and light rain from coming in. It also adds
            an extra layer of weather protection and insulation in winter, and provides an additional
            barrier for home security.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Easy Vent storm door line is specifically designed for maximum ventilation
            convenience. Unlike traditional storm doors that require removing and storing glass or
            screen panels seasonally, Easy Vent doors feature a drop-down or retractable screen that
            integrates seamlessly with the glass panel. One simple motion transitions you between full
            glass and full screen — no tools, no fumbling, no storage hassle.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction installs Easy Vent storm doors throughout Davenport, Bettendorf,
            Moline, Rock Island, and the surrounding area. Every installation includes proper fitting,
            hardware adjustment, and weatherstripping to ensure the door operates perfectly and
            provides a complete perimeter seal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Easy-transition screen: drop-down or retractable design requires no seasonal panel changes
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Full-view glass provides unobstructed view of your entry when screen is retracted
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Insect screen keeps bugs out while allowing maximum airflow
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Adds an extra layer of insulation over your entry door in winter
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Secondary security layer — adds time and difficulty for forced entry attempts
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in multiple frame colors to match your home&apos;s exterior
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Heavy-gauge aluminum frame resists corrosion and warping
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Closer and latch hardware designed for long-term reliability
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Styles</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Easy Vent storm doors are available in several configurations to suit different needs
            and aesthetic preferences:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>Full-view</strong> — maximum glass area for light and visibility
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>Mid-view</strong> — partial glass panel with decorative lower panel
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <strong>High-view</strong> — glass panel in upper portion for privacy at door base
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Decorative grille options available on select models
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pair with a New Entry Door</h3>
            <p className="text-gray-700 leading-relaxed">
              Many homeowners upgrade both their entry door and storm door at the same time — and for
              good reason. A new{' '}
              <Link href="/doors/entry" className="text-amber-600 hover:underline">entry door</Link> paired
              with an Easy Vent storm door gives you the complete package: exceptional curb appeal,
              maximum energy efficiency, and year-round weather protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free storm door estimate throughout the Quad Cities.
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
