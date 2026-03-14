import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'
import { Download, Shield } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/warranty-information'])

const warrantyDocs = [
  { label: 'AMI Window Warranty', file: '/AMIWindowWarranty.pdf' },
  { label: 'AMI Vinyl Siding Warranty', file: '/AMIVinylSidingWarranty.pdf' },
  { label: 'AMI Insulated Siding Warranty', file: '/AMIInsulatedSidingWarranty.pdf' },
  { label: 'AMI Glass Breakage Warranty', file: '/AMIGlassBreakageWarranty.pdf' },
  { label: 'AMI Ultra Premium Siding Warranty', file: '/AMIUltraPremSidingWarrantyrev.pdf' },
  { label: 'AMI Warranty Rider', file: '/AMIWarrantyRider.pdf' },
  { label: 'AMI BBG Warranty Rider (Patio Door Mini-Blinds)', file: '/AMIBBGWarrantyRider.pdf' },
]

const amiSupplementalDocs = [
  { label: 'AMI Window Operation Brochure', file: '/AMI_Care_Operation_brochure.pdf' },
  { label: 'AMI Window Condensation Brochure', file: '/AMI_Condensation_brochure.pdf' },
  { label: 'AMI Patio Door Mini-Blinds Care Guide', file: '/MiniBlindsBetweentheGlass.pdf' },
]

const aristocratDocs = [
  { label: 'RTS Visual Reference Guide', file: '/RTSVisualReferenceGuide.pdf' },
  { label: 'Simu Visual Guide', file: '/SimuVisualGuide9.06.pdf' },
  { label: 'Simu Programming Sheet', file: '/Simu_Programmingsheet.pdf' },
  { label: 'Motor Instructions Packet', file: '/MotorInstructionsPacket.pdf' },
]

const republicDocs = [
  { label: 'Republic Window Warranty', file: '/RepublicWarranty.pdf' },
  { label: 'Republic / Suburban Letter', file: '/RepublicLetter.pdf' },
]

const gutterCapDocs = [
  { label: 'Gutter Cap Warranty and FAQ', file: '/guttercapwarranty.pdf' },
]

