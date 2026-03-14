import { Shield, Award, Home, Users } from 'lucide-react'

const trustItems = [
  { icon: Shield, label: 'In Business', value: 'Since 1985' },
  { icon: Home, label: 'Installations', value: '35,000+' },
  { icon: Award, label: 'Workmanship', value: 'Lifetime Guarantee' },
  { icon: Users, label: 'Company Type', value: 'Family Owned' },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-navy py-6" style={{ backgroundColor: '#1e2235' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <Icon className="w-7 h-7 text-accent-muted" />
              <div>
                <div className="text-white font-bold text-lg leading-tight">{value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wide">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
