"use client"

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '120px 0 80px',
      }}
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(17,76,90,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 70%, rgba(255,200,1,0.08) 0%, transparent 70%)
          `,
        }}
      />
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(217,232,226,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,232,226,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 30%, transparent 80%)',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: 24,
        }}>

          {/* Badge */}
          <div
            className="hero-fade-1"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,200,1,0.1)',
              border: '1px solid rgba(255,200,1,0.25)',
              borderRadius: 100, padding: '6px 14px',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 12, fontWeight: 500,
              color: 'var(--forsythia)',
            }}
          >
            <span className="badge-dot" aria-hidden="true" />
            Now in Public Beta — Phase 2.0 Live
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className="hero-fade-2"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 'clamp(36px, 7vw, 80px)',
              fontWeight: 700, lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Automate the<br />
            <span style={{ color: 'var(--forsythia)' }}>intelligence</span><br />
            layer of your data
          </h1>

          {/* Subtitle */}
          <p
            className="hero-fade-3"
            style={{
              maxWidth: 640,
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 400, lineHeight: 1.6,
              color: 'rgba(217,232,226,0.75)',
            }}
          >
            NeuralFlow transforms raw streams into real-time action pipelines using multi-agent AI orchestration. Zero manual wiring. Infinite scale.
          </p>

          {/* CTA buttons */}
          <div
            className="hero-fade-4"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}
          >
            <a
              href="#pricing"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 8,
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
              href="#features"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 8,
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
              </svg>
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-fade-5"
            role="list"
            style={{
              display: 'flex', flexWrap: 'wrap', gap: 32,
              justifyContent: 'center', marginTop: 16,
            }}
          >
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '2.4ms', label: 'Avg. Latency' },
              { value: '18K+', label: 'Active Teams' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat, i) => (
              <div key={stat.label} role="listitem" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    style={{
                      width: 1, height: 40,
                      background: 'rgba(217,232,226,0.15)',
                    }}
                    className="hidden sm:block"
                  />
                )}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: 28, fontWeight: 700,
                    color: 'var(--arctic-powder)',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(217,232,226,0.5)', marginTop: 2 }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal visual */}
          <div
            className="hero-fade-6"
            style={{
              position: 'relative', marginTop: 64,
              width: '100%', maxWidth: 900,
            }}
          >
            <div
              role="img"
              aria-label="NeuralFlow terminal demo showing pipeline initialization"
              style={{
                background: 'rgba(17,76,90,0.35)',
                border: '1px solid rgba(217,232,226,0.1)',
                borderRadius: 12, overflow: 'hidden',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,200,1,0.05)',
              }}
            >
              {/* Terminal bar */}
              <div
                aria-hidden="true"
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '12px 16px',
                  borderBottom: '1px solid rgba(217,232,226,0.08)',
                  background: 'rgba(17,76,90,0.4)',
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
                <span style={{
                  marginLeft: 8,
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: 12, color: 'rgba(217,232,226,0.4)',
                }}>
                  neuralflow — pipeline.init
                </span>
              </div>

              {/* Terminal body */}
              <div aria-hidden="true" style={{ padding: 24, textAlign: 'left' }}>
                {[
                  { type: 'prompt', text: '$ ', cmd: 'npx neuralflow init --mode=production' },
                  { type: 'comment', text: '# Bootstrapping AI orchestration layer...' },
                  { type: 'output', text: '  ✦ Connecting to model registry         ', success: '[OK]' },
                  { type: 'output', text: '  ✦ Loading 14 automation blueprints     ', success: '[OK]' },
                  { type: 'output', text: '  ✦ Initializing vector index (384-dim)  ', success: '[OK]' },
                  { type: 'output', text: '  ✦ Calibrating tariff matrix            ', warn: '[→ 3 regions]' },
                  { type: 'empty' },
                  { type: 'success', text: '✓ Pipeline active · 2.4ms latency · 3 agents online' },
                  { type: 'cursor' },
                ].map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: 13, lineHeight: 1.8,
                      whiteSpace: 'pre-wrap', wordBreak: 'break-all',
                    }}
                  >
                    {line.type === 'prompt' && (
                      <>
                        <span style={{ color: 'var(--forsythia)' }}>{line.text}</span>
                        <span style={{ color: 'var(--arctic-powder)' }}>{line.cmd}</span>
                      </>
                    )}
                    {line.type === 'comment' && (
                      <span style={{ color: 'rgba(217,232,226,0.35)' }}>{line.text}</span>
                    )}
                    {line.type === 'output' && (
                      <>
                        <span style={{ color: 'rgba(217,232,226,0.6)' }}>{line.text}</span>
                        {line.success && <span style={{ color: '#27C93F' }}>{line.success}</span>}
                        {line.warn && <span style={{ color: 'var(--deep-saffron)' }}>{line.warn}</span>}
                      </>
                    )}
                    {line.type === 'success' && (
                      <span style={{ color: '#27C93F' }}>{line.text}</span>
                    )}
                    {line.type === 'empty' && <span>&nbsp;</span>}
                    {line.type === 'cursor' && (
                      <>
                        <span style={{ color: 'var(--forsythia)' }}>$ </span>
                        <span className="t-cursor" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
