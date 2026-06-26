import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import '@/styles/globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://neuralflow.ai'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'NeuralFlow – Next-Gen AI Data Automation Platform',
    template: '%s | NeuralFlow',
  },
  description:
    'NeuralFlow is an advanced AI-driven data automation platform that turns your raw data into intelligent, real-time action pipelines. Build faster. Scale smarter.',
  keywords: [
    'AI automation', 'data pipeline', 'machine learning platform',
    'neural network', 'data processing', 'real-time analytics',
    'multi-agent AI', 'data orchestration',
  ],
  authors: [{ name: 'NeuralFlow', url: BASE_URL }],
  creator: 'NeuralFlow',
  publisher: 'NeuralFlow',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'NeuralFlow',
    title: 'NeuralFlow – Next-Gen AI Data Automation Platform',
    description:
      'Turn raw data into intelligent, real-time action pipelines. Build faster. Scale smarter.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeuralFlow – Next-Gen AI Data Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neuralflow_ai',
    creator: '@neuralflow_ai',
    title: 'NeuralFlow – Next-Gen AI Data Automation Platform',
    description: 'Turn raw data into intelligent, real-time action pipelines.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: BASE_URL },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'NeuralFlow',
              applicationCategory: 'DeveloperApplication',
              description:
                'Advanced AI-driven data automation platform for real-time action pipelines.',
              url: BASE_URL,
              operatingSystem: 'All',
              offers: [
                { '@type': 'Offer', price: '29', priceCurrency: 'USD', name: 'Starter' },
                { '@type': 'Offer', price: '79', priceCurrency: 'USD', name: 'Pro' },
                { '@type': 'Offer', price: '299', priceCurrency: 'USD', name: 'Enterprise' },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
