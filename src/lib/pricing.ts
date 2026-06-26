import type { PricingMatrix, TierKey, Currency, BillingCycle } from '@/types'

export const PRICING_MATRIX: PricingMatrix = {
  tiers: {
    starter:    { baseUSD: 29 },
    pro:        { baseUSD: 79 },
    enterprise: { baseUSD: 299 },
  },
  currencies: {
    USD: { symbol: '$', tariff: 1.0,  decimals: 0 },
    INR: { symbol: '₹', tariff: 83.5, decimals: 0 },
    EUR: { symbol: '€', tariff: 0.92, decimals: 0 },
  },
  annualDiscount: 0.20,
}

export function computePrice(
  tierKey: TierKey,
  currency: Currency,
  cycle: BillingCycle
): number {
  const { baseUSD } = PRICING_MATRIX.tiers[tierKey]
  const { tariff } = PRICING_MATRIX.currencies[currency]
  const discount = cycle === 'annual' ? PRICING_MATRIX.annualDiscount : 0
  return Math.round(baseUSD * tariff * (1 - discount))
}

export function getCurrencySymbol(currency: Currency): string {
  return PRICING_MATRIX.currencies[currency].symbol
}
