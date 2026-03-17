import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/siding/steel-vs-vinyl-siding"],
);

const sidingFaqLinks = [
  { href: '/siding/vinyl-siding-faq', title: 'Siding FAQ', description: 'Vinyl and steel siding questions: durability, maintenance, cost, and color choices.', icon: '🏠' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

const faqs = [
  {
    question: "What is the main difference between steel and vinyl siding?",
    answer:
      "Steel siding is made from galvanized or Galvalume steel and is the most durable exterior cladding available — resistant to impact, fire, and extreme weather. Vinyl siding is made from PVC and is the most affordable, low-maintenance option with the widest color selection. Steel costs more but offers unmatched durability; vinyl delivers excellent value at a lower price.",
  },
  {
    question: "Which is more durable — steel or vinyl siding?",
    answer:
      "Steel siding is significantly more durable than vinyl. Steel resists hail, impact, and high winds far better than vinyl, and it will not crack, split, or become brittle in cold weather. However, quality vinyl siding is still very durable and lasts 30–40 years with proper installation.",
  },
  {
    question: "Which siding is better for the Quad Cities climate?",
    answer:
      "Both perform well in the Quad Cities climate of hot summers and cold winters. Steel siding excels in hail-prone areas and where impact resistance is a priority. Vinyl is excellent for homeowners focused on low maintenance, affordability, and color variety. Suburban Construction installs both and can advise based on your priorities.",
  },
  {
    question: "Is steel siding more expensive than vinyl?",
    answer:
      "Yes, steel siding typically costs $4–$8 more per square foot installed than comparable vinyl siding. For a standard home, that's a price difference of roughly $5,000–$12,000. Many homeowners find the extra cost worthwhile for steel's superior durability and impact resistance.",
  },
  {
    question: "Can steel siding rust?",
    answer:
      "Modern steel siding is coated with zinc (galvanized) or an aluminum-zinc alloy (Galvalume) and then finished with a durable painted coating that prevents rust. When properly installed with correct trim and caulking, steel siding does not rust under normal conditions.",
  },
];

type ComparisonRow = {
  feature: string;
  steel: string;
  vinyl: string;
  winner: "steel" | "vinyl" | "tie";
};

const comparison: ComparisonRow[] = [
  {
    feature: "Durability",
    steel: "Exceptional — resists impact, hail, and extreme weather",
    vinyl: "Very good — can crack under severe impact in cold weather",
    winner: "steel",
  },
  {
    feature: "Fire Resistance",
    steel: "Non-combustible — will not burn",
    vinyl: "Can melt and burn; not fire-rated",
    winner: "steel",
  },
  {
    feature: "Maintenance",
    steel: "Low — never needs painting, occasional cleaning",
    vinyl: "Very low — rinse with garden hose, never paint",
    winner: "tie",
  },
  {
    feature: "Color Options",
    steel: "Good selection, baked-on factory finish",
    vinyl: "Widest color selection available",
    winner: "vinyl",
  },
  {
    feature: "Price",
    steel: "Higher upfront cost ($9–$15/sq ft installed)",
    vinyl: "Lower cost ($5–$9/sq ft installed)",
    winner: "vinyl",
  },
  {
    feature: "Energy Efficiency",
    steel: "Good (with insulated backing option)",
    vinyl: "Good (insulated vinyl option available)",
    winner: "tie",
  },
  {
    feature: "Impact Resistance",
    steel: "Excellent — stands up to hail and debris",
    vinyl: "Good — can crack in severe hail",
    winner: "steel",
  },
  {
    feature: "Curb Appeal",
    steel: "Premium look, deep shadow lines",
    vinyl: "Wide variety of profiles and textures",
    winner: "tie",
  },
  {
    feature: "Longevity",
    steel: "50+ years with proper maintenance",
    vinyl: "30–40 years",
    winner: "steel",
  },
];

export default function SteelVsVinylSidingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Steel vs. Vinyl Siding"
        subtitle="A clear, honest comparison to help Quad Cities homeowners choose the right siding material"
        bgImage="/steel-siding.jpg"
        breadcrumbs={[
          { label: "Siding", href: "/siding/vinyl-siding" },
          { label: "Steel vs. Vinyl Siding" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Steel or Vinyl — Which Siding Is Right for You?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Steel and vinyl are two of the most popular siding materials for Quad
            Cities homes — and both are excellent choices. The right decision comes
            down to your budget, durability priorities, and aesthetic preferences.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction has been installing both steel and vinyl siding
            since 1985. We don&apos;t push one over the other — we explain the tradeoffs
            honestly and let you decide what makes sense for your home. Below is a
            straightforward comparison to help you make that decision.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Steel vs. Vinyl Siding — Side-by-Side
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold w-36">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold">Steel Siding</th>
                  <th className="text-left px-4 py-3 font-semibold">Vinyl Siding</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900 align-top">{row.feature}</td>
                    <td className={`px-4 py-3 text-gray-700 align-top ${row.winner === "steel" ? "font-semibold text-accent" : ""}`}>
                      {row.winner === "steel" && <span className="mr-1">✓</span>}
                      {row.steel}
                    </td>
                    <td className={`px-4 py-3 text-gray-700 align-top ${row.winner === "vinyl" ? "font-semibold text-green-700" : ""}`}>
                      {row.winner === "vinyl" && <span className="mr-1">✓</span>}
                      {row.vinyl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-6 mt-3 text-xs text-gray-500 justify-center">
            <span><span className="font-semibold text-accent">✓ Blue</span> = advantage for steel</span>
            <span><span className="font-semibold text-green-700">✓ Green</span> = advantage for vinyl</span>
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Steel Siding If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "You want the most durable siding available",
                  "You live in a hail-prone area of the Quad Cities",
                  "Fire resistance is a priority for your home",
                  "You plan to stay in your home long-term and want a 50-year solution",
                  "You want a premium look with deep shadow lines and a solid feel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/siding/steel-siding"
                className="inline-block mt-4 text-accent font-semibold text-sm hover:text-accent-dark"
              >
                Learn About Steel Siding →
              </Link>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Vinyl Siding If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "You want the most affordable siding option",
                  "You want the widest possible color selection",
                  "You want low maintenance without repainting — ever",
                  "Budget is your primary consideration",
                  "You're planning to sell in the near term and want strong ROI",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/siding/vinyl-siding"
                className="inline-block mt-4 text-green-700 font-semibold text-sm hover:text-green-800"
              >
                Learn About Vinyl Siding →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedFAQs items={sidingFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get Expert Advice — Free
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;ll bring samples of both steel and vinyl siding to your home, explain the tradeoffs specific to your situation, and provide exact pricing — all at no cost and no obligation. Serving the Quad Cities since 1985.
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
          href="/siding/siding-replacement-cost"
          className="text-accent hover:text-accent-dark underline"
        >
          See siding cost by material type →
        </Link>
      </div>
    </>
  );
}
