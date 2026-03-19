import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";

const faqs: FAQItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "Suburban Construction serves the entire Quad Cities area including Davenport and Bettendorf in Iowa, and Moline, Rock Island, and East Moline in Illinois. We also serve Sterling, Rock Falls, Muscatine, Clinton, DeWitt, and the surrounding 90-mile radius. Call us to confirm your area.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! All estimates are completely free and come with no obligation and no high-pressure sales tactics. We come to your home, measure your project, explain your options, and give you an honest price. Call 563-391-4000 or use our online contact form to schedule.",
  },
  {
    question: "How long does window installation take?",
    answer:
      "Most residential window replacement projects are completed in one day. A typical whole-house job of 10–15 windows takes 4–6 hours. Our crews work efficiently and leave your home clean when the job is done.",
  },
  {
    question: "What kind of warranty do you offer?",
    answer:
      "Suburban Construction offers a lifetime workmanship guarantee on all installations. Our window and siding products also come with manufacturer warranties. We handle any warranty claims on your behalf — if there's ever a problem, just call us.",
  },
  {
    question: "What makes triple pane krypton glass special?",
    answer:
      "Triple pane krypton glass windows have three layers of glass with krypton gas sealed between them. Krypton provides better insulation than air or argon and allows for thinner, lighter windows. Compared to single or double pane windows, triple pane krypton dramatically reduces heat transfer, lowers energy bills, reduces outside noise, and reduces condensation.",
  },
  {
    question: "What types of siding do you install?",
    answer:
      "We install vinyl siding (including the Freedom Series), steel siding, composite siding, and insulated siding. Each has different strengths — steel is the most durable, vinyl is the most popular, composite offers a wood look, and insulated siding provides extra energy efficiency. We'll help you choose the best option for your home.",
  },
  {
    question: "Can I visit a showroom?",
    answer:
      "Absolutely! Our showroom is located at 3602 North Harrison in Davenport, Iowa. We're open Monday through Friday, 7:30AM to 4:30PM, and Saturday by appointment. You can see full-size window and door displays and touch and operate the products before making any decisions.",
  },
  {
    question: "How do I prevent clogged gutters?",
    answer:
      "Suburban Construction installs the Gutter Cap system — a patented gutter protection system that uses surface tension to guide water into gutters while leaves, seeds, and debris fall to the ground. Once installed, your gutters are virtually maintenance-free. We also install the Shur Flow system as a second option.",
  },
  {
    question: "Do you do financing?",
    answer:
      "Please contact us to discuss your project and financing options. We want to make sure every Quad Cities homeowner can access quality home improvement products and installation.",
  },
  {
    question: "Are your products Energy Star certified?",
    answer:
      "Yes. Our window products meet or exceed Energy Star requirements. Our triple pane krypton glass windows provide exceptional insulation performance that can significantly reduce your heating and cooling costs year-round.",
  },
];

export default function HomeFAQAccordion() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Common questions from Quad Cities homeowners about our products and
            services.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
