import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import HowToSchema from "@/components/seo/HowToSchema";
import Image from "next/image";
import Link from "next/link";
import RelatedFAQs from "@/components/shared/RelatedFAQs";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/windows/window-installation"],
);

const windowInstallSteps = [
  {
    name: "Free In-Home Estimate & Measurement",
    text: "We measure each opening, assess existing frames, and discuss your goals. No charge, no obligation.",
  },
  {
    name: "Custom Order",
    text: "We place a custom order based on precise field measurements. Every window is made to order — not pulled from generic inventory.",
  },
  {
    name: "Scheduling & Preparation",
    text: "We schedule installation at your convenience. You clear space around each opening; we bring all tools and materials.",
  },
  {
    name: "Removal of Old Windows",
    text: "We carefully remove existing windows, minimizing disturbance to surrounding trim and siding. Old windows go directly into our disposal trailer.",
  },
  {
    name: "New Window Installation",
    text: "Each window is shimmed level and plumb, fastened securely, flashed, and insulated. Tested for proper operation before moving on.",
  },
  {
    name: "Trim, Caulk & Final Seal",
    text: "We reinstall or replace interior and exterior trim, apply exterior caulk at all perimeter joints, and perform a final inspection.",
  },
  {
    name: "Cleanup & Walkthrough",
    text: "We vacuum sills, wipe glass, and clean up all debris. We walk you through each new window before we leave.",
  },
];

const windowFaqLinks = [
  {
    href: "/windows/replacement-windows-faq",
    title: "Window FAQ",
    description:
      "Replacement windows, installation timelines, energy savings, warranties, and more.",
    icon: "🪟",
  },
  {
    href: "/resources/condensation-faq",
    title: "Condensation FAQ",
    description:
      "What causes condensation on windows, what it means, and how to address it.",
    icon: "💧",
  },
  {
    href: "/resources/convection-faq",
    title: "Convection FAQ",
    description:
      "How convection causes heat loss through windows and how gas fills reduce it.",
    icon: "🌡️",
  },
  {
    href: "/resources/stain-formula-faq",
    title: "Stain Formulas",
    description:
      "How to get color match information for touch-ups on siding and windows.",
    icon: "🎨",
  },
];

export default function WindowInstallationPage() {
  return (
    <>
      <HowToSchema
        name="How to Get Replacement Windows Installed by Suburban Construction"
        description="The complete window replacement process from free in-home estimate through installation and final walkthrough. Suburban Construction serves the Quad Cities area."
        steps={windowInstallSteps}
        image="/install1.jpg"
      />
      <PageHero
        title="Window Installation Process"
        subtitle="Precision measurement, expert installation, and a lifetime workmanship guarantee"
        breadcrumbs={[
          { label: "Windows", href: "/windows/window-styles" },
          { label: "Installation Process" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Professional Installation Matters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A high-quality replacement window is only as good as its
                installation. Even the best triple-pane krypton window will
                underperform if it is improperly measured, poorly insulated, or
                inadequately flashed against water infiltration. At Suburban
                Construction, we have refined our installation process over
                nearly four decades to eliminate every source of potential
                failure — from the first measurement to the final cleanup.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our installation crews are experienced full-time installers.
                They install windows every day, and they take personal pride in
                the quality of every installation. We stand behind that work
                with a lifetime workmanship guarantee — if anything related to
                the installation itself ever fails, we come back and fix it at
                no cost to you.
              </p>
            </div>
            <Image
              src="/install1.jpg"
              alt="Window installation crew removing old window from home"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Image
              src="/install2.jpg"
              alt="New replacement window being set into rough opening during installation"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/install3.jpg"
              alt="Window installer applying flashing and insulation around new window frame"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/install4.jpg"
              alt="Finished replacement window installation with trim and exterior caulk applied"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/install5.jpg"
              alt="Window installation in progress"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features: card grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Step-by-Step Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "Free In-Home Estimate & Measurement",
                body: "We measure each opening, assess existing frames, and discuss your goals. No charge, no obligation.",
              },
              {
                step: "2",
                title: "Custom Order",
                body: "We place a custom order based on precise field measurements. Every window is made to order — not pulled from generic inventory.",
              },
              {
                step: "3",
                title: "Scheduling & Preparation",
                body: "We schedule installation at your convenience. You clear space around each opening; we bring all tools and materials.",
              },
              {
                step: "4",
                title: "Removal of Old Windows",
                body: "We carefully remove existing windows, minimizing disturbance to surrounding trim and siding. Old windows go directly into our disposal trailer.",
              },
              {
                step: "5",
                title: "New Window Installation",
                body: "Each window is shimmed level and plumb, fastened securely, flashed, and insulated. Tested for proper operation before moving on.",
              },
              {
                step: "6",
                title: "Trim, Caulk & Final Seal",
                body: "We reinstall or replace interior and exterior trim, apply exterior caulk at all perimeter joints, and perform a final inspection.",
              },
              {
                step: "7",
                title: "Cleanup & Walkthrough",
                body: "We vacuum sills, wipe glass, and clean up all debris. We walk you through each new window before we leave.",
              },
            ].map((f) => (
              <div
                key={f.step}
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
              src="/install5.jpg"
              alt="Window installation showing professional crew at work"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Lifetime Workmanship Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                We back every window installation with a lifetime workmanship
                guarantee. If any aspect of the installation itself — flashing,
                trim, insulation, sealing — ever causes a problem, we come back
                and make it right. Combined with the manufacturer&apos;s
                warranty on the window itself, you&apos;re fully protected.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    name: "Experienced full-time installers",
                    desc: "Experienced full-time installers — they install windows every day",
                  },
                  {
                    name: "Proper flashing and insulation",
                    desc: "every opening sealed against water and air infiltration",
                  },
                  {
                    name: "Complete cleanup and walkthrough",
                    desc: "we leave no mess and answer all your questions",
                  },
                  {
                    name: "Lifetime workmanship guarantee",
                    desc: "if our installation ever causes a problem, we fix it free",
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

          {/* Secondary photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10">
            <Image
              src="/install6.jpg"
              alt="Window trim and caulk final seal"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/install7.jpg"
              alt="Window installation cleanup"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/install8.jpg"
              alt="Completed window installation"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
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

      <RelatedFAQs items={windowFaqLinks} />

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule your free estimate today. We serve Davenport, Bettendorf,
            Moline, Rock Island, and a 90-mile radius throughout Iowa and
            Illinois.
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
