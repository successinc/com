'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Star, Shield, Zap } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 lg:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/20"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10" />
          <div className="absolute inset-0 dot-grid opacity-10" />
          
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />

          <div className="relative px-8 py-16 sm:px-12 sm:py-20 text-center">
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              {[
                { icon: Shield, text: 'নির্ভরযোগ্য' },
                { icon: Star, text: '৯৮% সাফল্য' },
                { icon: Zap, text: 'দ্রুত সেবা' },
              ].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 text-gray-300 text-xs font-medium"
                >
                  <badge.icon className="h-3.5 w-3.5 text-emerald-400" />
                  {badge.text}
                </span>
              ))}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              আজই শুরু করুন আপনার{' '}
              <span className="gradient-text-wide">আন্তর্জাতিক যাত্রা</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
            >
              স্বল্প খরচে, দ্রুত প্রসেসিংয়ে কানাডা, ইউকে, অস্ট্রেলিয়া বা শেঙ্গেনের জন্য আবেদন করুন।
              আমাদের বিশেষজ্ঞ দল সবসময় আপনার পাশে আছে।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="https://wa.me/8801613076654" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 group"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp এ যোগাযোগ করুন
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-gray-300 hover:text-white hover:bg-slate-800 rounded-full px-8 py-6 text-base font-medium transition-all duration-300"
                >
                  ফর্ম পূরণ করুন
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
