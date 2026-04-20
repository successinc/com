'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '১০,০০০+', label: 'সন্তুষ্ট গ্রাহক' },
  { value: '৯৮%', label: 'সাফল্যের হার' },
  { value: '৫০+', label: 'গন্তব্য দেশ' },
]

const highlights = [
  'ফ্লাইট টিকেট',
  'ভিসা প্রসেসিং',
  'ওয়ার্ক পারমিট',
  'ইমিগ্রেশন',
]

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />

      {/* Floating green dots */}
      {[
        { top: '15%', left: '10%', delay: 0 },
        { top: '25%', right: '15%', delay: 1 },
        { top: '60%', left: '5%', delay: 2 },
        { top: '70%', right: '10%', delay: 0.5 },
        { top: '40%', left: '20%', delay: 1.5 },
        { top: '80%', left: '15%', delay: 2.5 },
        { top: '10%', right: '25%', delay: 3 },
        { bottom: '20%', right: '20%', delay: 1.8 },
        { top: '50%', right: '5%', delay: 0.8 },
        { bottom: '30%', left: '25%', delay: 2.2 },
        { top: '5%', left: '40%', delay: 0.3 },
        { bottom: '10%', right: '40%', delay: 1.2 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-emerald-500/40 rounded-full animate-dot-float"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                সিলেট থেকে বিশ্বব্যাপী ভ্রমণ সেবা
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">স্বপ্ন পূরণ হোক</span>
              <br />
              <span className="gradient-text-wide">ভ্রমণের সাথে</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              ফ্লাইট টিকেট, ভিসা প্রসেসিং এবং ইমিগ্রেশন সেবা যা আপনার স্বপ্নকে বাস্তবায়ন করে।
              কানাডা, ইউকে, অস্ট্রেলিয়া, শেঙ্গেন ও আরও অনেক কিছু।
            </motion.p>

            {/* Highlight pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {highlights.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-gray-300 text-xs font-medium"
                >
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#services">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 group"
                >
                  সেবা দেখুন
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://wa.me/8801613076654" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-gray-300 hover:text-white hover:bg-slate-800 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 group"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  এখনই যোগাযোগ করুন
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-4 min-w-[140px]"
                >
                  <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Globe Graphic with Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer ring */}
            <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border border-emerald-500/20 animate-spin-slow" />
            {/* Middle ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border border-teal-500/15" style={{ animation: 'spin-slow 25s linear infinite reverse' }} />
            {/* Inner ring */}
            <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border border-emerald-400/10" style={{ animation: 'spin-slow 30s linear infinite' }} />

            {/* Main gradient circle */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-full backdrop-blur-sm border border-emerald-500/20" />
              
              {/* Inner content - Logo + Globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden bg-slate-900/80 p-1 border border-emerald-500/30 shadow-lg shadow-emerald-500/20 animate-float">
                    <Image src="/images/logo.png" alt="Success Inc." width={112} height={112} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-emerald-400 text-sm font-semibold">Success Inc.</p>
                  <p className="text-gray-400 text-[10px]">বিশ্ব ভ্রমণ শুরু করুন</p>
                </div>
              </div>

              {/* Orbiting country flag cards */}
              {[
                { angle: 0, label: '🇨🇦', name: 'কানাডা' },
                { angle: 60, label: '🇬🇧', name: 'ইউকে' },
                { angle: 120, label: '🇦🇺', name: 'অস্ট্রেলিয়া' },
                { angle: 180, label: '🇪🇺', name: 'শেঙ্গেন' },
                { angle: 240, label: '✈️', name: 'ফ্লাইট' },
                { angle: 300, label: '💼', name: 'ওয়ার্ক পারমিট' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${50 + 44 * Math.sin((item.angle * Math.PI) / 180)}%`,
                    left: `${50 + 44 * Math.cos((item.angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="animate-float flex flex-col items-center gap-1" style={{ animationDelay: `${i * 0.8}s` }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-lg sm:text-xl shadow-lg hover:border-emerald-500/50 transition-all duration-300 hover:scale-110">
                      {item.label}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium hidden sm:block">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Glow effect behind */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full bg-emerald-500/5 blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </section>
  )
}
