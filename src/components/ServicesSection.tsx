'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Plane, FileText, GraduationCap, Briefcase, Globe, Clock, Shield, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Plane,
    emoji: '✈️',
    title: 'ফ্লাইট টিকেট',
    subtitle: 'অভ্যন্তরীণ ও আন্তর্জাতিক ফ্লাইট বুকিং',
    description: 'বিশ্বব্যাপী সেরা দামে ফ্লাইট বুকিং আমাদের বিশেষজ্ঞ সেবার মাধ্যমে। যেকোনো এয়ারলাইনের টিকেট সরাসরি বুকিং করুন।',
    processing: 'প্রসেসিং: ১-২ ঘন্টা',
    requirements: 'বৈধ আইডি, পাসপোর্ট',
    features: ['সেরা দাম নিশ্চিত', 'তাৎক্ষণিক কনফার্মেশন', 'সব এয়ারলাইন'],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/50',
  },
  {
    icon: FileText,
    emoji: '🍁',
    title: 'কানাডা ভিসা',
    subtitle: 'স্টাডি, ওয়ার্ক ও ইমিগ্রেশন',
    description: 'উচ্চ সাফল্যের হার সহ কানাডার জন্য সম্পূর্ণ ভিসা প্রসেসিং। প্রতিটি ধাপে বিশেষজ্ঞ নির্দেশনা ও সহায়তা।',
    processing: 'প্রসেসিং: ৪-৬ সপ্তাহ',
    requirements: 'ডকুমেন্ট, মেডিকেল',
    features: ['৯৮% সাফল্যের হার', 'সম্পূর্ণ ডকুমেন্ট সাপোর্ট', 'ইন্টারভিউ প্রস্তুতি'],
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'hover:border-red-500/50',
  },
  {
    icon: GraduationCap,
    emoji: '🇬🇧',
    title: 'ইউকে ভিসা',
    subtitle: 'স্টুডেন্ট ও ওয়ার্ক ভিসা',
    description: 'ইউকে ভিসা আবেদনের জন্য বিশেষজ্ঞ নির্দেশনা ও সহায়তা। টায়ার ৪ ও ৫ সিটির জন্য সেরা সেবা।',
    processing: 'প্রসেসিং: ৩-৪ সপ্তাহ',
    requirements: 'পাসপোর্ট, আর্থিক প্রমাণ',
    features: ['টায়ার ৪ সিটি', 'স্কলারশিপ সাপোর্ট', 'দ্রুত প্রসেসিং'],
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    icon: Globe,
    emoji: '🦘',
    title: 'অস্ট্রেলিয়া ভিসা',
    subtitle: 'ওয়ার্ক ও স্কিলড মাইগ্রেশন',
    description: 'ব্যাপক অস্ট্রেলিয়া ভিসা সমাধান যা আপনার প্রয়োজনের জন্য উপযুক্ত। স্কিলড মাইগ্রেশন থেকে স্টুডেন্ট ভিসা।',
    processing: 'প্রসেসিং: ২-৩ সপ্তাহ',
    requirements: 'স্কিল অ্যাসেসমেন্ট',
    features: ['স্কিলড মাইগ্রেশন', 'স্টুডেন্ট ভিসা', 'আইইএলটিএস সাপোর্ট'],
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'hover:border-amber-500/50',
  },
  {
    icon: Shield,
    emoji: '🇪🇺',
    title: 'শেঙ্গেন ভিসা',
    subtitle: 'ইউরোপ ভ্রমণ ও কাজ',
    description: '২৭টি ইউরোপীয় দেশে ভ্রমণের সুযোগ পান। একটি ভিসায় পুরো ইউরোপ ঘুরে দেখুন।',
    processing: 'প্রসেসিং: ২-৩ সপ্তাহ',
    requirements: 'ট্রাভেল ইন্স্যুরেন্স',
    features: ['২৭টি দেশে ভ্রমণ', 'মাল্টিপল এন্ট্রি', 'দ্রুত প্রসেসিং'],
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'hover:border-violet-500/50',
  },
  {
    icon: Briefcase,
    emoji: '💼',
    title: 'ওয়ার্ক পারমিট',
    subtitle: 'এমপ্লয়মেন্ট অথরাইজেশন',
    description: 'বিশ্বব্যাপী পেশাদার ওয়ার্ক পারমিট সমাধান। জব অফার খুঁজে পেতে এবং ওয়ার্ক পারমিট পেতে সাহায্য।',
    processing: 'প্রসেসিং: ৩-৪ সপ্তাহ',
    requirements: 'জব অফার, যোগ্যতা',
    features: ['জব অফার সাপোর্ট', 'ওয়ার্ক পারমিট', 'ভিসা গাইডলাইন'],
    color: 'from-cyan-500/20 to-teal-500/20',
    borderColor: 'hover:border-cyan-500/50',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full text-left bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-500 ${service.borderColor} hover:shadow-lg hover:shadow-emerald-500/5 group cursor-pointer hover:-translate-y-1`}
      >
        {/* Top section */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              {service.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{service.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline text-emerald-400 text-sm font-medium">আরো জানুন</span>
            <ArrowRight className={`h-4 w-4 text-emerald-400 transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} />
          </div>
        </div>

        {/* Expandable detail section */}
        <div className={`service-card-content ${expanded ? 'expanded' : ''}`}>
          <div className="pt-4 mt-4 border-t border-slate-700/50 space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            
            {/* Features list */}
            <div className="space-y-2">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                <Clock className="h-3 w-3" />
                {service.processing}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-700/50 text-gray-300 text-xs font-medium border border-slate-600/50">
                <Icon className="h-3 w-3" />
                {service.requirements}
              </span>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-20 lg:py-28" ref={ref}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            <Shield className="h-3.5 w-3.5" />
            পেশাদার সেবা
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            আমাদের <span className="gradient-text">প্রিমিয়াম সেবাসমূহ</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            আমাদের ব্যাপক ভ্রমণ ও ভিসা সমাধানের মধ্যে থেকে বেছে নিন।
            প্রতিটি সেবায় বিশেষজ্ঞ নির্দেশনা ও সম্পূর্ণ সহায়তা পাবেন।
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
