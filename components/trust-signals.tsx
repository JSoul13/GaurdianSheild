'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Award, Users, Globe } from 'lucide-react'

export function TrustSignals() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const signals = [
    {
      icon: Shield,
      value: '25+',
      label: 'Years Combined Experience'
    },
    {
      icon: Award,
      value: 'Licensed',
      label: 'NYS Private Investigation Agency'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Cases Successfully Resolved'
    },
    {
      icon: Globe,
      value: 'Global',
      label: 'International Network (WAD & IPIU)'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-[#002855]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Corporations, Law Firms, and High-Net-Worth Individuals
          </h2>
          <p className="text-xl text-gray-300">
            Our track record speaks for itself
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals?.map?.((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#60A5FA]/20 mb-4">
                <signal.icon className="h-8 w-8 text-[#60A5FA]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{signal?.value ?? ''}</div>
              <div className="text-gray-300">{signal?.label ?? ''}</div>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
