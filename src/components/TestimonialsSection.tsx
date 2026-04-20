'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'আহমেদ হাসান',
    location: 'সিলেট',
    text: 'Success Inc. আমার কানাডা ভিসা প্রসেসিং এত মসৃণ করেছে। প্রতিটি ধাপে সঠিক গাইডলাইন পেয়েছি। অত্যন্ত সুপারিশকৃত!',
    rating: 5,
    initial: 'আ',
  },
  {
    name: 'ফাতিমা খান',
    location: 'সিলেট',
    text: 'পেশাদার সেবা এবং চমৎকার সাপোর্ট। Success Inc. এর মাধ্যমে আমার ইউকে ভিসা ৩ সপ্তাহে পেয়েছি!',
    rating: 5,
    initial: 'ফ',
  },
  {
    name: 'রাজেশ প্যাটেল',
    location: 'ভারত',
    text: 'যে ট্রাভেল এজেন্সির সাথে আমি কাজ করেছি তার মধ্যে Success Inc. সেরা। অসাধারণ ফলাফল!',
    rating: 5,
    initial: 'র',
  },
  {
    name: 'নুসরাত জাহান',
    location: 'সিলেট',
    text: 'শেঙ্গেন ভিসার জন্য Success Inc. কে ধন্যবাদ। সব কিছু নিখুঁতভাবে সম্পন্ন হয়েছে।',
    rating: 5,
    initial: 'ন',
  },
  {
    name: 'সাকিব আলী',
    location: 'ঢাকা',
    text: 'অস্ট্রেলিয়া ওয়ার্ক পারমিটের জন্য দারুণ সহায়তা। Success Inc. দলটি অত্যন্ত সহায়ক ও দক্ষ।',
    rating: 5,
    initial: 'স',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative py-20 lg:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            আমাদের গ্রাহকরা <span className="gradient-text">যা বলেন</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            সফল ভ্রমণকারীদের প্রকৃত গল্প
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {[0, 1, 2].map((offset) => {
              const idx = (current + offset) % testimonials.length
              const t = testimonials[idx]
              return (
                <motion.div
                  key={`${current}-${offset}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: offset * 0.15 }}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 relative group hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="absolute top-6 right-6 text-emerald-500/20">
                    <Quote className="h-10 w-10" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{t.name}</h4>
                      <p className="text-gray-400 text-sm">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
