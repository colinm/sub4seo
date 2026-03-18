import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";
import RelatedFAQs from "@/components/shared/RelatedFAQs";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/doors/storm"],
);

const doorFaqLinks = [
  {
    href: "/doors/door-styles",
    title: "Door Styles",
    description:
      "Browse our full selection of entry doors, storm doors, and specialty doors for any application.",
    icon: "🚪",
  },
  {
    href: "/doors/easy-vent",
    title: "Easy Vent Storm Doors",
    description:
      "Fresh air ventilation without seasonal panel swaps. Click between glass and screen easily.",
    icon: "💨",
  },
  {
    href: "/contact",
    title: "Get a Free Estimate",
    description:
      "Contact Suburban Construction for storm door pricing and installation.",
    icon: "📞",
  },
];

export default function StormDoorsPage() {
  return (
    <>
      <PageHero
        title="Storm Doors"
        subtitle="Open the full potential of your entry — season after season"
        bgImage="/doors/storm-platinum-456.jpg"
        breadcrumbs={[
          { label: "Doors", href: "/doors/door-styles" },
          { label: "Storm Doors" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Protect Your Entry Without Sacrificing Style
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A well-chosen storm door opens the full potential of your entry
                — season after season. Storm doors let the best of nature in
                while keeping the worst out. On beautiful spring and fall days,
                you can open your entry door to enjoy fresh air and natural
                light while the storm door keeps insects, debris, and light rain
                at bay. In winter, a storm door adds an extra layer of
                insulation and weather protection that helps reduce energy
                costs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We install Larson storm doors, a trusted brand with over 70
                years of experience engineering storm doors that deliver on
                protection, convenience, and style. Our Platinum Collection
                features sleek modern design with premium security features,
                hidden built-in closers, and engineered weatherstripping for
                exceptional protection from harsh weather.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction handles the complete installation process
                across the Quad Cities. We ensure proper fitting, hardware
                adjustment, and weatherstripping so your storm door operates
                perfectly and provides complete perimeter protection.
              </p>
            </div>
            <Image
              src="/doors/storm-platinum-456.jpg"
              alt="Modern storm door with sleek frame and double glass panels"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Platinum Collection Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Multi-Point Locking System",
                body: "Additional security with multi-point locking for peace of mind.",
              },
              {
                title: "Hidden Built-In Closer",
                body: "Click&Hold technology holds the door open without props or wedges.",
              },
              {
                title: "Triple Weatherstrip",
                body: "Triple-seal design protects your home and entry door from harsh weather.",
              },
              {
                title: "Heavy-Duty Aluminum Frame",
                body: "Low-maintenance aluminum construction with exceptional durability.",
              },
              {
                title: "Retractable Screen",
                body: "Screen Away design disappears above the window for a clear view.",
              },
              {
                title: "Interchangeable Glass & Screen",
                body: "Switch between full glass and full screen for seasonal transitions.",
              },
              {
                title: "Pre-Hung Assembly",
                body: "Pre-assembled for easy surface mount installation — fast and simple.",
              },
              {
                title: "Low-E Glass Option",
                body: "Factory-coated to reduce UV fade and improve energy efficiency by up to 24%.",
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

      {/* Screen Options */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Perfect Ventilation Option
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Retractable Screen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Screen Away retractable screen design disappears above the
                window frame when not in use, providing an unobstructed view.
                Perfect for enjoying seasonal fresh air without sacrificing
                sightlines.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Maximum clear view when retracted</li>
                <li>✓ Easy one-touch operation</li>
                <li>✓ No seasonal storage needed</li>
                <li>✓ Clean aesthetic design</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Interchangeable Glass & Screen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Switch between a full glass panel for winter protection and
                natural light, or a full screen panel for summer ventilation.
                Both options are included — simply swap as the seasons change.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Seasonal flexibility</li>
                <li>✓ Maximum air flow in summer</li>
                <li>✓ Maximum light in winter</li>
                <li>✓ Both panel types included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Enhanced Security Features
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Platinum Secure Collection includes premium security
                upgrades that go beyond standard storm doors. Choose between
                Dominator Glass with an inner shield between two glass panels,
                or Dominator Screen with .032" stainless steel mesh tested to
                withstand 1,000 lbs. of force.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Both security options include Break-In Protection Warranty for
                added peace of mind.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    name: "Dominator Glass",
                    desc: "Inner shield between panels helps prevent break-ins",
                  },
                  {
                    name: "Dominator Screen",
                    desc: "Heavy-duty stainless steel resists forced entry",
                  },
                  {
                    name: "Break-In Protection Warranty",
                    desc: "Special coverage for security features",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">
                        {item.name}
                      </span>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src="/doors/storm-platinum-459.jpg"
              alt="Storm door security features"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Frame Colors Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Available Frame Colors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "White Linen", color: "#f5f5f5" },
              { name: "Pebblestone", color: "#a8a8a8" },
              { name: "Woodland", color: "#6b7a6b" },
              { name: "Graphite", color: "#4a4a4a" },
              { name: "Black", color: "#1a1a1a" },
            ].map((option) => (
              <div key={option.name} className="text-center">
                <div
                  className="w-full h-24 rounded-lg border-2 border-gray-200 shadow-sm mb-2"
                  style={{ backgroundColor: option.color }}
                ></div>
                <p className="text-sm font-medium text-gray-900">
                  {option.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Door Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Pet-Friendly Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Medium Pet Door",
                size: '8" x 12"',
                capacity: "Up to 40 lbs",
              },
              {
                name: "Large Pet Door",
                size: '10" x 17"',
                capacity: "Up to 100 lbs",
              },
              {
                name: "Extra-Large Pet Door",
                size: '14" x 23"',
                capacity: "Up to 220 lbs",
              },
            ].map((pet) => (
              <div
                key={pet.name}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-2">{pet.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{pet.size}</p>
                <p className="text-sm font-semibold text-accent">
                  {pet.capacity}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            All pet door options include a slide-in pet cover for added security
            when not in use
          </p>
        </div>
      </section>

      {/* Energy Efficiency Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 bg-accent-subtle border border-accent-faint rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Low-E Glass for Energy Efficiency
            </h2>
            <p className="text-gray-700">
              Upgrade to factory-coated Low-E glass for superior energy savings
              and UV protection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">☀️</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Summer Cooling</h3>
                <p className="text-sm text-gray-600">
                  Low-E glass reflects the sun's heat, keeping rooms cooler
                  without excessive air conditioning
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">❄️</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Winter Warmth</h3>
                <p className="text-sm text-gray-600">
                  Minimizes heat loss, helping retain interior warmth and reduce
                  heating costs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">UV Protection</h3>
                <p className="text-sm text-gray-600">
                  Reduces UV rays that pass through, helping prevent fading of
                  furniture and flooring
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Up to 24% Better
                </h3>
                <p className="text-sm text-gray-600">
                  Low-E glass increases insulating value compared to standard
                  clear glass options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Warranty */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image
              src="/doors/storm-product-guide.jpg"
              alt="Professional storm door installation"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              unoptimized
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Installation & Warranty
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction hands the entire storm door installation
                process. We handle everything from proper sizing and opening
                preparation to secure mounting and hardware adjustment. Our team
                ensures perfect operation and complete weatherproofing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Larson storm doors include lifetime or 10-year limited
                warranties on all products, giving you confidence in your
                investment.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    name: "Professional Installation",
                    desc: "Proper sizing, mounting, and hardware adjustment",
                  },
                  {
                    name: "Quality Weatherstripping",
                    desc: "Complete perimeter sealing for maximum protection",
                  },
                  {
                    name: "Lifetime Warranty Available",
                    desc: "Coverage on Larson storm doors and installation",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">
                        {item.name}
                      </span>
                      <span className="text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Ready to Upgrade Your Entry?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Let Suburban Construction install a beautiful, protective storm
                door that opens your entry to the seasons. We serve Davenport,
                Bettendorf, Moline, Rock Island, and the Quad Cities area.
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Get a Free Estimate →
            </Link>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">
              Download Our Storm Door Brochure
            </p>
            <p className="text-sm text-gray-600">
              Complete details on all Larson storm door models, options, and
              styles
            </p>
          </div>
          <a
            href="/stormdoor.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <RelatedFAQs items={doorFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free storm door estimate. We
            serve the entire Quad Cities region including Davenport, Bettendorf,
            Moline, and Rock Island.
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
          href="/resources/glossary"
          className="text-accent hover:text-accent-dark underline"
        >
          Not sure about home improvement terminology? Visit our Glossary of
          Terms →
        </Link>
      </div>
    </>
  );
}
