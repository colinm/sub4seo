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

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/single-hung.jpg" alt="Single hung replacement window installed in a Quad Cities home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          <p className="text-gray-600 leading-relaxed mb-6">
            Like all of our replacement windows, single hung windows are available with our FreedomMaxxx
            triple pane krypton glass system, which delivers up to 300% more energy efficiency than ordinary
            Low-E glass. If you want the most thermally efficient single hung window on the market, we have it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features & Benefits</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Fixed upper sash eliminates a potential source of air leakage and frame flex
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Operable lower sash tilts in for easy cleaning from inside your home
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Classic look that suits traditional and craftsman-style homes
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Multiple Low-E glass options to improve energy efficiency
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Triple pane krypton gas fill available for maximum insulation
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Available in a wide range of frame colors and interior wood-grain finishes
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Optional grid patterns including colonial, prairie, and contour styles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-amber-500 mt-1">✓</span>
              Half-screen included; full-screen upgrade available
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Triple Pane Krypton Available</h3>
            <p className="text-gray-700 leading-relaxed">
              Our FreedomMaxxx 10 triple pane krypton glass system can be added to any single hung window.
              Krypton gas insulates 50% better than argon, and three panes of glass with dual Low-E coatings
              dramatically reduce heat transfer in both winter and summer. It&apos;s the best performing glass
              system available for Iowa and Illinois homeowners who want maximum energy savings.
            </p>
            <Link href="/windows/krypton" className="inline-block mt-3 text-amber-600 hover:underline font-medium">
              Learn more about triple pane krypton →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Single Hung vs. Double Hung</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The main difference is that a double hung window allows both the upper and lower sashes to operate
            and tilt in for cleaning. Single hung windows are slightly less expensive because the upper sash is
            fixed. If ease of exterior-surface cleaning is a top priority — especially for windows above the
            first floor — consider upgrading to{' '}
            <Link href="/windows/double-hung" className="text-amber-600 hover:underline">
              double hung windows
            </Link>
            . For ground-floor installations or applications where the exterior is easily accessible, single
            hung is an excellent, cost-effective choice.
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
            Schedule your free, no-pressure in-home estimate today. We serve Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding area.
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
