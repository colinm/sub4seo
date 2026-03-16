import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/siding/siding-replacement-cost"],
);

const faqs = [
  {
    question: "How much does new siding cost in the Quad Cities?",
    answer:
      "Siding replacement in the Quad Cities typically ranges from $8,000–$18,000 for a standard 2,000 sq ft home, depending on siding type and home complexity. Vinyl siding is the most affordable option; steel and composite run higher. Suburban Construction provides free in-home estimates with exact pricing.",
  },
  {
    question: "What is the most affordable siding type?",
    answer:
      "Vinyl siding is the most affordable option, typically running $5–$9 per square foot installed. Insulated vinyl is slightly more but offers better energy performance. Steel and composite siding cost more but provide superior durability and a premium appearance.",
  },
  {
    question: "How long does siding installation take?",
    answer:
      "A typical whole-home siding project on a 1,500–2,500 sq ft home takes 3–5 days. Larger homes or those requiring significant tear-off or repair work may take longer. Suburban Construction's crews work efficiently and clean up daily.",
  },
  {
    question: "Does new siding reduce energy bills?",
    answer:
      "Yes, especially insulated vinyl siding with foam backing. Insulated siding improves your wall's R-value, reducing heat transfer in both summer and winter. Combined with proper installation and air sealing, new siding can meaningfully lower heating and cooling costs.",
  },
  {
    question: "How do I get an accurate siding quote?",
    answer:
      "The most accurate way is a free in-home estimate from Suburban Construction. We measure your home, assess the existing siding condition, discuss material options, and provide exact pricing. Call 563-391-4000 or request an estimate online.",
  },
];

const priceRanges = [
  {
    type: "Vinyl Siding",
    perSqFt: "$5–$9",
    typical: "$8,000–$14,000",
    note: "Most popular, low maintenance, wide color selection",
  },
  {
    type: "Insulated Vinyl",
    perSqFt: "$7–$12",
    typical: "$10,000–$18,000",
    note: "Foam backing improves energy efficiency",
  },
  {
    type: "Steel Siding",
    perSqFt: "$9–$15",
    typical: "$13,000–$24,000",
    note: "Unmatched durability, fire resistant",
  },
  {
    type: "Composite Siding",
    perSqFt: "$10–$16",
    typical: "$15,000–$26,000",
    note: "Cedar-look without the maintenance",
  },
];

const costFactors = [
  {
    title: "Siding Material",
    body: "Vinyl is the most affordable; steel and composite cost more but offer premium durability and appearance.",
  },
  {
    title: "Home Size & Stories",
    body: "More square footage means more material and labor. Two-story homes require scaffolding or ladders, adding some cost.",
  },
  {
    title: "Tear-Off & Disposal",
    body: "Removing and disposing of existing siding adds cost. Homes with multiple layers of old siding take more time.",
  },
  {
    title: "Trim & Soffit Work",
    body: "Replacing or adding trim, fascia, and soffit boards alongside siding adds cost but improves the finished appearance.",
  },
  {
    title: "Color & Profile",
    body: "Standard colors are priced similarly. Premium colors or specialty profiles may cost slightly more.",
  },
  {
    title: "Repairs Needed",
    body: "If the underlying sheathing or house wrap needs repair or replacement before siding goes on, that adds cost.",
  },
];

export default function SidingReplacementCostPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Siding Replacement Cost Guide"
        subtitle="Transparent pricing information for Quad Cities homeowners — know what to expect before you get a quote"
        bgImage="/sidinghouse.jpg"
        breadcrumbs={[
          { label: "Siding", href: "/siding/vinyl-siding" },
          { label: "Siding Replacement Cost" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How Much Does New Siding Cost?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            New siding is one of the most transformative home improvements available
            — it completely refreshes your home&apos;s appearance while improving
            energy efficiency, protection, and resale value. But it&apos;s a
            significant investment, and Quad Cities homeowners deserve honest
            pricing information upfront.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The prices below reflect typical installed costs in the Davenport,
            Bettendorf, Moline, Rock Island, and surrounding service area. These
            are general ranges — your exact cost depends on your home&apos;s size,
            siding condition, and material choice.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Suburban Construction has been siding Quad Cities homes honestly and
            professionally since 1985. We provide free, no-pressure in-home
            estimates with clear, itemized pricing — no hidden fees.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Typical Siding Cost by Material
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Installed cost estimates for a standard 2,000 sq ft home. Prices vary by home size, complexity, and conditions.
          </p>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Siding Type</th>
                  <th className="text-center px-4 py-3 font-semibold">Per Sq Ft</th>
                  <th className="text-center px-4 py-3 font-semibold">Typical Total</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceRanges.map((row, i) => (
                  <tr
                    key={row.type}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.perSqFt}</td>
                    <td className="px-4 py-3 text-center text-accent font-semibold">{row.typical}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Estimates are for planning purposes. Your exact cost depends on home size, material selection, existing conditions, and site access. Request a free estimate for exact pricing.
          </p>
        </div>
      </section>

      {/* Cost factors */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Affects Your Siding Cost?
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
                Compare Steel vs. Vinyl Siding
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Not sure which siding material is right for your home? See a side-by-side comparison of our most popular options.
              </p>
            </div>
            <Link
              href="/siding/steel-vs-vinyl-siding"
              className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Compare Options →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get Your Free, No-Pressure Estimate
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;ll assess your home, walk you through your material options, and provide exact pricing — at no cost and no obligation. Serving the Quad Cities and a 90-mile radius.
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
          href="/siding/vinyl-siding-faq"
          className="text-accent hover:text-accent-dark underline"
        >
          More questions? Visit our Siding FAQ →
        </Link>
      </div>
    </>
  );
}
