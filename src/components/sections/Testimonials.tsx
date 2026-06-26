"use client"

import { TESTIMONIALS } from '@/lib/data'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      style={{ padding: '100px 0' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <header className="reveal" style={{ marginBottom: 56 }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--forsythia)', marginBottom: 16,
          }}>
            Social Proof
          </span>
          <h2
            id="testimonials-title"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Trusted by builders<br />shipping at scale
          </h2>
        </header>

        <div
          className="reveal"
          style={{
            display: 'grid', gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              style={{
                background: 'rgba(17,76,90,0.2)',
                border: '1px solid rgba(217,232,226,0.08)',
                borderRadius: 12, padding: 28,
                transition: 'border-color 200ms cubic-bezier(0.16,1,0.3,1), transform 200ms cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,200,1,0.2)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(217,232,226,0.08)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <div
                aria-label="5 out of 5 stars"
                style={{ display: 'flex', gap: 4, marginBottom: 16 }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true" style={{ color: 'var(--forsythia)', fontSize: 14 }}>★</span>
                ))}
              </div>

              <blockquote>
                <p style={{
                  fontSize: 15, lineHeight: 1.65,
                  color: 'rgba(217,232,226,0.75)', marginBottom: 20,
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <footer style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'rgba(17,76,90,0.6)',
                    border: '1px solid rgba(217,232,226,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: 13, fontWeight: 700,
                    color: 'var(--forsythia)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--arctic-powder)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(217,232,226,0.45)', marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
