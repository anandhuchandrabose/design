import { describe, expect, it } from 'vitest'

import {
  isRequired,
  isValidEmail,
  isValidPhone,
  validateContactForm,
  validateLeadForm,
} from '../utils/validation'

describe('validation utilities', () => {
  it('validates required values', () => {
    expect(isRequired('value')).toBe(true)
    expect(isRequired('   ')).toBe(false)
  })

  it('validates email addresses', () => {
    expect(isValidEmail('driver@example.com')).toBe(true)
    expect(isValidEmail('driver@bad')).toBe(false)
  })

  it('validates phone numbers', () => {
    expect(isValidPhone('+1 (555) 010-2200')).toBe(true)
    expect(isValidPhone('abc123')).toBe(false)
  })

  it('returns lead form errors for invalid payload', () => {
    expect(
      validateLeadForm({
        name: '',
        email: 'bad-mail',
        phone: '12',
        vehicle: '',
      }),
    ).toEqual({
      name: 'Please enter your full name.',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number.',
      vehicle: 'Please choose a vehicle model.',
    })
  })

  it('returns contact form errors for invalid payload', () => {
    expect(
      validateContactForm({
        name: '',
        email: 'bad-mail',
        phone: '5',
        message: '',
      }),
    ).toEqual({
      name: 'Please enter your full name.',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number.',
      message: 'Please add a message so we can assist you better.',
    })
  })
})
