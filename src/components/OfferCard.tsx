import type { Offer } from '../types'

interface OfferCardProps {
  offer: Offer
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="offer-card">
      <p className="offer-card__tag">{offer.tag}</p>
      <h3>{offer.title}</h3>
      <p>{offer.description}</p>
      <button className="btn btn--ghost" type="button">
        {offer.cta}
      </button>
    </article>
  )
}
