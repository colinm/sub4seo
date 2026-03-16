import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQSchema from "@/components/seo/FAQSchema";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/doors/door-styles"],
);

const doorTypes = [
  {
    title: "Entry Doors",
    href: "/doors/entry",
    description:
      "Beautiful, energy-efficient fiberglass and steel entry doors from Therma-Tru. Available in dozens of styles, colors, and glass options to complement any home.",
  },
  {
    title: "Easy Vent Storm Doors",
    href: "/doors/easy-vent",
    description:
      "Let in fresh air and keep bugs out with our Easy Vent storm doors. Available in retractable screen and ventilating glass styles.",
  },
  {
    title: "Doors with Built-In Mini Blinds",
    href: "/doors/mini-blinds",
    description:
      "Enjoy convenient light control with no dusting and no cords. Built-in mini blinds are sealed between the glass layers for a clean, low-maintenance look.",
  },
];

const doorFaqs = [
  {
    question: 'How long does entry door installation take?',
    answer: 'Most entry door installations are completed in a single day — often in 2–4 hours. Suburban Construction measures your opening in advance, custom-orders your door, and installs it with proper weatherstripping, insulation, and hardware in one efficient visit.',
  },
  {
    question: 'What is the most energy-efficient entry door material?',
    answer: 'Fiberglass doors offer the best combination of energy efficiency, durability, and aesthetics. Fiberglass does not conduct heat or cold the way steel or wood can, making it an excellent insulator. Quality fiberglass doors are also resistant to warping, cracking, and denting.',
  },
  {
    question: 'Can I add a storm door to an existing entry door?',
    answer: 'Yes. Adding an Easy Vent storm door is an excellent way to improve your entry\'s energy efficiency and allow fresh air without bugs. Suburban Construction installs storm doors on existing door frames throughout the Quad Cities.',
  },
  {
    question: 'What door colors and styles are available?',
    answer: 'Suburban Construction offers entry doors in dozens of styles, colors, and glass insert options. We carry fiberglass and steel doors with wood-grain textures, smooth finishes, and a wide selection of pre-finished colors. Visit our showroom at 3602 North Harrison, Davenport to see samples.',
  },
]

export default function DoorStylesPage() {
  return (
    <>
      <FAQSchema faqs={doorFaqs} />
      <PageHero
        title="Door Styles"
        subtitle="Entry doors, storm doors, and innovative built-in blind options for Quad Cities homes"
        breadcrumbs={[{ label: "Doors" }]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Your Front Door Makes a Statement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your entry door is the focal point of your home&apos;s exterior.
                It&apos;s the first thing guests see and a critical component of
                your home&apos;s curb appeal. Beyond aesthetics, a quality entry
                door plays a significant role in your home&apos;s security and
                energy efficiency. An old, drafty door can account for a
                surprising amount of your home&apos;s heat loss during Quad
                Cities winters.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suburban Construction has been installing doors throughout
                Davenport, Bettendorf, Moline, Rock Island, and the surrounding
                area since 1985. We work with leading door manufacturers to
                provide products that combine beauty, performance, and
                durability — and we install every door with the care and
                precision that guarantees a weathertight, long-lasting result.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our door product lines include entry doors, storm doors, and
                specialty options like doors with built-in mini blinds. Browse
                the options below or contact us to schedule a free in-home
                estimate.
              </p>
            </div>
            <Image
              src="/fiberclassicmain.jpg"
              alt="Fiber Classic entry door showcasing wood grain texture and glass insert options"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Photo strip */}
          {/* <Image src="/door.png" alt="Fiberglass entry door showing classic style and curb appeal" width={600} height={220} className="rounded-lg shadow-sm w-full h-40 object-cover" /> */}
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Door Styles We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {doorTypes.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="block bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent-mid font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm">{d.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">
                  {d.description}
                </p>
                <span className="inline-block mt-2 pl-5 text-accent-mid text-sm font-medium">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary: image left, list right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image
              src="/entry.png"
              alt="Entry door installed on Quad Cities home"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                See It Before You Buy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Door selection involves a lot of decisions — style, color, glass
                insert, hardware finish, and sidelight options, among others. We
                make the selection process easier in several ways:
              </p>
              <ul className="space-y-4">
                {[
                  {
                    name: "Visit our showroom",
                    desc: "3602 North Harrison, Davenport — see actual door samples in person",
                  },
                  {
                    name: "Browse our door catalog",
                    desc: "including downloadable PDF brochures",
                  },
                  {
                    name: "Watch our installation overview",
                    desc: "on YouTube to see the quality of our door work",
                  },
                  {
                    name: "Request a free in-home estimate",
                    desc: "we bring samples and discuss options at your home",
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

      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
        <Link href="/doors/door-installation-cost" className="text-accent hover:text-accent-dark underline">Door Installation Cost Guide →</Link>
        <span className="hidden sm:inline text-gray-300">|</span>
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">Glossary of Terms →</Link>
      </div>
    </>
  );
}
