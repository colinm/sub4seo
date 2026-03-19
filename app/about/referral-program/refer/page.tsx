import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ReferralForm from "@/components/shared/ReferralForm";

export const metadata: Metadata = {
  title: "Submit a Referral | Suburban Construction",
  description:
    "Refer a friend or neighbor to Suburban Construction. Fill out the referral form and we'll reach out to them shortly.",
  robots: { index: false },
};

export default function ReferralSubmitPage() {
  return (
    <>
      <PageHero
        title="Submit a Referral"
        subtitle="Know someone who could use new windows, siding, doors, or gutters? Let us know and we'll take it from there."
        breadcrumbs={[
          { label: "About Us", href: "/about/our-story" },
          { label: "Referral Program", href: "/about/referral-program" },
          { label: "Submit a Referral" },
        ]}
      />

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Referral Form</h2>
            <p className="text-gray-600 text-sm mb-6">
              Fill out your information and your friend&apos;s contact details below. We&apos;ll reach out to them shortly — and if they complete a project with us, you&apos;ll earn your referral reward.
            </p>
            <ReferralForm />
          </div>
        </div>
      </section>
    </>
  );
}
