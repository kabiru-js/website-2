'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                <span className="font-bold text-primary">A</span>
              </div>
              <span className="font-serif text-lg font-bold">Apex Dental</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium dental care bringing smiles to Nigeria since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer">
                General Dentistry
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer">
                Cosmetic Dentistry
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer">
                Orthodontics
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer">
                Dental Implants
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+2341234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  +234 (0) 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@apexdental.ng" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  hello@apexdental.ng
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            &copy; 2024 Apex Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
