import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold" style={{ background: 'linear-gradient(135deg, #E8C547, #A07820)', color: '#0A0A0A' }}>
                VP
              </div>
              <span className="font-serif font-bold text-lg" style={{ color: 'var(--text)' }}>Dr. Vikas Prasad</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Author · Negotiation Expert · Speaker
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-subtle)' }}>
              Two decades at the negotiation table, now sharing the code.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/dr-vikas-prasad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text)' }}>Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Dr. Prasad' },
                { href: '/book', label: 'The Negotiation Code' },
                { href: '/blog', label: 'Insights & Articles' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-amber-400" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: 'var(--text)' }}>The Book</h4>
            <p className="font-serif italic text-sm mb-1" style={{ color: 'var(--gold)' }}>The Negotiation Code</p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>Beyond the Table</p>
            <p className="text-xs mb-4" style={{ color: 'var(--text-subtle)' }}>
              Verses Kindler Publication · 2026<br/>
              ISBN: 978-93-47494-49-9
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://link.amazon/B0egR2Wtl" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-2 px-3 rounded-lg w-fit">
                Amazon
              </a>
              <a href="https://www.flipkart.com/product/p/itme?pid=9789347494604" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-3 rounded-lg w-fit">
                Flipkart
              </a>
              <a href="https://www.verseskindlerpublication.com/product-page/the-negotiation-code-beyond-the-table" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-3 rounded-lg w-fit">
                Publisher
              </a>
            </div>
          </div>
        </div>

        <div className="divider pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
            © {new Date().getFullYear()} Dr. Vikas Prasad. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
            A{' '}
            <a href="https://gnosisolabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Gnosiso Labs
            </a>
            {' '}initiative
          </p>
        </div>
      </div>
    </footer>
  )
}
