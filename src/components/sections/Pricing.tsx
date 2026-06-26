'use client'

import { useRef, useCallback, useEffect } from 'react'
import { PRICING_MATRIX, computePrice, getCurrencySymbol } from '@/lib/pricing'
import type { Currency, BillingCycle, TierKey } from '@/types'

// ─── CheckIcon (inline, no external dep) ─────────────────────────
function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 18, height: 18, flexShrink: 0,
        background: 'rgba(255,200,1,0.15)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
        <path stroke="#FFC801" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 6l3 3 5-5"/>
      </svg>
    </span>
  )
}

// ─── Pricing Card ─────────────────────────────────────────────────
function PricingCard({
  tier,
  name,
  description,
  features,
  ctaLabel,
  ctaStyle,
  featured,
}: {
  tier: TierKey
  name: string
  description: string
  features: string[]
  ctaLabel: string
  ctaStyle: 'primary' | 'outline' | 'ghost'
  featured?: boolean
}) {
  const symbolRef = useRef<HTMLSpanElement>(null)
  const valueRef  = useRef<HTMLSpanElement>(null)

  // Expose refs via data attribute for the engine to find
  useEffect(() => {
    if (symbolRef.current) symbolRef.current.dataset.symbol = 'true'
    if (valueRef.current) {
      valueRef.current.dataset.price = 'true'
      valueRef.current.dataset.tier = tier
    }
  }, [tier])

  const ctaStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--forsythia)', color: 'var(--oceanic-noir)',
      border: 'none',
    },
    outline: {
      background: 'transparent', color: 'var(--arctic-powder)',
      border: '1px solid rgba(241,246,244,0.3)',
    },
    ghost: {
      background: 'rgba(255,200,1,0.1)', color: 'var(--forsythia)',
      border: '1px solid rgba(255,200,1,0.2)',
    },
  }

  return (
    <article
      style={{
        position: 'relative',
        background: featured ? 'rgba(17,76,90,0.45)' : 'rgba(17,76,90,0.2)',
        border: `1px solid ${featured ? 'rgba(255,200,1,0.4)' : 'rgba(217,232,226,0.1)'}`,
        borderRadius: 16, padding: '32px 28px',
        display: 'flex', flexDirection: 'column',
        boxShadow: featured ? '0 0 0 1px rgba(255,200,1,0.15), 0 24px 48px rgba(0,0,0,0.3)' : undefined,
        transition: 'transform 200ms cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--forsythia)', color: 'var(--oceanic-noir)',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 11, fontWeight: 700,
          padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap',
        }}>
          Most Popular
        </div>
      )}

      <div style={{
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: 13, fontWeight: 600,
        color: 'var(--mystic-mint)',
        textTransform: 'uppercase', letterSpacing: '0.1em',
      }}>
        {name}
      </div>

      {/* Price display — only these text nodes update */}
      <div style={{
        marginTop: 20, display: 'flex', alignItems: 'flex-end', gap: 4,
      }}>
        <span
          ref={symbolRef}
          className="price-symbol"
        />
        <span
          ref={valueRef}
          className="price-value"
        />
        <span style={{
          fontSize: 14, color: 'rgba(217,232,226,0.45)', marginBottom: 6,
        }}>
          /mo
        </span>
      </div>

      <p style={{
        marginTop: 12, fontSize: 14, color: 'rgba(217,232,226,0.55)',
        lineHeight: 1.5, paddingBottom: 24,
        borderBottom: '1px solid rgba(217,232,226,0.08)',
      }}>
        {description}
      </p>

      <ul
        aria-label={`${name} plan features`}
        style={{
          marginTop: 24, display: 'flex', flexDirection: 'column',
          gap: 12, flex: 1, listStyle: 'none', padding: 0,
        }}
      >
        {features.map((feat) => (
          <li
            key={feat}
            style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(217,232,226,0.75)' }}
          >
            <CheckIcon />
            {feat}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 28 }}>
        <a
          href="#"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontWeight: 600, fontSize: 14,
            borderRadius: 6, padding: '12px 24px',
            textDecoration: 'none',
            transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
            ...ctaStyles[ctaStyle],
          }}
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  )
}

