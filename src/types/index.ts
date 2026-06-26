export type Currency = 'INR' | 'USD' | 'EUR'
export type BillingCycle = 'monthly' | 'annual'
export type TierKey = 'starter' | 'pro' | 'enterprise'

export interface CurrencyConfig {
  symbol: string
  tariff: number
  decimals: number
}

export interface TierConfig {
  baseUSD: number
}

export interface PricingMatrix {
  tiers: Record<TierKey, TierConfig>
  currencies: Record<Currency, CurrencyConfig>
  annualDiscount: number
}

export interface PricingState {
  cycle: BillingCycle
  currency: Currency
}

export interface NavLink {
  href: string
  label: string
}

export interface BentoFeature {
  index: number
  tag: string
  title: string
  description: string
  stat?: string
  statLabel?: string
  statColor?: string
  large?: boolean
  tall?: boolean
  svgPath: string
  svgType?: 'stroke' | 'fill'
}

export interface TestimonialData {
  initials: string
  name: string
  role: string
  quote: string
}

export interface FaqItem {
  question: string
  answer: string
}
