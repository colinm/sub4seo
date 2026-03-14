import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/recommended'])

const maintenanceSections = [
  {
    title: 'Window Maintenance',
    items: [
      'Clean window tracks with a vacuum and damp cloth twice per year',
      'Check and clean weep holes in the sill to ensure proper drainage',
      'Inspect weatherstripping annually — replace if cracked or compressed',
      'Lubricate hinges, locks, and hardware with silicone spray (not WD-40)',
      'Clean glass with a mild soap solution — avoid abrasive cleaners',
      'Check for condensation between panes — this indicates seal failure; call us',
      'Tilt-in sashes make cleaning easy — clean the interior glass from inside',
      'Inspect caulk around the exterior frame each spring; re-caulk if cracked',
    ],
  },
  {
    title: 'Siding Maintenance',
    items: [
      'Wash siding annually with a garden hose — spray top to bottom',
      'For stubborn dirt, use a soft brush with mild detergent solution',
      'Inspect caulk at all joints, corners, and around windows and doors',
      'Check for any loose, cracked, or damaged panels after severe storms',
      'Keep plants and shrubs trimmed away from siding surface',
      'Avoid pressure washing directly at seams or too close to the surface',
      'Inspect soffit and fascia for bird nests or moisture damage each spring',
    ],
  },
  {
    title: 'Door Maintenance',
    items: [
      'Lubricate door hinges with lightweight oil twice per year',
      'Check and adjust the door latch and deadbolt alignment annually',
      'Inspect and clean the threshold — replace threshold seal if worn',
      'Clean the door glass with streak-free glass cleaner',
      'Check weatherstripping around the door frame — replace if compressed',
      'For storm doors, check the closer mechanism and adjust as needed',
      'Inspect door frame caulk and repaint or re-caulk as needed',
    ],
  },
  {
    title: 'Gutter Maintenance',
    items: [
      'If you have Gutter Cap: visually inspect after heavy storms or wind events',
      'Check that downspouts are directing water away from your foundation',
      'Inspect gutter hangers — tighten any that have pulled away from fascia',
      'Check gutter pitch — water should flow toward downspouts, not pool',
      'Inspect downspout extensions to ensure they drain at least 3 ft from house',
      'If you have Heater Cap: test the thermostat control before winter arrives',
    ],
  },
]

export default function RecommendedPage() {
  return (
    <>
      <PageHero
        title="Recommended Maintenance"
        subtitle="Keep your windows, siding, doors, and gutters performing their best with these maintenance tips"
        breadcrumbs={[{ label: 'Resources' }, { label: 'Recommended Maintenance' }]}
        ctaText="Contact Us for Service"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Suburban Construction&apos;s products are designed to be low-maintenance, but a little
            regular attention goes a long way toward maximizing performance and longevity. Follow
            these guidelines to keep your investment in top condition for years to come.
          </p>

          {maintenanceSections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-accent-mid mt-1 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-accent-subtle border border-accent-faint rounded-lg p-6 mt-8">
            <h3 className="font-bold text-gray-900 mb-2">Have a Warranty Issue?</h3>
            <p className="text-gray-700 text-sm mb-4">
              If you notice a problem with any of your Suburban Construction products — cracked glass,
              seal failure, condensation between panes, or installation issues — please contact us
              immediately. We handle all warranty claims on your behalf.
            </p>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
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
