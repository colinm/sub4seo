import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/gutters/gutter-installation-cost"],
);

const faqs = [
  {
    question: "How much does gutter installation cost in the Quad Cities?",
    answer:
      "Seamless gutter installation in the Quad Cities typically costs $8–$15 per linear foot installed. A standard home with 150–200 linear feet of gutter runs $1,200–$3,000. Adding a gutter protection system like Gutter Cap or Shur Flow adds cost but eliminates future cleaning. Suburban Construction provides free estimates.",
  },
  {
    question: "What is the difference between seamless and sectional gutters?",
    answer:
      "Seamless gutters are custom-fabricated on-site in one continuous piece — no joints, no seams, no leaks. Sectional gutters are assembled from pre-cut pieces with seams that can separate and leak over time. Suburban Construction installs seamless gutters exclusively for this reason.",
  },
  {
    question: "How much does Gutter Cap cost?",
    answer:
      "Gutter Cap installation typically costs $15–$30 per linear foot, including the gutter itself if new gutters are being installed. While it costs more upfront, you eliminate gutter cleaning costs and ladder-related risks for the lifetime of the system.",
  },
  {
    question: "How long do seamless gutters last?",
    answer:
      "Quality aluminum seamless gutters last 20–30 years. Copper gutters can last 50+ years. With a gutter protection system installed, gutters last even longer because they're never clogged, which causes premature wear and bracket failure.",
  },
  {
    question: "Do I need to replace all my gutters at once?",
    answer:
      "Not necessarily, but replacing all gutters at once is more cost-efficient — lower per-unit cost, single mobilization, and a consistent appearance and warranty. If only one section is failing, we can replace just that section. We assess your full gutter system during the free estimate.",
  },
];

const priceRanges = [
  {
    type: "Seamless Aluminum Gutters",
    perLinFt: "$8–$12",
    typical: "$1,200–$2,400",
    note: "Standard 5-inch aluminum, most common",
  },
  {
    type: "Oversized 6-inch Gutters",
    perLinFt: "$10–$15",
    typical: "$1,500–$3,000",
    note: "For steep roofs or large drainage areas",
  },
  {
    type: "Shur Flow Gutter System",
    perLinFt: "$12–$20",
    typical: "$1,800–$4,000",
    note: "Gutters + Shur Flow leaf guard installed",
  },
  {
    type: "Gutter Cap System",
    perLinFt: "$18–$30",
    typical: "$2,700–$6,000",
    note: "Gutters + Gutter Cap — never clean gutters again",
  },
];

const costFactors = [
  {
    title: "Linear Footage",
    body: "Total length of guttering around your home. A typical single-family home has 150–200 linear feet.",
  },
  {
    title: "Gutter Size",
    body: "5-inch gutters are standard. Homes with steep pitches or large roof areas may need 6-inch for adequate drainage capacity.",
  },
  {
    title: "Gutter Protection",
    body: "Adding Gutter Cap or Shur Flow leaf guards eliminates cleaning but adds upfront cost. Most homeowners recoup the investment quickly.",
  },
  {
    title: "Home Height",
    body: "Single-story homes cost less to gutter than two-story homes due to easier ladder access and shorter downspout runs.",
  },
  {
    title: "Downspout Count & Length",
    body: "More downspouts and longer runs from gutters to ground level add to material and labor costs.",
  },
  {
    title: "Fascia Condition",
    body: "If the fascia board (where gutters attach) is rotted or damaged, it needs repair before new gutters go up.",
  },
];

export default function GutterInstallationCostPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Gutter Installation Cost Guide"
        subtitle="Transparent pricing for seamless gutter installation in the Quad Cities"
        bgImage="/shurflow1.jpg"
        breadcrumbs={[
          { label: "Gutters", href: "/gutters/seamless-gutters" },
          { label: "Gutter Installation Cost" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How Much Does Gutter Installation Cost?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Gutters protect your home&apos;s foundation, siding, and landscaping from
            water damage — making them one of the most important yet overlooked home
            systems. When gutters fail or overflow, the damage they prevent becomes
            damage they cause.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The price ranges below reflect typical installed costs for seamless
            gutter systems in the Davenport, Bettendorf, Moline, Rock Island, and
            surrounding service area. These are general estimates — your exact
            cost depends on your home&apos;s size, gutter type, and protection
            system choice.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Suburban Construction installs custom-fabricated seamless gutters
            throughout the Quad Cities. We bring the gutter machine to your home,
            form gutters to the exact length of each run, and install them with
            proper pitch and downspout placement. Every installation includes a
            free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Typical Gutter Installation Cost
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Installed cost per linear foot and typical total for a standard home (150–200 linear feet). Prices vary by home size and gutter system chosen.
          </p>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Gutter System</th>
                  <th className="text-center px-4 py-3 font-semibold">Per Lin Ft</th>
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
                    <td className="px-4 py-3 text-center text-gray-700">{row.perLinFt}</td>
                    <td className="px-4 py-3 text-center text-accent font-semibold">{row.typical}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Estimates are for planning purposes. Request a free in-home estimate for exact pricing for your home.
          </p>
        </div>
      </section>

      {/* Cost factors */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Affects Your Gutter Installation Cost?
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
                Never Clean Your Gutters Again
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Gutter Cap system uses surface tension to keep debris out — permanently. Learn how it works and what it costs.
              </p>
            </div>
            <Link
              href="/gutters/gutter-cap"
              className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Learn About Gutter Cap →
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
            We&apos;ll assess your existing gutters and downspouts, recommend the right system for your home, and provide exact pricing — all at no cost. Serving the Quad Cities and a 90-mile radius.
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
          href="/gutters/gutter-cap-faq"
          className="text-accent hover:text-accent-dark underline"
        >
          More questions? Visit our Gutter Cap FAQ →
        </Link>
      </div>
    </>
  );
}
