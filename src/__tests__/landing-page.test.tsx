import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from '../App'
import { vehicles } from '../data/vehicles'

describe('landing page', () => {
  it('includes primary navigation anchors', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Inventory' })).toHaveAttribute(
      'href',
      '#vehicles',
    )
    expect(within(nav).getByRole('link', { name: 'Test Drive' })).toHaveAttribute(
      'href',
      '#test-drive',
    )
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('renders vehicle cards from the source data module', () => {
    render(<App />)

    expect(screen.getAllByTestId('vehicle-card')).toHaveLength(vehicles.length)
  })

  it('shows hero lead form validation messages when submitted empty', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { name: 'Request Callback' })
    const form = heading.closest('form')

    if (!form) {
      throw new Error('Request Callback form was not found')
    }

    fireEvent.click(within(form).getByRole('button', { name: 'Request Callback' }))

    expect(within(form).getByText('Please enter your full name.')).toBeInTheDocument()
    expect(within(form).getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(within(form).getByText('Please enter a valid phone number.')).toBeInTheDocument()
    expect(within(form).getByText('Please choose a vehicle model.')).toBeInTheDocument()
  })
})
