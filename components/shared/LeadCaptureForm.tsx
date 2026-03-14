'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(7, 'Phone required'),
  service: z.string().min(1, 'Please select a service'),
  city: z.string().optional(),
  reasonss: z.string().max(0, 'Bot detected'),
})

type FormData = z.infer<typeof schema>

interface LeadCaptureFormProps {
  prefilledCity?: string
  className?: string
}

export default function LeadCaptureForm({ prefilledCity, className = '' }: LeadCaptureFormProps) {
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
      const payload = {
        name: data.name,
        phone: data.phone,
        service: data.service,
        city: data.city || '',
        email: '',
        state: '',
        zip: '',
        besttimetocall: 'Anytime',
        message: `Quick lead form submission. Service: ${data.service}`,
        reasonss: data.reasonss,
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please call us at 563-391-4000.")
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-bold text-green-400">✓ Request received!</p>
        <p className="text-gray-300 text-sm mt-1">We&apos;ll call you shortly to schedule your free estimate.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      {/* Honeypot */}
      <input
        type="text"
        {...register('reasonss')}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            {...register('name')}
            placeholder="Your Name *"
            className="w-full px-4 py-3 rounded bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="flex-1">
          <input
            type="tel"
            {...register('phone')}
            placeholder="Phone Number *"
            className="w-full px-4 py-3 rounded bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div className="flex-1">
          <select
            {...register('service')}
            className="w-full px-4 py-3 rounded bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Service Needed *</option>
            <option value="Windows">Replacement Windows</option>
            <option value="Siding">Siding</option>
            <option value="Doors">Doors</option>
            <option value="Gutters">Gutters</option>
            <option value="Multiple">Multiple Services</option>
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent hover:bg-accent-hover disabled:bg-accent-muted text-white font-bold px-6 py-3 rounded whitespace-nowrap transition-colors text-sm"
        >
          {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
        </button>
      </div>

      {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
    </form>
  )
}
