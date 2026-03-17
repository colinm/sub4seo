import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/windows/window-options'])

const windowFaqLinks = [
  { href: '/windows/replacement-windows-faq', title: 'Window FAQ', description: 'Replacement windows, installation timelines, energy savings, warranties, and more.', icon: '🪟' },
  { href: '/resources/condensation-faq', title: 'Condensation FAQ', description: 'What causes condensation on windows, what it means, and how to address it.', icon: '💧' },
  { href: '/resources/convection-faq', title: 'Convection FAQ', description: 'How convection causes heat loss through windows and how gas fills reduce it.', icon: '🌡️' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

export default function WindowOptionsPage() {
  return (
    <>
      <PageHero
        title="Window Options & Upgrades"
        subtitle="Customize your replacement windows with grids, hardware, specialty glass, and more"
        breadcrumbs={[
          { label: 'Windows', href: '/windows/window-styles' },
          { label: 'Window Options' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/window-options.jpg" alt="Window options and upgrades including grids, hardware, and specialty glass" width={900} height={560} className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Make Your Windows Uniquely Yours
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A replacement window is more than just a glass panel in a frame. The right combination of
            options can transform a standard window into a custom architectural feature that perfectly
            matches your home&apos;s style, your aesthetic preferences, and your energy efficiency goals.
            Suburban Construction offers an extensive range of upgrades and options across all of our
            window lines.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            During your free in-home estimate, we&apos;ll bring samples so you can see and feel the
            options firsthand. Here&apos;s an overview of what&apos;s available.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Grid Patterns</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Window grids (also called grilles) are decorative dividers that can give your windows a
            traditional, colonial, or cottage look. They&apos;re available in several configurations:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Colonial grids</strong> — traditional rectangular pattern, classic look for most home styles
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Prairie grids</strong> — perimeter squares with clear center panel, craftsman style
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Contour grids</strong> — raised profile for a more dimensional look
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Double Prairie grids</strong> — two rows of perimeter squares for a bolder craftsman statement
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>No grids</strong> — clean, contemporary look with maximum glass area
            </li>
          </ul>

          {/* Grid pattern photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <Image src="/grid1.jpg" alt="Colonial window grid pattern" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">Colonial Grid</p>
            </div>
            <div className="text-center">
              <Image src="/grid2.jpg" alt="Prairie window grid pattern" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">Prairie Grid</p>
            </div>
            <div className="text-center">
              <Image src="/grid3.jpg" alt="Contour window grid pattern" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">Contour Grid</p>
            </div>
          </div>

          {/* V-cut / decorative glass */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <Image src="/vcut1.jpg" alt="V-cut decorative glass window option" width={400} height={280} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">V-Cut Decorative Glass</p>
            </div>
            <div className="text-center">
              <Image src="/vcut2.jpg" alt="V-cut pattern close-up on window glass" width={400} height={280} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">V-Cut Detail</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hardware Finishes</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Locks, cranks, and hardware are available in multiple finishes to coordinate with your
            interior decor:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>White — standard, matches most window frames
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>Tan / Beige — warm neutral finish
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>Bronze — traditional complement to dark frames
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>Brass — classic accent for traditional homes
            </li>
          </ul>
          <p className="text-sm text-gray-600 mb-6">
            <strong>Note:</strong> White and Beige windows receive matching interior hardware. Windows with a Light Oak, Dark Oak, or Rich Maple interior finish receive Pontiac Gold hardware. Windows with a Cherry or Foxwood interior finish receive Brown hardware.
          </p>

          {/* Hardware / latch photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <Image src="/bright-brass-lock.jpg" alt="Bright brass window latch hardware" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">Bright Brass</p>
            </div>
            <div className="text-center">
              <Image src="/antique-brass-lock.jpg" alt="Antique brass window latch hardware" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">Antique Brass</p>
            </div>
            <div className="text-center">
              <Image src="/brushed-chrome-lock.jpg" alt="Brushed chrome window latch hardware" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
              <p className="text-sm text-gray-500">Brushed Chrome</p>
            </div>
          </div>

          {/* Frame color photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <Image src="/color1.jpg" alt="Window frame color option 1" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
            </div>
            <div className="text-center">
              <Image src="/color2.jpg" alt="Window frame color option 2" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
            </div>
            <div className="text-center">
              <Image src="/color3.jpg" alt="Window frame color option 3" width={300} height={220} className="rounded-lg shadow-sm w-full h-auto mb-2" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Glass Options</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Standard Low-E</strong> — reflects heat back into the room in winter and blocks it out in summer
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Argon gas fill</strong> — improves insulation over air-filled units
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Triple pane krypton</strong> — our highest-performance option; see the{' '}
              <Link href="/windows/krypton" className="text-accent hover:underline">
                FreedomMaxxx 10
              </Link>{' '}
              page for details
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Tempered safety glass</strong> — required for certain applications (bathrooms, doors, low sills)
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Privacy / obscure glass</strong> — frosted or textured for bathrooms and side-lite panels
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              <strong>Laminated glass</strong> — extra strength for security and impact resistance
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Exterior Frame Colors</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our windows are available in a full architectural color collection. Exterior colors feature a
            cutting-edge polyurethane coating with heat-reflective pigments for a strong, fade-resistant finish.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-2">
            {[
              { name: 'White',               hex: '#F2F0EB' },
              { name: 'Beige',               hex: '#DDD3C0' },
              { name: 'Classic Clay',        hex: '#C4B49A' },
              { name: 'Castle Gray',         hex: '#8F9196' },
              { name: 'Silver',              hex: '#A8ACAE' },
              { name: 'Hudson Khaki',        hex: '#9A8C6E' },
              { name: 'Desert Clay',         hex: '#B8906A' },
              { name: 'Sand Dune',           hex: '#C2A87A' },
              { name: 'American Terra',      hex: '#9E6040' },
              { name: 'English Red',         hex: '#8B3030' },
              { name: 'Forest Green',        hex: '#3E5C3E' },
              { name: 'Architectural Bronze',hex: '#5C4830' },
              { name: 'Black',               hex: '#2A2A2A' },
            ].map((color) => (
              <div key={color.name} className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-lg px-3 py-2.5 shadow-sm">
                <span
                  className="w-7 h-7 rounded shrink-0 border border-black/10 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-gray-700 font-medium leading-tight">{color.name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mb-8">Colors shown are approximate. Make final selections using actual product samples.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Interior Woodgrain Finishes</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Interior woodgrain laminates are expertly crafted for superb durability while maintaining
            a warm, natural appearance. Perfect for homes with wood trim and millwork.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-2">
            {[
              { name: 'White',        hex: '#F2F0EB', note: 'Available on Beige or Classic Clay base only' },
              { name: 'Light Oak',    hex: '#C8A870', note: 'Pontiac Gold hardware' },
              { name: 'Rich Maple',   hex: '#B87840', note: 'Pontiac Gold hardware' },
              { name: 'Dark Oak',     hex: '#7A5030', note: 'Pontiac Gold hardware' },
              { name: 'Foxwood',      hex: '#8C6040', note: 'Brown hardware' },
              { name: 'Cherry',       hex: '#7A3828', note: 'Brown hardware' },
            ].map((finish) => (
              <div key={finish.name} className="flex items-start gap-2.5 bg-white border border-gray-200 rounded-lg px-3 py-3 shadow-sm">
                <span
                  className="w-7 h-7 rounded shrink-0 border border-black/10 shadow-inner mt-0.5"
                  style={{ backgroundColor: finish.hex }}
                />
                <div>
                  <p className="text-sm text-gray-800 font-semibold leading-tight">{finish.name}</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{finish.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mb-8">Hardware color is automatically matched to your interior finish selection.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Screen Options</h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Standard half-screen (included on most styles)
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Full screen upgrade for maximum insect protection
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              No-see-um mesh for fine insect protection
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Pet-resistant screen for homes with dogs and cats
            </li>
          </ul>
        </div>
      </section>

      <section className="py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Download Our Windows Brochure</p>
            <p className="text-sm text-gray-600">Full product catalog with styles, options, and specifications</p>
          </div>
          <a
            href="/windows.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <RelatedFAQs items={windowFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free estimate. We&apos;ll bring samples of all available options to your home
            so you can make informed decisions before ordering.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
