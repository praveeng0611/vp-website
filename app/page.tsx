'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { QUOTES, TESTIMONIALS, CHAPTERS, BOOK } from '@/lib/data'

const FEATURED_CHAPTERS = CHAPTERS.slice(0, 6)

function QuoteCarousel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % QUOTES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const q = QUOTES[idx]
  return (
    <div className="relative min-h-[140px] flex flex-col justify-center">
      <div key={idx} style={{ animation: 'fadeIn 0.6s ease' }}>
        <p className="font-serif italic text-xl md:text-2xl leading-relaxed mb-4" style={{ color: 'var(--text)' }}>
          &ldquo;{q.text}&rdquo;
        </p>
      </div>
      {/* dots */}
      <div className="flex gap-2 mt-6">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="w-2 h-2 rounded-full transition-all"
            style={{ background: i === idx ? 'var(--gold)' : 'var(--border)', transform: i === idx ? 'scale(1.4)' : 'scale(1)' }}
            aria-label={`Quote ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .hero-animate { animation: fadeIn 0.9s ease both; }
        .hero-animate-delay { animation: fadeIn 0.9s ease 0.2s both; }
        .hero-animate-delay2 { animation: fadeIn 0.9s ease 0.4s both; }
        .hero-animate-delay3 { animation: fadeIn 0.9s ease 0.6s both; }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.06) 0%, transparent 60%), var(--bg)',
        }}
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label mb-6 hero-animate">Author · Speaker · Negotiation Expert</div>
            <h1 className="font-serif font-black text-5xl md:text-6xl xl:text-7xl leading-tight mb-6 hero-animate-delay">
              Dr. Vikas<br/>
              <span className="gradient-gold">Prasad</span>
            </h1>
            <p className="text-lg leading-relaxed mb-4 hero-animate-delay2" style={{ color: 'var(--text-muted)', maxWidth: '480px' }}>
              Two decades in boardrooms, factories, and leadership forums. Now distilled into one transformative guide.
            </p>

            {/* Book promo strip */}
            <div
              className="inline-flex items-center gap-4 px-5 py-3 rounded-xl mb-8 hero-animate-delay2"
              style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}
            >
              <div>
                <p className="font-serif italic font-semibold text-base" style={{ color: 'var(--gold)' }}>The Negotiation Code</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Beyond the Table · Now Available · INR 699 / $27</p>
              </div>
              <span className="text-2xl">📘</span>
            </div>

            <div className="flex flex-wrap gap-3 hero-animate-delay3">
              <Link href="/book" className="btn-gold">
                Explore the Book →
              </Link>
              <Link href="/about" className="btn-outline">
                About Dr. Prasad
              </Link>
            </div>
          </div>

          {/* Right: Author photo placeholder + book card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative ring */}
            <div
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
              style={{ border: '1.5px solid var(--accent-border)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
            />
            <div
              className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full"
              style={{ border: '1px solid rgba(212,175,55,0.08)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
            />

            {/* Author photo card */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: 300,
                height: 380,
                border: '1px solid var(--accent-border)',
                zIndex: 1,
              }}
            >
              <img
                src="/vikas-prasad.jpg"
                alt="Dr. Vikas Prasad"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              {/* Name overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 100%)' }}
              >
                <p className="font-serif font-bold text-base" style={{ color: 'var(--text)' }}>Dr. Vikas Prasad</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--gold)' }}>Author · Negotiation Expert · India</p>
              </div>
              {/* Gold accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE CAROUSEL ── */}
      <section className="py-16 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-8">From the Book</div>
          <QuoteCarousel />
        </div>
      </section>

      {/* ── BOOK SPOTLIGHT ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book cover mockup */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl flex flex-col items-center justify-between p-8 shadow-2xl"
              style={{
                width: 280,
                height: 380,
                background: 'linear-gradient(160deg, #1a1408 0%, #0d0a02 100%)',
                border: '1px solid var(--accent-border)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 80px rgba(212,175,55,0.08)',
              }}
            >
              <div className="w-full" style={{ borderBottom: '2px solid var(--gold)', paddingBottom: '1rem' }}>
                <p className="text-xs font-bold tracking-widest uppercase text-center" style={{ color: 'var(--gold)' }}>
                  Verses Kindler Publication
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                <h2 className="font-serif font-black text-2xl leading-tight mb-3" style={{ color: 'var(--text)' }}>
                  The<br/>Negotiation<br/>Code
                </h2>
                <div className="w-12 h-px mb-3" style={{ background: 'var(--gold)' }} />
                <p className="font-serif italic text-sm" style={{ color: 'var(--gold)' }}>Beyond the Table</p>
              </div>

              <div className="w-full text-center" style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <p className="font-serif font-semibold text-sm" style={{ color: 'var(--text-muted)' }}>Dr. Vikas Prasad</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-subtle)' }}>2026 · 1st Edition</p>
              </div>

              {/* Spine glow */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: 'linear-gradient(180deg, var(--gold), transparent)' }} />
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="section-label mb-6">New Release · 2026</div>
            <h2 className="font-serif font-black text-4xl md:text-5xl leading-tight mb-4" style={{ color: 'var(--text)' }}>
              The Negotiation Code:<br/>
              <span className="gradient-gold">Beyond the Table</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              A 16-chapter journey through the psychology, strategy, and ethics of human-centred negotiation. Built on real corporate stories, distilled psychological insights, and frameworks forged in two decades of practice.
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Chapters', value: '16' },
                { label: 'Pages', value: '320+' },
                { label: 'Price', value: 'INR 699 / $27' },
                { label: 'Publisher', value: 'Verses Kindler' },
              ].map(({ label, value }) => (
                <div key={label} className="card p-4">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-subtle)' }}>{label}</p>
                  <p className="font-semibold" style={{ color: 'var(--text)' }}>{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {BOOK.purchaseLinks.map(({ label, url, icon }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  {icon} {label}
                </a>
              ))}
            </div>

            <p className="text-xs mt-4" style={{ color: 'var(--text-subtle)' }}>
              ISBN: {BOOK.isbn} · {BOOK.edition}
            </p>
          </div>
        </div>
      </section>

      {/* ── CHAPTER PREVIEW ── */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">Inside the Book</div>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-3" style={{ color: 'var(--text)' }}>
            16 Chapters. One Code.
          </h2>
          <p className="text-base mb-12" style={{ color: 'var(--text-muted)', maxWidth: '540px' }}>
            From decoding silent signals to measuring the ROI of trust — every chapter delivers frameworks you can apply immediately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {FEATURED_CHAPTERS.map((ch) => (
              <div key={ch.number} className="card p-5 flex items-start gap-4">
                <span
                  className="font-serif font-black text-2xl flex-shrink-0 w-8"
                  style={{ color: 'var(--gold)', opacity: 0.6 }}
                >
                  {ch.number}
                </span>
                <p className="font-medium text-sm leading-snug" style={{ color: 'var(--text)' }}>
                  {ch.title}
                </p>
              </div>
            ))}
          </div>

          <Link href="/book" className="btn-outline">
            See All 16 Chapters →
          </Link>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-6">About the Author</div>
            <h2 className="font-serif font-black text-4xl leading-tight mb-6" style={{ color: 'var(--text)' }}>
              Two Decades at the<br/>
              <span className="gradient-gold">Negotiation Table</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Dr. Vikas Prasad has spent over two decades in boardrooms, factories, supplier plants, and leadership forums — sometimes fighting for margins, sometimes for timelines, often for alignment, and always for clarity.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              His work spans procurement leadership, business strategy, cross-cultural deal-making, and executive education. He brings both the scars and the strategies.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Procurement Strategy', 'Cross-Cultural Negotiation', 'Executive Leadership', 'Business Psychology'].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: 'var(--accent-bg)', color: 'var(--gold)', border: '1px solid var(--accent-border)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/about" className="btn-outline">
              Read Full Bio →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '20+', label: 'Years of Experience' },
              { number: '16', label: 'Chapters of Insight' },
              { number: '3', label: 'Continents of Practice' },
              { number: '1', label: 'Code to Master it All' },
            ].map(({ number, label }) => (
              <div
                key={label}
                className="card-glow p-6 text-center"
              >
                <p className="font-serif font-black text-4xl mb-2 gradient-gold">{number}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">Reader Reviews</div>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-12" style={{ color: 'var(--text)' }}>
            What Readers Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card-glow p-6 flex flex-col gap-4">
                <div className="stars text-sm">{'★'.repeat(t.rating)}</div>
                <p className="font-serif italic text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-subtle)' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">Insights</div>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif font-black text-3xl md:text-4xl" style={{ color: 'var(--text)' }}>
              Latest Articles
            </h2>
            <Link href="/blog" className="btn-outline hidden md:inline-flex">
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { slug: 'why-emotions-cost-you-deals', title: 'Why Your Emotions Are Costing You Deals', tag: 'Psychology', date: 'May 2026' },
              { slug: 'art-of-strategic-silence', title: 'The Art of Strategic Silence', tag: 'Tactics', date: 'April 2026' },
              { slug: 'cross-cultural-negotiation', title: 'The Invisible Rulebook: Negotiating Across Cultures', tag: 'Cross-Cultural', date: 'February 2026' },
            ].map(({ slug, title, tag, date }) => (
              <Link key={slug} href={`/blog/${slug}`} className="card-glow p-6 flex flex-col gap-3 group">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: 'var(--gold)' }}
                >
                  {tag}
                </span>
                <h3 className="font-serif font-bold text-lg leading-snug group-hover:text-amber-300 transition-colors" style={{ color: 'var(--text)' }}>
                  {title}
                </h3>
                <p className="text-xs mt-auto" style={{ color: 'var(--text-subtle)' }}>{date}</p>
              </Link>
            ))}
          </div>

          <Link href="/blog" className="btn-outline md:hidden">
            All Articles →
          </Link>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #1a1408 0%, #0d0a02 50%, #1a1408 100%)',
          borderTop: '1px solid var(--accent-border)',
          borderBottom: '1px solid var(--accent-border)',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="font-serif italic text-xl md:text-2xl mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            &ldquo;If, after reading this work, you walk into your next negotiation not with tension but with clarity — I will consider this book successful.&rdquo;
          </p>
          <p className="text-sm mb-8" style={{ color: 'var(--gold)' }}>— Dr. Vikas Prasad, Preface</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Buy on Amazon India
            </a>
            <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Buy on Flipkart
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
