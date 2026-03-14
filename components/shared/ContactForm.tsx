'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone number required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zip: z.string().min(5, 'ZIP code required'),
  besttimetocall: z.string().min(1, 'Please select a time'),
  service: z.string().optional(),
  message: z.string().optional(),
  // Honeypot
  reasonss: z.string().max(0, 'Bot detected'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm({ prefilledCity }: { prefilledCity?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { city: prefilledCity || '', reasonss: '' },
  })

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setSubmitted(true)
    } catch {
      setError('Failed to send your message. Please call us directly at 563-391-4000.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for contacting Suburban Construction. We&apos;ll be in touch soon to schedule your free estimate.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent'
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        {...register('reasonss')}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input id="name" type="text" {...register('name')} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input id="phone" type="tel" {...register('phone')} className={inputClass} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" type="email" {...register('email')} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="besttimetocall" className={labelClass}>Best Time to Call *</label>
          <select id="besttimetocall" {...register('besttimetocall')} className={inputClass}>
            <option value="">Select a time...</option>
            <option value="Morning (8AM-12PM)">Morning (8AM–12PM)</option>
            <option value="Afternoon (12PM-5PM)">Afternoon (12PM–5PM)</option>
            <option value="Evening (5PM-8PM)">Evening (5PM–8PM)</option>
            <option value="Anytime">Anytime</option>
          </select>
          {errors.besttimetocall && <p className={errorClass}>{errors.besttimetocall.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className={labelClass}>City *</label>
          <input id="city" type="text" {...register('city')} className={inputClass} />
          {errors.city && <p className={errorClass}>{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state" className={labelClass}>State *</label>
          <input id="state" type="text" {...register('state')} placeholder="IA or IL" className={inputClass} />
          {errors.state && <p className={errorClass}>{errors.state.message}</p>}
        </div>

        <div>
          <label htmlFor="zip" className={labelClass}>ZIP Code *</label>
          <input id="zip" type="text" {...register('zip')} className={inputClass} />
          {errors.zip && <p className={errorClass}>{errors.zip.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>Service Interested In</label>
          <select id="service" {...register('service')} className={inputClass}>
            <option value="">Select a service...</option>
            <option value="Windows">Replacement Windows</option>
            <option value="Siding">Siding</option>
            <option value="Doors">Doors</option>
            <option value="Gutters">Gutters</option>
            <option value="Multiple">Multiple Services</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className={inputClass}
          placeholder="Tell us about your project..."
        />
      </div>

      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full bg-accent hover:bg-accent-hover disabled:bg-accent-muted text-white font-bold py-3 rounded transition-colors text-base"
      >
        {isSubmitting ? 'Sending...' : 'Get My Free Estimate'}
      </button>
    </form>
  )
}
