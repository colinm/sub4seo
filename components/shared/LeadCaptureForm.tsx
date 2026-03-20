'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z
    .string()
    .min(1, 'Phone required')
    .regex(/^\d{3}-\d{3}-\d{4}$/, 'Enter a valid 10-digit phone number'),
  email: z.string().email('Valid email required'),
  service: z.string().min(1, 'Please select a service'),
  besttimetocall: z.string().min(1, 'Please select a time'),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  message: z.string().optional(),
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

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  const phoneField = register('phone')

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: data.service,
        besttimetocall: data.besttimetocall,
        city: data.city || '',
        state: data.state || '',
        zip: data.zip || '',
        message: data.message || '',
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

  const inputClass = 'w-full px-4 py-3 rounded bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent'
  const errorClass = 'text-red-400 text-xs mt-1'

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            {...register('name')}
            placeholder="Your Name *"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="tel"
            {...phoneField}
            onChange={(e) => {
              e.target.value = formatPhone(e.target.value)
              phoneField.onChange(e)
            }}
            placeholder="000-000-0000 *"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <input
            type="email"
            {...register('email')}
            placeholder="Email Address *"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <select
            {...register('besttimetocall')}
            className={`${inputClass} text-gray-700`}
          >
            <option value="">Best Time to Call *</option>
            <option value="Morning (8AM-12PM)">Morning (8AM–12PM)</option>
            <option value="Afternoon (12PM-5PM)">Afternoon (12PM–5PM)</option>
            <option value="Evening (5PM-8PM)">Evening (5PM–8PM)</option>
            <option value="Anytime">Anytime</option>
          </select>
          {errors.besttimetocall && <p className={errorClass}>{errors.besttimetocall.message}</p>}
        </div>

        <div>
          <label htmlFor="lead-service" className="sr-only">Service Needed</label>
          <select
            id="lead-service"
            {...register('service')}
            className={`${inputClass} text-gray-700`}
          >
            <option value="">Service Needed *</option>
            <option value="Windows">Replacement Windows</option>
            <option value="Siding">Siding</option>
            <option value="Doors">Doors</option>
            <option value="Gutters">Gutters</option>
            <option value="Multiple">Multiple Services</option>
          </select>
          {errors.service && <p className={errorClass}>{errors.service.message}</p>}
        </div>

        <div>
          <input
            type="text"
            {...register('city')}
            placeholder="City"
            className={inputClass}
          />
        </div>

        <div>
          <input
            type="text"
            {...register('state')}
            placeholder="State (IA or IL)"
            className={inputClass}
          />
        </div>

        <div>
          <input
            type="text"
            {...register('zip')}
            placeholder="ZIP Code"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <textarea
            {...register('message')}
            rows={3}
            placeholder="Tell us about your project..."
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent-hover disabled:bg-accent-muted text-white font-bold px-6 py-3 rounded transition-colors text-sm"
          >
            {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
          </button>
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
    </form>
  )
}
