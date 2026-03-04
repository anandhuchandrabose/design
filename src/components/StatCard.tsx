import type { Stat } from '../types'

interface StatCardProps {
  stat: Stat
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="stat-card">
      <p className="stat-card__value">{stat.value}</p>
      <h3>{stat.label}</h3>
      <p>{stat.caption}</p>
    </article>
  )
}
