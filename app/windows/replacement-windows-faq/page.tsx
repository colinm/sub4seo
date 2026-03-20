import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import SpeakableSchema from "@/components/seo/SpeakableSchema";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/windows/replacement-windows-faq"],
);

const faqs: FAQItem[] = [
  {
    question: "What is a replacement window?",
    answer:
      "A true replacement window is a window that is custom built to fit within the opening of an existing window. It is a custom-measured item designed to fit exactly and can normally be installed without removing or disturbing the interior and exterior stops and trim work around the window. This is different from a new construction window, which is designed to be installed in a rough framed opening during new construction.",
  },
  {
    question: "What are windows made of, and which material works best?",
    answer:
      "There are three primary frame materials. Aluminum windows conduct both heat and cold — they are very poor insulators and their painted surfaces scratch easily. Wood windows require constant painting and caulking, can absorb moisture (making them difficult to open and close), and can rot over time. Vinyl windows, by contrast, never need painting and won't show scratches because the color goes throughout the material. This is why vinyl windows have become the most popular choice for both new construction and replacement applications. Suburban Construction's solid vinyl windows are custom-sized to fit your existing opening, so you maintain your glass area without costly carpentry work inside or outside your home.",
  },
  {
    question: "Why do I want a custom-measured replacement window?",
    answer:
      "Standard or lumberyard windows are always cheaper upfront, but when you factor in the increased labor costs and the problems with trimming out the inside of the window opening, stock-size windows become a poor value. Custom windows are manufactured to fit your exact opening. They provide the best energy performance, install easily, and let you choose the style and options you want. Suburban Construction measures each opening individually after you authorize your contract — so you get a perfect fit designed specifically for your home.",
  },
  {
    question:
      "If I put new replacement windows in my house, will they improve my home's value?",
    answer:
      "Yes, for several reasons. First, you may realize savings on your heating and cooling bills. Second, they are virtually maintenance-free, which eliminates ongoing painting costs. Third, the transferability of one of the strongest warranties in the business can add to the resale value of your home. Curb appeal matters greatly to future buyers, and kitchens, bathrooms, and windows are among the top features buyers evaluate. Investing in energy-efficient windows is a strong buying tool if you ever put your home on the market.",
  },
  {
    question: "Can I install just 2 or 3 windows at a time?",
    answer:
      "Absolutely. Many of our jobs are partial orders. Many people can only afford to install a few windows at a time, and Suburban Construction will always work within your time frame and budget. You are never required to replace all your windows at once.",
  },
  {
    question: "Is there any difference in how windows are constructed?",
    answer:
      "There are two basic types of window construction. Mechanically fastened windows are screwed together at the corners. Welded windows — which are becoming more popular — use a heat welding process to fuse the corners into a single unit. Suburban Construction offers both. Our mechanically fastened windows feature a unique overlap corner design for extra strength, while our welded versions use state-of-the-art InterWeld fusion welding equipment. Be cautious of windows with mitered corners that are simply screwed together or chemically welded, as they typically do not perform as well over time.",
  },
  {
    question: "Can I replace my old windows with a different style?",
    answer:
      "Certainly. All Suburban Construction replacement windows are part of our complete Window System, so you can mix and match styles. You may want to consult with one of our design specialists to find the style that best complements your home's natural design. No matter what style or combination of styles you choose, Suburban Construction can custom-manufacture it for you.",
  },
  {
    question: "What is the process for getting new windows installed?",
    answer:
      "Three easy steps: (1) Schedule an appointment with a Suburban Construction designer to get your detailed project spec sheet. (2) After you authorize your contract, a measure technician will measure each opening individually to ensure a perfect fit. (3) We contact you to set up your installation date — then you relax and enjoy your new windows. Most full-house jobs are completed in a single day.",
  },
  {
    question: "Can windows be installed in cold or hot weather?",
    answer:
      "Yes — in fact, that is when most homeowners will experience the best results from new replacement windows. Installing in extreme temperatures lets you feel the difference immediately. Suburban Construction installs year-round throughout the Quad Cities.",
  },
  {
    question: "Will new windows reduce noise coming into my home?",
    answer:
      "Homeowners with Suburban Construction Window Systems consistently report a noticeable reduction in the amount of noise that enters their homes. The combination of double or triple pane glass, gas fill, and tight vinyl frames significantly reduces sound transmission compared to older single-pane windows.",
  },
  {
    question: "Do Suburban Construction windows require a lot of maintenance?",
    answer:
      "No. Because our frames and sashes are made of vinyl, you can say goodbye to painting and caulking. Suburban Construction windows won't stick, and you can clean them entirely from inside your home using the tilt-in feature. An occasional wipe with a damp cloth will keep your windows looking like new for years to come.",
  },
  {
    question:
      "What is more important for saving energy — the frame or the glass?",
    answer:
      "Since approximately 80% of a window is glass, real heating and cooling savings come from improved glass performance rather than a high R-value on the frame. Suburban Construction uses a Super G insulated glass spacer system as standard on all windows. This spacer system improves both the performance and the longevity of the insulated glass unit. The takeaway: when comparing windows, pay close attention to the glass package, not just the frame.",
  },
  {
    question: "What energy-saving glass options should I know about?",
    answer:
      "Suburban Construction offers an Insulated Glass Package featuring several upgrade options: Stay Clean Glass (a self-cleaning coating that uses UV light to break down organic deposits), Tuff Glass (a toughened safety glass), Low-E² glass (an excellent barrier against ultraviolet rays that fade carpet, furniture, and draperies), and argon gas fill (colorless, odorless, nonflammable, and heavier than air — improves energy efficiency and reduces noise). When equipped with Low-E² glass and argon gas, our windows automatically meet or exceed Energy Star requirements for all three U.S. climate zones. For maximum performance, ask about our FreedomMaxxx 10 triple pane krypton system.",
  },
  {
    question: "What is the National Fenestration Rating Council (NFRC)?",
    answer:
      "The NFRC is an independent, nonprofit organization made up of representatives from manufacturers, suppliers, builders, architects, state code and energy offices, utilities, consumer groups, and the federal government. The NFRC offers a single, uniform system for standardizing the energy performance of the entire window — not just the glass. NFRC ratings provide independent, credible, and accurate energy performance information so you can make an informed comparison between products from different manufacturers.",
  },
  {
    question: "What is the Energy Star program for windows?",
    answer:
      "The Energy Star program was created by the Environmental Protection Agency and the U.S. Department of Energy to help consumers identify energy-efficient products. For windows, Energy Star certification means the product has been independently tested and verified to meet minimum performance thresholds for the applicable climate zone. The program also promotes the environmental and economic benefits of these products. Suburban Construction windows equipped with Low-E² glass and argon gas meet or exceed Energy Star requirements for all three U.S. climate zones.",
  },
  {
    question: "Are all window warranties the same?",
    answer:
      "Not at all. There are as many warranty structures as there are window manufacturers. Some brand-name factory warranties cover only the sash and frame, leaving the rest to the local fabricator who may or may not cover it. Your warranty is only as strong as the company behind it. With Suburban Construction's manufacturers, your unit is warranted from the extrusion and parts to the glass and construction by a Lifetime Limited Warranty with transferability provisions — one of the most comprehensive in the industry.",
  },
  {
    question: "How much do replacement windows cost?",
    answer:
      "Replacement window costs vary depending on window style, size, glass options, and installation complexity. Single hung and double hung windows in standard sizes are the most affordable. Bay and bow windows, egress windows, and specialty shapes cost more due to their size and the additional work involved. We provide free, detailed estimates with no obligation. Most homeowners find that the energy savings make replacement windows one of the best-return investments in their home.",
  },
  {
    question: "How long does window installation take?",
    answer:
      "Most full-house window replacement jobs are completed in a 1-2 days. A typical home with 10–15 windows usually takes 1-2 days for an experienced two-person crew. Larger homes or projects involving specialty windows like bay, bow, or egress installations may require two days. We work efficiently and minimize the time your home is open to the elements during the process.",
  },
  {
    question: "How much energy will I save with new windows?",
    answer:
      "Energy savings depend on the condition of your old windows and the glass system you choose for the replacements. Replacing single-pane windows with standard double-pane Low-E units typically reduces window-related heat loss by 30–50%. Upgrading to our FreedomMaxxx triple pane krypton glass system — which is 80% more energy efficient than standard double-pane units — can produce dramatically greater savings. Many customers report noticeably lower heating bills after the first full winter with new windows.",
  },
  {
    question: "What warranty comes with replacement windows?",
    answer:
      "Our replacement windows come with a lifetime manufacturer's warranty covering the glass seal, frame, and hardware. If a glass seal ever fails (causing fogging between panes), the unit is replaced at no charge. We also provide a separate lifetime workmanship guarantee on our installation — if the installation itself ever causes a problem, we return and correct it at no cost to you.",
  },
  {
    question:
      "What is the difference between triple pane and double pane glass?",
    answer:
      "Double pane windows have two glass layers with a single insulating air or gas space between them. Triple pane windows add a third glass layer and a second gas space, creating an additional thermal barrier. Our FreedomMaxxx triple pane krypton system uses krypton gas (which insulates 50% better than argon) and multi-layer Low-E coatings for a result that is up to 80% more energy efficient than a standard double-pane unit. For Quad Cities homeowners facing cold winters, the upgrade to triple pane krypton is often worth the additional investment.",
  },
  {
    question: "How do I clean tilt-in replacement windows?",
    answer:
      "Tilt-in windows (available on our double hung and single hung lines) are designed for easy cleaning from inside your home. Simply release the tilt latches at the top corners of the sash, tilt the sash inward to a horizontal position, and clean the outer surface with a standard glass cleaner and soft cloth. Tilt the sash back up until it clicks into the closed position. We walk every customer through this process during the post-installation walkthrough.",
  },
  {
    question: "Do you offer financing for window replacement projects?",
    answer:
      "Yes, we offer financing options for qualifying customers. Financing makes it possible to enjoy the energy savings and comfort improvements of new windows right away, rather than waiting to save the full purchase price. Ask about current financing programs during your free estimate appointment.",
  },
  {
    question: "What brands of windows do you install?",
    answer:
      "Suburban Construction installs windows from manufacturers that meet our standards for quality, energy performance, and warranty support. We specialize in the Freedom Series product line, which includes the FreedomMaxxx triple pane krypton glass system. We have installed these products in thousands of Quad Cities homes since 1985 and stand confidently behind their performance and durability.",
  },
];

