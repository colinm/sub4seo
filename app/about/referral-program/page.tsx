import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { pageSeoData } from "@/lib/seo/pageSeoData";
import PageHero from "@/components/shared/PageHero";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  pageSeoData["/about/referral-program"],
);

export default function ReferralProgramPage() {
  return (
    <>
      <PageHero
        title="Referral Program"
        subtitle="Share Suburban Construction with friends and neighbors — and earn a reward"
        breadcrumbs={[
          { label: "About Us", href: "/about/our-story" },
          { label: "Referral Program" },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Refer a Friend and Earn a Reward
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Suburban Construction, some of our best new customers come from
            the most trusted source there is: recommendations from people who
            have already worked with us. When a satisfied homeowner tells a
            friend or neighbor about their experience, it is the highest
            compliment we can receive.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            To show our appreciation, we have a referral program that rewards
            you when someone you refer completes a project with us. It is our
            way of saying thank you for helping us share what we do with the
            people you care about.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Participating could not be simpler. Just let your friend or neighbor
            know about Suburban Construction and ask them to mention your name
            when they call. That is it. If they complete a project, you earn a
            reward.
          </p>

          <div className="bg-accent-subtle border border-accent-faint rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-800">
                    Tell someone about us
                  </p>
                  <p className="text-gray-600 text-sm">
                    Share your experience with a friend, neighbor, co-worker, or
                    family member who could benefit from new windows, siding,
                    doors, or gutters.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-800">
                    They mention your name when they call
                  </p>
                  <p className="text-gray-600 text-sm">
                    When your referral contacts Suburban Construction, they just
                    need to mention your name so we can credit you for the
                    recommendation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-800">
                    They complete a project
                  </p>
                  <p className="text-gray-600 text-sm">
                    Once your referral completes their home improvement project
                    with us, you will receive your referral reward. No
                    complicated forms or tracking required.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-accent text-white font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                  4
                </span>
                <div>
                  <p className="font-semibold text-gray-800">
                    You receive your reward
                  </p>
                  <p className="text-gray-600 text-sm">
                    We will be in touch to deliver your referral reward as a
                    thank you for helping us grow our Quad Cities family of
                    happy homeowners.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Homeowners Refer Their Neighbors
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most of our referrals come from customers who genuinely want the
            people they care about to have the same positive experience they
            had. Common reasons customers recommend us:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Professional installation with no mess left behind
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Honest, no-pressure sales process from start to finish
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              High-quality AMI / Freedom Series products that hold up over time
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Lifetime workmanship guarantee — real warranty service, not just
              words
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>
              Responsive service even years after the original project
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-accent-mid mt-1">✓</span>A local,
              family-owned company that actually cares about its reputation
            </li>
          </ul>

          <p className="text-gray-600 leading-relaxed mb-4">
            For more details about the referral program or to let us know about
            a referral you have already made, call us at{" "}
            <a
              href="tel:5633914000"
              className="text-accent hover:underline font-semibold"
            >
              563-391-4000
            </a>{" "}
            or{" "}
            <a
              href="tel:18007173066"
              className="text-accent hover:underline font-semibold"
            >
              1-800-717-3066
            </a>{" "}
            during business hours (Monday–Friday, 7:30 AM–4:30 PM).
          </p>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Have Someone to Refer?
          </h2>
          <p className="text-gray-600 mb-6">
            Call us or have your friend or neighbor use our contact form. Just
            make sure they mention your name so we can credit you for the
            referral.
          </p>
          <Link
            href="/about/referral-program/refer"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Refer a Friend Now
          </Link>
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
