import { useMemo } from 'react'

import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroLeadForm } from './components/HeroLeadForm'
import { OfferCard } from './components/OfferCard'
import { SectionTitle } from './components/SectionTitle'
import { StatCard } from './components/StatCard'
import { TestimonialCard } from './components/TestimonialCard'
import { ValueCard } from './components/ValueCard'
import { VehicleCard } from './components/VehicleCard'
import { VideoCard } from './components/VideoCard'
import { contactInfo } from './data/contactInfo'
import { offers } from './data/offers'
import { profileHighlights } from './data/profileHighlights'
import { reviews } from './data/reviews'
import { stats } from './data/stats'
import { testimonials } from './data/testimonials'
import { values } from './data/values'
import { vehicles } from './data/vehicles'
import { videos } from './data/videos'
import { useScrollReveal } from './hooks/useScrollReveal'
import { onSubmitContact, onSubmitLead } from './services/formAdapters'

function App() {
  useScrollReveal()

  const currentYear = new Date().getFullYear()
  const vehicleOptions = useMemo(
    () => Array.from(new Set(vehicles.map((vehicle) => vehicle.name))),
    [],
  )

  return (
    <div className="site-shell">
      <Header
        links={[
          { id: 'vehicles', label: 'Inventory' },
          { id: 'test-drive', label: 'Test Drive' },
          { id: 'about', label: 'About' },
          { id: 'offers', label: 'Offers' },
          { id: 'contact', label: 'Contact' },
        ]}
        ctaLabel="Book Appointment"
      />

      <main>
        <section id="home" className="hero" data-reveal>
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__eyebrow">Driven By Trust. Designed For Every Journey.</p>
              <h1>Find Your Perfect Toyota With Premium Showroom Support.</h1>
              <p>
                Explore handpicked inventory, transparent offers, and dedicated financing guidance in
                one seamless dealership experience.
              </p>
              <div className="hero__actions">
                <a className="btn btn--solid" href="#vehicles">
                  Explore Inventory
                </a>
                <a className="btn btn--ghost" href="#test-drive">
                  Book Test Drive
                </a>
              </div>
              <figure className="hero__media">
                <img src="/assets/hero-showroom.svg" alt="Automotive showroom placeholder" />
              </figure>
            </div>

            <HeroLeadForm
              idPrefix="hero"
              heading="Request Callback"
              subheading="Share your preferred model and our specialists will contact you shortly."
              ctaLabel="Request Callback"
              vehicleOptions={vehicleOptions}
              onSubmit={onSubmitLead}
            />
          </div>
        </section>

        <section id="vehicles" className="section section--surface" data-reveal>
          <div className="container">
            <SectionTitle
              eyebrow="Spotlighted Products"
              title="Featured Inventory"
              subtitle="Browse top picks across SUV, sedan, hatchback, and pickup categories."
            />
            <div className="vehicle-grid">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>

        <section id="test-drive" className="section section--cta" data-reveal>
          <div className="container test-drive">
            <div className="test-drive__content">
              <p className="section-title__eyebrow">Book Your Test Drive</p>
              <h2>Experience Performance Before You Decide.</h2>
              <p>
                Pick your preferred model, choose a time slot, and receive instant confirmation from
                our showroom team.
              </p>
            </div>
            <HeroLeadForm
              idPrefix="test-drive"
              heading="Schedule Test Drive"
              subheading="Quick form with same-day callback confirmation."
              ctaLabel="Confirm Slot"
              vehicleOptions={vehicleOptions}
              onSubmit={onSubmitLead}
              compact
            />
          </div>
        </section>

        <section id="about" className="section" data-reveal>
          <div className="container about">
            <SectionTitle
              eyebrow="About Us"
              title="A Dealership Built Around Customer Confidence"
              subtitle="From model discovery to after-sales support, every touchpoint is structured for clarity and speed."
              align="left"
            />
            <p className="about__lead">
              Our team combines product expertise, transparent pricing, and service-first ownership
              care to help every customer buy with confidence.
            </p>
            <div className="stats-grid">
              {stats.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="section section--surface" data-reveal>
          <div className="container">
            <SectionTitle
              eyebrow="Featured Videos"
              title="Showroom Highlights"
              subtitle="Short explainers from our specialists on models, ownership, and finance."
            />
            <div className="media-row scroll-row">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        <section id="offers" className="section" data-reveal>
          <div className="container">
            <SectionTitle
              eyebrow="Special Offers"
              title="Promotions Crafted For Better Value"
              subtitle="Take advantage of current purchase, finance, and service package campaigns."
            />
            <div className="offer-grid">
              {offers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section section--surface" data-reveal>
          <div className="container">
            <SectionTitle
              eyebrow="Customer Testimonials"
              title="What Owners Say"
              subtitle="Real feedback from customers who purchased and serviced with us."
            />
            <div className="testimonial-grid scroll-row">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section" data-reveal>
          <div className="container">
            <SectionTitle
              eyebrow="Google Reviews"
              title="Recent Public Ratings"
              subtitle="A snapshot of verified customer impressions from online review platforms."
            />
            <div className="review-grid scroll-row">
              {reviews.map((review) => (
                <article key={review.id} className="review-card">
                  <div className="review-card__head">
                    <p>{review.author}</p>
                    <span>{review.timeAgo}</span>
                  </div>
                  <p className="review-card__stars">{'★'.repeat(review.rating)}</p>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" className="section section--surface" data-reveal>
          <div className="container">
            <SectionTitle
              eyebrow="More From Profile"
              title="Explore Additional Dealership Services"
              subtitle="Beyond sales: discover our programs designed for long-term ownership value."
            />
            <div className="profile-grid">
              {profileHighlights.map((item) => (
                <article key={item.id} className="profile-card">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <button className="btn btn--ghost" type="button">
                    {item.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="section" data-reveal>
          <div className="container">
            <SectionTitle
              eyebrow="Our Values"
              title="How We Work Every Day"
              subtitle="A customer-first dealership culture focused on trust, quality, and reliability."
            />
            <div className="values-grid">
              {values.map((value) => (
                <ValueCard key={value.id} value={value} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section--charcoal" data-reveal>
          <div className="container contact-section">
            <div className="contact-section__details">
              <SectionTitle
                eyebrow="Get In Touch"
                title="Let Us Help You Choose Your Next Vehicle"
                subtitle="Speak with sales or service specialists and receive personalized guidance."
                align="left"
              />
              <ul>
                <li>
                  <strong>Address:</strong> {contactInfo.address}
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
                </li>
                <li>
                  <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </li>
                <li>
                  <strong>Hours:</strong> {contactInfo.hours}
                </li>
              </ul>
              <a className="btn btn--ghost" href="#contact">
                {contactInfo.mapsLabel}
              </a>
            </div>
            <ContactForm onSubmit={onSubmitContact} />
          </div>
        </section>
      </main>

      <Footer year={currentYear} />
    </div>
  )
}

export default App
