import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/doors/mini-blinds"],
);

export default function MiniBlindDoorsPage() {
  return (
    <>
      <PageHero
        title="Doors with Built-In Mini Blinds"
        subtitle="Convenient light control with no dusting, no cords, and no hassle"
        breadcrumbs={[
          { label: "Doors", href: "/doors/door-styles" },
          { label: "Built-In Mini Blinds" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Light Control Without the Maintenance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Doors with built-in mini blinds feature aluminum blind slats
                sealed between the inner and outer glass panes of the
                door&apos;s glass insert. The blinds are adjusted using a small
                control mechanism at the edge of the glass — typically a slider
                or dial — that tilts the slats open or closed and raises or
                lowers the blind stack. The entire assembly is permanently
                enclosed within the glass unit, which means the blinds are
                completely protected from dust, pet hair, curious children, and
                accidental damage.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The practical benefits are significant. Traditional blinds on
                doors must be dusted regularly, tend to catch on door handles
                and hardware, and — in the case of corded blinds — present a
                safety concern in homes with young children. Built-in mini blind
                doors eliminate all of these issues entirely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These doors are particularly popular for patio doors, back entry
                doors, and any door where light control and privacy are
                important but traditional window coverings are inconvenient or
                impractical. They&apos;re also an excellent choice for front
                entry doors with large glass inserts where privacy from the
                street is desired.
              </p>
            </div>
            <Image
              src="/mini-blinds.jpg"
              alt="Door with built-in mini blinds sealed between glass panes for dust-free light control"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Photo strip */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/entry.png" alt="Entry door with glass insert options" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/door.png" alt="Fiberglass entry door with decorative glass options" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/fiberclassicmain.jpg" alt="Fiber Classic door with glass insert" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
          </div> */}
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
                title: "Zero Dust",
                body: "Blinds sealed between glass panes — zero dust accumulation.",
              },
              {
                title: "Cord-Free Safety",
                body: "No cords dangling — eliminates the safety hazard for young children.",
              },
              {
                title: "Full Control",
                body: "Blinds tilt open, tilt closed, or raise completely for full or partial privacy.",
              },
              {
                title: "Clean Look",
                body: "Clean, uncluttered look — no blind hardware to coordinate or replace.",
              },
              {
                title: "Year-Round Use",
                body: "Works in any season — no need to remove blinds for holiday decorating.",
              },
              {
                title: "Multiple Door Styles",
                body: "Available in steel and fiberglass door styles.",
              },
              {
                title: "Insert Size Options",
                body: "Available in a range of glass insert sizes and configurations.",
              },
              {
                title: "Lifetime Guarantee",
                body: "Professional installation with lifetime workmanship guarantee.",
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
              src="/mini-blinds.jpg"
              alt="Close-up of built-in mini blinds in door glass insert"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ideal Applications
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Built-in mini blind doors are versatile and work well in a wide
                range of situations:
              </p>
              <ul className="space-y-4">
                {[
                  {
                    name: "Patio doors",
                    desc: "control afternoon sun without covering the entire door opening",
                  },
                  {
                    name: "Front entry doors",
                    desc: "with full-lite or half-lite glass inserts",
                  },
                  {
                    name: "Back entry and mud room doors",
                    desc: "where privacy and light control are both needed",
                  },
                  {
                    name: "Homes with pets or young children",
                    desc: "where cord-free operation is a safety priority",
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

      {/* Callout */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Browse Our Full Door Selection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Built-in mini blind inserts are available across many of our
                door product lines. Visit our door catalog to see the full range
                of options or ask about it during your free in-home estimate.
              </p>
            </div>
            <Link
              href="/doors/door-app"
              className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm"
            >
              View Catalog →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free door estimate throughout
            the Quad Cities.
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
