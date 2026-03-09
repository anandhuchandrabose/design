import { useEffect, useState } from 'react'

interface NavLink {
  id: string
  label: string
}

interface HeaderProps {
  links: NavLink[]
  ctaLabel: string
}

export function Header({ links, ctaLabel }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 28)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className={`site-header ${compact ? 'site-header--compact' : ''}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#home" onClick={closeMobileMenu}>
          <img className="brand__logo" src="/assets/logo-amanat.png" alt="Amanat Auto logo" />
          <span className="brand__text">
            Amanat Auto
            <small>Official Toyota Specialists</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${mobileOpen ? 'site-nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={closeMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--solid nav-cta" href="#contact" onClick={closeMobileMenu}>
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  )
}
