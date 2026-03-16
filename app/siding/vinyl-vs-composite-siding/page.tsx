import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/siding/vinyl-vs-composite-siding"],
);

const faqs = [
  {
    question: "What is the difference between vinyl and composite siding?",
    answer:
      "Vinyl siding is made from PVC plastic and is the most affordable, low-maintenance option. Composite siding is made from a blend of wood fiber, cement, or other materials engineered to look like real wood — it delivers a richer, more natural appearance. Composite costs more than vinyl but is significantly less expensive than real wood while requiring far less maintenance.",
  },
  {
    question: "Does composite siding look better than vinyl?",
    answer:
      "Most homeowners find composite siding has a more premium appearance than vinyl, particularly the cedar-look profiles that convincingly replicate real wood grain. Vinyl has improved significantly in appearance over the years, but composite still offers a richer, more textured look that's hard to distinguish from real wood.",
  },
  {
    question: "Which siding lasts longer — vinyl or composite?",
    answer:
      "Both are long-lasting: quality vinyl siding lasts 30–40 years; composite siding typically lasts 25–40 years depending on the specific product and installation quality. Both far outlast real wood siding in terms of maintenance-free longevity.",
  },
  {
    question: "Is composite siding worth the extra cost over vinyl?",
    answer:
      "It depends on your priorities. If achieving a wood-look appearance is important to your home's aesthetic, composite delivers that at a fraction of the cost of real wood. If budget is the primary concern, vinyl provides excellent performance and appearance at a lower price. Suburban Construction can show you samples of both during a free in-home estimate.",
  },
  {
    question: "Which siding is better for the Midwest climate?",
    answer:
      "Both perform well in the Quad Cities' hot summers and cold winters. Vinyl does not absorb moisture and is completely immune to rot. Composite siding is also engineered for moisture resistance but may require periodic repainting (some products) unlike vinyl, which never needs painting.",
  },
];

type ComparisonRow = {
  feature: string;
  vinyl: string;
  composite: string;
  winner: "vinyl" | "composite" | "tie";
};

const comparison: ComparisonRow[] = [
  {
    feature: "Appearance",
    vinyl: "Clean, modern look — improved textures available",
    composite: "Rich wood-grain appearance, very convincing cedar look",
    winner: "composite",
  },
  {
    feature: "Price",
    vinyl: "Lower cost ($5–$9/sq ft installed)",
    composite: "Higher cost ($10–$16/sq ft installed)",
    winner: "vinyl",
  },
  {
    feature: "Maintenance",
    vinyl: "Never needs painting — rinse with water",
    composite: "Some products need periodic repainting; others do not",
    winner: "vinyl",
  },
  {
    feature: "Moisture Resistance",
    vinyl: "100% moisture resistant — will not rot",
    composite: "Engineered for moisture resistance; varies by product",
    winner: "vinyl",
  },
  {
    feature: "Durability",
    vinyl: "Very good — 30–40 year lifespan",
    composite: "Very good — 25–40 year lifespan",
    winner: "tie",
  },
  {
    feature: "Color Options",
    vinyl: "Widest selection, fade-resistant pigments",
    composite: "Good selection, paintable for custom colors",
    winner: "vinyl",
  },
  {
    feature: "Eco-Friendliness",
    vinyl: "PVC-based; not biodegradable",
    composite: "Often uses recycled wood fiber content",
    winner: "composite",
  },
  {
    feature: "Resale Appeal",
    vinyl: "Strong return on investment",
    composite: "Premium appearance commands attention from buyers",
    winner: "composite",
  },
];

export default function VinylVsCompositeSidingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Vinyl vs. Composite Siding"
        subtitle="Compare two of the most popular low-maintenance siding options for Quad Cities homes"
        bgImage="/composite1.jpg"
        breadcrumbs={[
          { label: "Siding", href: "/siding/vinyl-siding" },
          { label: "Vinyl vs. Composite Siding" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Vinyl or Composite — Which Is Right for Your Home?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both vinyl and composite siding offer dramatically better durability and
            lower maintenance than real wood — but they differ in appearance, price,
            and characteristics. The right choice depends on your budget, aesthetic
            goals, and how long you plan to stay in your home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction installs both vinyl and composite siding
            throughout the Quad Cities and surrounding area. We&apos;ll help you
            weigh the tradeoffs honestly and show you samples of each during a free
            in-home estimate.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Vinyl vs. Composite — Side-by-Side
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold w-36">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold">Vinyl Siding</th>
                  <th className="text-left px-4 py-3 font-semibold">Composite Siding</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900 align-top">{row.feature}</td>
                    <td className={`px-4 py-3 text-gray-700 align-top ${row.winner === "vinyl" ? "font-semibold text-accent" : ""}`}>
                      {row.winner === "vinyl" && <span className="mr-1">✓</span>}
                      {row.vinyl}
                    </td>
                    <td className={`px-4 py-3 text-gray-700 align-top ${row.winner === "composite" ? "font-semibold text-green-700" : ""}`}>
                      {row.winner === "composite" && <span className="mr-1">✓</span>}
                      {row.composite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-6 mt-3 text-xs text-gray-500 justify-center">
            <span><span className="font-semibold text-accent">✓ Blue</span> = advantage for vinyl</span>
            <span><span className="font-semibold text-green-700">✓ Green</span> = advantage for composite</span>
          </div>
        </div>
      </section>

      {/* Which is right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Which Is Right for Your Home?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Vinyl Siding If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "Budget is your primary consideration",
                  "You want zero maintenance — no painting, ever",
                  "You want the widest color selection",
                  "You want 100% moisture and rot immunity",
                  "You're planning a near-term sale and want strong ROI",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/siding/vinyl-siding"
                className="inline-block mt-4 text-accent font-semibold text-sm hover:text-accent-dark"
              >
                Learn About Vinyl Siding →
              </Link>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Composite Siding If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "You love the look of real wood but not the maintenance",
                  "Your home's architecture calls for a natural, textured appearance",
                  "You want a premium curb appeal upgrade",
                  "You're investing for the long term and want a distinguishable material",
                  "You value sustainability and want recycled-content products",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/siding/composite-siding"
                className="inline-block mt-4 text-green-700 font-semibold text-sm hover:text-green-800"
              >
                Learn About Composite Siding →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            See Both Siding Options In Person
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our Davenport showroom or schedule a free in-home estimate — we&apos;ll bring samples of vinyl and composite siding so you can compare the look and feel side-by-side. No pressure, no obligation.
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
          href="/siding/steel-vs-vinyl-siding"
          className="text-accent hover:text-accent-dark underline"
        >
          Also compare: Steel vs. Vinyl Siding →
        </Link>
      </div>
    </>
  );
}
