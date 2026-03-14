import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/doors/door-app'])

export default function DoorAppPage() {
  return (
    <>
      <PageHero
        title="Door Catalog & Resources"
        subtitle="Browse our full door selection — entry doors, storm doors, and more"
        breadcrumbs={[
          { label: 'Doors', href: '/doors/door-styles' },
          { label: 'Door Catalog' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Door
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Selecting the right door involves many considerations — style, material, glass insert,
            hardware finish, energy performance, and budget. Our door catalog resources are designed
            to help you explore the options at your own pace so you come into the estimate process
            with a clearer picture of what you want.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Browse the downloadable brochures below, then contact us to schedule your free in-home
            estimate. Our consultants will bring additional samples and help you finalize your
            selection with measurements in hand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-accent-muted transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Storm Door Catalog</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Browse our full storm door lineup including Easy Vent styles, retractable screen
                models, and full-view options. Available in multiple frame colors and hardware finishes.
              </p>
              <a
                href="/stormdoor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2 rounded text-sm transition-colors"
              >
                Download Storm Door Catalog (PDF)
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-accent-muted transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Finish Color Options</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                View our pre-finished door color palette including all available factory paint and
                stain finishes for fiberglass and steel entry doors.
              </p>
              <a
                href="/prefinish.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2 rounded text-sm transition-colors"
              >
                Download Pre-Finish Guide (PDF)
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Door Product Pages</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <Link href="/doors/entry" className="text-accent hover:underline font-medium">
                Entry Doors
              </Link>{' '}
              — Therma-Tru fiberglass and steel, dozens of styles and glass options
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <Link href="/doors/easy-vent" className="text-accent hover:underline font-medium">
                Easy Vent Storm Doors
              </Link>{' '}
              — fresh air ventilation with retractable or drop-down screens
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <Link href="/doors/mini-blinds" className="text-accent hover:underline font-medium">
                Doors with Built-In Mini Blinds
              </Link>{' '}
              — sealed blinds between glass layers, no dusting, no cords
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Showroom</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The best way to evaluate door options is in person. Visit our showroom at 3602 North
            Harrison Street, Davenport, Iowa. We have door displays you can open, close, and examine
            firsthand — including a variety of glass inserts, hardware finishes, and frame color
            samples. Our showroom is open Monday through Friday, 7:30 AM to 4:30 PM.
          </p>

          <div className="bg-accent-subtle border border-accent-faint rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700 leading-relaxed">
              Call us at{' '}
              <a href="tel:5633914000" className="text-accent hover:underline font-medium">
                563-391-4000
              </a>{' '}
              or{' '}
              <a href="tel:18007173066" className="text-accent hover:underline font-medium">
                1-800-717-3066
              </a>
              . Our team is happy to discuss your door project before you schedule an estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free, no-obligation door estimate throughout the
            Quad Cities area.
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
