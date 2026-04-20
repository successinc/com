'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'হোম', href: '#home' },
  { label: 'সেবাসমূহ', href: '#services' },
  { label: 'গ্যালারি', href: '#gallery' },
  { label: 'পর্যটক মতামত', href: '#testimonials' },
  { label: 'যোগাযোগ', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-slate-800/80 p-1 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300 border border-slate-700/50 group-hover:border-emerald-500/30">
              <Image src="/images/logo.png" alt="Success Inc." width={44} height={44} className="object-contain w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold gradient-text leading-tight">Success Inc.</span>
              <span className="text-[10px] text-gray-500 leading-tight hidden sm:block">স্বপ্ন পূরণ হোক ভ্রমণের সাথে</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="https://wa.me/8801613076654" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                বুকিং করুন
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0f172a] border-slate-700/50 w-80">
              <SheetTitle className="text-white sr-only">মেনু</SheetTitle>
              <div className="flex flex-col gap-6 mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl overflow-hidden p-1 bg-slate-800/80 border border-slate-700/50">
                    <Image src="/images/logo.png" alt="Success Inc." width={44} height={44} className="object-contain w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold gradient-text">Success Inc.</span>
                    <span className="text-[10px] text-gray-500">স্বপ্ন পূরণ হোক ভ্রমণের সাথে</span>
                  </div>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-lg font-medium py-2 border-b border-slate-700/50"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="https://wa.me/8801613076654" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 font-medium mt-4"
                  >
                    বুকিং করুন
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}
