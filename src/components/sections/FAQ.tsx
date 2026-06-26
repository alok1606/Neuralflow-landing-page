'use client'

import { useState, useRef, useEffect } from 'react'
import { FAQ_ITEMS } from '@/lib/data'

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}) {
  const bodyRef  = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bodyRef.current || !innerRef.current) return
    bodyRef.current.style.maxHeight = isOpen ? `${innerRef.current.scrollHeight}px` : '0'
  }, [isOpen])

  return (
    <div
      style={{
        background: 'rgba(17,76,90,0.2)',
        border: `1px solid ${isOpen ? 'rgba(255,200,1,0.25)' : 'rgba(217,232,226,0.08)'}`,
        borderRadius: 10, overflow: 'hidden',
        transition: 'border-color 200ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 12,
          padding: '20px 24px',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: 15, fontWeight: 600,
          color: isOpen ? 'var(--forsythia)' : 'var(--arctic-powder)',
          background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
          transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {question}
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
        id={id}
        role="region"
        ref={bodyRef}
        className="faq-body"
      >
        <div
          ref={innerRef}
          style={{
            padding: '0 24px 20px',
            fontSize: 14, lineHeight: 1.7,
            color: 'rgba(217,232,226,0.6)',
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      style={{ padding: '100px 0', background: 'rgba(17,76,90,0.08)' }}
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
            FAQ
          </span>
          <h2
            id="faq-title"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >
            Frequently asked<br />questions
          </h2>
        </header>

        <div
          className="reveal"
          style={{
            display: 'grid', gap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={i}
              id={`faq-body-${i}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
