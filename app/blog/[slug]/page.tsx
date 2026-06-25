import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import React, { type ReactNode } from 'react'
import { BLOG_POSTS } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Dr. Vikas Prasad`,
    description: post.excerpt,
  }
}

function renderContent(md: string) {
  // Simple markdown-like renderer: **bold**, paragraphs, line breaks
  const lines = md.trim().split('\n')
  const elements: ReactNode[] = []
  let key = 0

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) continue

    if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
      elements.push(
        <h2 key={key++} className="font-serif font-bold text-xl mt-8 mb-3" style={{ color: 'var(--text)' }}>
          {line.slice(2, -2)}
        </h2>
      )
    } else {
      // inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/)
      elements.push(
        <p key={key++} className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} style={{ color: 'var(--text)' }}>{part.slice(2, -2)}</strong>
            }
            // italic via *...*
            const italics = part.split(/(\*[^*]+\*)/)
            return italics.map((s, j) => {
              if (s.startsWith('*') && s.endsWith('*')) {
                return <em key={j} style={{ color: 'var(--text)' }}>{s.slice(1, -1)}</em>
              }
              return s
            })
          })}
        </p>
      )
    }
  }
  return elements
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ background: 'linear-gradient(160deg, #141408 0%, #0a0a0a 100%)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-sm transition-colors hover:text-amber-400" style={{ color: 'var(--text-subtle)' }}>
              ← Insights
            </Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>{post.tag}</span>
          </div>
          <h1 className="font-serif font-black text-4xl md:text-5xl leading-tight mb-4" style={{ color: 'var(--text)' }}>
            {post.title}
          </h1>
          <p className="font-serif italic text-xl mb-6" style={{ color: 'var(--text-muted)' }}>
            {post.subtitle}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black font-serif"
                style={{ background: 'linear-gradient(135deg, #E8C547, #A07820)', color: '#0A0A0A' }}
              >
                VP
              </div>
              <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Dr. Vikas Prasad</span>
            </div>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span className="text-sm" style={{ color: 'var(--text-subtle)' }}>{post.date}</span>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span className="text-sm" style={{ color: 'var(--text-subtle)' }}>{post.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Lead */}
          <p
            className="font-serif italic text-lg leading-relaxed mb-10 p-6 rounded-xl"
            style={{ background: 'var(--accent-bg)', borderLeft: '3px solid var(--gold)', color: 'var(--text-muted)' }}
          >
            {post.excerpt}
          </p>

          {/* Body */}
          <div className="prose-vp">
            {renderContent(post.content)}
          </div>

          {/* Author card */}
          <div
            className="mt-12 p-6 rounded-2xl flex items-center gap-6"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-black font-serif"
              style={{ background: 'linear-gradient(135deg, #E8C547, #A07820)', color: '#0A0A0A' }}
            >
              VP
            </div>
            <div>
              <p className="font-serif font-bold text-base" style={{ color: 'var(--text)' }}>Dr. Vikas Prasad</p>
              <p className="text-sm mt-0.5 mb-2" style={{ color: 'var(--text-muted)' }}>
                Author of <em style={{ color: 'var(--gold)' }}>The Negotiation Code: Beyond the Table</em>
              </p>
              <a
                href="https://www.linkedin.com/in/dr-vikas-prasad/"
                target="_blank" rel="noopener noreferrer"
                className="text-xs transition-colors hover:text-amber-400"
                style={{ color: 'var(--gold)' }}
              >
                Follow on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="py-16 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Related articles */}
            <div className="lg:col-span-2">
              <div className="section-label mb-6">More Insights</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-5 group flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>{p.tag}</span>
                    <h3 className="font-serif font-bold text-base leading-snug group-hover:text-amber-300 transition-colors" style={{ color: 'var(--text)' }}>
                      {p.title}
                    </h3>
                    <span className="text-xs mt-auto" style={{ color: 'var(--text-subtle)' }}>{p.date}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Book CTA */}
            <div>
              <div
                className="p-6 rounded-2xl sticky top-24"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--accent-border)' }}
              >
                <p className="font-serif font-bold text-base mb-1" style={{ color: 'var(--gold)' }}>The Negotiation Code</p>
                <p className="font-serif italic text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Beyond the Table</p>
                <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--text-subtle)' }}>
                  16 chapters. Real stories. Instantly applicable frameworks.
                </p>
                <Link href="/book" className="btn-gold w-full justify-center text-sm">
                  Explore Book →
                </Link>
                <div className="flex gap-2 mt-3">
                  <a href="https://link.amazon/B0egR2Wtl" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center text-xs py-2">Amazon</a>
                  <a href="https://www.flipkart.com/product/p/itme?pid=9789347494604" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 justify-center text-xs py-2">Flipkart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
