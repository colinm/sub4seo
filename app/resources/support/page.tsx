import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/support'])

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Support"
        subtitle="We stand behind every installation — before, during, and after the sale"
        breadcrumbs={[{ label: 'Resources' }, { label: 'Support' }]}
        ctaText="Contact Us"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Suburban Construction&apos;s commitment to you doesn&apos;t end when the installation is
            complete. If you ever have questions, concerns, or need service on any of our products,
            we&apos;re here to help. We handle manufacturer warranty claims on your behalf —
            you deal with us, not with a faceless corporation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Phone className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+15633914000" className="text-amber-600 hover:text-amber-700 block font-medium">
                563-391-4000
              </a>
              <a href="tel:+18007173066" className="text-amber-600 hover:text-amber-700 block font-medium text-sm">
                1-800-717-3066
              </a>
              <p className="text-gray-500 text-xs mt-2">Mon–Fri 7:30AM–4:30PM</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Mail className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Submit a Request</h3>
              <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-medium">
                Online Contact Form
              </Link>
              <p className="text-gray-500 text-xs mt-2">We typically respond within 1 business day</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <MapPin className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                3602 North Harrison<br />
                Davenport, Iowa 52806
              </p>
              <p className="text-gray-500 text-xs mt-2">Mon–Fri 7:30AM–4:30PM</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Support Topics</h2>
          <ul className="space-y-2 mb-8">
            {[
              'Window seal failure — condensation appearing between panes',
              'Window hardware issues — locks, latches, or tilt mechanism',
              'Siding panel damage from storms or impact',
              'Door alignment, hardware, or weatherstripping issues',
              'Gutter Cap or Shur Flow system questions or service',
              'Requesting a copy of your warranty documentation',
              'Scheduling a post-installation inspection',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-500 mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> Suburban Construction handles all warranty claims with Associated
              Materials Inc. (AMI) and other manufacturers on your behalf. When you call us about a
              product issue, we&apos;ll assess the situation and coordinate the solution — you won&apos;t
              need to navigate warranty paperwork yourself.
            </p>
          </div>
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
