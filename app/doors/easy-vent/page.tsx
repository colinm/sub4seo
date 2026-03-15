import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/doors/easy-vent"],
);

export default function EasyVentStormDoorsPage() {
  return (
    <>
      <PageHero
        title="Easy Vent Storm Doors"
        subtitle="Fresh air, insect protection, and weather defense — all in one door"
        breadcrumbs={[
          { label: "Doors", href: "/doors/door-styles" },
          { label: "Easy Vent Storm Doors" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ventilate Freely Without Compromising Protection
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A quality storm door gives you the best of both worlds on a
                pleasant Quad Cities spring or fall day: you can open your front
                or back door to let fresh air flow through the house while the
                storm door keeps insects, debris, and light rain from coming in.
                It also adds an extra layer of weather protection and insulation
                in winter, and provides an additional barrier for home security.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Easy Vent storm door line is specifically designed for
                maximum ventilation convenience. Unlike traditional storm doors
                that require removing and storing glass or screen panels
                seasonally, Easy Vent doors feature a drop-down or retractable
                screen that integrates seamlessly with the glass panel. One
                simple motion transitions you between full glass and full screen
                — no tools, no fumbling, no storage hassle.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Suburban Construction installs Easy Vent storm doors throughout
                Davenport, Bettendorf, Moline, Rock Island, and the surrounding
                area. Every installation includes proper fitting, hardware
                adjustment, and weatherstripping to ensure the door operates
                perfectly and provides a complete perimeter seal.
              </p>
            </div>
            <Image
              src="/duel-vent.jpg"
              alt="Easy Vent storm door with dual ventilation panels open for fresh air"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Photo strip */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Image src="/roll-screen.png" alt="Storm door with retractable screen for full glass view" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/entry.png" alt="Entry door paired with storm door" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
            <Image src="/door.png" alt="Fiberglass door paired with storm door" width={300} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" />
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
                title: "Easy-Transition Screen",
                body: "Drop-down or retractable design requires no seasonal panel changes.",
              },
              {
                title: "Full-View Glass",
                body: "Maximum glass area for light and visibility when screen is retracted.",
              },
              {
                title: "Insect Screen",
                body: "Keeps bugs out while allowing maximum airflow.",
              },
              {
                title: "Winter Insulation",
                body: "Adds an extra layer of insulation over your entry door in winter.",
              },
              {
                title: "Security Layer",
                body: "Secondary security layer — adds time and difficulty for forced entry attempts.",
              },
              {
                title: "Multiple Frame Colors",
                body: "Available in multiple frame colors to match your home's exterior.",
              },
              {
                title: "Heavy-Gauge Aluminum",
                body: "Heavy-gauge aluminum frame resists corrosion and warping.",
              },
              {
                title: "Durable Hardware",
                body: "Closer and latch hardware designed for long-term reliability.",
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
              src="/roll-screen.png"
              alt="Storm door with retractable screen shown in multiple positions"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Available Styles
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Easy Vent storm doors are available in several configurations to
                suit different needs and aesthetic preferences:
              </p>
              <ul className="space-y-4">
                {[
                  {
                    name: "Full-view",
                    desc: "maximum glass area for light and visibility",
                  },
                  {
                    name: "Mid-view",
                    desc: "partial glass panel with decorative lower panel",
                  },
                  {
                    name: "High-view",
                    desc: "glass panel in upper portion for privacy at door base",
                  },
                  {
                    name: "Decorative grille options",
                    desc: "available on select models",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent-subtle border border-accent-faint flex items-center justify-center shrink-0">
                      <span className="text-accent text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <strong className="font-semibold text-gray-900">
                        {item.name}
                      </strong>
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
                Pair with a New Entry Door
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Many homeowners upgrade both their entry door and storm door at
                the same time — and for good reason. A new entry door paired
                with an Easy Vent storm door gives you the complete package:
                exceptional curb appeal, maximum energy efficiency, and
                year-round weather protection.
              </p>
            </div>
            <Link
              href="/doors/entry"
              className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm"
            >
              View Entry Doors →
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
            Contact Suburban Construction for a free storm door estimate
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
