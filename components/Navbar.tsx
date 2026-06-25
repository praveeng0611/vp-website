'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About' },
  { href: '/book',    label: 'The Book' },
  { href: '/blog',    label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className="navbar fixed top-0 left-0 right-0" style={{ zIndex: 9999 }}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold"
              style={{ background: 'linear-gradient(135deg, #E8C547, #A07820)', color: '#0A0A0A' }}
            >
              VP
            </div>
            <span className="font-serif font-bold text-base" style={{ color: 'var(--text)' }}>
              Dr. Vikas Prasad
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color:      isActive(href) ? 'var(--gold)' : 'var(--text-muted)',
                  background: isActive(href) ? 'var(--accent-bg)' : 'transparent',
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="/book" className="btn-gold hidden md:inline-flex py-2 px-4 text-sm">
            Get the Book
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ background: 'var(--accent-bg)', color: 'var(--gold)', border: '1.5px solid var(--accent-border)' }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          className="md:hidden fixed inset-0 flex flex-col"
          style={{ zIndex: 99999, background: '#0A0A0A' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-16 flex-shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold" style={{ background: 'linear-gradient(135deg, #E8C547, #A07820)', color: '#0A0A0A' }}>
                VP
              </div>
              <span className="font-serif font-bold text-base" style={{ color: 'var(--text)' }}>Dr. Vikas Prasad</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: 'var(--accent-bg)', color: 'var(--gold)', border: '1.5px solid var(--accent-border)' }}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-5 pt-6 pb-4 gap-2 flex-1 overflow-y-auto">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold text-lg"
                style={{
                  color:      isActive(href) ? '#0A0A0A' : 'var(--text)',
                  background: isActive(href) ? 'linear-gradient(135deg, #E8C547, #D4AF37)' : 'var(--bg-card)',
                  border:     `1.5px solid ${isActive(href) ? 'transparent' : 'var(--border)'}`,
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-5 pb-8 flex-shrink-0">
            <Link href="/book" onClick={() => setOpen(false)} className="btn-gold w-full justify-center py-4 text-base rounded-2xl">
              Get the Book — INR 699 / $27
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
