import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/siding-installation'])

export default function SidingInstallationPage() {
  return (
    <>
      <PageHero
        title="Siding Installation Process"
        subtitle="Professional installation, detailed preparation, and a lifetime workmanship guarantee"
        bgImage="/sidinghouse.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Installation Process' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/siding-installation.png" alt="Professional siding installation in progress on a Quad Cities home" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Installation Makes All the Difference
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            New siding is only as good as its installation. Improperly installed siding — regardless
            of material quality — will buckle, leak, or blow off in the first significant windstorm.
            Suburban Construction&apos;s installation crews have decades of experience and follow a
            meticulous process that addresses every detail, from the condition of the underlying wall
            system to the final caulk line at every door and window.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We work with full-time, experienced crews — not day laborers or subcontractors. Every
            installer on our team has been trained in our specific installation standards and takes
            personal responsibility for the quality of their work. When we&apos;re done, your home
            will be weathertight, properly ventilated, and finished to a standard you&apos;ll be
            proud of.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Step-by-Step Process</h2>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Free Estimate & Measurement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A Suburban Construction consultant measures your home, evaluates existing conditions,
                  and discusses your material, color, and profile preferences. We bring siding sample
                  boards so you can see actual colors and textures against your home in natural light.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Removal of Old Siding</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our crew removes and disposes of your existing siding. This step allows us to expose
                  and evaluate the underlying sheathing for any damage, moisture intrusion, or rot that
                  should be addressed before new siding goes on. Skipping this step by installing over
                  old siding traps problems rather than solving them.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sheathing Inspection & Repair</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We inspect all exposed sheathing for rot, moisture damage, and structural integrity.
                  Any damaged areas are replaced before we proceed — ensuring your new siding has a
                  solid, stable substrate to attach to and that no hidden moisture problems are sealed
                  behind new panels.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Moisture Barrier Installation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A quality weather-resistant barrier (housewrap) is installed over the sheathing
                  before any siding goes on. This layer is your home&apos;s primary defense against
                  water infiltration. We install it with proper overlaps, tape all seams, and integrate
                  it properly at every window, door, and penetration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Siding Installation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Panels are installed starting from the bottom of the wall and working up, with
                  proper starter strips, level lines established for each course, and appropriate
                  nailing patterns to allow for thermal expansion. Corners, channels, and trim pieces
                  are installed to manufacturer specifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Trim, Soffit & Fascia</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We complete all window and door surrounds, corner posts, soffit panels, and fascia
                  covers. This finish work is what separates a professional installation from an
                  amateur one — clean, tight lines at every transition and termination.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                7
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Cleanup & Final Walkthrough</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We pick up and dispose of all debris, clean up the work area, and walk you through
                  the completed installation. We point out any areas of note, answer your questions,
                  and confirm you are satisfied with the result before we leave.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Lifetime Workmanship Guarantee</h3>
            <p className="text-gray-700 leading-relaxed">
              Every siding installation Suburban Construction performs is backed by our lifetime
              workmanship guarantee. If any aspect of the installation itself ever causes a problem —
              improper flashing, inadequate fastening, incorrect trim work — we come back and fix it
              at no cost to you. Combined with the manufacturer&apos;s material warranty, you have
              complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Siding Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/siding.pdf"
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
            Schedule your free in-home estimate today. We serve Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding Quad Cities area.
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
