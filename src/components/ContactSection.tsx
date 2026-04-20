'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      toast({
        title: 'বার্তা পাঠানো হয়েছে!',
        description: 'আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
      })
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            আমাদের সাথে <span className="gradient-text">যোগাযোগ করুন</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            প্রশ্ন আছে? আমরা সাহায্য করতে এখানে আছি
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden h-64 lg:h-72 border border-slate-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <MapPin className="h-10 w-10 text-emerald-500 mx-auto" />
                  <p className="text-gray-400 text-sm font-medium">N.K. Tower (3rd Floor)</p>
                  <p className="text-gray-500 text-xs">Shahjalal Upashohor, Sylhet, Bangladesh</p>
                </div>
              </div>
              <div className="absolute inset-0 dot-grid opacity-20" />
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">ঠিকানা</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    N.K. Tower (3rd Floor), Shahjalal Upashohor, Sylhet, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">ফোন / WhatsApp</h4>
                  <a href="https://wa.me/8801613076654" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    +880 1613-076654
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">ইমেইল</h4>
                  <a href="mailto:info@successinc.pro.bd" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    info@successinc.pro.bd
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">কার্য সময়</h4>
                  <p className="text-gray-400 text-sm">শনিবার – বৃহস্পতিবার: সকাল ১০টা – রাত ৮টা</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">আমাদের অনুসরণ করুন</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/success.inc24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/success.inc22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">নাম</label>
                <Input
                  type="text"
                  placeholder="আপনার নাম"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500 rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">ইমেইল</label>
                <Input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500 rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">ফোন</label>
                <Input
                  type="tel"
                  placeholder="আপনার ফোন নম্বর"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500 rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">বার্তা</label>
                <Textarea
                  placeholder="আপনার বার্তা লিখুন (যেমন: কানাডা ভিসার জন্য আবেদন করতে চাই)"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-emerald-500 rounded-xl resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-12 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    পাঠানো হচ্ছে...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    বার্তা পাঠান
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
