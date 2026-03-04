interface SectionTitleProps {
  title: string
  subtitle: string
  eyebrow?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = 'center',
}: SectionTitleProps) {
  return (
    <header className={`section-title section-title--${align}`}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  )
}
