import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs?: Breadcrumb[];
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({
  title,
  subtitle,
  bgImage = "/main.jpg",
  breadcrumbs,
  ctaText,
  ctaHref = "/contact",
}: PageHeroProps) {
  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      )}
      <section
        className="relative py-20 md:py-28 text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 page-hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex justify-center mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-gray-300">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent-muted transition-colors"
                  >
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>/</span>
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-accent-muted transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {ctaText && (
            <Link
              href={ctaHref}
              className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors text-base"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
