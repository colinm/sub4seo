import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/about/in-the-news'])

export default function InTheNewsPage() {
  return (
    <>
      <PageHero
        title="In the News"
        subtitle="Suburban Construction in the Quad Cities media"
        breadcrumbs={[
          { label: 'About Us', href: '/about/our-story' },
          { label: 'In the News' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Trusted Name in the Quad Cities
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Since our founding in 1985, Suburban Construction has been recognized and featured in
            local Quad Cities media as one of the region&apos;s leading home improvement companies.
            Over four decades of continuous operation, 40,000+ completed installations, and a
            longstanding commitment to quality and customer service have made Suburban a familiar
            name in eastern Iowa and western Illinois.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            We are proud of the reputation we have earned and the relationships we have built with
            local homeowners, community organizations, and media over the years.
          </p>

          {/* ── Featured: 40th Anniversary ── */}
          <div className="mb-12">
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
              40th Anniversary
            </span>

            {/* Channel 4 Video */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Channel 4 News — 40 Years in Business
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Local news station WHBF Channel 4 sat down with Suburban Construction to mark the
              company&apos;s 40th anniversary — four decades of serving Quad Cities homeowners with
              replacement windows, siding, doors, and gutters.
            </p>
            <div
              className="relative w-full rounded-lg overflow-hidden shadow-lg mb-6"
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src="https://www.youtube.com/embed/mBZBi7PlDtU"
                title="Suburban Construction 40th Anniversary — Channel 4 News"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Article cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://qctimes.com/news/local/business/article_5d0a3a00-f527-11ef-8a29-2f45630dd9a1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                  Quad-City Times
                </p>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                  Suburban Construction Celebrates 40 Years
                </h3>
                <p className="text-gray-500 text-sm">
                  The QC Times covers Suburban Construction&apos;s milestone anniversary and continued
                  growth in the Quad Cities market.
                </p>
                <span className="inline-block mt-3 text-accent text-sm font-semibold">
                  Read Article →
                </span>
              </a>

              <a
                href="https://quadcitiesbusiness.com/suburban-celebrates-40-years-of-fixing-up-homes/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                  Quad Cities Business
                </p>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                  Suburban Celebrates 40 Years of Fixing Up Homes
                </h3>
                <p className="text-gray-500 text-sm">
                  Quad Cities Business magazine profiles Suburban Construction&apos;s four-decade legacy
                  and family ownership story.
                </p>
                <span className="inline-block mt-3 text-accent text-sm font-semibold">
                  Read Article →
                </span>
              </a>
            </div>
          </div>

          {/* ── BBB Award ── */}
          <div className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row items-start gap-6">
            <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-lg border-2 border-[#006699] bg-white">
              <span className="text-2xl font-extrabold text-[#006699] leading-none">BBB</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#006699] uppercase tracking-wide mb-1">
                Better Business Bureau
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">BBB Accreditation &amp; A+ Rating</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Suburban Construction has maintained an A+ rating with the Better Business Bureau
                throughout its history — a reflection of the company&apos;s commitment to resolving
                customer concerns promptly and operating with integrity.
              </p>
              <a
                href="https://www.bbb.org/us/ia/davenport/profile/siding-contractors/suburban-construction-inc-0664-102852"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark font-semibold text-sm underline"
              >
                View BBB Profile →
              </a>
            </div>
          </div>

          {/* ── Press Inquiries ── */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Press Inquiries</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Members of the local media are welcome to contact us for information about Suburban
              Construction, our products and services, or home improvement topics. We are happy to
              speak with journalists covering home improvement, local business, energy efficiency,
              or community topics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <p className="text-gray-700 font-semibold">Phone</p>
                <p className="text-gray-600">
                  <a href="tel:5633914000" className="text-accent hover:underline">563-391-4000</a>
                  {' '}or{' '}
                  <a href="tel:18007173066" className="text-accent hover:underline">1-800-717-3066</a>
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Hours</p>
                <p className="text-gray-600">Monday – Friday, 7:30 AM – 4:30 PM</p>
              </div>
            </div>
          </div>

          <Link
            href="/about/testimonials"
            className="text-accent hover:text-accent-dark font-semibold underline"
          >
            Read Customer Testimonials →
          </Link>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Press inquiries, general questions, or ready for a free estimate — we are here to help.
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
