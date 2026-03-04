import type { ContactFormValues, LeadFormValues } from '../types'

export type FormErrors<T> = Partial<Record<keyof T, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_REGEX = /^\+?[0-9\s()-]{7,20}$/

export function isRequired(value: string): boolean {
  return value.trim().length > 0
}

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim())
}

export function isValidPhone(value: string): boolean {
  return PHONE_REGEX.test(value.trim())
}

export function validateLeadForm(values: LeadFormValues): FormErrors<LeadFormValues> {
  const errors: FormErrors<LeadFormValues> = {}

  if (!isRequired(values.name)) {
    errors.name = 'Please enter your full name.'
  }

  if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!isRequired(values.vehicle)) {
    errors.vehicle = 'Please choose a vehicle model.'
  }

  return errors
}

export function validateContactForm(
  values: ContactFormValues,
): FormErrors<ContactFormValues> {
  const errors: FormErrors<ContactFormValues> = {}

  if (!isRequired(values.name)) {
    errors.name = 'Please enter your full name.'
  }

  if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!isRequired(values.message)) {
    errors.message = 'Please add a message so we can assist you better.'
  }

  return errors
}

export function hasErrors<T>(errors: FormErrors<T>): boolean {
  return Object.keys(errors).length > 0
}
