import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/sent'])

export default function SentPage() {
  return (
    <section className="py-24 min-h-[60vh] flex items-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h1>
        <p className="text-gray-600 text-lg mb-3">
          Thank you for contacting Suburban Construction. Your message has been received.
        </p>
        <p className="text-gray-600 mb-8">
          A member of our team will be in touch shortly to schedule your free estimate. If you need
          to reach us right away, please call{' '}
          <a href="tel:+15633914000" className="text-amber-600 font-semibold hover:text-amber-700">
            563-391-4000
          </a>{' '}
          or{' '}
          <a href="tel:+18007173066" className="text-amber-600 font-semibold hover:text-amber-700">
            1-800-717-3066
          </a>
          .
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
