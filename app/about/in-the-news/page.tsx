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
            Over four decades of continuous operation, 35,000+ completed installations, and a
            longstanding commitment to quality and customer service have made Suburban a familiar
            name in eastern Iowa and western Illinois.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our move in 2021 to a new 30,000 square foot complex at 3602 North Harrison in Davenport
            — one of the most comprehensive home improvement showrooms between Chicago and Denver —
            generated significant local attention and recognition of the company&apos;s growth and
            continued investment in the Quad Cities community.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We are proud of the reputation we have earned and the relationships we have built with
            local homeowners, community organizations, and media over the years.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Press Inquiries</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Members of the local media are welcome to contact us for information about Suburban
              Construction, our products and services, or home improvement topics. We are happy to
              speak with journalists covering home improvement, local business, energy efficiency,
              or community topics.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For press inquiries, please call us during business hours or use our contact form and
              indicate &quot;press inquiry&quot; in your message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <p className="text-gray-700 font-semibold">Phone</p>
                <p className="text-gray-600">
                  <a href="tel:5633914000" className="text-amber-600 hover:underline">563-391-4000</a>
                  {' '}or{' '}
                  <a href="tel:18007173066" className="text-amber-600 hover:underline">1-800-717-3066</a>
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Hours</p>
                <p className="text-gray-600">Monday – Friday, 7:30 AM – 4:30 PM</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Beyond media coverage, Suburban Construction&apos;s reputation is built on word of mouth
            — homeowners recommending our services to neighbors, friends, and family throughout the
            Quad Cities area. Many of our customers have been with us for decades, returning for
            additional projects and referring others consistently.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            You can read verified customer reviews and testimonials from our community on our
            testimonials page.
          </p>

          <Link
            href="/about/testimonials"
            className="text-amber-600 hover:text-amber-700 font-semibold underline"
          >
            Read Customer Testimonials →
          </Link>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Press inquiries, general questions, or ready for a free estimate — we are here to help.
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
