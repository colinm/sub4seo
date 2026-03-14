import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/about/meet-the-owners'])

export default function MeetTheOwnersPage() {
  return (
    <>
      <PageHero
        title="Meet the Owners"
        subtitle="A family committed to quality, integrity, and the Quad Cities community"
        bgImage="/owners.jpg"
        breadcrumbs={[
          { label: 'About Us', href: '/about/our-story' },
          { label: 'Meet the Owners' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
            <Image
              src="/owners.jpg"
              alt="Brian Jr. Girskis and Darin Wilson, owners of Suburban Construction"
              width={480}
              height={320}
              className="rounded-lg shadow-md mb-6 float-none md:float-left md:mr-6 md:mb-2 w-full md:w-auto"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Brian Jr. Girskis — President/Owner</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Brian &ldquo;JR&rdquo; Girskis has worn many hats at Suburban Construction. As a young boy when
              the office was on Grant Street in Bettendorf, JR spent summers mowing the yard and cleaning
              up around the office. When he got older in high school and throughout college, JR ran a
              canvassing team. Upon graduation from the University of Iowa, he accepted a position as
              General Manager of Suburban Construction in 2002.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In spring of 2007 JR was promoted to President of Suburban. Brian&apos;s father with confidence
              saw that the company needed a fresh direction and turned over the reins to his son. Under
              JR&apos;s leadership the company has reached new heights and increased customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Girskis family still owns and operates this thriving business and will for generations
              to come. JR and his bride Kristine have 4 kids Jack, Kate, Paige and Annie. JR enjoys
              spending time with his wife Kristine and his kids, as well as spending time with his friends
              and extended family. Scouting, the Hawkeyes and northern Wisconsin is what you will find are
              JR&apos;s favorite weekend traditions.
            </p>
            <div className="clear-both" />
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Darin Wilson — Vice President/Owner</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hello, my name is Darin Wilson. I am the Vice President and co-owner of Suburban
              Construction Inc, and long time best friend of Brian JR Girskis.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I have been close with the Girskis family for over 20 years and have been in the
              business full time for over 11 years.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              &ldquo;Growing up&rdquo; in this business can be tricky, but luckily I got to see how it should be
              done through Suburban Construction. Brian Girskis Sr. instilled great knowledge in this
              trade along with a simple aspect of customer service. This is what truly sets Suburban
              apart from the rest.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I have received many certifications through the years with my time at Suburban. I
              completed and became certified in the &ldquo;Therma Tru&apos;s Certified Installation Training
              Program&rdquo; with Therma Tru Doors Inc. in Butler Indiana. Earned a certificate of merit by
              completing the &ldquo;Gutter Cap Training and Technical Seminar&rdquo; at the Gutter Cap training
              facility in Naperville IL. I have successfully completed the Occupational Training and
              Supply of the &ldquo;Lead Safety for Renovation, Repair, and Painting&rdquo; program mandated by the
              Environmental Protection Agency. I became a certified siding installer when I passed the
              VSI &ldquo;Vinyl Siding Institute Certified Installer Program&rdquo; in which is required through
              ASTMD4756 in which the manufacturer&apos;s published installation instructions are upheld to
              prevent voided manufacturer&apos;s warranty on siding. With these certifications coupled with
              all of my product knowledge I have built the best resume I know how for our customers and
              home owners.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              JR and I have worked hard to put everything we can back into the company in order to
              continue that focus on customer service as well as providing the best quality exterior
              remodeling products we can to our customers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In my &ldquo;spare&rdquo; time I enjoy spending time with my son Griffin and hanging out at Disney
              World.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I feel so lucky to have fallen into a great company like Suburban Construction and am
              proud of the work we do here.
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
            Visit our showroom at 3602 North Harrison, Davenport, IA — open Monday through Friday,
            7:30 AM to 4:30 PM. Or contact us to schedule a free home estimate at your convenience.
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
            Call us: <a href="tel:5633914000" className="text-accent font-semibold hover:underline">563-391-4000</a>
            {' '}or{' '}
            <a href="tel:18007173066" className="text-accent font-semibold hover:underline">1-800-717-3066</a>
          </p>
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
