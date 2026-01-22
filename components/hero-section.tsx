'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Video Background - EXACT same video from his site */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/5796436/5796436-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Very subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 italic drop-shadow-lg">
            Your Safety, Our Priority
          </h1>
          
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Professional protection and investigation services in NYC & the Hudson Valley.
          </p>
        </motion.div>
      </div>

      {/* Service Cards at Bottom - Semi-transparent like his site */}
      <div className="relative z-10 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-black/30 backdrop-blur-sm p-6 text-center text-white border-r border-white/20">
              <h3 className="text-lg font-semibold mb-2">Executive Protection</h3>
              <p className="text-sm text-white/90">Tailored security solutions for high-profile individuals.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 text-center text-white border-r border-white/20">
              <h3 className="text-lg font-semibold mb-2">Private Investigation</h3>
              <p className="text-sm text-white/90">Discreet and thorough investigations for peace of mind.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 text-center text-white">
              <h3 className="text-lg font-semibold mb-2">Security Services</h3>
              <p className="text-sm text-white/90">Comprehensive security for events and personal safety.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
