"use client"

export default function CTABanner() {
  return (
    <section
      id="cta-banner"
      aria-labelledby="cta-title"
      style={{ padding: '100px 0', textAlign: 'center' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div
          className="reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(17,76,90,0.6) 0%, rgba(23,43,54,0.8) 100%)',
            border: '1px solid rgba(255,200,1,0.2)',
            borderRadius: 20, padding: '72px 40px',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
              width: 500, height: 200,
              background: 'radial-gradient(ellipse, rgba(255,200,1,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <h2
            id="cta-title"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700, lineHeight: 1.1,
              marginBottom: 16,
              position: 'relative',
            }}
          >
            Ready to automate<br />
            <span style={{ color: 'var(--forsythia)' }}>your intelligence layer?</span>
          </h2>

          <p style={{
            fontSize: 16, color: 'rgba(217,232,226,0.6)',
            marginBottom: 36, maxWidth: 480,
            marginLeft: 'auto', marginRight: 'auto',
            position: 'relative',
          }}>
            Join 18,000+ teams shipping smarter with NeuralFlow. Start building in minutes.
          </p>

          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap', position: 'relative',
          }}>
            <a
              href="#pricing"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--forsythia)', color: 'var(--oceanic-noir)',
                fontFamily: 'var(--font-jetbrains), monospace',
                fontWeight: 600, fontSize: 15,
                borderRadius: 6, padding: '16px 32px',
                textDecoration: 'none',
                transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ffcf20'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,200,1,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--forsythia)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Start Building Free
            </a>
            <a
              href="#"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'transparent', color: 'var(--arctic-powder)',
                border: '1px solid rgba(241,246,244,0.3)',
                fontFamily: 'var(--font-jetbrains), monospace',
                fontWeight: 600, fontSize: 15,
                borderRadius: 6, padding: '16px 32px',
                textDecoration: 'none',
                transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--forsythia)'
                e.currentTarget.style.color = 'var(--forsythia)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(241,246,244,0.3)'
                e.currentTarget.style.color = 'var(--arctic-powder)'
              }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
