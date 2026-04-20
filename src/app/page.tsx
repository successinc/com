'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTABanner from '@/components/CTABanner'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <GallerySection />
        <TestimonialsSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801613076654"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute right-16 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp এ বার্তা দিন
        </span>
      </a>
    </div>
  )
}
