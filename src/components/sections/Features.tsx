import BentoAccordion from './BentoAccordion'

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
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
            Core Capabilities
          </span>
          <h2
            id="features-title"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Everything your<br />data pipeline needs
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(217,232,226,0.65)', lineHeight: 1.6,
            maxWidth: 560, marginTop: 12,
          }}>
            Six precision-engineered capabilities, each battle-tested across 18,000+ production deployments.
          </p>
        </header>

        <div className="reveal">
          <BentoAccordion />
        </div>
      </div>
    </section>
  )
}
