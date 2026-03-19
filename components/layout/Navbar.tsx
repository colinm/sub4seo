"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  navDropdowns,
  PHONE_TOLL_FREE,
  PHONE_TOLL_FREE_HREF,
} from "@/lib/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current <= 80) {
        setVisible(true);
      } else {
        setVisible(current < lastScrollY.current);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((v) => !v);
  const toggleMobileDropdown = (label: string) =>
    setOpenDropdown((v) => (v === label ? null : label));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ backgroundColor: "rgba(42,46,64,0.97)" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image
              src="/logo.png"
              alt="Suburban Construction"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Phone */}
            <a
              href={PHONE_TOLL_FREE_HREF}
              className="flex items-center gap-1 text-accent-muted font-semibold text-sm px-3 py-2 hover:text-accent-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE_TOLL_FREE}
            </a>

            {/* Dropdowns */}
            {navDropdowns.map((dropdown) => (
              <div key={dropdown.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-5 text-white text-sm font-medium hover:text-accent-muted transition-colors uppercase tracking-wide"
                  aria-haspopup="true"
                >
                  {dropdown.label}
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className="absolute top-full left-0 bg-brand-navy border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl z-50 py-2"
                  style={{ backgroundColor: "#2a2e40" }}
                >
                  <ul
                    className={`${
                      dropdown.items.length > 7
                        ? 'grid grid-cols-2 min-w-90'
                        : 'min-w-55'
                    }`}
                  >
                    {dropdown.items.map((item) => (
                      <li key={item.href}>
                        {item.featured ? (
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
                            style={{ color: '#93c5fd', backgroundColor: 'rgba(29,78,216,0.18)' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(29,78,216,0.30)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(29,78,216,0.18)'; (e.currentTarget as HTMLElement).style.color = '#93c5fd'; }}
                          >
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            {item.label}
                          </Link>
                        ) : item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-1 ml-2">
              <a
                href="https://www.facebook.com/SuburbanConstructionInc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/suburbanconstructioninc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-DSC5JfQoiXHf-nLXz0GWQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Get Estimate CTA */}
            <Link
              href="/contact"
              className="ml-2 bg-accent hover:bg-accent-hover text-white font-bold text-sm px-4 py-2 rounded transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={toggleMobile}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{
            backgroundColor: "rgba(42,46,64,0.98)",
            top: "64px",
            overflowY: "auto",
          }}
        >
          <div className="px-4 py-4">
            {/* Mobile CTA row */}
            <div className="flex gap-2 mb-4">
              <a
                href={PHONE_TOLL_FREE_HREF}
                className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-bold py-3 rounded text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center bg-white/10 text-white font-bold py-3 rounded text-sm"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile dropdowns */}
            {navDropdowns.map((dropdown) => (
              <div key={dropdown.label} className="border-b border-white/10">
                <button
                  className="flex items-center justify-between w-full py-3 text-white font-medium uppercase tracking-wide text-sm"
                  onClick={() => toggleMobileDropdown(dropdown.label)}
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === dropdown.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === dropdown.label && (
                  <ul className={`pb-2 ${dropdown.items.length > 6 ? 'grid grid-cols-2' : ''}`}>
                    {dropdown.items.map((item) => (
                      <li key={item.href}>
                        {item.featured ? (
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 mx-2 my-1 px-3 py-2 text-sm font-medium rounded transition-colors"
                            style={{ color: '#93c5fd', backgroundColor: 'rgba(29,78,216,0.18)' }}
                            onClick={() => setMobileOpen(false)}
                          >
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            {item.label}
                          </Link>
                        ) : item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block pl-4 py-2 text-gray-300 text-sm hover:text-white"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="block pl-4 py-2 text-gray-300 text-sm hover:text-white"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-4 mt-4 justify-center">
              <a
                href="https://www.facebook.com/SuburbanConstructionInc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/suburbanconstructioninc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-DSC5JfQoiXHf-nLXz0GWQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
