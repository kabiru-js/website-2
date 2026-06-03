'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Smile, Sparkles, Zap, Shield } from 'lucide-react'

const services = [
  {
    icon: Smile,
    title: 'General Dentistry',
    description: 'Professional cleanings, fillings, and preventive care to maintain your oral health.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile design for a radiant, confident smile.',
  },
  {
    icon: Zap,
    title: 'Orthodontics',
    description: 'Braces and aligners to straighten your teeth and perfect your bite.',
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    description: 'Advanced implant solutions to replace missing teeth with natural-looking results.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Our Dental Services
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Comprehensive dental care solutions tailored to your unique needs and goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
