import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/storm'])

export default function StormWindowsPage() {
  return (
    <>
      <PageHero
        title="Storm Windows"
        subtitle="Add an extra layer of insulation and weather protection to your existing windows"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Storm Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                A Cost-Effective Energy Upgrade
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                It&apos;s no secret that quality storm windows — including the Larson Manufacturing storm door
                line we carry — can save you a tremendous amount of money on your energy bills in just a few
                short years. Storm windows are installed on the exterior of your existing windows, creating an
                additional air chamber between the two window layers. This dead air space acts as insulation,
                reducing heat transfer and improving the overall energy performance of the window assembly. For
                homeowners who are not ready to commit to full window replacement, storm windows can be a
                practical intermediate step.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modern storm windows are a significant improvement over the old, clunky aluminum-frame storms
                that many Quad Cities homeowners remember. Today&apos;s units feature slim vinyl or aluminum
                frames, Low-E glass options, and triple-track designs that incorporate both the glass panel
                and a built-in screen — so you can ventilate in summer and button up tight for winter without
                removing or storing seasonal panels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Storm windows are particularly useful on historic homes where original wood windows have
                architectural or historic value that full replacement would destroy. They can also make
                sense on rental properties where budget constraints make full replacement impractical in
                the near term.
              </p>
            </div>
            <Image src="/storm.jpg" alt="Storm window installed over existing window for added insulation and weather protection" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* About Larson */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">About Larson Manufacturing</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Larson Manufacturing was founded in 1954 by Oscar Larson in Albert Lea, Minnesota, as a small
              door, window, and awning operation. The company grew quickly and moved to larger facilities,
              eventually expanding to Brookings, South Dakota. Storm door sales took off in 1966 when Larson
              designed and built its first wood core storm door, and in the 1980s the company became the first
              in the industry to utilize magnetic weather-stripping that seals like a refrigerator.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over its history, Larson has been a consistent industry innovator. In 2000 they introduced the
              ScreenAway&#174; Storm Door — the first storm door on the market to feature a disappearing
              retractable screen. In the years since, Larson has filed for 16 patents covering technologies
              from design innovations to new hardware systems.
            </p>
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 gap-3">
            <Image src="/window2.jpg" alt="Replacement window installed in home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/double-hung.jpg" alt="Double hung replacement window exterior view" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefits of Storm Windows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Reduce Heat Loss', body: 'Reduce heat loss through existing windows by 25–50%.' },
              { title: 'Weather Protection', body: 'Block wind-driven rain and snow infiltration.' },
              { title: 'Less Condensation', body: 'Reduce interior condensation by keeping the inner window surface warmer.' },
              { title: 'Low-E Glass Option', body: 'Low-E glass options available for improved solar performance.' },
              { title: 'Triple-Track Design', body: 'Triple-track design combines glass and screen in one unit — no seasonal storage.' },
              { title: 'Cost Effective', body: 'Significantly less expensive than full window replacement.' },
              { title: 'Custom Fit', body: 'Custom fit to your existing window openings.' },
              { title: 'ScreenAway® Retractable Screen', body: 'Larson\'s patented ScreenAway® screen disappears into the door frame — no removing or storing seasonal panels.' },
              { title: 'Durable Steel Construction', body: 'Larson storm doors feature durable steel construction with a baked-on enamel finish for lasting appearance.' },
              { title: 'Non-Pry Latches & Quality Closers', body: 'Built-in frame hinges, quality-built closers, and non-pry latches for security and smooth operation.' },
              { title: 'Variety of Styles & Finishes', body: 'Multiple color options and a variety of decorative styles to complement any home exterior.' },
              { title: 'Self-Storing Panels', body: 'Self-storing storm and screen panels for year-round convenience.' },
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
            <Image src="/storm.jpg" alt="Storm window providing additional weather protection" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ideal Applications</h2>
              <ul className="space-y-4 mb-6">
                {[
                  'Historic homes where original windows must be preserved',
                  'Rental properties seeking an affordable energy upgrade',
                  'Homes with windows that are structurally sound but thermally poor',
                  'Phased improvement plans where full replacement comes later',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Storm Windows vs. Full Replacement</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If your existing windows are in reasonably good structural condition but are simply single-pane
                or poorly insulated, storm windows can be a sensible upgrade. However, if your frames are
                rotting, warped, or air-infiltrating significantly at the sash edges, full replacement
                windows will outperform any storm window addition. Our consultants will give you an honest
                assessment during your free estimate.
              </p>
              <Link href="/windows/double-hung" className="text-accent hover:text-accent-dark font-medium">
                Explore full replacement window options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Ready for Full Replacement Windows?</h3>
              <p className="text-gray-700 leading-relaxed">
                If your existing windows are failing structurally, full replacement delivers better long-term value. We offer a complete range of styles with our lifetime workmanship guarantee.
              </p>
            </div>
            <Link href="/windows/window-styles" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              See All Styles →
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
            Contact Suburban Construction for a free estimate on storm windows or full replacement
            windows throughout the Quad Cities.
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