export default function WarrantyPage() {
  return (
    <>
      <PageHero
        title="Warranty Information"
        subtitle="We stand behind every product and every installation"
        breadcrumbs={[{ label: 'Resources' }, { label: 'Warranty Information' }]}
        ctaText="Contact Us with Questions"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Lifetime Guarantee */}
          <div className="bg-accent-subtle border border-accent-faint rounded-xl p-8 mb-10 text-center">
            <Shield className="w-12 h-12 text-accent-mid mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Lifetime Workmanship Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
              Suburban Construction guarantees our workmanship for the life of your installation.
              If you ever experience a problem with how your windows, siding, doors, or gutters were
              installed — not just the product itself — we will fix it at no charge. This is our
              commitment to every Quad Cities homeowner we serve.
            </p>
            <blockquote className="border-l-4 border-accent-mid pl-4 text-left max-w-2xl mx-auto text-gray-700 italic">
              &ldquo;We&apos;re one of the only companies in the nation that offers a lifetime warranty on the
              product after we install it. The company doesn&apos;t make money if things go wrong after the
              installation, so crews make sure the job is done properly.&rdquo;
              <footer className="text-sm text-gray-500 mt-1 not-italic">— Darin Wilson, Suburban Construction</footer>
            </blockquote>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Guarantee Covers</h2>
          <ul className="space-y-2 mb-8">
            {[
              'Improper installation — gaps, drafts, or alignment issues caused by our work',
              'Leaks or water infiltration due to installation defects',
              'Hardware or hardware attachment issues caused during installation',
              'Flashing and trim work performed by our crews',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <span className="text-accent-mid mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Manufacturer Warranties</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our products from Associated Materials Inc. (AMI) come with their own manufacturer
            warranties. We handle all warranty claims on behalf of our customers — you don&apos;t
            need to deal with the manufacturer directly. Just call us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {warrantyDocs.map((doc) => (
              <a
                key={doc.file}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-accent-muted hover:bg-accent-subtle transition-colors group"
              >
                <Download className="w-5 h-5 text-accent-mid shrink-0" />
                <span className="text-gray-700 group-hover:text-accent-dark text-sm font-medium">
                  {doc.label}
                </span>
              </a>
            ))}
          </div>

          {/* AMI Supplemental Info */}
          <h3 className="text-lg font-bold text-gray-900 mt-10 mb-3">Associated Materials Supplemental Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {amiSupplementalDocs.map((doc) => (
              <a
                key={doc.file}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-accent-muted hover:bg-accent-subtle transition-colors group"
              >
                <Download className="w-5 h-5 text-accent-mid shrink-0" />
                <span className="text-gray-700 group-hover:text-accent-dark text-sm font-medium">
                  {doc.label}
                </span>
              </a>
            ))}
          </div>

          {/* Aristocrat & Craft-Bilt Awnings */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">Aristocrat &amp; Craft-Bilt Awnings</h3>
          <div className="mb-4">
            <a
              href="http://www.aristocratawnings.com/about/warranty.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark underline text-sm"
            >
              Aristocrat Awnings Warranty — aristocratawnings.com
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {aristocratDocs.map((doc) => (
              <a
                key={doc.file}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-accent-muted hover:bg-accent-subtle transition-colors group"
              >
                <Download className="w-5 h-5 text-accent-mid shrink-0" />
                <span className="text-gray-700 group-hover:text-accent-dark text-sm font-medium">
                  {doc.label}
                </span>
              </a>
            ))}
          </div>

          {/* Gutter Cap */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">Gutter Cap</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {gutterCapDocs.map((doc) => (
              <a
                key={doc.file}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-accent-muted hover:bg-accent-subtle transition-colors group"
              >
                <Download className="w-5 h-5 text-accent-mid shrink-0" />
                <span className="text-gray-700 group-hover:text-accent-dark text-sm font-medium">
                  {doc.label}
                </span>
              </a>
            ))}
          </div>

          {/* Larson Storm Door */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">Larson Storm Door</h3>
          <div className="mb-8">
            <a
              href="http://www.larsondoors.com/storm_doors/warranty_claim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark underline text-sm"
            >
              Larson Storm Door Warranty Claim — larsondoors.com
            </a>
          </div>

          {/* Therma-Tru Entry Doors */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">Therma-Tru Entry Door Warranties</h3>
          <div className="flex flex-col gap-2 mb-8">
            <a
              href="http://thermatru.com/customer-support/ownersmanual-warranties/index.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark underline text-sm"
            >
              Therma-Tru Owner&apos;s Manuals &amp; Warranties — thermatru.com
            </a>
            <a
              href="http://legacy.thermatru.com/learn-plan/shopping-tips-tricks/faqs/finishing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark underline text-sm"
            >
              Therma-Tru Finishing FAQs — legacy.thermatru.com
            </a>
          </div>

          {/* Republic Windows and Doors */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">Republic Windows and Doors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {republicDocs.map((doc) => (
              <a
                key={doc.file}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-accent-muted hover:bg-accent-subtle transition-colors group"
              >
                <Download className="w-5 h-5 text-accent-mid shrink-0" />
                <span className="text-gray-700 group-hover:text-accent-dark text-sm font-medium">
                  {doc.label}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">How to Make a Warranty Claim</h3>
            <p className="text-gray-600 text-sm mb-4">
              Simply call us at{' '}
              <a href="tel:+15633914000" className="text-accent font-semibold">
                563-391-4000
              </a>{' '}
              or use our{' '}
              <Link href="/contact" className="text-accent font-semibold hover:underline">
                online contact form
              </Link>
              . Describe the issue and we&apos;ll schedule an inspection at no charge. We handle
              the rest — including any communication with the manufacturer.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500">
        <Link href="/resources/glossary" className="text-accent hover:text-accent-dark underline">
          Not sure about home improvement terminology? Visit our Glossary of Terms →
        </Link>
      </div>
    </>
  )
}
