import Link from 'next/link'

export interface FAQLinkItem {
  href: string
  title: string
  description: string
  icon: string
}

interface RelatedFAQsProps {
  items: FAQLinkItem[]
  heading?: string
}

export default function RelatedFAQs({
  items,
  heading = 'Have Questions? Browse Our FAQ Resources',
}: RelatedFAQsProps) {
  return (
    <section className="py-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{heading}</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Browse our topic-specific FAQ pages for detailed answers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:border-accent-muted hover:shadow-md transition-all"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
