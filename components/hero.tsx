'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Your Smile,{' '}
                <span className="text-primary">Our Priority</span>
              </h1>
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
                Experience world-class dental care with Nigeria&apos;s most trusted dental clinic. From routine checkups to advanced cosmetic procedures, we&apos;re here to give you the smile you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Your Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full rounded-3xl overflow-hidden">
            <Image
              src="/hero.png"
              alt="Modern dental clinic"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
