import type { Offer } from '../types'

export const offers: Offer[] = [
  {
    id: 'cashback',
    tag: 'Limited Time',
    title: 'Up To $4,500 Cashback',
    description:
      'Drive home selected models with direct cashback and zero hidden dealership fees.',
    cta: 'View Eligible Models',
  },
  {
    id: 'service-pack',
    tag: 'Value Pack',
    title: '5-Year Service Plan Included',
    description:
      'Get scheduled maintenance, road-side assistance, and consumables coverage in one package.',
    cta: 'Compare Plans',
  },
  {
    id: 'finance',
    tag: 'Finance Offer',
    title: 'From 1.99% APR Financing',
    description:
      'Flexible tenures and quick approvals with dealership finance specialists.',
    cta: 'Estimate Monthly Cost',
  },
]
