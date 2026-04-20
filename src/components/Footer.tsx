'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { label: 'হোম', href: '#home' },
  { label: 'সেবাসমূহ', href: '#services' },
  { label: 'গ্যালারি', href: '#gallery' },
  { label: 'পর্যটক মতামত', href: '#testimonials' },
  { label: 'যোগাযোগ', href: '#contact' },
]

const serviceLinks = [
  { label: 'ফ্লাইট টিকেট', href: '#services' },
  { label: 'কানাডা ভিসা', href: '#services' },
  { label: 'ইউকে ভিসা', href: '#services' },
  { label: 'অস্ট্রেলিয়া ভিসা', href: '#services' },
  { label: 'শেঙ্গেন ভিসা', href: '#services' },
  { label: 'ওয়ার্ক পারমিট', href: '#services' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-[#0a0f1a]">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden p-1 bg-slate-800/80 border border-slate-700/50">
                <Image src="/images/logo.png" alt="Success Inc." width={44} height={44} className="object-contain w-full h-full" />
              </div>
              <div>
                <span className="text-lg font-bold gradient-text block">Success Inc.</span>
                <span className="text-[10px] text-gray-500">স্বপ্ন পূরণ হোক ভ্রমণের সাথে</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ফ্লাইট টিকেট, ভিসা প্রসেসিং এবং ইমিগ্রেশন সেবায় আপনার বিশ্বস্ত সঙ্গী।
              কানাডা, ইউকে, অস্ট্রেলিয়া, শেঙ্গেন — বিশ্বের যেকোনো গন্তব্যে।
            </p>
            {/* Social */}
            <div className="flex gap-2 pt-2">
              <a
                href="https://www.facebook.com/success.inc24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/success.inc22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1.5">
                    <ExternalLink className="h-3 w-3 opacity-50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-gray-400 text-sm">N.K. Tower (3rd Floor), Shahjalal Upashohor, Sylhet, Bangladesh</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                <a href="mailto:info@successinc.pro.bd" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  info@successinc.pro.bd
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <a href="https://wa.me/8801613076654" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  +880 1613-076654
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Success Inc. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-gray-600 text-xs">
            স্বপ্ন পূরণ হোক ভ্রমণের সাথে
          </p>
        </div>
      </div>
    </footer>
  )
}
