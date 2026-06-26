'use client'

import { useState, useEffect, useCallback } from 'react'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false)
    document.body.style.overflow = ''
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const toggleMenu = useCallback(() => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header
      id="site-header"
      role="banner"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        transition: 'background 300ms cubic-bezier(0.16,1,0.3,1), border-color 300ms cubic-bezier(0.16,1,0.3,1)',
        ...(scrolled ? {
          background: 'rgba(23,43,54,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(217,232,226,0.1)',
        } : {}),
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="nav-logo"
          aria-label="NeuralFlow home"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="#FFC801" d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"/>
          </svg>
          <span style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 18, fontWeight: 600,
            color: 'var(--arctic-powder)',
            transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
          }}>
            NeuralFlow
          </span>
        </a>

        {/* Desktop links */}
        <ul
          role="list"
          style={{ display: 'flex', gap: 32, listStyle: 'none' }}
          className="hidden lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                style={{
                  fontSize: 14, fontWeight: 500,
                  color: 'rgba(241,246,244,0.7)',
                  textDecoration: 'none',
                  transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--forsythia)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,246,244,0.7)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

<a
          href="#pricing"
          onClick={(e) => { e.preventDefault(); handleNavClick('#pricing') }}
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontWeight: 600, fontSize: 13,
            color: 'var(--arctic-powder)',
            border: '1px solid rgba(241,246,244,0.3)',
            borderRadius: 6, padding: '10px 20px',
            textDecoration: 'none',
            transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
          }}
          className="hidden lg:inline-flex"
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--forsythia)'
            e.currentTarget.style.color = 'var(--forsythia)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(241,246,244,0.3)'
            e.currentTarget.style.color = 'var(--arctic-powder)'
          }}
        >
          Get Started
        </a>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="lg:hidden"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 40, height: 40,
            color: 'var(--arctic-powder)',
            background: 'none', border: 'none', cursor: 'pointer',
            transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
          background: 'var(--oceanic-noir)', zIndex: 299,
          display: 'flex', flexDirection: 'column',
          padding: '32px 24px 40px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 300ms cubic-bezier(0.45,0,0.55,1), transform 300ms cubic-bezier(0.45,0,0.55,1)',
        }}
      >
        <nav aria-label="Mobile links" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              style={{
                display: 'block', padding: '16px 0',
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 24, fontWeight: 600,
                color: 'var(--arctic-powder)',
                borderBottom: '1px solid rgba(217,232,226,0.1)',
                textDecoration: 'none',
                transition: 'color 150ms cubic-bezier(0.16,1,0.3,1), padding-left 150ms cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--forsythia)'
                e.currentTarget.style.paddingLeft = '8px'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--arctic-powder)'
                e.currentTarget.style.paddingLeft = '0'
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNavClick('#pricing') }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '100%',
              background: 'var(--forsythia)', color: 'var(--oceanic-noir)',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontWeight: 600, fontSize: 15,
              borderRadius: 6, padding: '16px 32px',
              textDecoration: 'none',
              transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
