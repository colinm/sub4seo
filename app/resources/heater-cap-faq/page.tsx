import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQAccordion from "@/components/shared/FAQAccordion";
import FAQSchema from "@/components/seo/FAQSchema";
import SpeakableSchema from "@/components/seo/SpeakableSchema";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/resources/heater-cap-faq"],
);

const heaterCapFaqs = [
  {
    question: "How long does a Heater Cap estimate take?",
    answer:
      "An on-site estimate takes between 30 and 45 minutes. During that visit we will measure the house, show you available color options, and bring a sample so you can see what the installed system looks like.",
  },
  {
    question: "What is the Heater Cap system?",
    answer:
      "Heater Cap is a heating element system designed to work in conjunction with your gutters to prevent ice dams and keep gutters clear and functional during winter conditions. It consists of a low-wattage electric heating cable that runs along the gutter and, when necessary, along the roof edge. When temperatures drop near freezing, the system activates to maintain just enough warmth to prevent ice from forming and blocking water flow. It is especially valuable in the Quad Cities climate where freeze-thaw cycles can cause significant damage to gutters, rooflines, and home interiors.",
  },
  {
    question: "How does Heater Cap work?",
    answer:
      "Heater Cap uses a thermostatically controlled heating cable that monitors outdoor temperature and gutter conditions. When temperatures drop to near-freezing, the thermostat triggers the heating element to activate. The cable generates enough heat to keep water flowing through your gutters and downspouts instead of freezing in place. This prevents ice dams — the dangerous buildup of ice at the roof edge that can force water back under shingles, into soffits, and ultimately into your home. Because the system is thermostatically controlled, it only runs when conditions actually require it, minimizing energy use.",
  },
  {
    question: "Does Heater Cap use a lot of electricity?",
    answer:
      "No. The Heater Cap system is designed to be energy efficient. Because it is thermostatically controlled, it only activates when temperatures reach the threshold where ice formation is a risk — not continuously throughout the winter. The heating cables themselves are low-wattage. Most homeowners find the energy cost during a typical Iowa or Illinois winter to be modest compared to the potential cost of ice dam damage, which can run into thousands of dollars in roof repairs, interior water damage, and drywall remediation.",
  },
  {
    question: "Is Heater Cap hard-wired or does it plug in?",
    answer:
      "Heater Cap is hard-wired into the circuit box. The system is turned on and off with a wall switch when needed. We suggest turning it on when temperatures are forecast to fall below 30 degrees Fahrenheit. During periods of cold weather and continuous snowfall, it is best to leave it on continuously — if it is off while snow is accumulating, it will take longer to melt the snow out of the gutter system once you turn it on.",
  },
  {
    question: "Does Heater Cap need to be on all year?",
    answer:
      "No. Heater Cap is only needed during cold weather when ice formation is a risk. You can leave it off through spring, summer, and fall. Turn it on when temperatures are forecast to drop below 30°F, and leave it running during extended cold and snowy periods. Turning it off during mild stretches will reduce energy usage without any downside.",
  },
  {
    question:
      "What if I have a gutter protection system other than Gutter Cap?",
    answer:
      "Heater Cap can be installed on most other gutter protection systems. However, be aware that installing Heater Cap on a system from another manufacturer may void that system's warranty. If you have a non-Gutter Cap system and want to add ice protection, check your existing warranty terms before proceeding.",
  },
  {
    question: "What warranty does Heater Cap carry?",
    answer:
      "Heater Cap carries a lifetime warranty on the Heater Cap panel itself. The heating cable is covered for 10 years. For the complete ice-dam prevention warranty: 10 years on materials, 5 years on electrical components, and a lifetime warranty on labor. This warranty structure reflects the confidence the manufacturer and Suburban Construction have in the system's long-term performance.",
  },
  {
    question: "Will Heater Cap significantly increase my electric bill?",
    answer:
      "It depends on the linear footage installed and the severity of the winter. The heating cables are low-wattage, and because the system is switched on only when temperatures warrant it, usage is naturally limited to the coldest periods. Most homeowners find the energy cost to be modest compared to the potential cost of ice dam damage — repairs from ice backing up under shingles and into a home can run into thousands of dollars in roof, drywall, and mold remediation work.",
  },
  {
    question: "Is Heater Cap compatible with the Gutter Cap system?",
    answer:
      "Yes. Heater Cap is designed to work alongside the Gutter Cap gutter protection system. Gutter Cap keeps leaves and debris out of your gutters year-round, while Heater Cap ensures that winter ice does not block gutter flow or damage your roofline. The two systems are complementary — together, they provide comprehensive all-season gutter protection. Suburban Construction installs both systems and can advise you on the best combination for your home and roof configuration.",
  },
  {
    question: "How serious is ice dam damage?",
    answer:
      "Ice dams can cause significant damage to a home. When ice builds up along the roof edge, it creates a dam that traps water behind it. That water has nowhere to go except back under the shingles, where it can penetrate the roof deck, enter the attic or walls, damage insulation, stain or destroy ceilings and drywall, and create conditions for mold growth. In severe cases, the weight of ice-filled gutters can pull gutters away from the fascia entirely, requiring replacement of both the gutters and the damaged wood behind them. Prevention with Heater Cap is far less expensive than remediation after ice dam damage occurs.",
  },
  {
    question: "How is Heater Cap installed?",
    answer:
      "Heater Cap is professionally installed by Suburban Construction. The heating cable is run along your gutters and, if needed, in a zigzag pattern along the roof edge in areas prone to ice buildup. The thermostat is mounted in an appropriate location and the system is connected to your home's electrical supply. Installation timing and scope depends on your roof configuration, the length of gutters involved, and any specific problem areas on your home. Contact us for a free assessment and quote.",
  },
];

export default function HeaterCapFAQPage() {
  return (
    <>
      <FAQSchema faqs={heaterCapFaqs} />
      <SpeakableSchema />
      <PageHero
        title="Heater Cap FAQ"
        subtitle="Prevent ice dams and protect your gutters and roof through winter"
        breadcrumbs={[
          { label: "Resources", href: "/resources/faq" },
          { label: "Heater Cap FAQ" },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Know About Heater Cap
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ice dams are a serious winter hazard for homes in the Quad Cities.
            When melting snow refreezes at the roof edge, it can back water up
            under shingles and cause thousands of dollars in interior damage.
            The Heater Cap system is designed to prevent ice dams before they
            form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Here are answers to common questions about how Heater Cap works and
            whether it makes sense for your home.
          </p>

          <FAQAccordion items={heaterCapFaqs} />

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              Pair Heater Cap With Gutter Cap
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Gutter Cap keeps debris out of your gutters in all seasons, while
              Heater Cap prevents winter ice issues. Together they provide
              complete gutter protection year-round.
            </p>
            <Link
              href="/gutters/gutter-cap"
              className="text-accent hover:text-accent-dark font-semibold underline text-sm"
            >
              Learn About Gutter Cap →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Protect Your Home This Winter
          </h2>
          <p className="text-gray-600 mb-6">
            Contact Suburban Construction for a free assessment of your gutter
            and roof situation. We serve the Quad Cities and surrounding area.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
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
