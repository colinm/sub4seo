import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/steel-siding'])

export default function SteelSidingPage() {
  return (
    <>
      <PageHero
        title="Steel Siding"
        subtitle="The most durable siding option available — fire resistant, dent resistant, and built to last"
        bgImage="/steel-siding.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Steel Siding' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/steel-siding.jpg" alt="Steel siding installed on home showing durable impact-resistant finish" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/steel-reinforcement.jpg" alt="Steel siding reinforcement detail showing structural strength and quality" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Steel Is the Toughest Siding You Can Buy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Steel siding outperforms vinyl, composite, and wood in virtually every durability category.
            It is fire resistant, termite-proof, and significantly more impact resistant than vinyl —
            meaning it won&apos;t dent or crack from hail, flying debris, or accidental impacts the way
            vinyl siding can. For Quad Cities homeowners who have experienced hail storms or severe
            thunderstorms, steel siding is the obvious answer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Steel siding is also exceptionally well-suited to the Iowa and Illinois climate. It handles
            the region&apos;s dramatic temperature swings — from -20°F winter lows to 100°F+ summer
            highs — without warping, buckling, or degrading over time. The finish is baked on at the
            factory, not applied as a surface coating, which means the color is integral to the material
            and far more resistant to fading, chalking, and peeling than painted wood or cheaper
            alternatives.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction has been installing steel siding throughout Davenport, Bettendorf,
            Moline, Rock Island, and the surrounding region for decades. We are experienced in proper
            installation techniques that account for steel&apos;s unique thermal expansion characteristics,
            ensuring a long-lasting, problem-free installation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Steel vs. Vinyl Siding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Steel Siding Advantages</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Far more impact resistant — won&apos;t dent from hail</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Fire resistant (Class A rating)</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Color baked in — superior fade resistance</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Termite and pest proof</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Can be repainted if desired</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Vinyl Siding Advantages</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Lower initial cost</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Lighter weight</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Wide color and profile selection</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Never needs painting</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>Good long-term durability in mild climates</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Fire resistant — Class A fire rating for maximum safety
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Dent and impact resistant — superior protection against hail and debris
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Baked-on finish resists fading and chalking far better than painted products
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Virtually maintenance-free — no painting, caulking, or re-staining required
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide color selection to complement any home exterior
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in horizontal lap, vertical, and board-and-batten profiles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Ideal for the Iowa and Illinois climate — handles extreme temperature swings without warping
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Professional installation with lifetime workmanship guarantee
            </li>
          </ul>
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
            Contact Suburban Construction for a free steel siding estimate. We serve Davenport,
            Bettendorf, Moline, Rock Island, and the surrounding Quad Cities area.
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
