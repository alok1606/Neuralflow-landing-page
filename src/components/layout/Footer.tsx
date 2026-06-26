"use client"

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid rgba(217,232,226,0.08)',
        padding: '40px 0',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
              <path fill="#FFC801" d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
            </svg>
            <span style={{
              fontSize: 13, color: 'rgba(217,232,226,0.35)',
              fontFamily: 'var(--font-jetbrains), monospace',
            }}>
              © 2026 NeuralFlow, Inc. All rights reserved.
            </span>
          </div>

          <nav aria-label="Footer links" style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Security', 'Status'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{
                  fontSize: 13, color: 'rgba(217,232,226,0.35)',
                  textDecoration: 'none',
                  transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--mystic-mint)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(217,232,226,0.35)')}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
