import Link from "next/link";
import { PHONE_TOLL_FREE_HREF, PHONE_TOLL_FREE } from "@/lib/navigation";

export default function HeroSection() {
  return (
    <section className="parallax-hero relative flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2e40]/70 via-[#2a2e40]/55 to-[#2a2e40]/75" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-24">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl mb-4 text-white drop-shadow-lg">
          Suburban <span className="pe-0.5 italic text-amber-200">is</span> the
          company that goes a step beyond!
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          Replacement Windows, Siding & Doors
          <br />
          <span className="text-amber-300">in the Quad Cities</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Family owned &amp; operated since 1985. Over 35,000 installations
          completed. Lifetime workmanship guarantee on every project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded text-base transition-colors btn-pulse"
          >
            Schedule a Free Estimate
          </Link>
          <a
            href={PHONE_TOLL_FREE_HREF}
            className="border-2 border-white hover:border-amber-400 hover:text-amber-400 text-white font-bold px-8 py-4 rounded text-base transition-colors"
          >
            Call {PHONE_TOLL_FREE}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
