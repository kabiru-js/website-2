'use client'

import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { BeforeAfter } from '@/components/before-after'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Team } from '@/components/team'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <BeforeAfter />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  )
}
