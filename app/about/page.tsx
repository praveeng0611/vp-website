import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Dr. Vikas Prasad — Author & Negotiation Expert',
  description: 'Learn about Dr. Vikas Prasad — two decades in boardrooms, supplier plants, and leadership forums. Author of The Negotiation Code: Beyond the Table.',
}

const EXPERTISE = [
  { icon: '🤝', title: 'Negotiation Strategy', desc: 'From supplier contracts to M&A discussions — Dr. Prasad has navigated every tier of deal complexity, developing frameworks that perform under real pressure.' },
  { icon: '🧠', title: 'Business Psychology', desc: 'A deep practitioner of applied psychology in commercial settings — understanding cognitive biases, emotional triggers, and decision-making patterns that shape outcomes.' },
  { icon: '🌍', title: 'Cross-Cultural Leadership', desc: 'Experience spanning Asia, Europe, and North America — building fluency in the unwritten rules that govern how different cultures think about trust, time, and value.' },
  { icon: '📊', title: 'Procurement & Supply Chain', desc: 'Deep expertise in global procurement strategy — building supplier ecosystems, managing risk, and optimising value chains at scale.' },
  { icon: '🎓', title: 'Executive Education', desc: 'Thought leader and speaker at business forums, leadership summits, and management institutes — translating complexity into clarity for the next generation of leaders.' },
  { icon: '✍️', title: 'Author & Thought Leader', desc: 'Author of The Negotiation Code: Beyond the Table — a landmark work that reframes negotiation as a human discipline, not a tactical game.' },
]

const TIMELINE = [
  { year: 'Present', event: 'Author of The Negotiation Code: Beyond the Table (Verses Kindler Publication, 2026)' },
  { year: '2020s', event: 'Senior leadership roles in procurement and supply chain strategy across global organisations' },
  { year: '2010s', event: 'Cross-cultural negotiation engagements spanning Asia, Europe, and North America' },
  { year: '2000s', event: 'Began building expertise at the intersection of procurement strategy and business psychology' },
  { year: 'Foundation', event: 'Over two decades of experience across boardrooms, factories, supplier plants, and leadership forums' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.05) 0%, transparent 60%), var(--bg)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-6">About</div>
            <h1 className="font-serif font-black text-5xl md:text-6xl leading-tight mb-6" style={{ color: 'var(--text)' }}>
              Dr. Vikas<br/>
              <span className="gradient-gold">Prasad</span>
            </h1>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Author. Negotiation Expert. Practitioner of two decades in the most consequential conversations in business.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Dr. Vikas Prasad has spent over twenty years in boardrooms, factories, supplier plants, negotiation tables, and leadership forums — sometimes fighting for margins, sometimes for timelines, often for alignment, and always for clarity.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/dr-vikas-prasad/" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Connect on LinkedIn
              </a>
              <Link href="/book" className="btn-outline">
                Read the Book
              </Link>
            </div>
          </div>

          {/* Photo card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: 320,
                height: 400,
                border: '1px solid var(--accent-border)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src="/vikas-prasad.jpg"
                alt="Dr. Vikas Prasad"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              {/* Name overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 100%)' }}
              >
                <p className="font-serif font-bold text-xl" style={{ color: 'var(--text)' }}>Dr. Vikas Prasad</p>
                <p className="text-sm mt-1" style={{ color: 'var(--gold)' }}>Author · Negotiation Expert · India</p>
                <a
                  href="https://www.linkedin.com/in/dr-vikas-prasad/"
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-xs transition-colors hover:text-amber-400"
                  style={{ color: 'var(--text-subtle)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  linkedin.com/in/dr-vikas-prasad
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* About narrative */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-8">The Journey</div>
          <div className="space-y-6 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <p>
              Over the years, one truth became unmistakably clear to Dr. Prasad: <em style={{ color: 'var(--text)' }}>&ldquo;negotiation is not what people think it is; it is not a contest of clever arguments, not a performance of dominance, and rarely about the numbers on the page.&rdquo;</em>
            </p>
            <p>
              Real negotiation unfolds in the raised eyebrow during a pause, the subtle shift in tone within a harmless sentence, the hesitation before a signature, the stories people tell themselves before they walk into the room, and the unspoken fears, ambitions, and emotions quietly steering their choices.
            </p>
            <p>
              His book, <em style={{ color: 'var(--gold)' }}>The Negotiation Code: Beyond the Table</em>, was born from countless conversations with young managers, seasoned procurement leaders, business school students, founders, and CXOs who, in different words, asked the same question: <em style={{ color: 'var(--text)' }}>&ldquo;How do we get better at negotiation — not just tactically, but psychologically, strategically, and ethically?&rdquo;</em>
            </p>
            <p>
              This book answers that question. It contains real corporate stories, distilled psychological insights, frameworks shaped by practice, tools for long-term value creation, methods for reading people rather than positions, and ways to measure negotiation beyond price.
            </p>
            <p style={{ color: 'var(--text)' }}>
              Negotiation is a worldview, a mirror into human behaviour, and a discipline that matures with awareness. Dr. Prasad invites you to that awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">Areas of Expertise</div>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-12" style={{ color: 'var(--text)' }}>
            A Practitioner Across Disciplines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE.map(({ icon, title, desc }) => (
              <div key={title} className="card-glow p-6">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="font-serif font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4">Career</div>
          <h2 className="font-serif font-black text-3xl mb-12" style={{ color: 'var(--text)' }}>
            Two Decades of Practice
          </h2>
          <div className="space-y-0">
            {TIMELINE.map(({ year, event }, i) => (
              <div key={year} className="flex gap-6 relative">
                {/* Line */}
                {i < TIMELINE.length - 1 && (
                  <div className="absolute left-[2.1rem] top-8 bottom-0 w-px" style={{ background: 'var(--border)' }} />
                )}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold text-center leading-tight z-10"
                  style={{ background: 'var(--bg-card)', border: '1.5px solid var(--accent-border)', color: 'var(--gold)' }}
                >
                  {year}
                </div>
                <div className="flex-1 pb-10 pt-3">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-xl mx-auto">
          <div className="gold-line mx-auto" />
          <h2 className="font-serif font-black text-3xl mb-4" style={{ color: 'var(--text)' }}>
            Read The Book
          </h2>
          <p className="text-base mb-8" style={{ color: 'var(--text-muted)' }}>
            The Negotiation Code: Beyond the Table — now available in India and worldwide.
          </p>
          <Link href="/book" className="btn-gold">
            Explore the Book →
          </Link>
        </div>
      </section>
    </>
  )
}
