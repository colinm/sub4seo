import Link from 'next/link'
import { Phone } from 'lucide-react'
import { PHONE_LOCAL, PHONE_LOCAL_HREF, PHONE_TOLL_FREE, PHONE_TOLL_FREE_HREF } from '@/lib/navigation'

export default function CTABanner() {
  return (
    <section
      className="py-14 text-white text-center"
      style={{ backgroundColor: '#2a2e40' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Ready to Transform Your Home?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Call us or schedule your free, no-pressure estimate online. We serve the entire Quad Cities
          area and surrounding 90-mile radius.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={PHONE_LOCAL_HREF}
            className="flex items-center gap-2 text-3xl font-bold text-accent-muted hover:text-accent-light transition-colors"
          >
            <Phone className="w-7 h-7" />
            {PHONE_LOCAL}
          </a>
          <span className="text-gray-500 hidden sm:block">or</span>
          <a
            href={PHONE_TOLL_FREE_HREF}
            className="text-xl font-semibold text-gray-300 hover:text-white transition-colors"
          >
            {PHONE_TOLL_FREE} (toll free)
          </a>
        </div>

        <Link
          href="/contact"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded text-lg transition-colors"
        >
          Schedule a Free Estimate Online
        </Link>
      </div>
    </section>
  )
}
