import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/patio/patio-awning'])

export default function PatioAwningPage() {
  return (
    <>
      <PageHero
        title="Patio Awnings"
        subtitle="Shade, style, and protection — custom-sized awnings for Quad Cities outdoor living"
        breadcrumbs={[
          { label: 'Patio & Awnings', href: '/patio' },
          { label: 'Patio Awnings' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Make the Most of Your Outdoor Space
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A patio awning transforms a sun-baked deck or concrete slab into a comfortable, shaded
            outdoor living area. By blocking direct sun exposure, awnings can reduce the surface
            temperature of your patio by as much as 20°F — making outdoor entertaining and
            relaxation possible even during the hottest Quad Cities summer afternoons.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Beyond comfort, awnings protect outdoor furniture from UV fading and weathering, reducing
            the need to drag chairs and cushions inside every time rain threatens. Fixed awnings also
            help protect the sliding glass or patio door beneath them from direct weather exposure,
            extending the life of the door and threshold.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction installs both retractable and fixed awnings in custom sizes to fit
            any deck, patio, or door opening. We offer a wide selection of fabrics, colors, and
            frame finishes so your awning becomes a design feature as well as a functional
            improvement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Retractable vs. Fixed Awnings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Retractable Awnings</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Extend when needed, retract to enjoy full sun</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Manual crank or motorized operation available</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Protects fabric when not in use — extends fabric life</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Ideal for variable weather conditions</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Fixed Awnings</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Permanent shade and weather protection</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>More structural — better for wind resistance</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Generally lower cost than retractable</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Can reduce interior cooling costs significantly</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Options</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Custom sizing to fit any opening from small door canopies to full-width patio covers
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide selection of solution-dyed acrylic fabrics — fade and mildew resistant
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Solid, stripe, and pattern fabric options to suit any home aesthetic
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Frame finishes: white, bronze, tan, and custom colors
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Optional motorized operation with remote control for retractable models
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Professional installation and proper anchoring to structural wall framing
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Awning Care Tips</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Proper maintenance significantly extends the life of your awning fabric and frame.
              We provide guidance on cleaning, storage, and seasonal care with every installation.
            </p>
            <Link href="/patio/awning-care" className="text-amber-600 hover:underline font-medium">
              View awning care tips →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free patio awning estimate throughout the Quad Cities.
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
