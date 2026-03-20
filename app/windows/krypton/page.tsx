import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/krypton'])

const windowFaqLinks = [
  { href: '/windows/replacement-windows-faq', title: 'Window FAQ', description: 'Replacement windows, installation timelines, energy savings, warranties, and more.', icon: '🪟' },
  { href: '/resources/condensation-faq', title: 'Condensation FAQ', description: 'What causes condensation on windows, what it means, and how to address it.', icon: '💧' },
  { href: '/resources/convection-faq', title: 'Convection FAQ', description: 'How convection causes heat loss through windows and how gas fills reduce it.', icon: '🌡️' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

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

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
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
              <p className="text-gray-600 leading-relaxed">
                The result is a window glass system that outperforms everything else on the market and delivers
                real, measurable energy savings to Quad Cities homeowners who deal with both bitter Iowa winters
                and hot, humid summers.
              </p>
            </div>
            <Image src="/triple-pane-glass.jpg" alt="Triple pane krypton glass system cross-section showing insulating layers" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Glass Quality Is Everything</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Here is a fact that most homeowners don&apos;t realize: nearly 50% of a home&apos;s energy
            dollars are lost through poorly insulated windows. And consider that 80% of a window is glass —
            not frame. The glass is where energy is won or lost.
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

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Metrics Explained</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Improved Thermal Performance', body: 'Krypton gas insulates 50% better than argon. Combined with three panes, the FreedomMaxxx dramatically slows heat movement in every season.' },
              { title: 'U-Factor', body: 'U-Factor measures how quickly a window transfers heat — lower is better. The FreedomMaxxx 10 outperforms standard clear glass by 70%.' },
              { title: 'R-Value', body: 'R-Value measures resistance to heat flow — higher is better. The FreedomMaxxx 10 is 80% more efficient than a standard double-paned unit.' },
              { title: 'Solar Heat Gain (SHGC)', body: 'SHGC measures how much solar heat passes through — lower is better for cooling. FreedomMaxxx 10 outperforms standard clear glass by 56%.' },
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
            <Image src="/mult-chambered-sash.jpg" alt="Multi-chambered sash detail" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Available on All Window Styles</h2>
              <ul className="space-y-4">
                {[
                  { label: 'Single Hung Windows', href: '/windows/single-hung' },
                  { label: 'Double Hung Windows', href: '/windows/double-hung' },
                  { label: 'Slider / Glider Windows', href: '/windows/slider' },
                  { label: 'Casement & Awning Windows', href: '/windows/casement' },
                  { label: 'Basement Windows', href: '/windows/basement' },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <Link href={item.href} className="font-semibold text-accent hover:text-accent-dark">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
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

      <RelatedFAQs items={windowFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Ask about the FreedomMaxxx 10 upgrade when you request your free estimate. Our team will
            walk you through the energy savings and help you decide if triple pane krypton is the right
            choice for your home.
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
