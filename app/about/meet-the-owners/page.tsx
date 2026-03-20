import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/about/meet-the-owners"],
);

export default function MeetTheOwnersPage() {
  return (
    <>
      <PageHero
        title="Meet the Owners"
        subtitle="A family committed to quality, integrity, and the Quad Cities community"
        bgImage="/owners-new.jpg"
        breadcrumbs={[
          { label: "About Us", href: "/about/our-story" },
          { label: "Meet the Owners" },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
            <Image
              src="/owners-new.jpg"
              alt="Brian Jr. Girskis and Darin Wilson, owners of Suburban Construction"
              width={1200}
              height={600}
              className="rounded-lg shadow-md mb-6 w-full h-auto"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Brian &ldquo;JR&rdquo; Girskis — President/Owner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Brian &ldquo;JR&rdquo; Girskis has spent a lifetime growing with
              Suburban Construction, evolving from a young boy helping around
              the office to leading the company as President and Owner. His
              journey began at the company&apos;s original Grant Street location
              in Bettendorf, where he spent summers mowing the lawn and handling
              small jobs. As he got older, JR took on greater responsibility,
              leading canvassing teams through high school and college.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              After graduating from the University of Iowa, JR officially joined
              the company full-time in 2002 as General Manager. His leadership,
              work ethic, and deep understanding of the business quickly became
              evident. In the spring of 2007, he was promoted to President, when
              his father entrusted him with guiding the company into its next
              chapter. Recognizing the need for fresh direction, that transition
              marked a pivotal moment in Suburban&apos;s history.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Under JR&apos;s leadership, Suburban Construction has reached new
              levels of performance, growth, and customer satisfaction. His
              approach blends hands-on experience with forward-thinking
              leadership, ensuring the company continues to evolve while staying
              grounded in its core values.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, Suburban remains a proud, family-owned business, with the
              Girskis family committed to its long-term success for generations
              to come.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Outside of work, JR is deeply family-oriented. He and his wife,
              Kristine, are raising their four children&mdash;Jack, Kate, Paige,
              and Annie. He values time spent with family and friends and is
              actively involved in Scouting, the Knights of Columbus and the
              Lions Club. A loyal Hawkeye fan, JR also enjoys spending weekends
              in northern Wisconsin, a place that reflects his appreciation for
              tradition, connection, and the outdoors.
            </p>
            <div className="clear-both" />
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Darin Wilson — Vice President/Owner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Darin Wilson, Co-Owner and Vice President of Suburban Construction
              Inc., is a dedicated leader known for his strong work ethic,
              commitment to quality, and passion for building lasting
              relationships both in business and in life. In his professional
              role, Darin helps guide the company&apos;s operations, ensuring
              projects are completed with precision and integrity. His
              leadership style reflects not only his industry expertise but also
              the values he prioritizes outside of work&mdash;family, community,
              and reliability.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At home, Darin shares his life with his partner, Amanda Kosarek,
              and their blended family. Together they are raising six children:
              his son Griffin, along with Amanda&apos;s children Kaylee, Kaiden,
              Keira, Karrine, and Kam. Family is at the center of everything
              Darin does, and he takes pride in being actively involved in the
              lives of each child. Whether it&apos;s supporting school
              activities, attending sporting events, or cheering on dance
              performances, Darin and Amanda are deeply committed to helping
              their kids grow, succeed, and stay engaged in their community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              When they&apos;re not busy with work and activities, the family
              enjoys spending quality time together, especially on trips to
              Florida and visits to Walt Disney World. These vacations provide a
              chance to recharge, create lasting memories, and celebrate the
              importance of togetherness. With strong ties to their community
              through school programs, sports, dance, and extracurricular
              involvement, the Wilson-Kosarek family exemplifies a balance of
              hard work, family dedication, and a love for shared experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Come Meet Us in Person
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our showroom at 3602 North Harrison, Davenport, IA — open
            Monday through Friday, 7:30 AM to 4:30 PM. Or contact us to schedule
            a free home estimate at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/about/showroom-tour"
              className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-3 rounded border border-gray-300 transition-colors"
            >
              Visit the Showroom
            </Link>
          </div>
          <p className="mt-6 text-gray-600">
            Call us:{" "}
            <a
              href="tel:5633914000"
              className="text-accent font-semibold hover:underline"
            >
              563-391-4000
            </a>{" "}
            or{" "}
            <a
              href="tel:18007173066"
              className="text-accent font-semibold hover:underline"
            >
              1-800-717-3066
            </a>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
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
