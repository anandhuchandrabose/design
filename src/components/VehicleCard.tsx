import type { Vehicle } from '../types'

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="vehicle-card" data-testid="vehicle-card">
      <figure>
        <img src={vehicle.image} alt={`${vehicle.name} placeholder`} loading="lazy" />
      </figure>
      <div className="vehicle-card__content">
        <p className="vehicle-card__badge">{vehicle.badge}</p>
        <h3>
          {vehicle.year} {vehicle.name}
        </h3>
        <p className="vehicle-card__trim">{vehicle.trim}</p>
        <ul>
          <li>{vehicle.mileage}</li>
          <li>{vehicle.transmission}</li>
          <li>{vehicle.fuel}</li>
        </ul>
        <p className="vehicle-card__price">From {vehicle.price}</p>
        <button className="btn btn--ghost" type="button">
          View Details
        </button>
      </div>
    </article>
  )
}
