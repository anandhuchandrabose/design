import type { JSX } from 'react'

import type { ValueIcon, ValueItem } from '../types'

interface ValueCardProps {
  value: ValueItem
}

const iconMap: Record<ValueIcon, JSX.Element> = {
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.7 8 10 4.5-1.3 8-5 8-10V6l-8-3Z" />
    </svg>
  ),
  service: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 7h-3l-1-3H8L7 7H4v10h2a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h2V7h-4Zm-11 0 .5-1h5L15 7H9Zm0 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  ),
  exchange: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7h11l-2-2 1.4-1.4L21 8l-4.6 4.4L15 11l2-2H6V7Zm12 10H7l2 2-1.4 1.4L3 16l4.6-4.4L9 13l-2 2h11v2Z" />
    </svg>
  ),
  financing: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 2 7v2h20V7L12 2Zm8 9H4v9h16v-9ZM11 13h2v5h-2v-5Zm0-3h2v2h-2v-2Z" />
    </svg>
  ),
}

export function ValueCard({ value }: ValueCardProps) {
  return (
    <article className="value-card">
      <span className="value-card__icon">{iconMap[value.icon]}</span>
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </article>
  )
}
