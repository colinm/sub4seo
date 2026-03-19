import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'
import ShowroomGallery from './ShowroomGallery'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/about/showroom-tour'])

export default function ShowroomTourPage() {
  return (
    <>
      <PageHero
        title="Visit Our Showroom"
        subtitle="See windows, doors, and siding at full size — touch and operate products before you decide"
        bgImage="/showroom/image19.jpg"
        breadcrumbs={[
          { label: 'About Us', href: '/about/our-story' },
          { label: 'Visit the Showroom' },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* ── Opening paragraph ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Suburban Construction Inc.&apos;s comprehensive showroom in Davenport, Iowa is thoughtfully
            designed to give homeowners a true, hands-on exterior remodeling experience. As soon as you
            walk in, you&apos;re greeted by an expansive, well-lit space featuring full-scale displays
            that replicate real home exteriors—allowing you to see exactly how products will look and
            function in a finished setting. Clean, modern flooring and bright overhead lighting create
            an inviting environment where every detail—from trim finishes to color pairings—is easy to
            evaluate in real time.
          </p>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Inside the Showroom
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Click any photo to explore in full screen
          </p>
          <ShowroomGallery />
        </div>
      </section>

      {/* ── What makes it different ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes Our Showroom Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eff6ff' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1d4ed8' }}>
                  <rect x="3" y="2" width="13" height="20" rx="1" />
                  <path d="M16 7h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3" />
                  <circle cx="9.5" cy="12" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Hundreds of Door Styles</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Long, organized rows let you compare entry and patio doors side by side — styles,
                wood tones, glass options, and hardware, all in one place.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eff6ff' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1d4ed8' }}>
                  <path d="M12 2a7 7 0 0 1 7 7c0 3.5-2.5 6-4 7.5V19a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.5C7.5 15 5 12.5 5 9a7 7 0 0 1 7-7z" />
                  <path d="M9 17h6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">&ldquo;Feel the Difference&rdquo; Demo</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Touch the glass yourself. Our interactive display lets you physically compare
                temperature transfer between standard glass and our energy-efficient windows —
                the difference is immediately felt.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eff6ff' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1d4ed8' }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Full-Scale Home Structures</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Fully built-out home sections with installed windows and siding show real-world
                combinations of color, texture, and trim — not just samples on a board.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Body copy ── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 leading-relaxed mb-6">
            A standout feature of the showroom is the impressive selection of entry and patio doors,
            displayed in long, organized rows that make side-by-side comparison simple and intuitive.
            Customers can explore a wide variety of styles, wood tones, glass options, and hardware,
            gaining a clear understanding of both design and performance. Throughout the space, fully
            built-out home structures showcase installed windows and siding in realistic applications,
            helping visitors visualize how different combinations come together to enhance curb appeal,
            energy efficiency, and durability. One of the most impactful experiences is the
            &ldquo;feel the difference&rdquo; window display, where visitors can physically compare
            temperature transfer between standard glass and Suburban&apos;s energy-efficient window
            options—making the benefits of improved insulation immediately noticeable and easy to understand.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The showroom also features extensive siding displays, including full wall sections with
            coordinated stone accents and a broad spectrum of colors and textures. Dedicated areas
            highlight window configurations, allowing homeowners to compare frame styles, finishes,
            and grid patterns in a comfortable setting. From interactive displays to lifestyle-inspired
            setups like patio spaces and exterior vignettes, every element is designed to inspire
            confidence in the decision-making process. Backed by knowledgeable professionals and a
            reputation reinforced by industry recognition, Suburban&apos;s showroom provides a
            complete, immersive experience for anyone looking to transform their home&apos;s exterior.
          </p>
        </div>
      </section>

      {/* ── Location & Hours ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Location &amp; Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 font-semibold mb-1">Address</p>
                <p className="text-gray-600">3602 North Harrison Street</p>
                <p className="text-gray-600 mb-4">Davenport, Iowa 52806</p>
                <p className="text-gray-700 font-semibold mb-1">Phone</p>
                <p className="text-gray-600">
                  <a href="tel:5633914000" className="text-accent hover:text-accent-dark">563-391-4000</a>
                  <span className="mx-2 text-gray-400">·</span>
                  <a href="tel:18007173066" className="text-accent hover:text-accent-dark">1-800-717-3066</a>
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-1">Hours</p>
                <p className="text-gray-600">Monday – Friday: 7:30 AM – 4:30 PM</p>
                <p className="text-gray-600">Saturday: By appointment</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0!2d-90.5776!3d41.5473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e22e2c2c2c2c2c%3A0x0!2s3602+N+Harrison+St%2C+Davenport%2C+IA+52806!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suburban Construction Showroom Location"
            />
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Plan Your Visit or Request an Estimate
          </h2>
          <p className="text-gray-600 mb-6">
            No appointment needed Monday through Friday. Stop by, explore the showroom, and let
            our team guide you through the options — or we&apos;ll come to you with a free,
            no-pressure in-home estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href="https://maps.google.com?q=3602+N+Harrison+St+Davenport+IA+52806"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 hover:border-accent text-gray-700 hover:text-accent font-bold px-8 py-3 rounded transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline underline-offset-2">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
