import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import CTABanner from "@/components/home/CTABanner";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import HomeFAQAccordion from "@/components/home/HomeFAQAccordion";
import StatsCounter from "@/components/home/StatsCounter";
import LeadCaptureForm from "@/components/shared/LeadCaptureForm";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(pageSeoData["/"]);

// Photo gallery images
const galleryImages = [
  { src: "/sidinghouse.jpg", alt: "Vinyl siding installation Quad Cities" },
  { src: "/davoffice.jpg", alt: "Suburban Construction Davenport showroom" },
  { src: "/double-hung.jpg", alt: "Double hung replacement windows" },
  { src: "/steel-siding.jpg", alt: "Steel siding installation Iowa" },
  { src: "/bayandbow.jpg", alt: "Bay and bow windows Quad Cities" },
  { src: "/bettoffice.jpg", alt: "Suburban Construction Bettendorf office" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services Grid */}
      <ServicesGrid />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Stats Counter */}
      <StatsCounter />

      {/* 6. Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 7. Featured Services Deep Dive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Most Popular Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Windows */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/double-hung.jpg"
                  alt="Replacement Windows Quad Cities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Replacement Windows
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    ✓ Triple pane krypton glass standard
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Double hung, casement, bay & bow, slider, and more
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Energy Star certified
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Swing & clean for easy maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Lifetime workmanship guarantee
                  </li>
                </ul>
                <Link
                  href="/windows/window-styles"
                  className="text-amber-600 font-semibold hover:text-amber-700 text-sm"
                >
                  Explore Windows →
                </Link>
              </div>
            </div>

            {/* Siding */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/sidinghouse.jpg"
                  alt="Siding Installation Iowa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Siding Installation
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    ✓ Vinyl, steel, composite & insulated options
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Wide color selection
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Dramatically improves curb appeal
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Reduces energy costs
                  </li>
                  <li className="flex items-center gap-2">✓ Low maintenance</li>
                </ul>
                <Link
                  href="/siding/vinyl-siding"
                  className="text-amber-600 font-semibold hover:text-amber-700 text-sm"
                >
                  Explore Siding →
                </Link>
              </div>
            </div>

            {/* Doors */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/main.jpg"
                  alt="Door Installation Quad Cities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Doors</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    ✓ Entry doors in dozens of styles
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Easy vent storm doors
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Optional built-in mini-blinds
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Pre-finished color options
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Professional installation
                  </li>
                </ul>
                <Link
                  href="/doors/door-styles"
                  className="text-amber-600 font-semibold hover:text-amber-700 text-sm"
                >
                  Explore Doors →
                </Link>
              </div>
            </div>

            {/* Gutters */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/shurflow1.jpg"
                  alt="Gutter Installation Iowa Illinois"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gutters
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    ✓ Custom seamless gutters fabricated on-site
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Gutter Cap — never clean gutters again
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Shur Flow gutter guard system
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Heater Cap for ice dam prevention
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Protects your foundation and siding
                  </li>
                </ul>
                <Link
                  href="/gutters/seamless-gutters"
                  className="text-amber-600 font-semibold hover:text-amber-700 text-sm"
                >
                  Explore Gutters →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Mid-Page CTA Banner */}
      <CTABanner />

      {/* 9. Service Areas */}
      <ServiceAreasSection />

      {/* 10. Homepage FAQ */}
      <HomeFAQAccordion />

      {/* 11. Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Recent Projects &amp; Images
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-video rounded-lg overflow-hidden shadow-md group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/suburbanconstructioninc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 font-bold px-6 py-3 rounded transition-colors"
            >
              View More on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* 12. Bottom Lead Capture */}
      <section className="py-16" style={{ backgroundColor: "#2a2e40" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get Your Free Estimate Today
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            No pressure. No obligation. Just honest pricing and expert advice.
          </p>
          <LeadCaptureForm />
          <p className="text-gray-500 text-sm mt-4">
            Or call us directly:{" "}
            <a
              href="tel:+15633914000"
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              563-391-4000
            </a>
          </p>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Hear From Our Customers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["LJs-AMZb_QQ", "G8vZj5-6rKY", "o0ruKXXcrzo", "NTSy-mbr2Cg"].map(
              (videoId) => (
                <div
                  key={videoId}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Suburban Construction customer testimonial"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
