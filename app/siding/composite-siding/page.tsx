import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";
import RelatedFAQs from "@/components/shared/RelatedFAQs";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/siding/composite-siding"],
);

const sidingFaqLinks = [
  {
    href: "/siding/vinyl-siding-faq",
    title: "Siding FAQ",
    description:
      "Vinyl and steel siding questions: durability, maintenance, cost, and color choices.",
    icon: "🏠",
  },
  {
    href: "/resources/stain-formula-faq",
    title: "Stain Formulas",
    description:
      "How to get color match information for touch-ups on siding and windows.",
    icon: "🎨",
  },
];

export default function CompositeSidingPage() {
  return (
    <>
      <PageHero
        title="Composite Siding"
        subtitle="The beauty of real wood — without the rot, painting, and maintenance that comes with it"
        bgImage="/ascend-product-line.png"
        breadcrumbs={[
          { label: "Siding", href: "/siding/siding-options" },
          { label: "Composite Siding" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Real Wood Look, Zero Wood Headaches
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Composite siding captures the warm, textured appearance of real
                cedar or wood lap siding without any of the ongoing maintenance
                that natural wood demands. We install Ascend Composite Cladding
                — engineered with exclusive GP² technology (Glass-Reinforced
                Polymer + Graphite-Infused Polystyrene) for superior wind load
                resistance, impact resistance, and flame spread performance. It
                gives you the authentic grain pattern and dimensional depth that
                vinyl cannot replicate, combined with the weather and rot
                resistance that wood never had. Learn more at{" "}
                <a
                  href="https://ascendcompositecladding.com/why-ascend/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  ascendcompositecladding.com
                </a>
                .
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For Quad Cities homeowners who love the look of traditional wood
                siding but are tired of painting, caulking, and replacing rotted
                boards every few years, composite siding is a transformative
                upgrade. It will not absorb water, will not rot, and will not
                attract insects — three of the primary failure modes of natural
                wood siding in the Iowa and Illinois climate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction installs composite siding from leading
                manufacturers throughout Davenport, Bettendorf, Moline, Rock
                Island, and the surrounding area. We handle the full
                installation including old siding removal, moisture barrier
                inspection, trim work, and cleanup — backed by our lifetime
                workmanship guarantee.
              </p>
            </div>
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image
              src="/composite2.jpg"
              alt="Close-up of composite siding profile showing depth and realistic wood appearance"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/sidinghouse.jpg"
              alt="Home with new composite siding installed"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/ascend-product-line.png"
              alt="Ascend composite cladding product line overview"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Full-width Ascend home photo */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <Image
            src="/ascend-composite-siding.png"
            alt="Home with Ascend composite cladding installed"
            width={1714}
            height={674}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ascend Features &amp; Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "GP² Technology",
                body: "Exclusive GP² (Glass-Reinforced Polymer + Graphite-Infused Polystyrene) for structural strength, heat resistance, and fade protection.",
              },
              {
                title: "Class A Fire Rating",
                body: "Class A fire rating for both flame spread and smoke developed — meets even the most stringent building codes.",
              },
              {
                title: "180 mph Wind Resistance",
                body: "Reinforced Nail Hem provides windload resistance up to 180 mph.",
              },
              {
                title: "Self-Aligning Stack Lock",
                body: "Self-Aligning Stack Lock system makes installation quick and accurate.",
              },
              {
                title: '7" Flat Face / Cedar Grain Mill',
                body: '7" Flat Face and Cedar Grain Mill creates the organic beauty of natural wood on the 7" Flat Plank profile.',
              },
              {
                title: 'Compatible 3/4" Projection',
                body: '3/4" projection works beautifully with both standard and architectural trim accents.',
              },
              {
                title: "Defined Butt Edge",
                body: "Defined Butt Edge replicates the look of wood with added dimension and a crisp shadow line.",
              },
              {
                title: "Forgiving Hang",
                body: "Forgiving Hang conceals minor wall imperfections for a cleaner finished appearance.",
              },
              {
                title: "Authentic Wood Grain",
                body: "Realistic woodgrain texture that vinyl cannot duplicate.",
              },
              {
                title: "Moisture Resistant",
                body: "Non-moisture-absorbing materials prevent rotting, warping, shrinking, and swelling.",
              },
              {
                title: "No Peeling",
                body: "Integral weatherable pigments provide strong fade resistance even in dark colors.",
              },
              {
                title: "Long Warranty",
                body: "Lifetime limited, transferable warranty for added peace of mind.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image
              src="/composite2.jpg"
              alt="Close-up of composite siding showing wood grain detail"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Ideal for Homes With Existing Wood Siding
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                If your home currently has wood siding that is deteriorating,
                composite siding provides the perfect visual continuity — it
                will look like wood to any observer — while delivering the
                durability and low maintenance that modern homeowners expect.
                The transition is seamless from a curb appeal standpoint.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How Composite Compares to Other Siding Types
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Composite siding sits between vinyl and steel in the durability
                spectrum. It is more durable than standard vinyl and offers a
                far more authentic wood appearance, but it typically costs more
                than vinyl. Compared to real wood, composite is significantly
                more durable, requires virtually no maintenance, and costs less
                in the long run when you factor out painting cycles and board
                replacements.
              </p>
              <ul className="space-y-3">
                {[
                  { name: "Vinyl Siding", href: "/siding/vinyl-siding" },
                  { name: "Steel Siding", href: "/siding/steel-siding" },
                  {
                    name: "Insulated Siding",
                    href: "/siding/insulated-siding",
                  },
                ].map((item) => (
                  <li key={item.href} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <Link
                      href={item.href}
                      className="font-semibold text-accent hover:text-accent-dark"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ascend Profiles */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ascend Profiles
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ascend Composite Cladding is available in multiple profiles. View
            the full lineup at{" "}
            <a
              href="https://ascendcompositecladding.com/profiles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              ascendcompositecladding.com/profiles
            </a>
            .
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">
                12&quot; Board &amp; Batten
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Recreates the authentic details of this time-honored profile
                with a distinctive 10&quot; board and 2&quot; batten look.
                Custom-crafted elegance as an accent or whole-home exterior.
              </p>
              <p className="text-gray-500 text-sm">
                Available textures: <strong>Matte</strong> and{" "}
                <strong>Woodgrain</strong>
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">
                7&quot; Flat Plank
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Tall 7&quot; profile with a realistic woodgrain appearance that
                drives a stunning high-end look. Provides exceptional value and
                curb appeal.
              </p>
              <p className="text-gray-500 text-sm">
                Available texture: <strong>Cedar Mill Grain</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GP² Technology Breakdown */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Inside GP² Technology
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ascend Composite Cladding incorporates Glass-Reinforced Polymer and
            Graphite-Infused Polystyrene. Each ingredient plays a specific role
            in the final product&apos;s performance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              {
                ingredient: "Glass Fibers",
                benefit: "Add strength and stability",
              },
              {
                ingredient: "Titanium Dioxide",
                benefit: "Protects against UV degradation",
              },
              {
                ingredient: "Flame Retardants",
                benefit: "Decrease the spread of smoke and flames",
              },
              {
                ingredient: "Water-Resistant Resins",
                benefit: "Prevents rotting, warping, shrinking and swelling",
              },
              {
                ingredient: "Weatherable Pigments",
                benefit: "Resist fading, even on dark colors",
              },
              {
                ingredient: "Impact Modifiers",
                benefit: "Resist dents and dings",
              },
            ].map((item) => (
              <div
                key={item.ingredient}
                className="bg-gray-900 text-white rounded-lg p-4"
              >
                <p className="font-bold text-sm text-white mb-1">
                  {item.ingredient}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ascend Color Palette */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            20 On-Trend Colors
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ascend&apos;s 20 fade-resistant, low-gloss colors provide extensive
            design flexibility. GP²&apos;s integral weatherable pigments ensure
            strong fade resistance even on darker shades.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
            {[
              { name: "Snow White", hex: "#F2F0EB" },
              { name: "Almond", hex: "#EDE0C8" },
              { name: "Monterey Sand", hex: "#C8B89A" },
              { name: "Pebble", hex: "#A89278" },
              { name: "Dark Drift", hex: "#6B5A48" },
              { name: "Rockport Brown", hex: "#5C4638" },
              { name: "Smoked Timber", hex: "#3D3028" },
              { name: "Dover Gray", hex: "#9EAAB0" },
              { name: "Storm", hex: "#8A9298" },
              { name: "Chesapeake Gray", hex: "#A0A8A8" },
              { name: "Hudson Slate", hex: "#7A8C96" },
              { name: "Windswept Smoke", hex: "#606870" },
              { name: "Iron Ore", hex: "#3A3E42" },
              { name: "Coastal Blue", hex: "#3A6878" },
              { name: "Rockwell Blue", hex: "#4A6890" },
              { name: "Midnight Surf", hex: "#2A3A58" },
              { name: "Marine Dusk", hex: "#2A3040" },
              { name: "Meadow Fern", hex: "#7A8C5C" },
              { name: "Moonlit Moss", hex: "#5C6845" },
              { name: "Majestic Brick", hex: "#8B3530" },
            ].map((color) => (
              <div
                key={color.name}
                className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-lg px-3 py-2.5 shadow-sm"
              >
                <span
                  className="w-7 h-7 rounded shrink-0 border border-black/10 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-gray-700 font-medium leading-tight">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Colors shown are approximate representations. Ask us for physical
            samples — make final selections using actual product samples.
          </p>
          <div className="bg-accent-subtle border border-accent-faint rounded-lg p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Visualize your home:</strong> Visit{" "}
              <a
                href="https://ascendcompositecladding.com/why-ascend/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark underline"
              >
                ascendcompositecladding.com
              </a>{" "}
              to learn more about Ascend colors and profiles. Ask us for
              physical color samples — always make your final selection using
              actual product samples in your home&apos;s light.
            </p>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">
              Download Our Siding Brochure
            </p>
            <p className="text-sm text-gray-600">
              Full product catalog with styles, options, and specifications
            </p>
          </div>
          <a
            href="/siding.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <RelatedFAQs items={sidingFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free composite siding estimate
            throughout the Quad Cities.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
        <Link
          href="/siding/siding-replacement-cost"
          className="text-accent hover:text-accent-dark underline"
        >
          Siding Replacement Cost Guide →
        </Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link
          href="/siding/vinyl-vs-composite-siding"
          className="text-accent hover:text-accent-dark underline"
        >
          Vinyl vs. Composite Siding →
        </Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link
          href="/resources/glossary"
          className="text-accent hover:text-accent-dark underline"
        >
          Glossary of Terms →
        </Link>
      </div>
    </>
  );
}
