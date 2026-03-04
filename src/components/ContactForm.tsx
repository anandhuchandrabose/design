import { useState } from 'react'

import type { ContactFormValues } from '../types'
import type { FormErrors } from '../utils/validation'
import { hasErrors, validateContactForm } from '../utils/validation'

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<void>
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors<ContactFormValues>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof ContactFormValues, value: string) => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateContactForm(values)
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

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="contact-name">Full Name</label>
      <input
        id="contact-name"
        name="name"
        type="text"
        value={values.name}
        onChange={(event) => updateField('name', event.target.value)}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? 'contact-name-error' : undefined}
        autoComplete="name"
      />
      {errors.name ? (
        <span id="contact-name-error" className="form-error">
          {errors.name}
        </span>
      ) : null}

      <label htmlFor="contact-email">Email</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        value={values.email}
        onChange={(event) => updateField('email', event.target.value)}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? 'contact-email-error' : undefined}
        autoComplete="email"
      />
      {errors.email ? (
        <span id="contact-email-error" className="form-error">
          {errors.email}
        </span>
      ) : null}

      <label htmlFor="contact-phone">Phone Number</label>
      <input
        id="contact-phone"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={(event) => updateField('phone', event.target.value)}
        aria-invalid={Boolean(errors.phone)}
        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
        autoComplete="tel"
      />
      {errors.phone ? (
        <span id="contact-phone-error" className="form-error">
          {errors.phone}
        </span>
      ) : null}

      <label htmlFor="contact-message">How can we help?</label>
      <textarea
        id="contact-message"
        name="message"
        rows={4}
        value={values.message}
        onChange={(event) => updateField('message', event.target.value)}
        aria-invalid={Boolean(errors.message)}
        aria-describedby={errors.message ? 'contact-message-error' : undefined}
      />
      {errors.message ? (
        <span id="contact-message-error" className="form-error">
          {errors.message}
        </span>
      ) : null}

      <button className="btn btn--solid" type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitted ? (
        <p className="form-success" role="status">
          Demo submission successful. A dealership specialist will reach out soon.
        </p>
      ) : null}
    </form>
  )
}
