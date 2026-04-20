'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Clock, HeadphonesIcon, Award, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'নির্ভরযোগ্য সেবা',
    description: '৯৮% সাফল্যের হার সহ বিশ্বস্ত ভিসা প্রসেসিং সেবা',
  },
  {
    icon: Clock,
    title: 'দ্রুত প্রসেসিং',
    description: 'সময়মতো ভিসা প্রসেসিং — আপনার সময়ের মূল্য দিন',
  },
  {
    icon: HeadphonesIcon,
    title: '২৪/৭ সাপোর্ট',
    description: 'যেকোনো সময় আমাদের দলের সাথে যোগাযোগ করুন',
  },
  {
    icon: Award,
    title: '১৫+ বছরের অভিজ্ঞতা',
    description: 'ভ্রমণ ও ইমিগ্রেশন সেবায় দীর্ঘ অভিজ্ঞতা',
  },
  {
    icon: Users,
    title: '১০,০০০+ গ্রাহক',
    description: 'বিশ্বব্যাপী সন্তুষ্ট গ্রাহকদের বিশ্বাসভাজন',
  },
  {
    icon: Globe,
    title: '৫০+ গন্তব্য',
    description: 'বিশ্বের ৫০ টিরও বেশি দেশে ভ্রমণ সুযোগ',
  },
]

function CounterNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString('bn-BD')}{suffix}
    </span>
  )
}

export default function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const statsData = [
    { value: 10000, suffix: '+', label: 'সন্তুষ্ট গ্রাহক' },
    { value: 98, suffix: '%', label: 'সাফল্যের হার' },
    { value: 50, suffix: '+', label: 'গন্তব্য দেশ' },
    { value: 15, suffix: '+', label: 'বছরের অভিজ্ঞতা' },
  ]

  return (
    <section className="relative py-20 lg:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            কেন <span className="gradient-text">Success Inc.</span> বেছে নেবেন?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            আমরা শুধু সেবা দিই না, আমরা আপনার স্বপ্ন বাস্তবায়ন করি
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-2xl py-8 px-4"
            >
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
                <CounterNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
