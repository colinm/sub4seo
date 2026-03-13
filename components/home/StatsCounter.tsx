'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { end: 35000, suffix: '+', label: 'Installations Completed', display: '35,000+' },
  { end: 38, suffix: '+', label: 'Years in Business', display: '38+' },
  { end: 53, suffix: '+', label: 'Written Testimonials', display: '53+' },
  { end: 90, suffix: '', label: 'Mile Service Radius', display: '90' },
]

function useCountUp(end: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
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

function StatItem({ end, suffix, label, display, active }: typeof stats[0] & { active: boolean }) {
  const count = useCountUp(end, 1500, active)
  const formatted = active ? count.toLocaleString() + suffix : display

  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{formatted}</div>
      <div className="text-gray-400 text-sm uppercase tracking-wide">{label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12" style={{ backgroundColor: '#1e2235' }}>
      <div className="max-w-5xl mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
