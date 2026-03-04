export interface Vehicle {
  id: string
  name: string
  trim: string
  year: number
  price: string
  mileage: string
  transmission: string
  fuel: string
  badge: string
  image: string
}

export interface Stat {
  id: string
  label: string
  value: string
  caption: string
}

export interface Offer {
  id: string
  tag: string
  title: string
  description: string
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  rating: number
}

export interface Review {
  id: string
  author: string
  rating: number
  timeAgo: string
  text: string
}

export interface ProfileHighlight {
  id: string
  title: string
  excerpt: string
  cta: string
}

export interface Video {
  id: string
  title: string
  duration: string
  description: string
  thumbnail: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: string
  mapsLabel: string
}

export type ValueIcon = 'shield' | 'service' | 'exchange' | 'financing'

export interface ValueItem {
  id: string
  title: string
  description: string
  icon: ValueIcon
}

export interface LeadFormValues {
  name: string
  email: string
  phone: string
  vehicle: string
}

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  message: string
}
