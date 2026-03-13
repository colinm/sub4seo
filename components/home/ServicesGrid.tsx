import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Replacement Windows',
    description:
      'Triple pane krypton glass, double hung, casement, bay & bow, and more. Energy Star certified for maximum savings.',
    href: '/windows/window-styles',
    image: '/double-hung.jpg',
    alt: 'Replacement windows Quad Cities',
  },
  {
    title: 'Siding',
    description:
      'Vinyl, steel, composite, and insulated siding. Transform your home\'s curb appeal and energy efficiency.',
    href: '/siding/vinyl-siding',
    image: '/sidinghouse.jpg',
    alt: 'Siding installation Davenport Iowa',
  },
  {
    title: 'Doors',
    description:
      'Entry doors, storm doors, and patio doors. Available in dozens of styles and colors with optional mini-blinds.',
    href: '/doors/door-styles',
    image: '/main.jpg',
    alt: 'Door installation Quad Cities',
  },
  {
    title: 'Gutters',
    description:
      'Seamless gutters, Shur Flow, and Gutter Cap systems. Never clean your gutters again with Gutter Cap.',
    href: '/gutters/seamless-gutters',
    image: '/shurflow1.jpg',
    alt: 'Gutter installation Iowa Illinois',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Home Improvement Services in the Quad Cities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From replacement windows to siding, doors, and gutters — Suburban Construction does it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-between">
                  {service.title}
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
