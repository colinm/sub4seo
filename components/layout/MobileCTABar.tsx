import Link from 'next/link'
import { Phone } from 'lucide-react'
import { PHONE_LOCAL_HREF } from '@/lib/navigation'

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden border-t border-gray-700 shadow-2xl"
      style={{ backgroundColor: '#2a2e40' }}>
      <a
        href={PHONE_LOCAL_HREF}
        className="flex-1 flex items-center justify-center gap-2 py-3 text-white font-bold text-sm border-r border-gray-700"
      >
        <Phone className="w-4 h-4 text-accent-muted" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center py-3 bg-accent text-white font-bold text-sm"
      >
        Free Estimate
      </Link>
    </div>
  )
}
