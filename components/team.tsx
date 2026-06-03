'use client'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const team = [
  {
    name: 'Dr. Amina Okonkwo',
    role: 'Lead Dentist',
    image: '/dentist-1.png',
  },
  {
    name: 'Dr. Chukwu Adeyemi',
    role: 'Orthodontist Specialist',
    image: '/dentist-2.png',
  },
  {
    name: 'Precious Chioma',
    role: 'Dental Hygienist',
    image: '/dentist-3.png',
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Meet Our Expert Team
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Dedicated professionals committed to your oral health and beautiful smile.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-border hover:border-primary/50 transition-all">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
