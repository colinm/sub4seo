import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { pageSeoData } from '@/lib/seo/pageSeoData'
import ContactForm from '@/components/shared/ContactForm'
import { Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSeoData['/contact'])

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative py-16 text-white text-center"
        style={{ backgroundColor: '#2a2e40' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us — Get a Free Estimate</h1>
          <p className="text-gray-300 text-lg">
            No pressure. No obligation. Just honest pricing and expert advice from the Quad Cities&apos;
            most trusted home improvement contractor.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-mid mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+15633914000" className="text-gray-600 hover:text-accent block">
                      563-391-4000
                    </a>
                    <a href="tel:+18007173066" className="text-gray-600 hover:text-accent block">
                      1-800-717-3066 (Toll Free)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-mid mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Showroom Address</p>
                    <p className="text-gray-600">
                      3602 North Harrison<br />
                      Davenport, Iowa 52806
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-mid mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Showroom Hours</p>
                    <p className="text-gray-600">
                      Monday – Friday: 7:30AM – 4:30PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.123!2d-90.6029!3d41.5623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMzJzQ0LjMiTiA5MMKwMzYnMTAuNCJX!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Suburban Construction location map"
                />
              </div>

              <div className="mt-6 p-4 bg-accent-subtle border border-accent-faint rounded-lg">
                <p className="text-sm text-accent-dark font-medium">
                  We serve all of the Quad Cities and surrounding 90-mile radius including
                  Davenport, Bettendorf, Moline, Rock Island, East Moline, Sterling, Rock Falls,
                  Muscatine, Clinton, DeWitt, and more.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Schedule Your Free Estimate</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Fill out the form below and a member of our team will contact you to schedule your free,
                  no-obligation home estimate.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
