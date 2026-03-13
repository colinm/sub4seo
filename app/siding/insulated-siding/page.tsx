import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/insulated-siding'])

export default function InsulatedSidingPage() {
  return (
    <>
      <PageHero
        title="Insulated Vinyl Siding"
        subtitle="EPS foam-backed panels that lower energy costs, add rigidity, and improve curb appeal"
        bgImage="/sidinghouse.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Insulated Siding' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/insulated.jpg" alt="Insulated vinyl siding panel showing EPS foam backing for energy efficiency" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/mult-chambered-sash.jpg" alt="Multi-chambered sash detail showing insulation performance in siding products" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Siding That Pays for Itself in Energy Savings
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Insulated vinyl siding is standard vinyl siding with a layer of expanded polystyrene (EPS)
            foam permanently bonded to the back of each panel. That foam fills the air gap between the
            siding and the sheathing, eliminating a common source of thermal loss in exterior walls and
            improving the overall R-value of the wall assembly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For Quad Cities homeowners, the energy benefit is real and measurable. Iowa and Illinois
            winters place significant heating demands on homes, and any improvement to the thermal
            envelope pays dividends on your energy bill every year for the life of the siding.
            Insulated siding is particularly effective on older homes where wall insulation may be
            minimal or degraded.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Beyond energy performance, the foam backing adds structural rigidity to each panel. Insulated
            siding panels are noticeably thicker, stiffer, and more substantial-feeling than standard
            vinyl — producing a higher-quality appearance and greater resistance to denting from physical
            impacts. The overall effect is a home exterior that looks and feels more solid.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How the EPS Foam Backing Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Standard vinyl siding is installed over a wood or OSB sheathing surface, but the siding
            panel itself sits slightly off the wall — creating an air gap behind each panel. That air
            gap allows thermal bridging and convective looping that reduces wall insulation effectiveness.
            The EPS foam backing fills that gap, creating a continuous insulating layer across the full
            wall surface with no thermal bridges.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The EPS foam used in insulated siding panels is moisture-resistant and will not support
            mold growth. It also provides a stable backing that reduces the &quot;oil-canning&quot;
            (wavy appearance) that can affect standard vinyl siding in temperature extremes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              EPS foam backing adds continuous insulation across the entire wall surface
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Improves wall R-value — reduces heating and cooling costs year-round
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Adds rigidity to each panel — produces a thicker, more substantial appearance
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Reduces exterior noise transmission — homes feel quieter
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Eliminates the air gap that allows thermal bridging in standard siding installations
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in all Freedom Series colors and profiles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Same low-maintenance benefits as standard vinyl — no painting or caulking required
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Lifetime manufacturer warranty; our lifetime workmanship guarantee included
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Especially Valuable on Older Quad Cities Homes
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Many homes in Davenport, Bettendorf, Moline, and Rock Island were built with minimal wall
              insulation by today&apos;s standards. Adding insulated siding is one of the few exterior
              improvements that measurably reduces energy consumption without requiring interior work —
              making it an especially attractive option for older homes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Siding Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/siding.pdf"
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
            Contact Suburban Construction for a free insulated siding estimate throughout the Quad Cities.
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
