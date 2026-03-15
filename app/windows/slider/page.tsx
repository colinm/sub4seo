import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/windows/slider"],
);

export default function SliderWindowsPage() {
  return (
    <>
      <PageHero
        title="Slider & Glider Windows"
        subtitle="Wide views, smooth operation, and easy ventilation for larger openings"
        bgImage="/sliding-window1.jpg"
        breadcrumbs={[
          { label: "Windows", href: "/windows/window-styles" },
          { label: "Slider / Glider Windows" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Ideal Window for Wider Openings
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Slider windows — also called glider windows — open horizontally
                rather than vertically, making them the ideal choice for wide
                openings where traditional sash-style windows would be awkward
                or impractical. One or both sashes glide smoothly along a track,
                providing generous ventilation and an unobstructed panoramic
                view of your yard or landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Because slider windows have no counterbalance springs or tilt
                mechanisms, they are mechanically simple and extremely easy to
                operate. They&apos;re a popular choice for living rooms, dining
                areas, and basement egress openings where a wide, low-profile
                window is desired. The sash lifts out completely for cleaning,
                so you can always maintain that clear view without the need for
                exterior ladder access.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction offers slider windows in a full range of
                sizes, frame colors, and glass options — including our
                FreedomMaxxx triple pane krypton glass system for the highest
                available energy efficiency. Every unit we install comes with
                our lifetime workmanship guarantee.
              </p>
            </div>
            <Image
              src="/sliding-window1.jpg"
              alt="Sliding window installed in a home showing horizontal operation"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Photo strip */}
          {/* <Image src="/window2.jpg" alt="Interior view of replacement window" width={600} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" /> */}
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Features &amp; Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Smooth Operation",
                body: "Horizontal operation is smooth and effortless — no heavy lifting.",
              },
              {
                title: "Wide Openings",
                body: "Perfect for wide openings where vertical sash windows are not practical.",
              },
              {
                title: "Easy Cleaning",
                body: "Sash removes from frame entirely for safe, easy exterior cleaning from inside.",
              },
              {
                title: "High Reliability",
                body: "Minimal mechanical parts mean greater long-term reliability.",
              },
              {
                title: "Single or Double Slide",
                body: "Available as single-slide or double-slide — one or both sashes move.",
              },
              {
                title: "Triple Pane Available",
                body: "Triple pane argon or krypton gas fill available for energy efficiency.",
              },
              {
                title: "Color Selection",
                body: "Wide color selection for frame exterior and interior finish.",
              },
              {
                title: "Security & Screen",
                body: "Multi-point locks and integrated screen for comfort and security.",
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
              src="/sliding-window2.jpg"
              alt="Glider window providing wide panoramic view"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Great for Modern Home Designs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Slider windows complement contemporary and ranch-style homes
                beautifully. Their clean horizontal lines and large glass area
                maximize natural light and create a strong visual connection
                between interior living spaces and the outdoors. If you&apos;re
                remodeling a great room, sunroom, or walk-out basement, sliders
                are worth serious consideration.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Energy Efficiency in Iowa &amp; Illinois
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Quad Cities region experiences frigid winters and humid
                summers. Slider windows with standard dual-pane glass are a
                significant upgrade over aging single-pane units, but our triple
                pane krypton option takes energy performance to another level
                entirely. The FreedomMaxxx 10 glass system achieves a U-Factor
                that outperforms standard clear glass units by 70%, dramatically
                reducing the cold-weather heat loss that drives up your utility
                bills.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    name: "Learn more about triple pane krypton glass",
                    href: "/windows/krypton",
                  },
                  {
                    name: "See all window styles",
                    href: "/windows/window-styles",
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
                      {item.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="py-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">
              Download Our Windows Brochure
            </p>
            <p className="text-sm text-gray-600">
              Full product catalog with styles, options, and specifications
            </p>
          </div>
          <a
            href="/windows.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2 rounded transition-colors text-sm whitespace-nowrap"
          >
            ↓ Download PDF
          </a>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free, no-obligation estimate on
            slider or glider window replacement throughout the Quad Cities.
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
