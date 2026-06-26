'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setFading(true)
      setTimeout(() => setHidden(true), 320)
    }, 420)
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <div
      id="loader"
      aria-hidden="true"
      className={fading ? 'fade-out' : ''}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--oceanic-noir)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 16,
      }}
    >
      <div className="loader-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="#FFC801" d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
        </svg>
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  )
}