// ─── Toggle Button ────────────────────────────────────────────────
function ToggleBtn({
  label,
  active,
  onClick,
  ariaLabel,
}: {
  label: string
  active: boolean
  onClick: () => void
  ariaLabel?: string
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: 14, fontWeight: 600, padding: '8px 20px',
        borderRadius: 6, border: 'none', cursor: 'pointer',
        background: active ? 'var(--forsythia)' : 'transparent',
        color: active ? 'var(--oceanic-noir)' : 'rgba(241,246,244,0.5)',
        transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {label}
    </button>
  )
}

// ─── Currency Button ──────────────────────────────────────────────
function CurrencyBtn({
  currency,
  active,
  onClick,
}: {
  currency: Currency
  active: boolean
  onClick: () => void
}) {
  const labels: Record<Currency, string> = { INR: '₹ INR', USD: '$ USD', EUR: '€ EUR' }
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: 13, fontWeight: 600, padding: '7px 16px',
        borderRadius: 6, cursor: 'pointer',
        background: active ? 'rgba(255,200,1,0.15)' : 'transparent',
        color: active ? 'var(--forsythia)' : 'rgba(241,246,244,0.5)',
        border: `1px solid ${active ? 'rgba(255,200,1,0.3)' : 'rgba(241,246,244,0.15)'}`,
        transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {labels[currency]}
    </button>
  )
}

