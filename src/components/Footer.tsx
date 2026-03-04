interface FooterProps {
  year: number
}

export function Footer({ year }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>© {year} Amanat Auto. All rights reserved.</p>
        <nav aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#vehicles">Inventory</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
