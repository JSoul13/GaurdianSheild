'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Search, Building2, Laptop } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Executive Protection',
    description: 'Discreet, professional security solutions for high-profile individuals and executives.',
    image: '/security-detail.jpg',
  },
  {
    icon: Search,
    title: 'Private Investigation',
    description: 'Thorough investigative services combining traditional techniques with modern technology.',
    image: '/detective-board.jpg',
  },
  {
    icon: Building2,
    title: 'Corporate Security',
    description: 'Comprehensive security assessments and solutions for businesses of all sizes.',
    image: '/event-aerial.jpg',
  },
  {
    icon: Laptop,
    title: 'Cyber Security',
    description: 'Digital forensics and cyber threat assessments to protect your online presence.',
    image: '/computer-forensics.jpg',
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional security and investigation services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/services">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="h-6 w-6 text-[#60A5FA]" />
                      <h3 className="text-lg font-semibold text-[#002855]">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="inline-block bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
