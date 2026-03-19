import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/about/our-story'])

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Four decades of trusted home improvement in the Quad Cities area"
        bgImage="/bettoffice.jpg"
        breadcrumbs={[{ label: 'About Us' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Founded in 1985 — Built on a Real Community Need
          </h2>

          <div className="md:float-left md:mr-6 md:mb-4 mb-6">
            <Image
              src="/bettoffice.jpg"
              alt="Suburban Construction original Bettendorf office"
              width={340}
              height={240}
              className="rounded-lg shadow-md mb-4"
            />
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction was founded in 1985 by Brian D. Girskis in Bettendorf, Iowa. Before
            starting the company, Brian worked at Associated Materials Inc. (AMI) — the manufacturer
            behind the high-quality window and siding products that Suburban Construction carries to
            this day. That inside knowledge of the industry gave Brian a distinct advantage: he
            understood exactly what quality looked like, and he saw firsthand that the Quad Cities
            area was underserved.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Brian recognized that &quot;there was a real need for a full-service, quality local window,
            siding, and door retailer in eastern Iowa and western Illinois.&quot; Rather than simply
            selling products, he set out to build a company that would combine premium materials with
            professional installation and genuine after-sale support — a concept that was rare in the
            market at the time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The company opened its first showroom in downtown Bettendorf, where it quickly earned a
            reputation for honesty, craftsmanship, and a level of service that homeowners in the area
            had never quite seen from a home improvement company before.
          </p>

          <div className="clear-both" />

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            40,000+ Installations and Growing
          </h2>

          <div className="md:float-right md:ml-6 md:mb-4 mb-6">
            <Image
              src="/subofficedavold.jpeg"
              alt="Suburban Construction Davenport office"
              width={340}
              height={240}
              className="rounded-lg shadow-md mb-4"
            />
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            In 1997, Suburban Construction moved its main operations to Davenport, Iowa, expanding its
            reach and its showroom capabilities. That Davenport location quickly became one of the
            most comprehensive home improvement showrooms between Chicago and Denver — a point of pride
            for the company and a genuine resource for homeowners who wanted to see, touch, and operate
            products before making a decision.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Over the decades, Suburban Construction has completed more than 40,000 installations
            across the Quad Cities and a 90-mile radius. Windows, siding, doors, gutters, patio
            enclosures — the company has steadily grown its offerings while never losing sight of
            what made it successful from the beginning: quality products, skilled installation, and
            treating every customer like a neighbor.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            That growth was never accidental. It came from referrals — homeowners recommending
            Suburban to friends, family, and co-workers because they were genuinely satisfied. Many
            customers have returned for multiple projects over the years, some spanning decades.
          </p>

          <div className="clear-both" />

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A New Home — 30,000 Sq Ft on North Harrison
          </h2>

          <div className="md:float-left md:mr-6 md:mb-4 mb-6">
            <Image
              src="/davoffice2.png"
              alt="Suburban Construction new Davenport complex on North Harrison"
              width={340}
              height={240}
              className="rounded-lg shadow-md mb-4"
            />
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            In the spring of 2021, Suburban Construction took a major step forward, relocating to a
            brand-new, purpose-built complex at 3602 North Harrison Street in Davenport, Iowa. The
            new facility spans two city blocks and approximately 30,000 square feet — housing a
            state-of-the-art showroom, dedicated training facilities, and a large warehouse all
            under one roof.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The showroom at the North Harrison location features full-size displays of windows,
            doors, siding, and gutter systems. Visitors can see products at actual scale, operate
            windows and doors themselves, and compare options side by side — the kind of hands-on
            experience that makes a real difference when you&apos;re investing in your home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The new complex also reflects the company&apos;s commitment to continuous improvement.
            The training facilities allow Suburban&apos;s installation teams to stay current on
            the latest techniques and product developments, ensuring that the quality of work in
            the field keeps pace with the quality of the products being installed.
          </p>

          <div className="clear-both" />

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Family Business With a Family Culture
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Today, Suburban Construction is led by JR Girskis, who continues the commitment to
            excellence and integrity that his father Brian established nearly four decades ago.
            The team — from the sales staff to the installers to the office — reflects the values
            that have defined the company since day one.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            As JR puts it: &quot;We are all like one big family and truly want to do what is best
            for the customer.&quot; That philosophy shows up in the way Suburban handles everything
            from initial consultations to warranty claims. The company does not use high-pressure
            sales tactics, does not make promises it cannot keep, and does not walk away from a
            project until the customer is fully satisfied.
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Founded 1985 by Brian D. Girskis in Bettendorf, Iowa
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              40,000+ installations completed across the Quad Cities and surrounding region
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              One of the most comprehensive showrooms between Chicago and Denver
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              30,000 sq ft complex opened 2021 at 3602 North Harrison, Davenport
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Family-owned and operated — no pressure, no shortcuts
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Lifetime workmanship guarantee on every installation
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            See Suburban Construction in Action
          </h2>
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/CEGaK7EzTfU"
              title="Suburban Construction — Company Overview"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our showroom or contact us for a free, no-pressure estimate.
            We serve Davenport, Bettendorf, Moline, Rock Island, and a 90-mile radius.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
