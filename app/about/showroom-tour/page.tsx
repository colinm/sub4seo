import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/about/showroom-tour'])

export default function ShowroomTourPage() {
  return (
    <>
      <PageHero
        title="Visit Our Showroom"
        subtitle="See windows, doors, and siding at full size — touch and operate products before you decide"
        bgImage="/davoffice2.png"
        breadcrumbs={[
          { label: 'About Us', href: '/about/our-story' },
          { label: 'Visit the Showroom' },
        ]}
        ctaText="Get a Free Estimate"
      />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">

          {/* Showroom photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Image src="/1.jpg" alt="Suburban Construction showroom interior" width={400} height={280} className="rounded-lg shadow-sm w-full h-auto" />
            <Image src="/2.jpg" alt="Suburban Construction showroom window displays" width={400} height={280} className="rounded-lg shadow-sm w-full h-auto" />
            <Image src="/3.jpg" alt="Suburban Construction showroom door and siding displays" width={400} height={280} className="rounded-lg shadow-sm w-full h-auto" />
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Suburban Construction boasts one of the most comprehensive remodeling showrooms in the
            Midwest, if not the nation. Just like our jingle says, Windows, Siding and Doors, we
            have filled our showroom with just that and more. When customers arrive it can be
            overwhelming at first but there is always someone ready to guide you through the process
            of choosing the right products for you, and your home to truly complete your vision.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our professional and knowledgeable office staff is here to serve and guide you for all
            your before, during and after the sale needs. Suburban Construction was founded on the
            principles of customer first and customer service and our staff excels in these fields.
            From setting appointments with your account manager, processing your job before and after
            installation, to handling and scheduling a service issue should a concern arise in the
            future, they are here to serve you, our customer. They are happy to tour the showroom
            with you to point out options you may not have even considered and to broaden your
            knowledge in your home improvement journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Image src="/davoffice.jpg" alt="Suburban Construction Davenport showroom exterior" width={480} height={320} className="rounded-lg shadow-md w-full h-auto" />
            <Image src="/davoffice2.png" alt="Suburban Construction North Harrison facility" width={480} height={320} className="rounded-lg shadow-md w-full h-auto" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Windows</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We attempted to display many of the thousands of options when it comes to the window
            offerings by Suburban Construction. Double Hung, Single Hung, Sliding, Casement,
            Awning, Garden, and Bay and Bow windows are all here on display for you to tour just to
            make sure you know what you are getting for your home. We tried to display as many
            decorative options as possible with wood grain, grids and glass, along with many larger
            window units. You can also see many fine examples of our premium bay and bow window
            systems. You become your own interior window designer with Suburban Construction.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our heat lamp display shows the difference of how you can conserve energy in your home
            with new windows. It is the only display in the area that offers FREEDOM Maxx Low-E HP
            which is standard on our windows. FREEDOM Maxx features a multiple-layer
            vacuum-deposition Low-E HP insulating glass unit filled with argon gas, which delivers
            performance up to 40% more energy-efficient than many other types of Low-E or Mid-E
            glass systems. Additionally Suburban Construction&apos;s windows with FREEDOM Maxx or
            FREEDOM Maxx 10 are twice as energy efficient as uncoated insulating glass units. We
            invite you to stop by and &ldquo;Feel The Difference&rdquo; for yourself!
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We have also built a small home in the middle of our showroom floor with windows
            actually installed so that you can see a true depiction of what your home could look
            like. On the exterior of the home we have different colors of siding showing how the
            windows and siding can be tied together along with aluminum gutters, soffit and fascia.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Siding</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            If it is siding you are looking for we have you covered there as well. Vinyl, Steel,
            and the all new Align composite siding are all offerings Suburban Construction can do
            for you, and it is all here on display. So many color offerings it will make your head
            spin with the majority of colors hanging on the walls. If you do not see a color, just
            ask, chances are we can make it happen.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Doors</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Doors play a big part in our showroom as well. We here at Suburban have been told we
            have more doors on display than the manufacturer itself. Want a smooth and painted door?
            Want wood grain and stained? How about wood grain painted and stained? Our fiberglass
            doors are chalked full of options. Fancy glass, plain glass, grids, you name it we have
            it. We can even give you a pink door if your heart desires. Do not forget about the
            patio doors. Equipped with energy efficient glass that will keep you warm in the winter
            and cool in the summer with other decorative styles and at a cost effective outcome
            it&apos;s hard to pass them up. We can even add raise and tilt blinds between the glass
            panes if privacy is what you are looking for.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Gutter Protection</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Are you looking for some gutter protection while you&apos;re at it? Who wants to spend
            fall and spring, and heck summer added to that, cleaning out gutters when you could be
            doing something else? We not only help save you the haste but we also put time back in
            your pocket to spend it somewhere else instead of elbow deep in disgusting mud and
            leaves clogging your gutters. It can all be seen here in the Suburban Construction
            Showroom. Take advantage of it and we hope you drop by to see us.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Location &amp; Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 font-semibold mb-1">Address</p>
                <p className="text-gray-600">3602 North Harrison Street</p>
                <p className="text-gray-600 mb-3">Davenport, Iowa 52806</p>
                <p className="text-gray-700 font-semibold mb-1">Phone</p>
                <p className="text-gray-600">
                  <a href="tel:5633914000" className="text-accent hover:underline">563-391-4000</a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:18007173066" className="text-accent hover:underline">1-800-717-3066</a>
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-1">Hours</p>
                <p className="text-gray-600">Monday – Friday: 7:30 AM – 4:30 PM</p>
                <p className="text-gray-600">Saturday: By appointment</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0!2d-90.5776!3d41.5473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e22e2c2c2c2c2c%3A0x0!2s3602+N+Harrison+St%2C+Davenport%2C+IA+52806!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suburban Construction Showroom Location"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Plan Your Visit or Request an Estimate
          </h2>
          <p className="text-gray-600 mb-6">
            Stop by during business hours — no appointment needed Monday through Friday.
            Or contact us to schedule a free in-home estimate at a time that works for you.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get a Free Estimate
          </Link>
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
