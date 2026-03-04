import type { Testimonial } from '../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-card__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {'★'.repeat(testimonial.rating)}
      </p>
      <blockquote>{testimonial.quote}</blockquote>
      <p className="testimonial-card__author">{testimonial.name}</p>
      <p className="testimonial-card__role">{testimonial.role}</p>
    </article>
  )
}
