'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { BENTO_FEATURES } from '@/lib/data'
import type { BentoFeature } from '@/types'

// ─── SVG Icon helper ─────────────────────────────────────────────
function FeatureIcon({ feature }: { feature: BentoFeature }) {
  return (
    <div
      style={{
        width: 44, height: 44,
        background: 'rgba(255,200,1,0.1)',
        borderRadius: 10,
        border: '1px solid rgba(255,200,1,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16, flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <Image
        src={feature.svgPath}
        alt=""
        width={22}
        height={22}
        style={{
          filter: feature.svgType === 'fill'
            ? 'brightness(0) saturate(100%) invert(78%) sepia(91%) saturate(749%) hue-rotate(360deg) brightness(103%) contrast(102%)'
            : 'brightness(0) saturate(100%) invert(78%) sepia(91%) saturate(749%) hue-rotate(360deg) brightness(103%) contrast(102%)',
        }}
      />
    </div>
  )
}

// ─── BENTO GRID (Desktop) ─────────────────────────────────────────
function BentoGrid({
  activeIndex,
  onHover,
}: {
  activeIndex: number
  onHover: (idx: number) => void
}) {
  return (
    <div
      aria-label="Feature showcase"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: 16,
      }}
      className="hidden lg:grid"
    >
      {BENTO_FEATURES.map((feature) => (
        <article
          key={feature.index}
          data-index={feature.index}
          tabIndex={0}
          style={{
            position: 'relative', overflow: 'hidden',
            background: activeIndex === feature.index
              ? 'rgba(17,76,90,0.45)'
              : 'rgba(17,76,90,0.25)',
            border: `1px solid ${activeIndex === feature.index ? 'rgba(255,200,1,0.35)' : 'rgba(217,232,226,0.1)'}`,
            borderRadius: 12, padding: 28,
            transform: activeIndex === feature.index ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'border-color 200ms cubic-bezier(0.16,1,0.3,1), background 200ms cubic-bezier(0.16,1,0.3,1), transform 200ms cubic-bezier(0.16,1,0.3,1)',
            cursor: 'default',
            gridColumn: feature.large ? 'span 2' : undefined,
            gridRow: feature.tall ? 'span 2' : undefined,
          }}
          onMouseEnter={() => onHover(feature.index)}
          onFocus={() => onHover(feature.index)}
          aria-label={feature.title}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', bottom: -40, right: -40,
              width: 140, height: 140,
              background: 'radial-gradient(circle, rgba(255,200,1,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <FeatureIcon feature={feature} />

          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 10, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--deep-saffron)',
            marginBottom: 10,
            background: 'rgba(255,153,50,0.1)',
            borderRadius: 4, padding: '3px 8px',
          }}>
            {feature.tag}
          </span>

          <h3 style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 18, fontWeight: 600,
            color: 'var(--arctic-powder)', marginBottom: 10,
          }}>
            {feature.title}
          </h3>

          <p style={{
            fontSize: 14, lineHeight: 1.6,
            color: 'rgba(217,232,226,0.6)',
          }}>
            {feature.description}
          </p>

          {feature.stat && (
            <>
              <div style={{
                marginTop: 20,
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 36, fontWeight: 700,
                color: feature.statColor ?? 'var(--forsythia)',
              }}>
                {feature.stat}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(217,232,226,0.45)', marginTop: 4 }}>
                {feature.statLabel}
              </div>
            </>
          )}
        </article>
      ))}
    </div>
  )
}

// ─── ACCORDION (Mobile) ───────────────────────────────────────────
function Accordion({
  activeIndex,
  onToggle,
}: {
  activeIndex: number
  onToggle: (idx: number) => void
}) {
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([])
  const innerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    BENTO_FEATURES.forEach((f) => {
      const body = bodyRefs.current[f.index]
      const inner = innerRefs.current[f.index]
      if (!body || !inner) return
      body.style.maxHeight = f.index === activeIndex ? `${inner.scrollHeight}px` : '0'
    })
  }, [activeIndex])

  return (
    <div className="lg:hidden" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {BENTO_FEATURES.map((feature) => {
        const isOpen = feature.index === activeIndex
        return (
          <div
            key={feature.index}
            data-index={feature.index}
            style={{
              border: `1px solid ${isOpen ? 'rgba(255,200,1,0.3)' : 'rgba(217,232,226,0.1)'}`,
              borderRadius: 10, overflow: 'hidden',
              background: isOpen ? 'rgba(17,76,90,0.4)' : 'rgba(17,76,90,0.2)',
              transition: 'border-color 300ms cubic-bezier(0.45,0,0.55,1), background 300ms cubic-bezier(0.45,0,0.55,1)',
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`acc-body-${feature.index}`}
              onClick={() => onToggle(feature.index)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: 12,
                padding: '18px 20px',
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 15, fontWeight: 600,
                color: isOpen ? 'var(--forsythia)' : 'var(--arctic-powder)',
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left',
                transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Image
                  src={feature.svgPath}
                  alt=""
                  width={18}
                  height={18}
                  style={{
                    filter: isOpen
                      ? 'brightness(0) saturate(100%) invert(78%) sepia(91%) saturate(749%) hue-rotate(360deg) brightness(103%) contrast(102%)'
                      : 'brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(534%) hue-rotate(64deg) brightness(105%) contrast(93%)',
                    transition: 'filter 150ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
                {feature.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                style={{
                  width: 18, height: 18, flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 300ms cubic-bezier(0.45,0,0.55,1)',
                }}
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"/>
              </svg>
            </button>

            <div
              id={`acc-body-${feature.index}`}
              role="region"
              className="accordion-body"
              ref={(el) => { bodyRefs.current[feature.index] = el }}
            >
              <div
                ref={(el) => { innerRefs.current[feature.index] = el }}
                style={{ padding: '0 20px 20px', fontSize: 14, lineHeight: 1.7, color: 'rgba(217,232,226,0.65)' }}
              >
                {feature.description}
                {feature.stat && (
                  <>
                    <div style={{
                      marginTop: 16,
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: 32, fontWeight: 700,
                      color: feature.statColor ?? 'var(--forsythia)',
                    }}>
                      {feature.stat}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(217,232,226,0.45)', marginTop: 4 }}>
                      {feature.statLabel}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Main exported component ──────────────────────────────────────
export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  const wasMobileRef = useRef<boolean>(false)

  // Context-lock: transfer active index on resize crossing breakpoint
  useEffect(() => {
    wasMobileRef.current = window.innerWidth < 1024

    const ro = new ResizeObserver(() => {
      const isMobile = window.innerWidth < 1024
      if (isMobile !== wasMobileRef.current) {
        wasMobileRef.current = isMobile
        // On switch to mobile, accordion opens to current active index
        if (isMobile) {
          // Smooth scroll to keep active accordion in view
          requestAnimationFrame(() => {
            const target = document.querySelector(`[data-index="${activeIndex}"]`)
            target?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
          })
        }
      }
    })
    ro.observe(document.body)
    return () => ro.disconnect()
  }, [activeIndex])

  const handleAccordionToggle = useCallback((idx: number) => {
    setActiveIndex((prev) => (prev === idx ? -1 : idx))
  }, [])

  const handleBentoHover = useCallback((idx: number) => {
    setActiveIndex(idx)
  }, [])

  return (
    <>
      <BentoGrid activeIndex={activeIndex} onHover={handleBentoHover} />
      <Accordion activeIndex={activeIndex} onToggle={handleAccordionToggle} />
    </>
  )
}
