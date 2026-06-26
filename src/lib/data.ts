import type { BentoFeature, TestimonialData, FaqItem, NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { href: '#features',     label: 'Features' },
  { href: '#pricing',      label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq',          label: 'FAQ' },
]

export const BENTO_FEATURES: BentoFeature[] = [
  {
    index: 0,
    tag: 'Real-time',
    title: 'Adaptive Stream Processing',
    description: 'Process millions of events per second with dynamic backpressure control. NeuralFlow\'s streaming core auto-scales agents in response to load spikes — zero cold starts, zero dropped events.',
    stat: '12M+',
    statLabel: 'Events per second',
    large: true,
    svgPath: '/svgs/arrow-trending-up.svg',
    svgType: 'stroke',
  },
  {
    index: 1,
    tag: 'Orchestration',
    title: 'Multi-Agent Orchestration',
    description: 'Compose intelligent agents that coordinate, delegate, and self-heal across your pipeline topology without manual intervention.',
    svgPath: '/svgs/cog-8-tooth.svg',
    svgType: 'stroke',
    tall: true,
  },
  {
    index: 2,
    tag: 'Observability',
    title: 'Live Inference Dashboard',
    description: 'Monitor every model call, embedding operation, and agent decision in real-time.',
    stat: '384',
    statLabel: 'Vector dimensions',
    statColor: '#FF9932',
    svgPath: '/svgs/chart-pie.svg',
    svgType: 'stroke',
  },
  {
    index: 3,
    tag: 'Integrations',
    title: 'Universal Connector SDK',
    description: 'Connect any source or destination in under 5 minutes using typed SDK adapters. 200+ pre-built connectors included.',
    svgPath: '/svgs/link.svg',
    svgType: 'stroke',
  },
  {
    index: 4,
    tag: 'Reliability',
    title: 'Self-Healing Pipelines',
    description: 'Automatic retry logic, circuit breakers, and dead-letter queues — pipelines that recover themselves without paging your on-call engineer.',
    svgPath: '/svgs/arrow-path.svg',
    svgType: 'stroke',
  },
  {
    index: 5,
    tag: 'Search',
    title: 'Semantic Search Engine',
    description: 'Full-text and vector hybrid search across all your pipeline data, with BM25 + cosine scoring fused at query time.',
    svgPath: '/svgs/search.svg',
    svgType: 'fill',
  },
]

export const TESTIMONIALS: TestimonialData[] = [
  {
    initials: 'SR',
    name: 'Siddharth Rao',
    role: 'Head of Data Eng, Razorpay',
    quote: 'NeuralFlow cut our data pipeline setup from 3 weeks to 2 days. The agent orchestration layer is unlike anything else on the market.',
  },
  {
    initials: 'AK',
    name: 'Aisha Kim',
    role: 'Platform Lead, Stripe',
    quote: 'The self-healing pipeline feature alone has saved us four on-call incidents in the last month. Genuinely impressive reliability.',
  },
  {
    initials: 'PM',
    name: 'Pavel Morozov',
    role: 'CTO, DataMesh GmbH',
    quote: 'We process 8M events daily through NeuralFlow. Latency is rock-solid at under 3ms p99. Switching from our old stack was the best decision this year.',
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How does the billing cycle discount work?',
    answer: 'Annual billing applies a flat 20% discount to your monthly rate, computed dynamically via our pricing matrix across all regions. The discount is applied at checkout and reflected immediately in your invoice.',
  },
  {
    question: 'Can I switch currencies after signing up?',
    answer: 'Currency is locked at subscription time based on your billing address. You can switch at next renewal by updating your billing settings. Regional tariffs are recalculated automatically.',
  },
  {
    question: 'What counts as an "event"?',
    answer: 'An event is any discrete unit of data ingested into a NeuralFlow pipeline — a webhook payload, a database row change, a message from a queue, or a model inference call. Internal retries and heartbeat pings do not count against your quota.',
  },
  {
    question: 'Is NeuralFlow SOC 2 certified?',
    answer: 'Yes. NeuralFlow is SOC 2 Type II certified and GDPR compliant. Enterprise customers also have access to HIPAA BAA and custom DPA agreements on request.',
  },
  {
    question: 'Can I self-host NeuralFlow?',
    answer: 'Enterprise plans include a self-hosted deployment option via Helm chart or Docker Compose. Air-gapped environments are supported with offline model registries.',
  },
  {
    question: 'How does the free trial work?',
    answer: 'Every plan starts with a 14-day free trial, no credit card required. You get full Pro-tier access during the trial. At the end, you choose your plan or stay on the Starter tier.',
  },
]
