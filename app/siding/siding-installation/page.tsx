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

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
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
              <p className="text-gray-600 leading-relaxed">
                We work with full-time, experienced crews — not day laborers or subcontractors. Every
                installer on our team has been trained in our specific installation standards and takes
                personal responsibility for the quality of their work. When we&apos;re done, your home
                will be weathertight, properly ventilated, and finished to a standard you&apos;ll be
                proud of.
              </p>
            </div>
            <Image src="/siding-installation.png" alt="Professional siding installation in progress on a Quad Cities home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/install5.jpg" alt="Siding installation crew at work" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/install6.jpg" alt="Siding trim and soffit installation" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/install7.jpg" alt="Completed siding installation with trim detail" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Step-by-Step Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Free Estimate & Measurement', body: 'We measure your home, evaluate existing conditions, and bring sample boards so you can see actual colors and textures.' },
              { title: 'Removal of Old Siding', body: 'Our crew removes and disposes of existing siding, exposing the sheathing for inspection. No problems get sealed in.' },
              { title: 'Sheathing Inspection & Repair', body: 'We inspect all exposed sheathing for rot, moisture damage, and structural integrity. Damaged areas are replaced before proceeding.' },
              { title: 'Moisture Barrier Installation', body: 'A quality weather-resistant barrier is installed with proper overlaps, taped seams, and integration at every window, door, and penetration.' },
              { title: 'Siding Installation', body: 'Panels are installed from the bottom up with proper starter strips, level lines for each course, and correct nailing patterns for thermal expansion.' },
              { title: 'Trim, Soffit & Fascia', body: 'We complete all window and door surrounds, corner posts, soffit panels, and fascia covers for clean, professional lines at every transition.' },
              { title: 'Cleanup & Final Walkthrough', body: 'We pick up and dispose of all debris, clean up the work area, and walk you through the completed installation before we leave.' },
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
            <Image src="/install5.jpg" alt="Siding installation showing professional crew detail work" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Lifetime Workmanship Guarantee</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Every siding installation Suburban Construction performs is backed by our lifetime
                workmanship guarantee. If any aspect of the installation itself ever causes a problem —
                improper flashing, inadequate fastening, incorrect trim work — we come back and fix it
                at no cost to you. Combined with the manufacturer&apos;s material warranty, you have
                complete peace of mind.
              </p>
              <ul className="space-y-4">
                {[
                  { name: 'Experienced full-time installers', desc: 'not subcontractors — trained to our specific standards' },
                  { name: 'Sheathing inspection included', desc: 'no hidden problems sealed behind your new siding' },
                  { name: 'Moisture barrier properly installed', desc: 'your primary defense against water infiltration' },
                  { name: 'Lifetime workmanship guarantee', desc: 'if our installation ever causes a problem, we fix it free' },
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

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Siding Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/siding.pdf"
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
            Schedule your free in-home estimate today. We serve Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding Quad Cities area.
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
