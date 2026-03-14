import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/egress'])

export default function EgressWindowsPage() {
  return (
    <>
      <PageHero
        title="Egress Windows"
        subtitle="Meet building code requirements and provide a safe emergency exit for basement bedrooms"
        bgImage="/basement.jpg"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Egress Windows' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Is an Egress Window?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                An egress window is a window large enough to serve as an emergency exit — and a means of entry
                for rescue personnel — in the event of a fire or other emergency. Building codes in Iowa and
                Illinois require egress windows in any basement room used as a sleeping area. Without one, your
                basement bedroom is technically not a legal bedroom and could affect your home&apos;s appraised
                value, your homeowner&apos;s insurance, and — most importantly — the safety of the people sleeping there.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The International Residential Code (IRC) specifies minimum requirements for egress windows:
                at least 5.7 square feet of net clear opening, a minimum clear opening height of 24 inches,
                a minimum clear opening width of 20 inches, and a maximum sill height of 44 inches above the
                finished floor. Our team is familiar with these requirements and with local code interpretations
                in the Quad Cities area.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Installing an egress window in a basement is a more involved project than a standard window
                replacement. It typically requires cutting through the foundation wall, excavating a window well,
                and installing proper drainage to keep the well dry. Suburban Construction handles the entire
                scope of work — from the initial cut to the finished interior and exterior trim.
              </p>
            </div>
            <Image src="/basement.jpg" alt="Egress window installation in basement providing emergency exit and natural light" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/basement.png" alt="Basement window with proper moisture sealing" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/window2.jpg" alt="Replacement window installed in home" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/install1.jpg" alt="Professional window installation in progress" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What&apos;s Included in an Egress Installation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Foundation Cutting', body: 'Foundation cutting and rough opening preparation.' },
              { title: 'Excavation', body: 'Excavation of window well to code-required depth.' },
              { title: 'Window Well Liner', body: 'Window well liner installation with drainage gravel.' },
              { title: 'Flashing & Waterproofing', body: 'Installation of egress window unit with proper flashing and waterproofing.' },
              { title: 'Insulation & Air Sealing', body: 'Insulation and air sealing around the window frame.' },
              { title: 'Interior & Exterior Trim', body: 'Complete interior and exterior finish work.' },
              { title: 'Well Cover Option', body: 'Optional window well cover to keep out debris and precipitation.' },
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
            <Image src="/basement.png" alt="Basement window installation detail" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Benefits Beyond Code Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                An egress window doesn&apos;t just satisfy a code requirement — it genuinely transforms a
                basement space. The larger opening brings in significantly more natural light, making the
                room feel brighter and more welcoming. Fresh air ventilation improves air quality and helps
                control humidity. And if you ever sell your home, a properly permitted egress window confirms
                to buyers that the basement bedroom is a legal, safe sleeping space.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Permits and Inspections</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Egress window installations require a building permit in most Quad Cities municipalities.
                Suburban Construction manages the permit application process for our customers and schedules
                the required inspections. All work is performed to code and documented so you have a clean
                record for insurance and future home sales.
              </p>
              <ul className="space-y-3">
                {[
                  { name: 'More natural light and fresh air', desc: 'transforms the basement feel' },
                  { name: 'Proper permits managed for you', desc: 'clean record for insurance and resale' },
                  { name: 'Full scope from cut to trim', desc: 'nothing left to another contractor' },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.name}</span>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
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
              <h3 className="text-lg font-bold text-gray-900 mb-1">Also Need Standard Basement Windows?</h3>
              <p className="text-gray-700 leading-relaxed">
                If your existing basement windows are aging or failing, we can replace them all in the same project — improving energy efficiency and moisture protection throughout.
              </p>
            </div>
            <Link href="/windows/basement" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              Basement Windows →
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
            Contact Suburban Construction for a free egress window estimate. We serve Davenport,
            Bettendorf, Moline, Rock Island, and the surrounding region.
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
