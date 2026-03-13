import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/patio/solar-shades'])

export default function SolarShadesPage() {
  return (
    <>
      <PageHero
        title="Solar Shades for Patios & Porches"
        subtitle="Block UV rays and reduce heat while maintaining your outdoor view"
        breadcrumbs={[
          { label: 'Patio & Awnings', href: '/patio' },
          { label: 'Solar Shades' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Smart Way to Control Sun on Your Porch or Patio
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Solar shades use an open-weave fabric to filter sunlight — blocking a significant
            percentage of UV radiation and solar heat gain while still allowing you to see through
            them to your yard or garden. Unlike solid outdoor curtains or blackout shades, solar
            shades don&apos;t close you off from the view. They reduce glare and heat while
            preserving the connection to the outdoor environment that makes a porch or patio
            desirable in the first place.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            On a covered porch or patio enclosure, solar shades are often used in combination with
            structural overhead protection — the shade provides the side and front protection against
            low-angle sun that the roof overhang can&apos;t block. This combination significantly
            reduces the surface temperature of the porch floor and furniture, making the space
            comfortable during hours that would otherwise be too hot for enjoyable use.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction installs solar shades in custom sizes to fit any porch, patio,
            or pergola opening throughout the Quad Cities. We offer a range of fabric openness
            factors and colors to balance UV protection with view preservation based on your
            specific needs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Openness Factor</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Solar shade fabric is characterized by its &quot;openness factor&quot; — the percentage
            of the weave that is open space rather than fabric. A lower openness percentage (e.g., 3%)
            blocks more sun and provides more privacy but reduces visibility. A higher openness
            percentage (e.g., 10%) allows more view and more air movement but provides less solar
            protection. We carry several openness options to let you find the right balance for your
            situation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Blocks 80–97% of UV rays depending on fabric openness factor
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Significantly reduces heat gain without eliminating the outdoor view
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Protects porch furniture and flooring from UV fading
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in multiple openness factors to balance view and sun control
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide color and pattern selection to complement any home exterior
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Manual roll-up or motorized operation available
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Custom-sized to fit your specific opening
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Can reduce interior cooling costs when installed over windows or glass doors
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Combine with Awnings for Maximum Comfort
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Solar shades work best when combined with overhead coverage from an awning or porch
              roof. The awning blocks high-angle summer sun while the solar shades handle low-angle
              morning and afternoon sun. Together, they create a comfortable outdoor space that is
              usable even during peak summer heat. Ask about combining products during your free
              estimate.
            </p>
            <Link href="/patio/patio-awning" className="inline-block mt-3 text-amber-600 hover:underline font-medium">
              Learn about patio awnings →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free solar shade estimate throughout the Quad Cities.
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
