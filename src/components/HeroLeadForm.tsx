import { useState } from 'react'

import type { FormErrors } from '../utils/validation'
import { hasErrors, validateLeadForm } from '../utils/validation'
import type { LeadFormValues } from '../types'

interface HeroLeadFormProps {
  heading: string
  subheading: string
  ctaLabel: string
  vehicleOptions: string[]
  onSubmit: (values: LeadFormValues) => Promise<void>
  compact?: boolean
  idPrefix: string
}

const initialValues: LeadFormValues = {
  name: '',
  email: '',
  phone: '',
  vehicle: '',
}

export function HeroLeadForm({
  heading,
  subheading,
  ctaLabel,
  vehicleOptions,
  onSubmit,
  compact = false,
  idPrefix,
}: HeroLeadFormProps) {
  const [values, setValues] = useState<LeadFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors<LeadFormValues>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateLeadForm(values)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) {
      return
    }

    setSubmitting(true)

    try {
      await onSubmit(values)
      setSubmitted(true)
      setValues(initialValues)
      setErrors({})
    } finally {
      setSubmitting(false)
    }
  }

  const updateField = (field: keyof LeadFormValues, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value,
    }))

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }))

    if (submitted) {
      setSubmitted(false)
    }
  }

  return (
    <form className={`lead-form ${compact ? 'lead-form--compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <h3>{heading}</h3>
      <p>{subheading}</p>

      <label htmlFor={`${idPrefix}-name`}>Full Name</label>
      <input
        id={`${idPrefix}-name`}
        name="name"
        type="text"
        value={values.name}
        onChange={(event) => updateField('name', event.target.value)}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
        autoComplete="name"
      />
      {errors.name ? (
        <span id={`${idPrefix}-name-error`} className="form-error">
          {errors.name}
        </span>
      ) : null}

      <label htmlFor={`${idPrefix}-email`}>Email</label>
      <input
        id={`${idPrefix}-email`}
        name="email"
        type="email"
        value={values.email}
        onChange={(event) => updateField('email', event.target.value)}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
        autoComplete="email"
      />
      {errors.email ? (
        <span id={`${idPrefix}-email-error`} className="form-error">
          {errors.email}
        </span>
      ) : null}

      <label htmlFor={`${idPrefix}-phone`}>Phone Number</label>
      <input
        id={`${idPrefix}-phone`}
        name="phone"
        type="tel"
        value={values.phone}
        onChange={(event) => updateField('phone', event.target.value)}
        aria-invalid={Boolean(errors.phone)}
        aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
        autoComplete="tel"
      />
      {errors.phone ? (
        <span id={`${idPrefix}-phone-error`} className="form-error">
          {errors.phone}
        </span>
      ) : null}

      <label htmlFor={`${idPrefix}-vehicle`}>Preferred Vehicle</label>
      <select
        id={`${idPrefix}-vehicle`}
        name="vehicle"
        value={values.vehicle}
        onChange={(event) => updateField('vehicle', event.target.value)}
        aria-invalid={Boolean(errors.vehicle)}
        aria-describedby={errors.vehicle ? `${idPrefix}-vehicle-error` : undefined}
      >
        <option value="">Select a model</option>
        {vehicleOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors.vehicle ? (
        <span id={`${idPrefix}-vehicle-error`} className="form-error">
          {errors.vehicle}
        </span>
      ) : null}

      <button className="btn btn--solid" type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : ctaLabel}
      </button>

      {submitted ? (
        <p className="form-success" role="status">
          Demo submission successful. Our team will contact you shortly.
        </p>
      ) : null}
    </form>
  )
}
