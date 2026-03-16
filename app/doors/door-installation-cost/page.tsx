import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/doors/door-installation-cost"],
);

const faqs = [
  {
    question: "How much does entry door installation cost in the Quad Cities?",
    answer:
      "Entry door installation in the Quad Cities typically costs $1,200–$3,500+ installed, depending on door material, style, glass insert, and hardware. Fiberglass doors are mid-range; steel doors tend to be slightly less; custom wood or premium designs cost more. Suburban Construction provides free in-home estimates.",
  },
  {
    question: "How much does a storm door installation cost?",
    answer:
      "Storm door installation typically runs $350–$700 installed, including the door, hardware, and labor. The Easy Vent storm doors we install are competitively priced and provide excellent air flow control and weather protection.",
  },
  {
    question: "What factors affect the cost of a new entry door?",
    answer:
      "Key cost factors include door material (fiberglass vs. steel), style and panel design, glass insert size and pattern, hardware finish, sidelights or transom windows, and whether the existing frame needs any repair or modification.",
  },
  {
    question: "Is a new entry door worth the investment?",
    answer:
      "Yes. Entry door replacement consistently delivers strong return on investment — typically 60–80% at resale according to industry studies. Beyond resale value, a new door improves security, reduces drafts, and dramatically enhances curb appeal.",
  },
  {
    question: "How long does door installation take?",
    answer:
      "Most single entry door installations take 2–4 hours. Suburban Construction measures your existing opening, custom-orders the door, and installs it in one visit. We ensure proper weatherstripping and a weathertight seal before we leave.",
  },
];

const priceRanges = [
  {
    type: "Storm Door",
    low: "$350",
    mid: "$500",
    high: "$700",
    note: "Easy Vent retractable screen or ventilating glass",
  },
  {
    type: "Steel Entry Door",
    low: "$900",
    mid: "$1,500",
    high: "$2,200",
    note: "Durable, affordable, energy-efficient",
  },
  {
    type: "Fiberglass Entry Door",
    low: "$1,200",
    mid: "$2,000",
    high: "$3,000",
    note: "Best insulation, wide style options",
  },
  {
    type: "Entry + Storm Door",
    low: "$1,500",
    mid: "$2,500",
    high: "$3,700",
    note: "Combined entry and storm door installation",
  },
  {
    type: "Door with Sidelights",
    low: "$2,000",
    mid: "$3,000",
    high: "$4,500+",
    note: "Entry door with flanking glass panels",
  },
];

const costFactors = [
  {
    title: "Door Material",
    body: "Fiberglass offers the best insulation and style variety. Steel is durable and affordable. Custom wood is premium-priced.",
  },
  {
    title: "Glass Inserts",
    body: "Plain doors cost less. Decorative glass inserts — especially large or custom patterns — add to the door price.",
  },
  {
    title: "Hardware",
    body: "Standard hardware is included. Upgraded locksets, handlesets, and hinges in premium finishes (oil-rubbed bronze, matte black) add cost.",
  },
  {
    title: "Sidelights & Transoms",
    body: "Adding flanking glass sidelights or a transom window above the door adds light and drama — and cost.",
  },
  {
    title: "Frame Condition",
    body: "If the existing door frame or threshold has rot or damage, repair work is needed before the new door goes in.",
  },
  {
    title: "Built-In Mini Blinds",
    body: "Doors with mini blinds between the glass panes are a convenient upgrade that adds a modest cost to the door price.",
  },
];

export default function DoorInstallationCostPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageHero
        title="Door Installation Cost Guide"
        subtitle="Transparent pricing for entry and storm door installation in the Quad Cities"
        bgImage="/main.jpg"
        breadcrumbs={[
          { label: "Doors", href: "/doors/door-styles" },
          { label: "Door Installation Cost" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How Much Does a New Door Cost?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A new entry door is one of the most visible, impactful improvements you
            can make to your home&apos;s exterior — and one that consistently delivers
            strong return on investment. But door prices vary widely depending on
            material, style, and options, so it helps to understand what to expect
            before you request a quote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The ranges below reflect typical installed prices for Quad Cities
            homeowners in the Davenport, Bettendorf, Moline, Rock Island, and
            surrounding area. These are general estimates — your exact price depends
            on the specific door, options chosen, and your home&apos;s existing frame
            condition.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Suburban Construction has been installing entry doors and storm doors
            throughout the Quad Cities since 1985. We provide free in-home estimates
            with clear, honest pricing — no inflated quotes, no pressure.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Typical Door Installation Cost
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Installed cost estimates including door, hardware, and labor. Prices vary by style, options, and site conditions.
          </p>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Door Type</th>
                  <th className="text-center px-4 py-3 font-semibold">Budget</th>
                  <th className="text-center px-4 py-3 font-semibold">Mid-Range</th>
                  <th className="text-center px-4 py-3 font-semibold">Premium</th>
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
            Estimates are for planning purposes only. Request a free in-home estimate for exact pricing for your specific door and opening.
          </p>
        </div>
      </section>

      {/* Cost factors */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Affects Your Door Installation Cost?
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

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get Your Free, No-Pressure Estimate
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;ll assess your existing door, show you style and option choices, and give you exact pricing — no obligation. Serving Davenport, Bettendorf, Moline, Rock Island, and the surrounding area.
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
          href="/doors/door-styles"
          className="text-accent hover:text-accent-dark underline"
        >
          Browse door styles and options →
        </Link>
      </div>
    </>
  );
}
