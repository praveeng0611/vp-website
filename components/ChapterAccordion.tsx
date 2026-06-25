'use client'
import { useState } from 'react'
import { CHAPTERS } from '@/lib/data'

export default function ChapterAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {CHAPTERS.map((ch) => {
        const isOpen = open === ch.number
        return (
          <button
            key={ch.number}
            onClick={() => setOpen(isOpen ? null : ch.number)}
            className="text-left w-full rounded-xl transition-all duration-200"
            style={{
              background: isOpen ? 'var(--accent-bg)' : 'var(--bg-card)',
              border: `1.5px solid ${isOpen ? 'var(--accent-border)' : 'var(--border)'}`,
              padding: isOpen ? '1.25rem 1.25rem 1rem' : '1rem 1.25rem',
            }}
          >
            {/* Header row */}
            <div className="flex items-start gap-4">
              <span
                className="flex-shrink-0 font-serif font-black text-xl w-7 pt-0.5"
                style={{ color: isOpen ? 'var(--gold)' : 'var(--accent-border)' }}
              >
                {ch.number}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="font-semibold text-sm leading-snug"
                  style={{ color: 'var(--text)' }}
                >
                  {ch.title}
                </p>
                {!isOpen && (
                  <p className="text-xs mt-1" style={{ color: 'var(--text-subtle)' }}>
                    Page {ch.page} · tap to preview
                  </p>
                )}
              </div>
              <span
                className="flex-shrink-0 text-lg leading-none transition-transform duration-200 mt-0.5"
                style={{
                  color: 'var(--gold-light)',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </span>
            </div>

            {/* Gist — shown when open */}
            {isOpen && (
              <div className="mt-3 pl-11">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {ch.gist}
                </p>
                <p className="text-xs mt-2" style={{ color: 'var(--text-subtle)' }}>
                  Page {ch.page}
                </p>
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}
