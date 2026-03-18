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
    ratingValue: '4.7',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '111',
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <a
              href="https://share.google/ip6i7EtVr91x3aR2O"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span><strong>4.7</strong> stars · <strong>111</strong> Google reviews</span>
            </a>
          </div>
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
