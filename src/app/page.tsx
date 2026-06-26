import Loader from '@/components/ui/Loader'
import ScrollRevealProvider from '@/components/ui/ScrollRevealProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Loader />
      <ScrollRevealProvider>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTABanner />
        </main>
        <Footer />
      </ScrollRevealProvider>
    </>
  )
}
