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

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/double-hung.jpg" alt="Double hung replacement window installed in home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          <p className="text-gray-600 leading-relaxed mb-6">
            Suburban Construction has been installing double hung windows throughout Davenport, Bettendorf,
            Moline, Rock Island, and the surrounding area since 1985. We handle everything from measurement
            and ordering to professional installation — backed by our lifetime workmanship guarantee.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Both upper and lower sashes operate independently for flexible ventilation
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Tilt-in sashes for easy exterior cleaning from inside your home
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Classic aesthetic that fits virtually every home style
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Multi-point locking system for enhanced security and a tight weatherproof seal
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Triple pane krypton glass available for superior energy efficiency
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Wide selection of frame colors including white, tan, bronze, and clay
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Optional interior wood-grain finishes to match trim and cabinetry
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Grid options: colonial, prairie, contour, and more
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Full screen included as standard; half-screen option available
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Upgrade to Triple Pane Krypton Glass
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our FreedomMaxxx 10 triple pane krypton system turns an already-great double hung window into
              the most energy-efficient replacement window available anywhere. Krypton gas fills both chambers
              between three panes of glass, insulating 50% better than argon. The result: up to 80% more
              energy efficiency compared to a standard double-pane window. Your heating and cooling bills will
              reflect the difference.
            </p>
            <Link href="/windows/krypton" className="inline-block mt-3 text-amber-600 hover:underline font-medium">
              Learn more about triple pane krypton →
            </Link>
          </div>

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
          <Link href="/windows/window-installation" className="text-amber-600 hover:underline font-medium">
            Learn more about our installation process →
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready for New Windows?</h2>
          <p className="text-gray-600 mb-6">
            Schedule your free, no-pressure estimate today. We serve Davenport, Bettendorf, Moline, Rock
            Island, and a 90-mile radius.
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
