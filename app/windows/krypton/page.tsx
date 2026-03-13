import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/krypton'])

export default function KryptonWindowsPage() {
  return (
    <>
      <PageHero
        title="Triple Pane Krypton Glass"
        subtitle="FreedomMaxxx 10 — the most energy-efficient window glass available anywhere"
        bgImage="/main.jpg"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Triple Pane Krypton Glass' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Introducing the FreedomMaxxx 10 Glass System
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The FreedomMaxxx 10 is the ultimate glass system — 300% more energy-efficient than ordinary
            Low-E glass. This isn&apos;t a marginal upgrade. It represents a fundamental rethinking of what
            a window glass system can accomplish for a homeowner&apos;s comfort and utility bills.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The system combines two panes of multiple-layer vacuum-deposition Low-E glass with an interior
            glass pane and two krypton gas chambers. Each component plays a specific role in blocking heat
            transfer: the Low-E coatings reflect radiant energy, the triple-pane construction creates multiple
            insulating barriers, and the krypton gas — which insulates 50% better than argon — fills the
            spaces between those barriers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The result is a window glass system that outperforms everything else on the market and delivers
            real, measurable energy savings to Quad Cities homeowners who deal with both bitter Iowa winters
            and hot, humid summers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Glass Quality Is Everything</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here is a fact that most homeowners don&apos;t realize: nearly 50% of a home&apos;s energy
            dollars are lost through poorly insulated windows. And consider that 80% of a window is glass —
            not frame. The glass is where energy is won or lost. That&apos;s why, when you invest in
            replacement windows, the quality of the glass system should be your top priority.
          </p>

          {/* YouTube embed */}
          <div className="mb-8 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nluLDt_eB0w"
              title="FreedomMaxxx Triple Pane Krypton Glass System"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics Explained</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Improved Thermal Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Krypton gas insulates 50% better than argon. Combined with three panes of glass, the
                FreedomMaxxx system creates a thermal barrier that dramatically slows the movement of heat
                in and out of your home in every season.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">U-Factor</h3>
              <p className="text-gray-600 leading-relaxed">
                U-Factor measures how quickly a window transfers heat — lower is better. The FreedomMaxxx 10
                outperforms a standard clear glass unit by 70%. That means 70% less heat escaping through
                your windows on a cold January night in Davenport.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">R-Value</h3>
              <p className="text-gray-600 leading-relaxed">
                R-Value measures resistance to heat flow — higher is better. The FreedomMaxxx 10 is 80%
                more energy efficient than a standard double-paned unit. For context, most replacement
                windows sold today are double-pane. This system leaves them far behind.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Solar Heat Gain Coefficient (SHGC)</h3>
              <p className="text-gray-600 leading-relaxed">
                SHGC measures how much solar heat passes through the glass — lower values are better for
                cooling-dominated climates. The FreedomMaxxx 10 outperforms a standard clear glass unit by
                56%, significantly reducing the amount of solar heat that enters your home during those
                hot Quad Cities summers.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Available on All Window Styles</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/single-hung" className="text-amber-600 hover:underline">Single Hung Windows</Link>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/double-hung" className="text-amber-600 hover:underline">Double Hung Windows</Link>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/slider" className="text-amber-600 hover:underline">Slider / Glider Windows</Link>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/casement" className="text-amber-600 hover:underline">Casement & Awning Windows</Link>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              <Link href="/windows/basement" className="text-amber-600 hover:underline">Basement Windows</Link>
            </li>
          </ul>
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
            Ask about the FreedomMaxxx 10 upgrade when you request your free estimate. Our team will
            walk you through the energy savings and help you decide if triple pane krypton is the right
            choice for your home.
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
