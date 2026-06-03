'use client'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
            Ready for Your Perfect Smile?
          </h2>
          <p className="text-pretty text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards a healthier, more beautiful smile.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
            Book Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
            Call Us
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/80">
          Available Monday - Saturday, 9 AM - 6 PM
        </p>
      </div>
    </section>
  )
}
