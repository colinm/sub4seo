import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/glossary'])

const glossaryTerms: { term: string; definition: string }[] = [
  {
    term: 'AAMA',
    definition:
      'American Architectural Manufacturers Association. An industry trade organization that sets standards for the performance, testing, and certification of windows, doors, skylights, and curtain walls. AAMA-certified products have been tested to verified performance levels.',
  },
  {
    term: 'Argon Gas',
    definition:
      'An inert, non-toxic gas used as a fill between the panes of insulating glass units. Argon is denser than air, which reduces convective heat transfer between panes. Standard upgrade from air-filled windows; krypton gas performs even better.',
  },
  {
    term: 'Awning Window',
    definition:
      'A window hinged at the top that swings outward from the bottom. Awning windows provide excellent ventilation even during light rain because the open sash acts as an awning. Often used above or below other windows or in basement applications.',
  },
  {
    term: 'Bay Window',
    definition:
      'A window assembly that projects outward from the main wall of a building, typically with a flat front panel and angled side panels at 30 or 45 degrees. Bay windows add interior floor space, natural light, and curb appeal.',
  },
  {
    term: 'Bow Window',
    definition:
      'Similar to a bay window but with curved rather than angled geometry. Bow windows consist of four or more window units arranged in a gentle arc. They provide panoramic views and a distinctive architectural look.',
  },
  {
    term: 'Casement Window',
    definition:
      'A window hinged on one side that swings outward (or inward) like a door. Casement windows provide excellent ventilation and a very tight seal when closed. The operating mechanism is typically a crank at the bottom of the sash.',
  },
  {
    term: 'Condensation',
    definition:
      'Water droplets that form when warm, moist air contacts a surface cooler than the dew point. On windows, interior condensation is usually a humidity issue; condensation between panes indicates seal failure; exterior condensation means the window is insulating effectively.',
  },
  {
    term: 'Convection',
    definition:
      'Heat transfer through the movement of a fluid or gas. In windows, convection occurs within the gas-filled space between panes — warm gas rises, transfers heat to the cooler exterior pane, cools, and sinks. Denser gas fills (argon, krypton) reduce convective heat loss.',
  },
  {
    term: 'Double Hung Window',
    definition:
      'A window with two independently operable sashes — both the upper and lower sash can be opened. Double hung windows offer flexible ventilation and tilt-in cleaning. The most popular residential window style in the United States.',
  },
  {
    term: 'Egress Window',
    definition:
      'A window large enough to serve as an emergency exit. Building codes require egress windows in basement bedrooms and other sleeping areas. Minimum size requirements vary by code jurisdiction but typically require a minimum opening area, width, and height.',
  },
  {
    term: 'Energy Star',
    definition:
      'A U.S. Environmental Protection Agency (EPA) certification program for energy-efficient products. Energy Star certified windows meet specific U-Factor and SHGC requirements for the climate zone in which they are installed. The Quad Cities falls in Northern climate zone requirements.',
  },
  {
    term: 'Fenestration',
    definition:
      'The design, proportioning, and arrangement of windows, doors, and other openings in a building. The term comes from the Latin "fenestra" (window) and is used broadly in the construction and architecture industries to refer to all glazed openings.',
  },
  {
    term: 'Freedom Series',
    definition:
      'The product line manufactured by Associated Materials Inc. (AMI) and installed by Suburban Construction. Freedom Series products include windows, vinyl siding, steel siding, composite siding, and related accessories.',
  },
  {
    term: 'Gutter Cap',
    definition:
      'A gutter protection system that uses surface tension to guide rainwater into the gutter while causing leaves, seeds, and debris to fall to the ground. Gutter Cap is installed over existing or new gutters and eliminates the need for regular gutter cleaning.',
  },
  {
    term: 'IGU (Insulating Glass Unit)',
    definition:
      'A factory-assembled window unit consisting of two or more panes of glass separated by a spacer and sealed hermetically to contain a gas fill (air, argon, or krypton). The IGU is the core thermal performance component of a modern window.',
  },
  {
    term: 'Krypton Gas',
    definition:
      'An inert noble gas used as a premium fill in insulating glass units. Krypton is denser and more viscous than argon, providing superior resistance to convective heat transfer. Used in Suburban Construction\'s FreedomMaxxx 10 triple pane system for maximum energy efficiency.',
  },
  {
    term: 'Low-E Glass',
    definition:
      'Glass coated with a microscopically thin metallic layer that reflects infrared (heat) radiation while allowing visible light to pass through. Low-E coatings reduce both winter heat loss and summer heat gain. Available in multiple formulations for different climate priorities.',
  },
  {
    term: 'R-Value',
    definition:
      'A measure of thermal resistance — how well a material resists heat flow. Higher R-values mean better insulating performance. While commonly used for insulation, R-value is less often used for windows (U-Factor is the standard); however, it is the inverse of U-Factor (R = 1/U).',
  },
  {
    term: 'Sash',
    definition:
      'The framework that holds the glass in a window. In a double hung window, both the upper and lower sashes can move. In a single hung window, only the lower sash is operable. The sash includes the rails (horizontal members) and stiles (vertical members).',
  },
  {
    term: 'SHGC (Solar Heat Gain Coefficient)',
    definition:
      'A measure of how much solar radiation passes through a window, expressed as a number between 0 and 1. Lower SHGC values mean less solar heat gain — desirable for cooling-dominated climates. In cold climates like the Quad Cities, a moderate SHGC can be beneficial for passive solar heating.',
  },
  {
    term: 'Shur Flow',
    definition:
      'A gutter protection system offered by Suburban Construction that keeps gutters clear of leaves and debris. Shur Flow uses a filter insert that allows water through while blocking organic material.',
  },
  {
    term: 'Single Hung Window',
    definition:
      'A window with two sashes where only the lower sash is operable; the upper sash is fixed. Single hung windows are simpler in construction than double hung windows but do not offer the same ventilation flexibility or tilt-in cleaning convenience.',
  },
  {
    term: 'Slider Window',
    definition:
      'Also called a glider window. A window in which one or more sashes slide horizontally within the frame. Sliders work well in wide openings and require no clearance above or below for operation. Available in two-lite (one operating sash) or three-lite (two operating sashes) configurations.',
  },
  {
    term: 'Storm Window',
    definition:
      'A supplementary window installed over or inside existing windows to add an additional layer of insulation and weather protection. Storm windows can improve the energy efficiency of older, less efficient primary windows without requiring full replacement.',
  },
  {
    term: 'Triple Pane',
    definition:
      'A window insulating glass unit consisting of three panes of glass with two gas-filled spaces between them. Triple pane windows provide significantly better insulating performance than double pane units, especially when filled with krypton gas. The standard of excellence in energy-efficient windows.',
  },
  {
    term: 'U-Factor (U-Value)',
    definition:
      'The standard measure of a window\'s overall heat transfer rate. U-Factor measures how quickly heat flows through the window assembly (glass, frame, spacers). Lower U-Factor = better insulating performance. Energy Star requires specific U-Factor levels depending on climate zone.',
  },
  {
    term: 'Vinyl Siding',
    definition:
      'Exterior cladding made from PVC (polyvinyl chloride). Vinyl siding is the most popular siding material in the United States due to its low maintenance requirements, durability, and wide range of color and profile options. Available in standard and insulated varieties.',
  },
  {
    term: 'Warranty',
    definition:
      'A manufacturer\'s or contractor\'s guarantee covering a product or service for a defined period. Suburban Construction provides a lifetime workmanship guarantee on all installations, covering installation defects. Product warranties are provided by Associated Materials Inc. (AMI).',
  },
  {
    term: 'Weep Holes',
    definition:
      'Small openings in the bottom rail of a window frame or in window sill panning that allow any water that enters the frame cavity to drain to the outside. Properly functioning weep holes are essential to prevent water accumulation and associated rot or damage.',
  },
  {
    term: 'Weatherstripping',
    definition:
      'Sealing material applied around the edges of operable window sashes and door panels to prevent air and water infiltration when the window or door is closed. Quality weatherstripping is critical to the energy performance of windows and doors.',
  },
  {
    term: 'Wood Grain Finish',
    definition:
      'A decorative interior finish applied to vinyl window frames to simulate the appearance of natural wood. Commonly available in oak, mahogany, pine, and cherry tones. Provides the visual warmth of wood with none of the maintenance requirements.',
  },
]

