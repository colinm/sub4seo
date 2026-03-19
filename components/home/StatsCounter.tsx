'use client'

import { useEffect, useRef, useState } from 'react'

const BBB_URL =
  'https://www.bbb.org/us/ia/davenport/profile/siding-contractors/suburban-construction-inc-0664-102852'

function buildStats(reviewCount: number) {
  return [
    { end: 40000,       suffix: '+', label: 'Installations Completed', display: '40,000+',              href: undefined },
    { end: 40,          suffix: '+', label: 'Years in Business',       display: '40+',                  href: undefined },
    { end: reviewCount, suffix: '+', label: 'Google Reviews',          display: `${reviewCount}+`,      href: undefined },
    { end: 90,          suffix: '',  label: 'Mile Service Radius',     display: '90',                   href: undefined },
    { end: 0,           suffix: '',  label: 'BBB Rating',              display: 'A+',                   href: BBB_URL   },
  ]
}

function useCountUp(end: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active || end === 0) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, end, duration])

  return count
}

type StatEntry = {
  end: number
  suffix: string
  label: string
  display: string
  href: string | undefined
}

function StatItem({
  end,
  suffix,
  label,
  display,
  href,
  active,
}: StatEntry & { active: boolean }) {
  const count = useCountUp(end, 1500, active)
  const formatted = end === 0 ? display : active ? count.toLocaleString() + suffix : display

  const inner = (
    <>
      <div className="text-4xl md:text-5xl font-bold text-accent-muted mb-2">{formatted}</div>
      <div className="text-gray-400 text-sm uppercase tracking-wide">{label}</div>
    </>
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  )
}

export default function StatsCounter({ reviewCount = 111 }: { reviewCount?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const stats = buildStats(reviewCount)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12" style={{ backgroundColor: '#1e2235' }}>
      <div className="max-w-5xl mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center text-white"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
