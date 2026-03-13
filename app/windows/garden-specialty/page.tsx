import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/garden-specialty'])

export default function GardenSpecialtyWindowsPage() {
  return (
    <>
      <PageHero
        title="Garden & Specialty Windows"
        subtitle="Bring the outdoors in — growing space, extra light, and unique architectural shapes"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Garden & Specialty Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/garden1.jpg" alt="Garden window projecting from kitchen wall with plants on shelf" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/garden2.jpg" alt="Specialty shaped window installed in a custom home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Garden Windows: A Mini Greenhouse for Your Kitchen
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A garden window projects outward from the wall of your home — typically above a kitchen sink —
            creating an enclosed glass alcove with its own shelf space. Three glass sides and a glass roof
            let sunlight in from multiple angles, making it an ideal spot for growing fresh herbs, housing
            small plants, or simply displaying decorative items in a naturally lit setting.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Beyond the practical benefits, a garden window adds visual interest to your kitchen both inside
            and out. The exterior projection creates an architectural detail that enhances curb appeal, while
            the interior glass box floods the area with natural light. If you spend a lot of time at your
            kitchen sink, a garden window transforms that view into something genuinely enjoyable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction installs garden windows throughout Davenport, Bettendorf, Moline, Rock
            Island, and the surrounding region. We custom-order each unit to fit your existing opening and
            handle all finish work for a clean, professional result.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Garden Window Features</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Projects outward to create a self-contained growing and display space
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Glass on three sides plus a glass roof for maximum light exposure
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Built-in seat board / shelf for plants, herbs, or decorative items
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Operable side vents allow ventilation and temperature control
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Energy-efficient Low-E glass standard; upgrade options available
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in multiple frame colors to match your exterior
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Specialty Windows: When Standard Shapes Won&apos;t Do
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not every window opening is a standard rectangle. Many homes — especially older craftsman,
            Victorian, or custom-built properties — feature arched, circular, half-round, or other
            geometrically unique window openings. Specialty windows are custom-fabricated to fit these
            openings precisely, preserving the architectural character of your home while upgrading the
            energy performance.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Common specialty shapes we supply and install include:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Half-round and full-round windows for transom and decorative applications
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Arched windows to complement curved door entries and formal rooms
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Eyebrow and elliptical windows for attic and gable applications
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Pentagon and octagon windows for custom accent applications
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Trapezoid and triangle windows for vaulted ceiling areas
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Have an Unusual Opening?</h3>
            <p className="text-gray-700 leading-relaxed">
              Don&apos;t assume that unusual window shapes can&apos;t be replaced with energy-efficient glass.
              In most cases, we can source a matching specialty unit that preserves the look of your home while
              dramatically upgrading its performance. Contact us to discuss your specific situation.
            </p>
          </div>
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
            Contact Suburban Construction for a free estimate on garden or specialty windows throughout
            the Quad Cities area.
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
