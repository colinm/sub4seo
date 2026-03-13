import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/basement'])

export default function BasementWindowsPage() {
  return (
    <>
      <PageHero
        title="Basement Replacement Windows"
        subtitle="Improve light, ventilation, and moisture protection in your basement"
        bgImage="/basement.png"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Basement Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/basement.png" alt="Basement replacement window installed with proper moisture sealing" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t Neglect Your Basement Windows
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Basement windows are often the oldest and most neglected windows in the home. Original basement
            windows in many Quad Cities homes are single-pane glass set in steel or aluminum frames — a
            major source of heat loss in winter and moisture infiltration year-round. Replacing them with
            modern, properly insulated units is one of the most cost-effective improvements you can make to
            your home&apos;s energy envelope.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Beyond energy performance, new basement windows improve the habitability of the space. More
            natural light makes a finished basement feel less like a cave and more like usable living space.
            Proper ventilation helps control humidity levels, which is critical in Iowa and Illinois where
            summer humidity can drive moisture into basements and create conditions favorable for mold.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction installs basement replacement windows throughout Davenport, Bettendorf,
            Moline, Rock Island, and the surrounding area. We properly seal and insulate each installation
            to prevent future moisture issues — something that a quick DIY job rarely accomplishes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Modern vinyl frames eliminate the rust and condensation problems of old steel frames
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Properly sealed installation prevents water infiltration at the frame perimeter
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Multi-pane insulating glass dramatically improves thermal performance
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Operable vent option for fresh air circulation and humidity control
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in hopper, slider, and fixed configurations
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Code-compliant sizing available for habitable room requirements
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Lifetime workmanship guarantee on all installations
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Signs It&apos;s Time to Replace Your Basement Windows</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Visible rust staining on the frame or surrounding masonry</li>
              <li>• Condensation between glass panes (seal failure)</li>
              <li>• Water stains or efflorescence on the wall below the window</li>
              <li>• Drafts felt near the window during cold weather</li>
              <li>• Single-pane glass that fogs heavily with interior moisture</li>
              <li>• Windows that won&apos;t open, close, or lock properly</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need an Egress Window?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&apos;re finishing your basement as a bedroom or habitable living space, you may be required
            by building code to install an egress window — a window large enough to serve as an emergency
            exit. We handle egress window installations including the excavation, window well, and proper
            drainage. See our{' '}
            <Link href="/windows/egress" className="text-amber-600 hover:underline">
              Egress Windows page
            </Link>{' '}
            for details.
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
            Contact Suburban Construction for a free estimate on basement window replacement throughout
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
