import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/siding/vinyl-siding'])

export default function VinylSidingPage() {
  return (
    <>
      <PageHero
        title="Vinyl Siding — Freedom Series"
        subtitle="America's most popular siding choice — durable, beautiful, and virtually maintenance-free"
        bgImage="/vinyl.jpg"
        breadcrumbs={[
          { label: 'Siding', href: '/siding/siding-options' },
          { label: 'Vinyl Siding' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Smart Choice for Quad Cities Homeowners
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vinyl siding is the most popular siding material in the United States — and it has
                earned that position by delivering exceptional value. It requires no painting, no
                caulking, no staining, and virtually no maintenance of any kind. A periodic washing
                with a garden hose is usually all it takes to keep it looking great for decades.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction installs the Freedom Series vinyl siding line — the best
                combination of value, quality, and aesthetic variety in the market. Available in
                dozens of colors, multiple profiles, and several thickness grades to fit every
                budget and quality target.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The color in vinyl siding is integral to the material — not painted on. That means
                it won&apos;t peel, chip, or blister the way painted wood does. Freedom Series uses
                UV stabilizers that maintain color significantly better than budget vinyl products.
              </p>
            </div>
            <Image src="/vinyl.jpg" alt="Vinyl siding installed on home showing clean low-maintenance finish" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 gap-3">
            <Image src="/sidinghouse.jpg" alt="Home with new vinyl siding" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/siding1.png" alt="Vinyl siding profile detail" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Freedom Series Features &amp; Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'No Maintenance', body: 'No painting, caulking, or staining — ever. A hose-down is all it needs.' },
              { title: 'Integral Color', body: "Color runs through the material so it won't peel, chip, or blister." },
              { title: 'UV Stabilized', body: 'Superior UV inhibitors maintain color far longer than budget vinyl.' },
              { title: 'Moisture Resistant', body: 'Impervious to rot, insects, and fungal growth that damage wood.' },
              { title: 'Dozens of Colors', body: 'Multiple profiles and palettes to match any home style.' },
              { title: 'Insulated Option', body: 'EPS foam-backed panels available for added R-value and rigidity.' },
              { title: 'Lightweight', body: 'Minimal structural stress — easier and faster to install correctly.' },
              { title: 'Lifetime Warranty', body: "Manufacturer's lifetime warranty plus our workmanship guarantee." },
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

      {/* Profiles: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image src="/siding-installation.png" alt="Vinyl siding profiles and installation on Quad Cities home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Available Profiles</h2>
              <ul className="space-y-4">
                {[
                  { name: 'Traditional Horizontal Lap', desc: 'Clean and classic — suits virtually every home style.' },
                  { name: 'Dutch Lap', desc: 'A notch at the top of each course creates deeper shadow lines and texture.' },
                  { name: 'Beaded Seam', desc: 'Elegant curved bottom bead for a more refined, historic look.' },
                  { name: 'Vertical / Board & Batten', desc: 'Modern farmhouse look — great for accents or full facades.' },
                  { name: 'Shake / Shingle', desc: 'Coastal or craftsman aesthetic, typically used on gable ends.' },
                ].map((p) => (
                  <li key={p.name} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">{p.name}</span>
                      <span className="text-gray-600"> — {p.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insulated upsell callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Want More Energy Efficiency?</h3>
              <p className="text-gray-700 leading-relaxed">
                Upgrade to insulated vinyl siding — EPS foam backing adds R-value, reduces energy
                costs, and gives panels a thicker, more substantial look and feel.
              </p>
            </div>
            <Link href="/siding/insulated-siding" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              Learn More →
            </Link>
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
          <a href="/siding.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap">
            ↓ Download PDF
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free vinyl siding estimate. Serving Davenport, Bettendorf, Moline,
            Rock Island, and the surrounding Quad Cities area.
          </p>
          <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors">
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
