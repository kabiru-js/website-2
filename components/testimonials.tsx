'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Emeka Obi',
    role: 'Lagos',
    text: 'My experience at Apex Dental was outstanding. The team was professional, friendly, and made me feel comfortable throughout my treatment.',
    rating: 5,
  },
  {
    name: 'Chioma Nwankwo',
    role: 'Abuja',
    text: 'I got my teeth whitened here and the results exceeded my expectations. Highly recommended for anyone looking for quality dental care.',
    rating: 5,
  },
  {
    name: 'Ibrahim Hassan',
    role: 'Kano',
    text: 'The orthodontic treatment I received transformed my smile completely. Best decision I made for my dental health.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Patient Testimonials
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Real stories from satisfied patients who trust us with their smiles.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-8 space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
