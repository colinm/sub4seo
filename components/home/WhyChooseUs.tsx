import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
  "Triple pane krypton glass windows",
  "Energy Star certified products for maximum savings",
  "Lifetime workmanship guarantee on every installation",
  "Family owned & operated since 1985",
  "Over 40,000 completed installations in the Quad Cities",
  "No high-pressure sales tactics — ever",
  "Professional, courteous installation crews",
  "Excellent after-sale service and support",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/davoffice.jpg"
              alt="Suburban Construction Showroom Davenport Iowa"
              width={600}
              height={450}
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div
              className="absolute -bottom-4 -right-4 text-white rounded-lg p-4 shadow-lg"
              style={{ backgroundColor: "#2a2e40" }}
            >
              <div className="text-3xl font-bold text-accent-muted">40+</div>
              <div className="text-sm">
                Years in
                <br />
                Business
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Quad Cities Homeowners Choose Suburban Construction
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Since 1985, Suburban Construction has been the Quad Cities&apos;
              trusted name in home improvement. We&apos;re not a national
              franchise — we&apos;re your neighbors. Our reputation was built
              one satisfied customer at a time, and we&apos;re proud to say many
              of our customers have called us back for 3, 4, even 5 projects
              over the years.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-white font-bold px-6 py-3 rounded text-center transition-colors"
              >
                Get a Free Estimate
              </Link>
              <Link
                href="/about/showroom-tour"
                className="border-2 border-gray-300 hover:border-accent text-gray-700 hover:text-accent font-bold px-6 py-3 rounded text-center transition-colors"
              >
                Visit Our Showroom
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
