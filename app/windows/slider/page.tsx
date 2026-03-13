import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/slider'])

export default function SliderWindowsPage() {
  return (
    <>
      <PageHero
        title="Slider & Glider Windows"
        subtitle="Wide views, smooth operation, and easy ventilation for larger openings"
        bgImage="/sliding-window1.jpg"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Slider / Glider Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/sliding-window1.jpg" alt="Sliding window installed in a home showing horizontal operation" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/sliding-window2.jpg" alt="Glider window providing wide panoramic view in living room" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Ideal Window for Wider Openings
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Slider windows — also called glider windows — open horizontally rather than vertically, making
            them the ideal choice for wide openings where traditional sash-style windows would be awkward or
            impractical. One or both sashes glide smoothly along a track, providing generous ventilation and
            an unobstructed panoramic view of your yard or landscape.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Because slider windows have no counterbalance springs or tilt mechanisms, they are mechanically
            simple and extremely easy to operate. They&apos;re a popular choice for living rooms, dining areas,
            and basement egress openings where a wide, low-profile window is desired. The sash lifts out
            completely for cleaning, so you can always maintain that clear view without the need for exterior
            ladder access.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction offers slider windows in a full range of sizes, frame colors, and glass
            options — including our FreedomMaxxx triple pane krypton glass system for the highest available
            energy efficiency. Every unit we install comes with our lifetime workmanship guarantee.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Horizontal operation is smooth and effortless — no heavy lifting
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Perfect for wide openings where vertical sash windows are not practical
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Sash removes from frame entirely for safe, easy exterior cleaning from inside
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Minimal mechanical parts mean greater long-term reliability
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available as single-slide (one operable sash) or double-slide (both sashes move)
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Triple pane argon or krypton gas fill available for energy efficiency
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide color selection for frame exterior and interior finish
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Multi-point locks and integrated screen for comfort and security
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Great for Modern Home Designs</h3>
            <p className="text-gray-700 leading-relaxed">
              Slider windows complement contemporary and ranch-style homes beautifully. Their clean horizontal
              lines and large glass area maximize natural light and create a strong visual connection between
              interior living spaces and the outdoors. If you&apos;re remodeling a great room, sunroom, or
              walk-out basement, sliders are worth serious consideration.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy Efficiency in Iowa & Illinois</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Quad Cities region experiences frigid winters and humid summers. Slider windows with
            standard dual-pane glass are a significant upgrade over aging single-pane units, but our triple
            pane krypton option takes energy performance to another level entirely. The FreedomMaxxx 10 glass
            system achieves a U-Factor that outperforms standard clear glass units by 70%, dramatically
            reducing the cold-weather heat loss that drives up your utility bills.
          </p>
          <Link href="/windows/krypton" className="text-amber-600 hover:underline font-medium">
            Learn more about triple pane krypton glass →
          </Link>
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
            Contact Suburban Construction for a free, no-obligation estimate on slider or glider window
            replacement throughout the Quad Cities.
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
