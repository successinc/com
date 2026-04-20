'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { MapPin, ArrowUpRight, Plane, Briefcase, Globe2 } from 'lucide-react'

const destinations = [
  {
    image: '/images/canada.png',
    title: 'কানাডা',
    subtitle: 'স্টাডি, ওয়ার্ক ও ইমিগ্রেশন ভিসা',
    tag: 'জনপ্রিয়',
    tagColor: 'bg-red-500/90',
    desc: '98% সাফল্যের হার',
  },
  {
    image: '/images/uk.png',
    title: 'যুক্তরাজ্য',
    subtitle: 'স্টুডেন্ট ও ওয়ার্ক ভিসা',
    tag: 'টপ রেটেড',
    tagColor: 'bg-blue-500/90',
    desc: 'দ্রুত প্রসেসিং',
  },
  {
    image: '/images/australia.png',
    title: 'অস্ট্রেলিয়া',
    subtitle: 'স্কিলড মাইগ্রেশন',
    tag: 'জনপ্রিয়',
    tagColor: 'bg-amber-500/90',
    desc: 'পেশাদার সহায়তা',
  },
  {
    image: '/images/europe.png',
    title: 'শেঙ্গেন ভিসা',
    subtitle: '২৭টি ইউরোপীয় দেশে ভ্রমণ',
    tag: 'নতুন',
    tagColor: 'bg-violet-500/90',
    desc: 'সহজ প্রক্রিয়া',
  },
]

const services = [
  {
    image: '/images/flights.png',
    title: 'ফ্লাইট বুকিং',
    icon: Plane,
  },
  {
    image: '/images/workpermit.png',
    title: 'ওয়ার্ক পারমিট',
    icon: Briefcase,
  },
  {
    image: '/images/office.png',
    title: 'আমাদের অফিস',
    icon: Globe2,
  },
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gallery" className="relative py-20 lg:py-28" ref={ref}>
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
            <Globe2 className="h-3.5 w-3.5" />
            আমাদের বিশেষত্ব
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            আমাদের <span className="gradient-text">জনপ্রিয় গন্তব্য</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            বিশ্বের সবচেয়ে কাঙ্ক্ষিত গন্তব্যে আপনার যাত্রা শুরু করুন
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/60 cursor-pointer hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full ${dest.tagColor} text-white text-xs font-medium backdrop-blur-sm`}>
                    {dest.tag}
                  </span>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <h3 className="text-white font-semibold text-lg">{dest.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">{dest.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-xs font-medium">{dest.desc}</span>
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-colors">
                    বিস্তারিত
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-300 text-xs mt-1">Success Inc. এর মাধ্যমে সেবা নিন</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
