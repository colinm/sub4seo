import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/patio/awning-care'])

export default function AwningCarePage() {
  return (
    <>
      <PageHero
        title="Awning Care & Maintenance"
        subtitle="Keep your awning looking great and performing well for years to come"
        breadcrumbs={[
          { label: 'Patio & Awnings', href: '/patio' },
          { label: 'Awning Care' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Protect Your Investment with Proper Care
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A quality awning is built to last — but like any outdoor product, it benefits
            significantly from regular care and proper seasonal handling. The good news is that
            caring for a modern awning is straightforward and doesn&apos;t require specialized
            equipment or products. A consistent maintenance routine extends the life of both the
            fabric and the frame and keeps the awning looking its best year after year.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Most awning fabrics used today are solution-dyed acrylic — a material specifically
            engineered for outdoor use. The dye is applied to the fibers before weaving, so color
            is integral to the fabric structure rather than sitting on the surface. This makes the
            fabric highly resistant to fading, but it still benefits from regular cleaning to prevent
            mildew growth, which can stain and weaken the fibers over time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Regular Cleaning</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Regular cleaning is the single most important thing you can do to prolong awning fabric
            life. We recommend a light cleaning at least twice per season — spring and fall — and
            after any heavy storm event that deposits significant debris.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Brush off loose dirt and debris with a soft-bristle brush before wetting the fabric
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Mix 1/4 cup mild dish soap (not detergent) per gallon of lukewarm water
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Apply with a soft brush or sponge using light, circular motions
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Rinse thoroughly with clean water — no soap residue should remain
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Allow the awning to air dry fully in the extended position before retracting
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Treating Mildew Stains</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If mildew spots appear on the fabric, treat them promptly before they can spread or
            permanently discolor the material:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Mix 1 cup of bleach and 1/4 cup of mild soap per gallon of water
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Apply to the affected area and allow to soak for 15 minutes
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Scrub gently with a soft brush
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Rinse thoroughly and repeat if necessary
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Note: bleach solutions are safe for solution-dyed acrylic fabrics but may affect
              other fabric types — check your product documentation
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Storage (Retractable Awnings)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For retractable awnings in the Quad Cities, we recommend retracting the awning for
            the winter season rather than leaving it extended through Iowa&apos;s heavy snow periods.
            Heavy snow loads on extended awnings can stress the frame and brackets. Before retracting
            for winter storage:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Complete a thorough cleaning and allow to dry completely — never store a damp awning
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Inspect the frame for any loose fasteners or brackets and tighten as needed
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Check the spring tension on the retraction mechanism — consult us if it feels wrong
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Apply a water-resistant awning protector spray if recommended for your fabric type
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frame Maintenance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The aluminum frame components require minimal care beyond periodic rinsing. If you notice
            any moving parts (hinges, crank mechanisms, motorized components) that feel stiff or
            rough, a light application of silicone-based lubricant is usually all that&apos;s needed.
            Avoid petroleum-based lubricants, which can attract dirt and degrade rubber components.
          </p>

          <div className="bg-accent-subtle border border-accent-faint rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Service or Repairs?</h3>
            <p className="text-gray-700 leading-relaxed">
              If your awning needs fabric replacement, frame adjustment, or mechanical repair,
              contact Suburban Construction. We service awnings we&apos;ve installed and can often
              assist with awnings installed by others. Call us at{' '}
              <a href="tel:5633914000" className="text-accent hover:underline">563-391-4000</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a new awning estimate or service on your existing
            awning throughout the Quad Cities area.
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
