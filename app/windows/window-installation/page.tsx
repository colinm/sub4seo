import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/window-installation'])

export default function WindowInstallationPage() {
  return (
    <>
      <PageHero
        title="Window Installation Process"
        subtitle="Precision measurement, expert installation, and a lifetime workmanship guarantee"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Installation Process' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="/install1.jpg" alt="Window installation crew removing old window from home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/install2.jpg" alt="New replacement window being set into rough opening during installation" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/install3.jpg" alt="Window installer applying flashing and insulation around new window frame" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
          <Image src="/install4.jpg" alt="Finished replacement window installation with trim and exterior caulk applied" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Professional Installation Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A high-quality replacement window is only as good as its installation. Even the best
            triple-pane krypton window will underperform if it is improperly measured, poorly insulated,
            or inadequately flashed against water infiltration. At Suburban Construction, we have refined
            our installation process over nearly four decades to eliminate every source of potential
            failure — from the first measurement to the final cleanup.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our installation crews are experienced full-time employees, not subcontractors. They install
            windows every day, and they take personal pride in the quality of every installation. We stand
            behind that work with a lifetime workmanship guarantee — if anything related to the installation
            itself ever fails, we come back and fix it at no cost to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Step-by-Step Process</h2>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Free In-Home Estimate & Measurement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A Suburban Construction consultant visits your home to measure each opening, assess the
                  condition of the existing frames and sills, and discuss your goals. We bring samples of
                  frame colors, grid patterns, and glass options so you can make informed decisions. There
                  is no charge for this visit and no obligation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Custom Order</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We place a custom order for your windows based on precise field measurements. Every window
                  we install is made to order — not pulled from generic inventory. Lead times vary by product
                  line but typically range from two to six weeks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Scheduling & Preparation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When your windows arrive, we schedule the installation at your convenience. Before our
                  crew arrives, we ask that you clear a few feet of space around each window opening inside
                  and outside the home. We bring all tools and materials — nothing is required from you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Removal of Old Windows</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We carefully remove your existing windows, minimizing disturbance to surrounding trim,
                  drywall, and exterior siding. Old windows are loaded directly into our disposal trailer —
                  they won&apos;t end up stacked in your yard.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">New Window Installation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Each new window is shimmed level and plumb, fastened securely, and properly flashed
                  against water infiltration. Gaps are filled with low-expansion foam insulation. Every
                  window is tested for proper operation and smooth, even locking before we move to the
                  next opening.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Trim, Caulk & Final Seal</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We reinstall or replace interior and exterior trim, apply exterior caulk at all perimeter
                  joints, and perform a final inspection of each window. The exterior seal is critical to
                  long-term performance — we use a high-quality siliconized caulk that remains flexible
                  through Iowa&apos;s temperature extremes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                7
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Cleanup & Walkthrough</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We vacuum interior window sills, wipe down glass surfaces, and clean up all debris from
                  both inside and outside the home. Before we leave, we walk you through each new window,
                  demonstrating proper operation and cleaning, and answering any questions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Lifetime Workmanship Guarantee</h3>
            <p className="text-gray-700 leading-relaxed">
              We back every window installation with a lifetime workmanship guarantee. If any aspect of
              the installation itself — flashing, trim, insulation, sealing — ever causes a problem, we
              come back and make it right. Combined with the manufacturer&apos;s warranty on the window
              itself, you&apos;re fully protected.
            </p>
          </div>
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
            Schedule your free estimate today. We serve Davenport, Bettendorf, Moline, Rock Island,
            and a 90-mile radius throughout Iowa and Illinois.
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