// ─── Main Pricing Section ─────────────────────────────────────────
// State is stored in refs to prevent any parent re-render on change.
// Only the targeted text nodes are mutated via DOM.
export default function Pricing() {
  const cycleRef    = useRef<BillingCycle>('monthly')
  const currencyRef = useRef<Currency>('INR')

  // For button active-state visuals (these are isolated buttons only)
  const monthlyBtnRef = useRef<HTMLButtonElement>(null)
  const annualBtnRef  = useRef<HTMLButtonElement>(null)
  const currencyBtns  = useRef<Record<Currency, HTMLButtonElement | null>>({
    INR: null, USD: null, EUR: null,
  })

  // Isolated price update — only mutates text nodes
  const updatePrices = useCallback(() => {
    const cycle    = cycleRef.current
    const currency = currencyRef.current
    const symbol   = getCurrencySymbol(currency)

    document.querySelectorAll<HTMLElement>('[data-symbol]').forEach((el) => {
      el.textContent = symbol
    })
    document.querySelectorAll<HTMLElement>('[data-price][data-tier]').forEach((el) => {
      const tier = el.dataset.tier as TierKey
      el.textContent = String(computePrice(tier, currency, cycle))
    })
  }, [])

  // Initial render
  useEffect(() => {
    updatePrices()
  }, [updatePrices])

  const setCycle = useCallback((cycle: BillingCycle) => {
    if (cycleRef.current === cycle) return
    cycleRef.current = cycle
    // Update button styles directly (no re-render)
    if (monthlyBtnRef.current) {
      monthlyBtnRef.current.setAttribute('aria-pressed', String(cycle === 'monthly'))
      monthlyBtnRef.current.style.background = cycle === 'monthly' ? 'var(--forsythia)' : 'transparent'
      monthlyBtnRef.current.style.color = cycle === 'monthly' ? 'var(--oceanic-noir)' : 'rgba(241,246,244,0.5)'
    }
    if (annualBtnRef.current) {
      annualBtnRef.current.setAttribute('aria-pressed', String(cycle === 'annual'))
      annualBtnRef.current.style.background = cycle === 'annual' ? 'var(--forsythia)' : 'transparent'
      annualBtnRef.current.style.color = cycle === 'annual' ? 'var(--oceanic-noir)' : 'rgba(241,246,244,0.5)'
    }
    updatePrices()
  }, [updatePrices])

  const setCurrency = useCallback((currency: Currency) => {
    if (currencyRef.current === currency) return
    currencyRef.current = currency
    // Update currency button styles directly
    ;(Object.keys(currencyBtns.current) as Currency[]).forEach((c) => {
      const btn = currencyBtns.current[c]
      if (!btn) return
      const isActive = c === currency
      btn.setAttribute('aria-pressed', String(isActive))
      btn.style.background = isActive ? 'rgba(255,200,1,0.15)' : 'transparent'
      btn.style.color = isActive ? 'var(--forsythia)' : 'rgba(241,246,244,0.5)'
      btn.style.borderColor = isActive ? 'rgba(255,200,1,0.3)' : 'rgba(241,246,244,0.15)'
    })
    updatePrices()
  }, [updatePrices])

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      style={{ padding: '100px 0', background: 'rgba(17,76,90,0.05)' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <header className="reveal" style={{ marginBottom: 48 }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--forsythia)', marginBottom: 16,
          }}>
            Simple Pricing
          </span>
          <h2
            id="pricing-title"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Pay for what you use
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(217,232,226,0.65)', lineHeight: 1.6,
            maxWidth: 560, marginTop: 12,
          }}>
            Transparent pricing that scales with your pipeline. Annual billing saves 20% across all tiers.
          </p>
        </header>

        {/* Controls — state is isolated to refs; no parent re-render */}
        <div
          className="reveal"
          role="group"
          aria-label="Pricing controls"
          style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', gap: 16, marginBottom: 48,
          }}
        >
          {/* Billing toggle */}
          <div
            role="group"
            aria-label="Billing cycle"
            style={{
              display: 'flex', alignItems: 'center',
              background: 'rgba(17,76,90,0.4)',
              border: '1px solid rgba(217,232,226,0.12)',
              borderRadius: 8, padding: 4, gap: 4,
            }}
          >
            <button
              ref={monthlyBtnRef}
              type="button"
              aria-pressed="true"
              onClick={() => setCycle('monthly')}
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 14, fontWeight: 600, padding: '8px 20px',
                borderRadius: 6, border: 'none', cursor: 'pointer',
                background: 'var(--forsythia)',
                color: 'var(--oceanic-noir)',
                transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Monthly
            </button>
            <button
              ref={annualBtnRef}
              type="button"
              aria-pressed="false"
              onClick={() => setCycle('annual')}
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 14, fontWeight: 600, padding: '8px 20px',
                borderRadius: 6, border: 'none', cursor: 'pointer',
                background: 'transparent',
                color: 'rgba(241,246,244,0.5)',
                transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Annual
            </button>
            <span
              aria-label="Save 20% with annual billing"
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 11, fontWeight: 700,
                background: 'rgba(255,200,1,0.15)',
                color: 'var(--forsythia)',
                border: '1px solid rgba(255,200,1,0.25)',
                borderRadius: 20, padding: '3px 10px',
                marginLeft: 4,
              }}
            >
              −20%
            </span>
          </div>

          {/* Currency selector */}
          <div
            role="group"
            aria-label="Currency selector"
            style={{ display: 'flex', gap: 8 }}
          >
            {(['INR', 'USD', 'EUR'] as Currency[]).map((c) => {
              const labels: Record<Currency, string> = { INR: '₹ INR', USD: '$ USD', EUR: '€ EUR' }
              return (
                <button
                  key={c}
                  ref={(el) => { currencyBtns.current[c] = el }}
                  type="button"
                  aria-pressed={c === 'INR'}
                  onClick={() => setCurrency(c)}
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: 13, fontWeight: 600, padding: '7px 16px',
                    borderRadius: 6, cursor: 'pointer',
                    background: c === 'INR' ? 'rgba(255,200,1,0.15)' : 'transparent',
                    color: c === 'INR' ? 'var(--forsythia)' : 'rgba(241,246,244,0.5)',
                    border: `1px solid ${c === 'INR' ? 'rgba(255,200,1,0.3)' : 'rgba(241,246,244,0.15)'}`,
                    transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  {labels[c]}
                </button>
              )
            })}
          </div>
        </div>

        {/* Pricing grid */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          <PricingCard
            tier="starter"
            name="Starter"
            description="For indie builders and small teams getting started with AI automation."
            features={[
              '2 active pipelines',
              '1M events / month',
              '5 connector adapters',
              'Community support',
            ]}
            ctaLabel="Get Started"
            ctaStyle="outline"
          />
          <PricingCard
            tier="pro"
            name="Pro"
            description="For growing teams shipping production-grade AI pipelines."
            features={[
              'Unlimited pipelines',
              '50M events / month',
              'All connector adapters',
              'Live inference dashboard',
              'Priority email support',
            ]}
            ctaLabel="Start Pro Trial"
            ctaStyle="primary"
            featured
          />
          <PricingCard
            tier="enterprise"
            name="Enterprise"
            description="For organisations requiring SLAs, compliance, and dedicated infrastructure."
            features={[
              'Unlimited everything',
              'Dedicated infrastructure',
              '99.99% uptime SLA',
              'SOC 2 + GDPR compliance',
              '24/7 dedicated support',
            ]}
            ctaLabel="Contact Sales"
            ctaStyle="ghost"
          />
        </div>
      </div>
    </section>
  )
}