export default function ReplacementWindowsFAQPage() {
  return (
    <>
      <SpeakableSchema />
      <PageHero
        title="Replacement Windows FAQ"
        subtitle="Honest answers to the questions homeowners ask most often"
        breadcrumbs={[
          { label: "Windows", href: "/windows/window-styles" },
          { label: "Replacement Windows FAQ" },
        ]}
        ctaText="Get a Free Estimate"
      />

      {/* Intro: text left, image right */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Common Questions About Window Replacement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ve been answering questions about replacement windows
                since 1985. Below are the most common ones. If you don&apos;t
                find the answer you&apos;re looking for, call us or request a
                free estimate — we&apos;re happy to talk through any question
                without pressure.
              </p>
            </div>
            <Image
              src="/window2.jpg"
              alt="Replacement windows installed in Quad Cities home"
              width={600}
              height={420}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            <Image
              src="/window2.jpg"
              alt="Interior view of replacement window"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/double-hung.jpg"
              alt="Double hung replacement window"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
            <Image
              src="/triple-pane-glass.jpg"
              alt="Triple pane glass system"
              width={300}
              height={220}
              className="rounded-lg shadow-sm w-full h-40 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <FAQAccordion items={faqs} />

          <div className="mt-10 bg-accent-subtle border border-accent-faint rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Have More Questions?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our team is available by phone at{" "}
                <a
                  href="tel:5633914000"
                  className="text-accent hover:text-accent-dark font-medium"
                >
                  563-391-4000
                </a>{" "}
                or{" "}
                <a
                  href="tel:18007173066"
                  className="text-accent hover:text-accent-dark font-medium"
                >
                  1-800-717-3066
                </a>
                . You can also visit our showroom at 3602 North Harrison Street,
                Davenport, Iowa — open Monday through Friday, 7:30 AM to 4:30
                PM.
              </p>
              <Link
                href="/contact"
                className="text-accent hover:text-accent-dark font-medium"
              >
                Send us a message →
              </Link>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Contact Us →
            </Link>
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
            Schedule a free, no-pressure in-home estimate. We serve Davenport,
            Bettendorf, Moline, Rock Island, and the surrounding area.
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
