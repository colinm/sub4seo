import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/doors/entry'])

export default function EntryDoorsPage() {
  return (
    <>
      <PageHero
        title="Entry Doors"
        subtitle="Beautiful, energy-efficient entry doors that make a lasting first impression"
        breadcrumbs={[
          { label: 'Doors', href: '/doors/door-styles' },
          { label: 'Entry Doors' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The First Thing Everyone Sees
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your entry door does more than just open and close. It&apos;s the centerpiece of your
                home&apos;s exterior, a critical component of your home&apos;s energy envelope, and often
                the first security decision a potential intruder considers. A beautiful, properly installed
                entry door improves curb appeal, reduces heat loss, and gives your family confidence that
                the home is secure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction installs entry doors from Therma-Tru, one of the leading door
                manufacturers in North America. Therma-Tru doors are known for exceptional craftsmanship,
                wide style selection, and outstanding energy performance. Whether you&apos;re looking for
                a classic painted fiberglass door, a rich wood-grain stained door, or a sleek modern
                steel door, the Therma-Tru product line has options that will complement your home
                beautifully.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We custom-order every entry door to fit your specific opening and your specific taste.
                We then install it with precision — properly shimmed, sealed, weatherstripped, and
                hardware-fitted — ensuring it operates perfectly and maintains its energy efficiency
                for decades.
              </p>
            </div>
            <Image src="/entry.png" alt="Energy-efficient entry door installed on Quad Cities home" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/fiberclassicmain.jpg" alt="Fiber Classic entry door with wood grain texture" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/door.png" alt="Fiberglass entry door with decorative glass insert and custom finish" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/door.png" alt="Fiberglass entry door showing classic style" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Glass &amp; Style Options</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            One of the most exciting aspects of choosing a new entry door is selecting the glass
            insert. Glass options range from clear full-lite panels to decorative art glass, privacy
            glass, and everything in between.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Decorative Glass', body: 'Hundreds of patterns and privacy levels available for your glass insert.' },
              { title: 'Sidelites & Transoms', body: 'Expand the entry and add light with matching sidelite and transom panels.' },
              { title: 'Full, Half & No-Glass', body: 'Full-lite, half-lite, and no-glass panel options available.' },
              { title: 'Low-E Glass', body: 'Low-E glass for improved energy performance in the door glass unit.' },
              { title: 'Hardware Finishes', body: 'Oil-rubbed bronze, satin nickel, bright brass, and more in matching finish.' },
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
            <Image src="/fiberclassicmain.jpg" alt="Fiber Classic door showing fiberglass vs steel comparison" width={600} height={420} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Fiberglass vs. Steel Entry Doors</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Fiberglass Doors</h3>
                  <ul className="space-y-2">
                    {[
                      'Exceptional wood-grain texture — looks like real wood',
                      'Can be stained or painted to any color',
                      'Will not rust, rot, warp, or dent',
                      'Superior energy efficiency (5x more insulating than steel)',
                      'Wide glass insert options',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs font-bold">✓</span>
                        </span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Steel Doors</h3>
                  <ul className="space-y-2">
                    {[
                      'Maximum security — extremely difficult to force',
                      'Generally lower cost than fiberglass',
                      'Good insulation value with foam core',
                      'Can be painted; not recommended for staining',
                      'Excellent for high-traffic and side entry doors',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                          <span className="text-accent text-xs font-bold">✓</span>
                        </span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Browse the Full Door Catalog
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our door catalog features hundreds of styles, finishes, and glass options. You can
                browse it online or download a PDF brochure.
              </p>
            </div>
            <Link href="/doors/door-app" className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm">
              View Catalog →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free entry door estimate throughout the Quad Cities.
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
