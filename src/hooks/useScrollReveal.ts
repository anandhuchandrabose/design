import { useEffect } from 'react'

export function useScrollReveal(): void {
  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    if (!('IntersectionObserver' in window)) {
      revealNodes.forEach((node) => {
        node.classList.add('is-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    revealNodes.forEach((node) => observer.observe(node))

    return () => {
      observer.disconnect()
    }
  }, [])
}
