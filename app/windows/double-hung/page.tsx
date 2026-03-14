import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/double-hung'])

export default function DoubleHungWindowsPage() {
  return (
    <>
      <PageHero
        title="Double Hung Replacement Windows"
        subtitle="The most popular window style — two operable sashes for ventilation and effortless cleaning"
        bgImage="/double-hung.jpg"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Double Hung Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Double Hung Windows Are the #1 Choice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Double hung windows are the most widely installed replacement window style in the United States —
                and for homeowners in the Quad Cities, they&apos;re the go-to choice for a reason. Both the upper
                and lower sashes are fully operable, giving you complete control over ventilation. Open the top to
                let warm air out, the bottom to let cool air in, or both at once for a full cross breeze on a
                pleasant Iowa or Illinois spring day.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What really sets double hung windows apart is cleaning convenience. Both sashes tilt inward, so
                you can clean the exterior glass surface from inside your home. No ladders required — even for
                second- and third-floor windows. This is a significant practical advantage that single hung
                windows simply cannot match.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction has been installing double hung windows throughout Davenport, Bettendorf,
                Moline, Rock Island, and the surrounding area since 1985. We handle everything from measurement
                and ordering to professional installation — backed by our lifetime workmanship guarantee.
              </p>
            </div>
            <Image src="/double-hung.jpg" alt="Double hung replacement window installed in home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/double-hung.jpg" alt="Double hung replacement window installed in home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Interior view of replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Exterior view of replacement window" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Dual Operable Sashes', body: 'Both upper and lower sashes operate independently for flexible ventilation.' },
              { title: 'Tilt-In Cleaning', body: 'Tilt-in sashes let you clean exterior glass from inside your home.' },
              { title: 'Classic Aesthetic', body: 'Fits virtually every home style — from traditional to contemporary.' },
              { title: 'Multi-Point Lock', body: 'Multi-point locking system for enhanced security and weatherproof seal.' },
              { title: 'Triple Pane Krypton', body: 'Triple pane krypton glass available for superior energy efficiency.' },
              { title: 'Frame Color Selection', body: 'White, tan, bronze, clay, and more — interior wood-grain available.' },
              { title: 'Grid Options', body: 'Colonial, prairie, contour, and more grid patterns available.' },
              { title: 'Full Screen Standard', body: 'Full screen included as standard; half-screen option available.' },
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
            <Image src="/triple-pane-glass.jpg" alt="Triple pane krypton glass system" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Upgrade to Triple Pane Krypton Glass
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Our FreedomMaxxx 10 triple pane krypton system turns an already-great double hung window into
                the most energy-efficient replacement window available anywhere. Krypton gas fills both chambers
                between three panes of glass, insulating 50% better than argon. The result: up to 80% more
                energy efficiency compared to a standard double-pane window. Your heating and cooling bills will
                reflect the difference.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What to Expect During Installation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our installation team measures each opening precisely before ordering your windows. On installation
                day, we remove and properly dispose of your old windows, install the new units with proper flashing
                and insulation, and ensure each window operates perfectly. We clean up thoroughly and walk you
                through the new windows before we leave. Most full-house installations are completed in a single
                day.
              </p>
              <ul className="space-y-3">
                {[
                  { name: 'Learn more about triple pane krypton', href: '/windows/krypton' },
                  { name: 'Our installation process', href: '/windows/window-installation' },
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
                Ask about the FreedomMaxxx 10 krypton upgrade — available on all double hung window orders.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready for New Windows?</h2>
          <p className="text-gray-600 mb-6">
            Schedule your free, no-pressure estimate today. We serve Davenport, Bettendorf, Moline, Rock
            Island, and a 90-mile radius.
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
