import Link from 'next/link'
import { Star } from 'lucide-react'
import { getFeaturedTestimonials } from '@/lib/testimonials'

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent-muted text-accent-muted" />
      ))}
    </div>
  )
}

export default function TestimonialsCarousel() {
  const featured = getFeaturedTestimonials(8)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Quad Cities Homeowners Say
          </h2>
          <p className="text-gray-600 text-lg">
            Over 53 verified customer testimonials from across the Quad Cities.
          </p>
        </div>

        {/* Scrollable row on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((t) => (
            <div key={t.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <StarRating />
              <blockquote className="mt-3 text-gray-700 text-sm leading-relaxed flex-1 line-clamp-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">
                  {t.city}, {t.state}
                  {t.service && ` · ${t.service.charAt(0).toUpperCase() + t.service.slice(1)}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about/testimonials"
            className="inline-block border-2 border-gray-300 hover:border-accent text-gray-700 hover:text-accent font-bold px-6 py-3 rounded transition-colors"
          >
            Read All Testimonials →
          </Link>
        </div>
      </div>
    </section>
  )
}
