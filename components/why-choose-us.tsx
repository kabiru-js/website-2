'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'Expert Team',
    description: 'Our dentists are highly trained professionals with years of experience in advanced dental procedures.',
  },
  {
    title: 'State-of-the-Art Technology',
    description: 'We use the latest dental technology and equipment to ensure precision and patient comfort.',
  },
  {
    title: 'Patient-Centered Care',
    description: 'Your comfort and satisfaction are our top priorities in every treatment we provide.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Why Choose Apex Dental?
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              We combine expertise, technology, and compassion to deliver exceptional dental care.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-8 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
