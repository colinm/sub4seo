'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  referrerName: z.string().min(2, 'Your name is required'),
  referrerPhone: z
    .string()
    .min(1, 'Your phone number is required')
    .regex(/^\d{3}-\d{3}-\d{4}$/, 'Enter a valid 10-digit phone number'),
  referrerEmail: z.string().email('Valid email required'),
  refereeName: z.string().min(2, "Friend's name is required"),
  refereePhone: z
    .string()
    .min(1, "Friend's phone number is required")
    .regex(/^\d{3}-\d{3}-\d{4}$/, 'Enter a valid 10-digit phone number'),
  refereeEmail: z.string().email('Valid email required'),
  message: z.string().min(5, 'Please describe what they may need'),
  // Honeypot
  reasonss: z.string().max(0, 'Bot detected'),
})

type FormData = z.infer<typeof schema>

export default function ReferralForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { reasonss: '' },
  })

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  const referrerPhoneField = register('referrerPhone')
  const refereePhoneField = register('refereePhone')

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send referral')
      setSubmitted(true)
    } catch {
      setError('Failed to send your referral. Please call us directly at 563-391-4000.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-10 text-center">
        <div className="text-5xl mb-4 text-green-600">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-3">Thank You for the Referral!</h3>
        <p className="text-green-700 text-base leading-relaxed">
          We really appreciate you thinking of us. Our team will reach out to your friend shortly.
          If your referral completes a project with us, you&apos;ll receive your referral reward — we&apos;ll be in touch!
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
      {/* Honeypot */}
      <input
        type="text"
        {...register('reasonss')}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
        aria-hidden="true"
      />

      {/* Your Info */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
          Your Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="referrerName" className={labelClass}>Your Full Name *</label>
            <input id="referrerName" type="text" {...register('referrerName')} className={inputClass} />
            {errors.referrerName && <p className={errorClass}>{errors.referrerName.message}</p>}
          </div>
          <div>
            <label htmlFor="referrerPhone" className={labelClass}>Your Phone *</label>
            <input
              id="referrerPhone"
              type="tel"
              {...referrerPhoneField}
              onChange={(e) => {
                e.target.value = formatPhone(e.target.value)
                referrerPhoneField.onChange(e)
              }}
              placeholder="000-000-0000"
              className={inputClass}
            />
            {errors.referrerPhone && <p className={errorClass}>{errors.referrerPhone.message}</p>}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="referrerEmail" className={labelClass}>Your Email *</label>
            <input id="referrerEmail" type="email" {...register('referrerEmail')} className={inputClass} />
            {errors.referrerEmail && <p className={errorClass}>{errors.referrerEmail.message}</p>}
          </div>
        </div>
      </div>

      {/* Friend's Info */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
          Friend&apos;s Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="refereeName" className={labelClass}>Their Full Name *</label>
            <input id="refereeName" type="text" {...register('refereeName')} className={inputClass} />
            {errors.refereeName && <p className={errorClass}>{errors.refereeName.message}</p>}
          </div>
          <div>
            <label htmlFor="refereePhone" className={labelClass}>Their Phone *</label>
            <input
              id="refereePhone"
              type="tel"
              {...refereePhoneField}
              onChange={(e) => {
                e.target.value = formatPhone(e.target.value)
                refereePhoneField.onChange(e)
              }}
              placeholder="000-000-0000"
              className={inputClass}
            />
            {errors.refereePhone && <p className={errorClass}>{errors.refereePhone.message}</p>}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="refereeEmail" className={labelClass}>Their Email *</label>
            <input id="refereeEmail" type="email" {...register('refereeEmail')} className={inputClass} />
            {errors.refereeEmail && <p className={errorClass}>{errors.refereeEmail.message}</p>}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-4">
        <label htmlFor="message" className={labelClass}>
          What might they need? *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className={inputClass}
          placeholder="e.g. They've been talking about replacing their windows and gutters..."
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-accent hover:bg-accent-hover disabled:bg-accent-muted text-white font-bold py-3 rounded transition-colors text-base"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Referral'}
      </button>
    </form>
  )
}
