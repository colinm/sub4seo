"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingEstimateButton() {
  const pathname = usePathname();

  // Hide on contact page since they're already there
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-20 right-4 z-40 lg:bottom-6 lg:right-6 bg-accent hover:bg-accent-hover text-white font-bold rounded-full shadow-2xl px-5 py-3 text-sm transition-all duration-200 hover:scale-105 btn-pulse hidden sm:flex items-center gap-2"
    >
      <span>Free Estimate</span>
    </Link>
  );
}
