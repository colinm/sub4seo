import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";
import RelatedFAQs from '@/components/shared/RelatedFAQs'

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/windows/double-hung-vs-casement"],
);

const windowFaqLinks = [
  { href: '/windows/replacement-windows-faq', title: 'Window FAQ', description: 'Replacement windows, installation timelines, energy savings, warranties, and more.', icon: '🪟' },
  { href: '/resources/condensation-faq', title: 'Condensation FAQ', description: 'What causes condensation on windows, what it means, and how to address it.', icon: '💧' },
  { href: '/resources/convection-faq', title: 'Convection FAQ', description: 'How convection causes heat loss through windows and how gas fills reduce it.', icon: '🌡️' },
  { href: '/resources/stain-formula-faq', title: 'Stain Formulas', description: 'How to get color match information for touch-ups on siding and windows.', icon: '🎨' },
]

const faqs = [
  {
    question: "What is the difference between double hung and casement windows?",
    answer:
      "Double hung windows have two sashes that slide vertically, both of which can be opened for ventilation and tilted in for cleaning. Casement windows are hinged on one side and crank open outward like a door, providing a full, unobstructed opening. Both are excellent choices — the right pick depends on your ventilation needs and home style.",
  },
  {
    question: "Which is more energy efficient — double hung or casement?",
    answer:
      "Casement windows typically have a slight edge in energy efficiency because they seal tightly against the frame when the wind pushes them closed. However, both window types with triple pane krypton glass perform at a very high level. The glass package matters more than the style for most homeowners.",
  },
  {
    question: "Are casement windows more expensive than double hung?",
    answer:
      "Generally yes — casement windows cost slightly more than comparable double hung windows due to their hardware and mechanism. However, the price difference is modest. Both are available with the same glass options, colors, and frame features from Suburban Construction.",
  },
  {
    question: "Which window is easier to clean?",
    answer:
      "Both are designed for easy cleaning. Double hung windows tilt both sashes inward so you can clean exterior glass from inside. Casement windows swing fully open, giving you direct access to the exterior glass. Either way, no ladder required.",
  },
];

type ComparisonRow = {
  feature: string;
  doubleHung: string;
  casement: string;
  winner: "double-hung" | "casement" | "tie";
};

const comparison: ComparisonRow[] = [
  {
    feature: "Ventilation Control",
    doubleHung: "Open top, bottom, or both for flexible airflow",
    casement: "Full opening — maximum airflow when open",
    winner: "casement",
  },
  {
    feature: "Energy Efficiency",
    doubleHung: "Excellent with triple pane krypton",
    casement: "Slightly tighter seal when closed",
    winner: "casement",
  },
  {
    feature: "Ease of Operation",
    doubleHung: "Slide up/down — simple and intuitive",
    casement: "Crank mechanism — easy for all ages",
    winner: "tie",
  },
  {
    feature: "Cleaning",
    doubleHung: "Both sashes tilt in for indoor cleaning",
    casement: "Swing fully open for direct exterior access",
    winner: "tie",
  },
  {
    feature: "Price",
    doubleHung: "Slightly lower cost",
    casement: "Slightly higher due to hardware",
    winner: "double-hung",
  },
  {
    feature: "Style / Aesthetics",
    doubleHung: "Classic, fits most traditional home styles",
    casement: "Clean, modern look — great for contemporary homes",
    winner: "tie",
  },
  {
    feature: "Screen Placement",
    doubleHung: "Full screen standard",
    casement: "Half screen on interior (screen blocks partial view when open)",
    winner: "double-hung",
  },
  {
    feature: "Popularity",
    doubleHung: "Most popular window style in the US",
    casement: "Popular for kitchens, bedrooms, and above cabinets",
    winner: "double-hung",
  },
];

const winnerColors: Record<ComparisonRow["winner"], string> = {
  "double-hung": "bg-accent-subtle border-accent-faint",
  "casement": "bg-green-50 border-green-200",
  "tie": "bg-gray-50 border-gray-200",
};

export default function DoubleHungVsCasementPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Double Hung vs. Casement Windows"
        subtitle="A straightforward comparison to help you choose the right window style for your Quad Cities home"
        bgImage="/casement1.jpg"
        breadcrumbs={[
          { label: "Windows", href: "/windows/window-styles" },
          { label: "Double Hung vs. Casement" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Choosing Between Double Hung and Casement Windows
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Double hung and casement windows are two of the most popular replacement
            window styles — and for good reason. Both are versatile, energy-efficient
            (especially with triple pane krypton glass), and easy to maintain. The
            right choice comes down to how you use the room, your home&apos;s
            architectural style, and personal preference.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The comparison below covers the key differences to help you make an
            informed decision. If you&apos;re still unsure, our team at Suburban
            Construction is happy to walk you through both options during a free
            in-home estimate — we&apos;ll show you samples and explain which works
            best for each opening in your home.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold w-32">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold">Double Hung</th>
                  <th className="text-left px-4 py-3 font-semibold">Casement</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900 align-top">{row.feature}</td>
                    <td className={`px-4 py-3 align-top ${row.winner === "double-hung" ? "font-semibold text-accent" : "text-gray-700"}`}>
                      {row.winner === "double-hung" && <span className="mr-1">✓</span>}
                      {row.doubleHung}
                    </td>
                    <td className={`px-4 py-3 align-top ${row.winner === "casement" ? "font-semibold text-green-700" : "text-gray-700"}`}>
                      {row.winner === "casement" && <span className="mr-1">✓</span>}
                      {row.casement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-6 mt-3 text-xs text-gray-500 justify-center">
            <span><span className="font-semibold text-accent">✓ Blue</span> = advantage for double hung</span>
            <span><span className="font-semibold text-green-700">✓ Green</span> = advantage for casement</span>
          </div>
        </div>
      </section>

      {/* Which is right for me */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Which Is Right for Your Home?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Double Hung If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "You want the most popular, versatile window style",
                  "Your home has a traditional or colonial architectural style",
                  "You want flexible ventilation control (top, bottom, or both)",
                  "You prefer a slightly lower price point",
                  "You have children and prefer a full screen without obstruction",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/windows/double-hung"
                className="inline-block mt-4 text-accent font-semibold text-sm hover:text-accent-dark"
              >
                Learn About Double Hung Windows →
              </Link>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Casement If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "You want maximum airflow when the window is open",
                  "Your home has a contemporary or craftsman style",
                  "You're installing above a sink or counter (crank operation is easier to reach)",
                  "You want the tightest possible seal when closed",
                  "You prefer an unobstructed view without a center sash rail",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/windows/casement"
                className="inline-block mt-4 text-green-700 font-semibold text-sm hover:text-green-800"
              >
                Learn About Casement Windows →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedFAQs items={windowFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Still Not Sure? We Can Help.
          </h2>
          <p className="text-gray-600 mb-6">
            During your free in-home estimate, we&apos;ll bring samples of both styles and help you choose the best option for each window opening. No pressure — just expert guidance. Serving the Quad Cities since 1985.
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
          href="/windows/window-styles"
          className="text-accent hover:text-accent-dark underline"
        >
          Browse all window styles →
        </Link>
      </div>
    </>
  );
}
