import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import { Download } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/resources/downloads'])

const downloadGroups = [
  {
    title: 'Product Brochures',
    files: [
      { label: 'Windows Brochure', file: '/windows.pdf' },
      { label: 'Siding Brochure', file: '/siding.pdf' },
      { label: 'Storm Door Brochure', file: '/stormdoor.pdf' },
      { label: 'Pre-Finished Color Palette', file: '/prefinish.pdf' },
    ],
  },
  {
    title: 'Warranty Documents',
    files: [
      { label: 'AMI Window Warranty', file: '/AMIWindowWarranty.pdf' },
      { label: 'AMI Vinyl Siding Warranty', file: '/AMIVinylSidingWarranty.pdf' },
      { label: 'AMI Insulated Siding Warranty', file: '/AMIInsulatedSidingWarranty.pdf' },
      { label: 'AMI Glass Breakage Warranty', file: '/AMIGlassBreakageWarranty.pdf' },
      { label: 'AMI Ultra Premium Siding Warranty', file: '/AMIUltraPremSidingWarrantyrev.pdf' },
      { label: 'AMI Warranty Rider', file: '/AMIWarrantyRider.pdf' },
    ],
  },
  {
    title: 'Care & Maintenance Guides',
    files: [
      { label: 'AMI Care & Operation Brochure', file: '/AMI_Care_Operation_brochure.pdf' },
      { label: 'AMI Condensation Brochure', file: '/AMI_Condensation_brochure.pdf' },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        subtitle="Product brochures, warranty documents, and care guides"
        breadcrumbs={[{ label: 'Resources' }, { label: 'Downloads' }]}
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {downloadGroups.map((group) => (
            <div key={group.title} className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.files.map((file) => (
                  <a
                    key={file.file}
                    href={file.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition-colors group"
                  >
                    <Download className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-amber-700 text-sm font-medium">
                      {file.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
