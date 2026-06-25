import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOK, QUOTES, TESTIMONIALS } from '@/lib/data'
import ChapterAccordion from '@/components/ChapterAccordion'

export const metadata: Metadata = {
  title: 'The Negotiation Code: Beyond the Table — Dr. Vikas Prasad',
  description: 'Explore The Negotiation Code: Beyond the Table by Dr. Vikas Prasad. 16 chapters on psychology, strategy, and ethics of human-centred negotiation. ISBN 978-93-47494-49-9.',
}

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1a1408 0%, #0a0a0a 60%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.07) 0%, transparent 50%)',
        }} />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book cover mockup */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl flex flex-col items-center justify-between p-8 shadow-2xl"
              style={{
                width: 300,
                height: 400,
                background: 'linear-gradient(160deg, #1c1610 0%, #0d0a02 100%)',
                border: '1.5px solid var(--accent-border)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 120px rgba(212,175,55,0.1)',
              }}
            >
              <div className="w-full pb-4" style={{ borderBottom: '2px solid var(--gold)' }}>
                <p className="text-xs font-bold tracking-widest uppercase text-center" style={{ color: 'var(--gold)' }}>
                  Verses Kindler Publication
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-1 mb-6 rounded" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
                <h2 className="font-serif font-black text-3xl leading-tight mb-4" style={{ color: 'var(--text)' }}>
                  The<br/>Negotiation<br/>Code
                </h2>
                <div className="w-12 h-px mb-4" style={{ background: 'var(--gold)' }} />
                <p className="font-serif italic text-base" style={{ color: 'var(--gold)' }}>Beyond the Table</p>
                <div className="w-16 h-1 mt-6 rounded" style={{ background: 'linear-gradient(270deg, var(--gold), transparent)' }} />
              </div>
              <div className="w-full pt-4 text-center" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="font-serif font-semibold text-sm" style={{ color: 'var(--text-muted)' }}>Dr. Vikas Prasad</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-subtle)' }}>2026 · 1st Edition · 320+ pages</p>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ background: 'linear-gradient(180deg, var(--gold-light), var(--gold-dark))' }} />
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="section-label mb-6">New Release · 2026</div>
            <h1 className="font-serif font-black text-5xl md:text-6xl leading-tight mb-2" style={{ color: 'var(--text)' }}>
              The Negotiation Code
            </h1>
            <p className="font-serif italic text-2xl mb-6" style={{ color: 'var(--gold)' }}>Beyond the Table</p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              A landmark work on the psychology, strategy, and ethics of negotiation — built on real corporate stories, distilled psychological insights, and frameworks forged in two decades of practice.
            </p>

            {/* Price & ISBN */}
            <div
              className="flex items-center gap-6 p-4 rounded-xl mb-8"
              style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-subtle)' }}>Price</p>
                <p className="font-bold text-xl" style={{ color: 'var(--gold)' }}>INR 699 <span className="text-base font-normal text-amber-500">/ $27</span></p>
              </div>
              <div className="w-px h-10" style={{ background: 'var(--border)' }} />
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-subtle)' }}>ISBN</p>
                <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>{BOOK.isbn}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              {BOOK.purchaseLinks.map(({ label, url, icon }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  {icon} {label}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
              Published by {BOOK.publisher} · {BOOK.year} · {BOOK.edition}
            </p>
          </div>
        </div>
      </section>

      {/* Key quote */}
      <section className="py-16 px-6" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed mb-4" style={{ color: 'var(--text)' }}>
            &ldquo;Negotiation is not what people think it is; it is not a contest of clever arguments, not a performance of dominance, and rarely about the numbers on the page.&rdquo;
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">What&apos;s Inside</div>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4" style={{ color: 'var(--text)' }}>
            16 Chapters. One Transformative Code.
          </h2>
          <p className="text-base mb-12 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Each chapter delivers real case studies, psychological frameworks, and immediately applicable tools. Tap any chapter to preview what&apos;s inside.
          </p>

          <ChapterAccordion />
        </div>
      </section>

      {/* Select quotes */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="section-label mb-4">Quotes from the Book</div>
          <h2 className="font-serif font-black text-3xl mb-12" style={{ color: 'var(--text)' }}>
            Moments That Stay With You
          </h2>
          <div className="space-y-8">
            {QUOTES.map((q, i) => (
              <div
                key={i}
                className="pl-6"
                style={{ borderLeft: '3px solid var(--gold)' }}
              >
                <p className="font-serif italic text-lg leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>
                  — Dr. Vikas Prasad · {q.chapter}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">Reader Reviews</div>
          <h2 className="font-serif font-black text-3xl mb-12" style={{ color: 'var(--text)' }}>
            What Readers Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card-glow p-6 flex flex-col gap-4">
                <div className="stars">{'★'.repeat(t.rating)}</div>
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

      {/* Buy CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #1a1408, #0a0a0a)', borderTop: '1px solid var(--accent-border)' }}
      >
        <div className="max-w-xl mx-auto">
          <div className="gold-line mx-auto" />
          <h2 className="font-serif font-black text-3xl mb-2" style={{ color: 'var(--text)' }}>
            Get Your Copy Today
          </h2>
          <p className="font-serif italic mb-1" style={{ color: 'var(--gold)' }}>INR 699 · $27</p>
          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>Available on Amazon, Flipkart, and our Publisher</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {BOOK.purchaseLinks.map(({ label, url, icon }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className={label === 'Amazon' ? 'btn-gold' : 'btn-outline'}>
                {icon} {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
