import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import { testimonials } from '@/lib/testimonials'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/about/testimonials'])

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Suburban Construction',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '53',
  },
}

const youtubeVideos = [
  { id: 'LJs-AMZb_QQ', title: 'Suburban Construction Customer Review' },
  { id: 'G8vZj5-6rKY', title: 'Suburban Construction Customer Testimonial' },
  { id: 'o0ruKXXcrzo', title: 'Suburban Construction Home Improvement Review' },
  { id: 'NTSy-mbr2Cg', title: 'Suburban Construction Customer Story' },
]

function StarRating() {
  return (
    <div className="flex gap-0.5 text-accent-muted text-lg" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <PageHero
        title="Customer Testimonials"
        subtitle="What Quad Cities homeowners say about Suburban Construction"
        breadcrumbs={[
          { label: 'About Us', href: '/about/our-story' },
          { label: 'Testimonials' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            53 Reviews From Satisfied Customers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Over four decades and 35,000+ installations, Suburban Construction has earned the trust
            of homeowners throughout the Quad Cities and surrounding communities. Here is what some
            of them have to say — in their own words.
          </p>

          {/* Video Testimonials */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="215"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Written Testimonials */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Written Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col"
              >
                <StarRating />
                <blockquote className="mt-3 text-gray-600 leading-relaxed text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4">
                  <p className="font-semibold text-gray-800 text-sm italic">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.city}, {t.state}
                    {t.service && (
                      <span className="ml-2 bg-accent-xlight text-accent-dark px-2 py-0.5 rounded-full text-xs capitalize">
                        {t.service}
                      </span>
                    )}
                  </p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free, no-pressure estimate on windows, siding, doors, or gutters.
            Serving the Quad Cities and a 90-mile radius since 1985.
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
