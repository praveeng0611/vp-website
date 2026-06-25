import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Insights & Articles — Dr. Vikas Prasad',
  description: 'Articles on negotiation psychology, cross-cultural strategy, silence, trust, and the art of deal-making by Dr. Vikas Prasad.',
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-4">Insights</div>
          <h1 className="font-serif font-black text-5xl md:text-6xl leading-tight mb-4" style={{ color: 'var(--text)' }}>
            Articles &<br/><span className="gradient-gold">Insights</span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Frameworks, observations, and stories from two decades at the negotiation table — written for practitioners who want to think more clearly.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 px-6" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-6">Featured</div>
          <Link href={`/blog/${featured.slug}`} className="card-glow p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 group block">
            <div className="md:col-span-2">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: 'var(--gold)' }}
              >
                {featured.tag} · {featured.date}
              </span>
              <h2 className="font-serif font-black text-3xl md:text-4xl leading-tight mb-3 group-hover:text-amber-300 transition-colors" style={{ color: 'var(--text)' }}>
                {featured.title}
              </h2>
              <p className="font-serif italic text-lg mb-4" style={{ color: 'var(--text-muted)' }}>
                {featured.subtitle}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                {featured.excerpt}
              </p>
              <span className="btn-gold text-sm py-2 px-4 inline-flex">
                Read Article →
              </span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center font-black font-serif text-4xl"
                style={{ background: 'var(--accent-bg)', border: '2px solid var(--accent-border)', color: 'var(--gold)' }}
              >
                &ldquo;
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-label mb-8">All Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-glow p-6 flex flex-col gap-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                    {post.tag}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                    {post.readTime} min read · {post.date}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl leading-snug group-hover:text-amber-300 transition-colors" style={{ color: 'var(--text)' }}>
                  {post.title}
                </h3>
                <p className="font-serif italic text-sm" style={{ color: 'var(--text-muted)' }}>
                  {post.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {post.excerpt}
                </p>
                <span className="text-sm font-semibold mt-auto" style={{ color: 'var(--gold)' }}>
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book promo */}
      <section className="py-16 px-6 text-center" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-xl mx-auto">
          <div className="gold-line mx-auto" />
          <h2 className="font-serif font-black text-2xl mb-3" style={{ color: 'var(--text)' }}>
            Want More? Read the Book.
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            16 chapters of frameworks, case studies, and tools — <em>The Negotiation Code: Beyond the Table</em>.
          </p>
          <Link href="/book" className="btn-gold">
            Explore the Book →
          </Link>
        </div>
      </section>
    </>
  )
}
