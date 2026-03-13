import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/egress'])

export default function EgressWindowsPage() {
  return (
    <>
      <PageHero
        title="Egress Windows"
        subtitle="Meet building code requirements and provide a safe emergency exit for basement bedrooms"
        bgImage="/basement.jpg"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Egress Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/basement.jpg" alt="Egress window installation in basement providing emergency exit and natural light" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Is an Egress Window?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An egress window is a window large enough to serve as an emergency exit — and a means of entry
            for rescue personnel — in the event of a fire or other emergency. Building codes in Iowa and
            Illinois require egress windows in any basement room used as a sleeping area. Without one, your
            basement bedroom is technically not a legal bedroom and could affect your home&apos;s appraised
            value, your homeowner&apos;s insurance, and — most importantly — the safety of the people sleeping there.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The International Residential Code (IRC) specifies minimum requirements for egress windows:
            at least 5.7 square feet of net clear opening, a minimum clear opening height of 24 inches,
            a minimum clear opening width of 20 inches, and a maximum sill height of 44 inches above the
            finished floor. Our team is familiar with these requirements and with local code interpretations
            in the Quad Cities area.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Installing an egress window in a basement is a more involved project than a standard window
            replacement. It typically requires cutting through the foundation wall, excavating a window well,
            and installing proper drainage to keep the well dry. Suburban Construction handles the entire
            scope of work — from the initial cut to the finished interior and exterior trim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in an Egress Installation</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Foundation cutting and rough opening preparation
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Excavation of window well to code-required depth
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Window well liner installation with drainage gravel
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Installation of egress window unit with proper flashing and waterproofing
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Insulation and air sealing around the window frame
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Interior and exterior finish work
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Optional window well cover to keep out debris and precipitation
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Benefits Beyond Code Compliance</h3>
            <p className="text-gray-700 leading-relaxed">
              An egress window doesn&apos;t just satisfy a code requirement — it genuinely transforms a
              basement space. The larger opening brings in significantly more natural light, making the
              room feel brighter and more welcoming. Fresh air ventilation improves air quality and helps
              control humidity. And if you ever sell your home, a properly permitted egress window confirms
              to buyers that the basement bedroom is a legal, safe sleeping space.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Permits and Inspections</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Egress window installations require a building permit in most Quad Cities municipalities.
            Suburban Construction manages the permit application process for our customers and schedules
            the required inspections. All work is performed to code and documented so you have a clean
            record for insurance and future home sales.
          </p>
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
            Contact Suburban Construction for a free egress window estimate. We serve Davenport,
            Bettendorf, Moline, Rock Island, and the surrounding region.
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
