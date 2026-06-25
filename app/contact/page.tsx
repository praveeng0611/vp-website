'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', organisation: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: wire to a real API route if needed
    setTimeout(() => setStatus('sent'), 1000)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">Contact</div>
          <h1 className="font-serif font-black text-5xl md:text-6xl leading-tight mb-4" style={{ color: 'var(--text)' }}>
            Let&apos;s<br/><span className="gradient-gold">Connect</span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-muted)' }}>
            For speaking engagements, media enquiries, workshop facilitation, or simply to share your thoughts on the book.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="card-glow p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif font-bold text-2xl mb-2" style={{ color: 'var(--text)' }}>Message Received</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. Dr. Prasad will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glow p-8 space-y-5">
                <h2 className="font-serif font-bold text-2xl mb-6" style={{ color: 'var(--text)' }}>Send a Message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Your Name *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                      style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      placeholder="Full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                      style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                    Organisation
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                    style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    placeholder="Company or institution"
                    value={form.organisation}
                    onChange={e => setForm({ ...form, organisation: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1.5 font-semibold" style={{ color: 'var(--text-muted)' }}>
                    Message *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-colors"
                    style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    rows={5}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold w-full justify-center py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Connect */}
            <div className="card-glow p-6">
              <h3 className="font-serif font-bold text-lg mb-4" style={{ color: 'var(--text)' }}>Connect Directly</h3>
              <div className="space-y-4 text-sm">
                <a
                  href="https://www.linkedin.com/in/dr-vikas-prasad/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-amber-400"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  LinkedIn: /in/dr-vikas-prasad
                </a>
                <div className="flex items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                    <span style={{ color: 'var(--gold)' }}>🌐</span>
                  </div>
                  vp.gnosisolabs.com
                </div>
              </div>
            </div>

            {/* Engagements */}
            <div className="card-glow p-6">
              <h3 className="font-serif font-bold text-lg mb-4" style={{ color: 'var(--text)' }}>Speaking & Workshops</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Keynote speaking at corporate events and summits',
                  'Negotiation masterclasses and workshops',
                  'Executive coaching and advisory',
                  'Media interviews and podcasts',
                  'Academic lectures and business school sessions',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Book */}
            <div className="card-glow p-6">
              <p className="font-serif italic text-sm mb-1" style={{ color: 'var(--gold)' }}>The Negotiation Code</p>
              <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Beyond the Table · INR 699 / $27</p>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-2 px-3">Amazon India</a>
                <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-3">Flipkart</a>
                <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-3">Amazon US</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #1a1408, #0a0a0a)', borderTop: '1px solid var(--accent-border)' }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="font-serif italic text-lg md:text-xl mb-4" style={{ color: 'var(--text-muted)' }}>
            &ldquo;The strongest negotiators are those who understand the unseen forces shaping every conversation.&rdquo;
          </p>
          <p className="text-sm" style={{ color: 'var(--gold)' }}>— Dr. Vikas Prasad, The Negotiation Code</p>
        </div>
      </section>
    </>
  )
}
