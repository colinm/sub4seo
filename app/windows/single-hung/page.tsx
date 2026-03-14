import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/single-hung'])

export default function SingleHungWindowsPage() {
  return (
    <>
      <PageHero
        title="Single Hung Replacement Windows"
        subtitle="Classic style, modern energy efficiency — the reliable workhorse of replacement windows"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Single Hung Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Is a Single Hung Window?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A single hung window features two sashes — an upper sash that remains fixed in place and a lower
                sash that slides vertically to open. This classic configuration has been a staple of American home
                design for generations, and for good reason: it is simple, cost-effective, and extremely reliable.
                Because the upper sash does not move, there are fewer moving parts and less chance of air
                infiltration over time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction installs single hung windows throughout the Quad Cities and the surrounding
                90-mile service area. We offer them in a range of frame colors, glass options, and grid patterns
                to complement any architectural style — from older Victorian homes in Rock Island to modern
                construction in Bettendorf and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Like all of our replacement windows, single hung windows are available with our FreedomMaxxx
                triple pane krypton glass system, which delivers up to 300% more energy efficiency than ordinary
                Low-E glass. If you want the most thermally efficient single hung window on the market, we have it.
              </p>
            </div>
            <Image src="/single-hung.jpg" alt="Single hung replacement window installed in a Quad Cities home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/single-hung.jpg" alt="Single hung replacement window installed in home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Interior view of replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Exterior view of replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Fixed Upper Sash', body: 'Eliminates a potential source of air leakage and frame flex.' },
              { title: 'Tilt-In Cleaning', body: 'Operable lower sash tilts in for easy cleaning from inside your home.' },
              { title: 'Narrowline Profile', body: 'Narrowline frame and sash profile maximizes glass area for a refined, classic look.' },
              { title: 'InterWeld Corners', body: 'InterWeld fusion-welded sashes and mainframe for lifetime structural integrity.' },
              { title: 'EverLast PVC Vinyl', body: 'EverLast PVC vinyl never needs painting or staining — maintenance-free for life.' },
              { title: 'ConstantForce Balances', body: 'ConstantForce balances make raising and lowering the sash smooth and effortless.' },
              { title: 'FreedomMaxx Low-E HP Glass', body: 'FreedomMaxx Low-E HP high-performance glass standard; optional FreedomMaxx 10 upgrade available.' },
              { title: 'Airtight Chambers', body: 'Airtight insulating chambers in the frame and sash reduce heat transfer significantly.' },
              { title: 'Triple Pane Krypton', body: 'Optional FreedomMaxx 10 triple pane krypton upgrade for maximum energy savings.' },
              { title: 'Frame Colors', body: 'Wide range of frame colors and interior wood-grain finishes.' },
              { title: 'Grid Patterns', body: 'Optional grids including colonial, prairie, and contour styles.' },
              { title: 'Screen Included', body: 'Half-screen included; full-screen upgrade available.' },
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
            <Image src="/triple-pane-glass.jpg" alt="Triple pane krypton glass system for maximum energy efficiency" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Triple Pane Krypton Available</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Our FreedomMaxxx 10 triple pane krypton glass system can be added to any single hung window.
                Krypton gas insulates 50% better than argon, and three panes of glass with dual Low-E coatings
                dramatically reduce heat transfer in both winter and summer. It&apos;s the best performing glass
                system available for Iowa and Illinois homeowners who want maximum energy savings.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Single Hung vs. Double Hung</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The main difference is that a double hung window allows both the upper and lower sashes to operate
                and tilt in for cleaning. Single hung windows are slightly less expensive because the upper sash is
                fixed. If ease of exterior-surface cleaning is a top priority — especially for windows above the
                first floor — consider upgrading to{' '}
                <Link href="/windows/double-hung" className="text-accent hover:text-accent-dark">
                  double hung windows
                </Link>
                . For ground-floor installations or applications where the exterior is easily accessible, single
                hung is an excellent, cost-effective choice.
              </p>
              <ul className="space-y-3">
                {[
                  { name: 'Learn more about krypton glass', href: '/windows/krypton' },
                  { name: 'View double hung windows', href: '/windows/double-hung' },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <Link href={item.href} className="font-semibold text-accent hover:text-accent-dark">{item.name} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Want Maximum Energy Efficiency?</h3>
              <p className="text-gray-700 leading-relaxed">
                Ask about our FreedomMaxxx triple pane krypton glass system — available on all single hung windows.
              </p>
            </div>
            <Link href="/windows/krypton" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
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
            Schedule your free, no-pressure in-home estimate today. We serve Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding area.
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
