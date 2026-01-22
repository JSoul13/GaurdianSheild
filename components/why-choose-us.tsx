'use client'

import { motion } from 'framer-motion'
import { Shield, Layers, Cpu, Globe } from 'lucide-react'

const differentiators = [
  {
    icon: Shield,
    title: 'Law Enforcement Background',
    description: 'Led by former Police Commissioner Paul J. Italiano, bringing decades of experience and insider knowledge to every case.',
  },
  {
    icon: Layers,
    title: 'Comprehensive Approach',
    description: 'From cyber investigations to physical protection, we offer a complete suite of services under one roof.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'We leverage cutting-edge digital forensics, surveillance equipment, and investigative tools to gather the evidence you need.',
  },
  {
    icon: Globe,
    title: 'Professional Network',
    description: 'Members of WAD and IPIU with access to international resources and investigative partnerships worldwide.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#002855] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Guardian Shield Inc.?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-4">
            At Guardian Shield Inc., we believe that every individual and organization deserves 
            protection, clarity, and resolution when facing complex challenges. We combine 
            traditional investigative excellence with modern technology to deliver results that make a difference.
          </p>
          <p className="text-[#60A5FA] font-medium">
            The differentiators that set us apart in the private investigation industry
          </p>
        </motion.div>

        <div className="space-y-4">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Arrow shape card */}
              <div className="bg-white text-[#002855] p-6 rounded-lg relative mx-auto max-w-3xl">
                {/* Arrow point on alternating sides */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent ${
                  index % 2 === 0 
                    ? '-left-4 border-r-[16px] border-r-white' 
                    : '-right-4 border-l-[16px] border-l-white'
                }`} />
                
                <div className="flex items-start gap-4">
                  <item.icon className="h-8 w-8 text-[#60A5FA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
