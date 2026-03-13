import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/gutters/gutter-cap'])

export default function GutterCapPage() {
  return (
    <>
      <PageHero
        title="Gutter Cap System"
        subtitle="Never clean your gutters again — leaves fall off while water flows in"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[
          { label: 'Gutters', href: '/gutters/seamless-gutters' },
          { label: 'Gutter Cap System' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How the Gutter Cap System Works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Gutter Cap system uses the principle of surface tension — the same physics that
            makes water cling to the side of a glass when you tilt it — to guide rainwater off
            your roof and into your gutters while allowing leaves and debris to fall harmlessly
            to the ground below.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Gutter Cap cover is a curved aluminum hood that fits over the top of your gutters.
            When rain hits the roof and flows to the eave, it follows the curve of the Gutter Cap
            and bends downward into the gutter opening, while leaves and larger debris — which
            don&apos;t have enough surface contact to bend with the water — continue in a straight
            path and fall off the edge. The result is a gutter that fills with water during rain
            events and empties completely afterward, with essentially no debris accumulation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Gutter Cap system has been protecting homes for decades and has an outstanding track
            record of performance. Suburban Construction is an authorized local installer serving
            the Quad Cities and the surrounding region.
          </p>

          {/* YouTube embed */}
          <div className="mb-8 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/m2OHb9zzLOA"
              title="Gutter Cap System — How It Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Surface tension principle guides water in while leaves fall off naturally
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Heavy-gauge aluminum construction — durable and long-lasting
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Works with virtually all leaf, twig, and debris types
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              No mesh to clog with fine particles over time
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Aesthetically clean — looks like a solid gutter from street level
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in colors to match your gutters and home exterior
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Can be installed on existing gutters or as part of a new gutter installation
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Heater Cap Option for Iowa Winters</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              For homes in areas prone to ice dams — a common problem in the Quad Cities during
              freeze-thaw cycles — we offer the Heater Cap option. The Heater Cap incorporates a
              low-wattage heating element that prevents ice from forming in and around the gutter.
              This eliminates ice dams that can back water under shingles and into your home. Ask
              about the Heater Cap upgrade during your estimate.
            </p>
            <Link href="/resources/heater-cap-faq" className="text-amber-600 hover:underline font-medium">
              Learn more about Heater Cap →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Have questions about the Gutter Cap system? We&apos;ve got answers on our dedicated FAQ page.
          </p>
          <Link href="/gutters/gutter-cap-faq" className="text-amber-600 hover:underline font-medium">
            View Gutter Cap FAQ →
          </Link>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free Gutter Cap estimate throughout the Quad Cities.
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
