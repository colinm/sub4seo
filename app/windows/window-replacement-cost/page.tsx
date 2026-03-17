import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/windows/window-replacement-cost"],
);

const windowFaqLinks = [
  { href: '/windows/replacement-windows-faq', title: 'Window FAQ', description: 'Replacement windows, installation timelines, energy savings, warranties, and more.', icon: '🪟' },
  { href: '/resources/condensation-faq', title: 'Condensation FAQ', description: 'What causes condensation on windows, what it means, and how to address it.', icon: '💧' },
  { href: '/resources/convection-faq', title: 'Convection FAQ', description: 'How convection causes heat loss through windows and how gas fills reduce it.', icon: '🌡️' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

const faqs = [
  {
    question: "How much does window replacement cost in the Quad Cities?",
    answer:
      "Window replacement in the Quad Cities typically costs $400–$900 per window installed for standard double hung or single hung styles. Bay and bow windows run $1,500–$3,500+ depending on size. Triple pane krypton glass upgrades add efficiency with a modest cost increase. Suburban Construction provides free in-home estimates with exact pricing.",
  },
  {
    question: "What factors affect the cost of replacement windows?",
    answer:
      "The main cost factors are window style (double hung, casement, bay/bow, etc.), size, glass package (double pane vs. triple pane krypton), frame color and finish options, grid patterns, and quantity ordered. Larger orders often result in better per-unit pricing.",
  },
  {
    question: "Is triple pane worth the extra cost?",
    answer:
      "For most Quad Cities homeowners, yes. Triple pane krypton glass windows reduce heating and cooling costs significantly — up to 80% more efficient than standard double-pane windows. The energy savings typically pay back the upgrade cost within several years, and you benefit from improved comfort immediately.",
  },
  {
    question: "Does window replacement increase home value?",
    answer:
      "Yes. Window replacement consistently ranks as one of the better-return home improvements. New windows improve curb appeal, comfort, and energy efficiency — all factors buyers value. Homes with newer, energy-efficient windows typically sell faster and at better prices.",
  },
  {
    question: "Do you offer financing for window replacement?",
    answer:
      "Contact Suburban Construction to discuss current financing options. We work to make quality window replacement accessible for Quad Cities homeowners. Call 563-391-4000 or 1-800-717-3066 for details.",
  },
];

const priceRanges = [
  {
    style: "Single Hung",
    low: "$350",
    mid: "$550",
    high: "$750",
    note: "Classic fixed upper / operable lower sash",
  },
  {
    style: "Double Hung",
    low: "$400",
    mid: "$650",
    high: "$900",
    note: "Most popular — both sashes tilt in for cleaning",
  },
  {
    style: "Slider / Glider",
    low: "$400",
    mid: "$600",
    high: "$850",
    note: "Horizontal operation, ideal for wide openings",
  },
  {
    style: "Casement / Awning",
    low: "$450",
    mid: "$700",
    high: "$950",
    note: "Crank-operated, excellent seal and ventilation",
  },
  {
    style: "Bay & Bow",
    low: "$1,500",
    mid: "$2,500",
    high: "$3,500+",
    note: "Custom projection windows, priced per unit",
  },
  {
    style: "Egress",
    low: "$600",
    mid: "$900",
    high: "$1,400",
    note: "Code-compliant emergency exit for basements",
  },
];

const costFactors = [
  {
    title: "Window Style",
    body: "Double hung and single hung are the most affordable. Bay, bow, and specialty shapes cost more due to complexity.",
  },
  {
    title: "Glass Package",
    body: "Standard double-pane vs. triple pane krypton glass. Triple pane delivers significantly better energy performance.",
  },
  {
    title: "Window Size",
    body: "Larger windows require more material and labor. Custom oversized windows or those requiring structural modifications cost more.",
  },
  {
    title: "Quantity",
    body: "Replacing multiple windows at once is more cost-efficient than doing them one at a time — lower per-unit cost and a single mobilization.",
  },
  {
    title: "Frame Color & Options",
    body: "White is standard. Custom colors, interior wood-grain finishes, grid patterns, and specialty hardware add cost.",
  },
  {
    title: "Installation Complexity",
    body: "Second and third floor windows, unusual openings, or windows requiring structural work may carry additional labor costs.",
  },
];

export default function WindowReplacementCostPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Window Replacement Cost Guide"
        subtitle="Honest pricing information for Quad Cities homeowners — what to expect and what affects your quote"
        bgImage="/double-hung.jpg"
        breadcrumbs={[
          { label: "Windows", href: "/windows/window-styles" },
          { label: "Window Replacement Cost" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How Much Do Replacement Windows Cost?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Window replacement is one of the most impactful home improvements you
            can make — improving energy efficiency, comfort, curb appeal, and home
            value. But it&apos;s also an investment, and Quad Cities homeowners
            deserve honest, upfront pricing information before they invite a
            contractor into their home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The price ranges below reflect typical installed costs for the Davenport,
            Bettendorf, Moline, Rock Island, and surrounding area. Every home is
            different, and the only way to get an exact price is a free in-home
            estimate — but these ranges will help you budget and compare quotes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Suburban Construction has been providing honest window replacement pricing
            to Quad Cities homeowners since 1985. We don&apos;t use high-pressure
            tactics or inflated &ldquo;starting from&rdquo; prices. What you see in
            our estimate is what you pay.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Typical Installed Cost by Window Style
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Prices per window including labor. Ranges reflect standard sizes — larger or custom windows may cost more.
          </p>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Window Style</th>
                  <th className="text-center px-4 py-3 font-semibold">Budget</th>
                  <th className="text-center px-4 py-3 font-semibold">Mid-Range</th>
                  <th className="text-center px-4 py-3 font-semibold">Premium</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceRanges.map((row, i) => (
                  <tr
                    key={row.style}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.style}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.low}</td>
                    <td className="px-4 py-3 text-center text-accent font-semibold">{row.mid}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.high}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Prices are estimates for planning purposes. Your exact cost depends on window size, options, and site conditions. Get a free, no-obligation estimate for exact pricing.
          </p>
        </div>
      </section>

      {/* Cost factors */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Affects Your Window Replacement Cost?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {costFactors.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">✓</span>
                  <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Want Maximum Energy Savings?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ask about triple pane krypton glass — our most energy-efficient upgrade, available on all window styles.
              </p>
            </div>
            <Link
              href="/windows/krypton"
              className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <RelatedFAQs items={windowFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get Your Free, No-Pressure Estimate
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;ll measure your windows, walk you through your options, and give you exact pricing — all at no cost and no obligation. Serving Davenport, Bettendorf, Moline, Rock Island, and a 90-mile radius.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link
          href="/windows/replacement-windows-faq"
          className="text-accent hover:text-accent-dark underline"
        >
          More questions? Visit our Replacement Windows FAQ →
        </Link>
      </div>
    </>
  );
}