// Group terms alphabetically
const grouped = glossaryTerms.reduce<Record<string, typeof glossaryTerms>>((acc, term) => {
  const letter = term.term[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(term)
  return acc
}, {})

const letters = Object.keys(grouped).sort()

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        title="Home Improvement Glossary"
        subtitle="Plain-English definitions for common home improvement terms — windows, siding, doors, and more"
        breadcrumbs={[{ label: 'Resources' }, { label: 'Glossary' }]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A-Z Glossary of Home Improvement Terms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Home improvement involves a lot of technical terminology. This glossary covers the most
            important terms you are likely to encounter when shopping for replacement windows, siding,
            doors, or gutters in the Quad Cities area.
          </p>

          {/* Alphabet quick-nav */}
          <div className="flex flex-wrap gap-2 mb-8">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded bg-amber-100 text-amber-700 font-bold text-sm hover:bg-amber-500 hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-8">
              <h3 className="text-xl font-bold text-amber-600 border-b border-amber-200 pb-2 mb-4">
                {letter}
              </h3>
              <dl className="space-y-4">
                {grouped[letter].map((item) => (
                  <div key={item.term}>
                    <dt className="font-bold text-gray-900">{item.term}</dt>
                    <dd className="text-gray-600 leading-relaxed mt-1">{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is happy to explain anything in plain language — no jargon required.
            Contact us for a free, no-pressure estimate and conversation.
          </p>
          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  )
}
