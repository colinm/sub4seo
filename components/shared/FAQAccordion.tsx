'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex((v) => (v === i ? null : i))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={`divide-y divide-gray-200 ${className}`}>
        {items.map((item, i) => (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between py-4 text-left gap-4"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span className="font-semibold text-gray-800 text-base">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="pb-4 text-gray-600 leading-relaxed text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
