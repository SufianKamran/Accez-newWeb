import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Capabilities from '@/components/Capabilities'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Capabilities />
      <Pricing />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  )
}
