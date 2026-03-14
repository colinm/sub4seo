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

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
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
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction installs basement replacement windows throughout Davenport, Bettendorf,
                Moline, Rock Island, and the surrounding area. We properly seal and insulate each installation
                to prevent future moisture issues — something that a quick DIY job rarely accomplishes.
              </p>
            </div>
            <Image src="/basement.png" alt="Basement replacement window installed with proper moisture sealing" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/basement.jpg" alt="Basement window installation exterior view" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Replacement window in home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Interior view of replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Vinyl Frames', body: 'Modern vinyl frames eliminate the rust and condensation problems of old steel frames.' },
              { title: 'Moisture Sealed', body: 'Properly sealed installation prevents water infiltration at the frame perimeter.' },
              { title: 'Multi-Pane Glass', body: 'Multi-pane insulating glass dramatically improves thermal performance.' },
              { title: 'Ventilation Option', body: 'Operable vent option for fresh air circulation and humidity control.' },
              { title: 'Multiple Configurations', body: 'Available in hopper, slider, and fixed configurations.' },
              { title: 'Code-Compliant Sizing', body: 'Code-compliant sizing available for habitable room requirements.' },
              { title: 'Lifetime Guarantee', body: 'Lifetime workmanship guarantee on all installations.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">✓</span>
                  <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image src="/basement.jpg" alt="Egress window installation in basement" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Signs It&apos;s Time to Replace Your Basement Windows</h2>
              <ul className="space-y-3 mb-6">
                {[
                  'Visible rust staining on the frame or surrounding masonry',
                  'Condensation between glass panes (seal failure)',
                  'Water stains or efflorescence on the wall below the window',
                  'Drafts felt near the window during cold weather',
                  'Single-pane glass that fogs heavily with interior moisture',
                  'Windows that won\'t open, close, or lock properly',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Need an Egress Window?</h2>
              <p className="text-gray-600 leading-relaxed">
                If you&apos;re finishing your basement as a bedroom or habitable living space, you may be required
                by building code to install an egress window — a window large enough to serve as an emergency
                exit. We handle egress window installations including the excavation, window well, and proper
                drainage. See our{' '}
                <Link href="/windows/egress" className="text-accent hover:text-accent-dark">
                  Egress Windows page
                </Link>{' '}
                for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Considering an Egress Window?</h3>
              <p className="text-gray-700 leading-relaxed">
                If your basement has a bedroom or habitable space, building code may require an egress window. We handle the complete installation including excavation and window well.
              </p>
            </div>
            <Link href="/windows/egress" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Windows Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/windows.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free estimate on basement window replacement throughout
            the Quad Cities area.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
