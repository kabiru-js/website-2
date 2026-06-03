'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'

const transformations = [
  {
    title: 'Orthodontic Transformation',
    image: '/before-after-1.png',
  },
  {
    title: 'Cosmetic Smile Makeover',
    image: '/before-after-2.png',
  },
]

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Smile Transformations
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              See the remarkable results our patients have achieved with our expert treatments.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((item, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-96 md:h-80 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
