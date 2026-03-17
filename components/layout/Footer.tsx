import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  PHONE_LOCAL,
  PHONE_LOCAL_HREF,
  PHONE_TOLL_FREE,
  PHONE_TOLL_FREE_HREF,
} from "@/lib/navigation";

const serviceLinks = [
  { label: "Replacement Windows", href: "/windows/window-styles" },
  { label: "Vinyl Siding", href: "/siding/vinyl-siding" },
  { label: "Steel Siding", href: "/siding/steel-siding" },
  { label: "Entry Doors", href: "/doors/entry" },
  { label: "Storm Doors", href: "/doors/easy-vent" },
  { label: "Seamless Gutters", href: "/gutters/seamless-gutters" },
  { label: "Gutter Cap", href: "/gutters/gutter-cap" },
  { label: "Triple Pane Windows", href: "/windows/krypton" },
];

const resourceLinks = [
  {
    label: "Video Library",
    href: "https://www.youtube.com/channel/UC-DSC5JfQoiXHf-nLXz0GWQ",
    external: true,
  },
  { label: "Glossary of Terms", href: "/resources/glossary" },
  { label: "General FAQ's", href: "/resources/faq" },
  { label: "Recommended Maintenance", href: "/resources/recommended" },
  { label: "Manufacturer Warranty", href: "/resources/warranty-information" },
  { label: "Downloads", href: "/resources/downloads" },
  { label: "Support", href: "/resources/support" },
];

const cityLinks = [
  { label: "Davenport, IA", href: "/service-areas/davenport-ia" },
  { label: "Bettendorf, IA", href: "/service-areas/bettendorf-ia" },
  { label: "Moline, IL", href: "/service-areas/moline-il" },
  { label: "Rock Island, IL", href: "/service-areas/rock-island-il" },
  { label: "East Moline, IL", href: "/service-areas/east-moline-il" },
  { label: "Sterling, IL", href: "/service-areas/sterling-il" },
  { label: "Rock Falls, IL", href: "/service-areas/rock-falls-il" },
  { label: "Muscatine, IA", href: "/service-areas/muscatine-ia" },
  { label: "Clinton, IA", href: "/service-areas/clinton-ia" },
  { label: "DeWitt, IA", href: "/service-areas/dewitt-ia" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#2a2e40" }} className="text-gray-300 border-t-4 border-accent footer-texture">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt="Suburban Construction"
              width={150}
              height={45}
              className="mb-4"
            />
            <p className="text-sm text-gray-400 mb-4">
              Serving the Quad Cities area since 1985. Family owned and
              operated. Lifetime workmanship guarantee on every installation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/SuburbanConstructionInc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/suburbanconstructioninc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-DSC5JfQoiXHf-nLXz0GWQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-white/20">
              Our Services
            </h3>
            <ul className="space-y-1.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Service Areas */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-white/20">
              Resources
            </h3>
            <ul className="space-y-1.5 mb-6">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-accent-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-white/20">
              Service Areas
            </h3>
            <ul className="space-y-1.5">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-sm text-accent-muted hover:text-accent-light transition-colors"
                >
                  View All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-white/20">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-accent-muted mt-0.5 flex-shrink-0" />
                <span>
                  3602 North Harrison
                  <br />
                  Davenport, Iowa 52806
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent-muted flex-shrink-0" />
                <a
                  href={PHONE_LOCAL_HREF}
                  className="hover:text-accent-muted transition-colors"
                >
                  {PHONE_LOCAL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent-muted flex-shrink-0" />
                <a
                  href={PHONE_TOLL_FREE_HREF}
                  className="hover:text-accent-muted transition-colors"
                >
                  {PHONE_TOLL_FREE} (Toll Free)
                </a>
              </li>
            </ul>

            <h3 className="text-white font-bold uppercase tracking-wider text-sm mt-6 mb-4 pb-2 border-b border-white/20">
              Showroom Hours
            </h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-muted flex-shrink-0" />
                <span>Mon–Fri: 7:30AM – 4:30PM</span>
              </li>
              <li className="text-gray-400 text-sm pl-6">
                Sat: By Appointment
              </li>
              <li className="text-gray-400 text-sm pl-6">Sun: Closed</li>
            </ul>

            <Link
              href="/contact"
              className="mt-4 block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold text-sm py-3 px-6 rounded transition-colors btn-pulse"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {year} Suburban Construction, Inc. All rights reserved.</p>
          <div className="flex gap-4 lg:pr-36">
            <Link
              href="/about/our-story"
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/resources/glossary"
              className="hover:text-gray-300 transition-colors"
            >
              Glossary
            </Link>
            <Link
              href="/service-areas"
              className="hover:text-gray-300 transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-gray-300 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
