import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/stain-formula-faq'])

export default function StainFormulaFAQPage() {
  return (
    <>
      <PageHero
        title="Stain Formulas"
        subtitle="Color matching and touch-up information for your siding and window products"
        breadcrumbs={[
          { label: 'Resources', href: '/resources/faq' },
          { label: 'Stain Formulas' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Getting a Color or Stain Match for Touch-Ups
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Over time, all exterior products — siding, window trim, and accessories — may require
            a small touch-up due to accidental damage, weathering, or a repair. Getting an
            accurate color match is essential to maintaining the appearance of your home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction works exclusively with Associated Materials Inc. (AMI) products
            through the Freedom Series line. AMI maintains detailed color and stain formulas for
            all of their products, which makes it possible to match colors accurately even years
            after the original installation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            If you need a specific stain or color formula for a touch-up, the best first step is
            to contact us directly. We can look up the original product details from your
            installation records and connect you with the appropriate AMI color formula.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">How to Get Your Stain Formula</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-amber-500 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">1</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Call us</span> at{' '}
                  <a href="tel:5633914000" className="text-amber-600 hover:underline">563-391-4000</a>
                  {' '}or{' '}
                  <a href="tel:18007173066" className="text-amber-600 hover:underline">1-800-717-3066</a>
                  {' '}during business hours (Monday–Friday, 7:30 AM–4:30 PM).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-amber-500 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">2</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Have your original installation information</span> ready
                  if possible — the approximate year installed, the product type (vinyl siding, steel
                  siding, etc.), and the color name or description.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-amber-500 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">3</span>
                <p className="text-gray-700">
                  <span className="font-semibold">We will look up the formula</span> from your
                  installation records or connect you with AMI directly for the specific product
                  color formula.
                </p>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About AMI Color Formulas
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Associated Materials Inc. (AMI) is the manufacturer behind the Freedom Series siding,
            windows, and related products that Suburban Construction installs. AMI provides
            detailed paint and stain formulas that paint retailers can use to mix a matching
            color for touch-up work.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            These formulas are specific to the AMI product line and the particular color you
            selected. Because exterior colors can fade over time with sun exposure, it is worth
            noting that a touch-up on older siding may be slightly more noticeable even with a
            perfect formula match — the touch-up will be the original color, while the surrounding
            siding has weathered slightly. This is normal and expected.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            For significant damage that goes beyond a small touch-up, Suburban Construction can
            assess whether a panel replacement is a better option. Contact us to discuss your
            specific situation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tips for Exterior Touch-Ups
          </h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Clean the area to be touched up thoroughly before applying any paint or stain
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Apply touch-up paint on a dry day with moderate temperatures for best adhesion
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Use thin coats and allow to dry fully between applications
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              For vinyl siding, confirm the paint is formulated for vinyl surfaces
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              If the damage is extensive, consider whether a panel replacement is more appropriate
            </li>
          </ul>

          <p className="text-gray-600 leading-relaxed">
            For questions specific to your product or color, call us at{' '}
            <a href="tel:5633914000" className="text-amber-600 hover:underline font-semibold">563-391-4000</a>.
            We are happy to assist.
          </p>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Need Help With Your Siding or Windows?
          </h2>
          <p className="text-gray-600 mb-6">
            Whether it is a touch-up question or a new project, Suburban Construction is here
            to help. Contact us anytime during business hours.
          </p>
          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded transition-colors"
          >
            Contact Us
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
