'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* OUR STORY Section - Dark background like his site */}
      <section className="bg-[#1a1a2e] text-white py-20 pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12">OUR STORY</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side - Rectangular rounded image */}
            <div className="flex flex-col">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-black mb-6">
                <Image
                  src="/paul-spi-banner.png"
                  alt="Paul Italiano, Founder"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-8">
                <h3 className="text-xl font-semibold">Paul Italiano, Founder</h3>
                <div>
                  <span className="text-4xl font-bold text-[#60A5FA]">35+</span>
                  <p className="text-gray-400 text-sm">Years of Experience</p>
                </div>
              </div>
            </div>
            
            {/* Right side - Bio text */}
            <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
              <p>
                Paul Italiano is the Founder and CEO of <strong className="text-white">Guardian Shield Inc.</strong>, 
                bringing over 35 years of unparalleled experience in law enforcement, public safety, and security operations. 
                As a retired <strong className="text-white">Sergeant</strong> and former head of the <strong className="text-white">Support Services Division</strong> and
                <strong className="text-white"> Training and Development Unit</strong> at the City of Poughkeepsie Police Department in New York, 
                Paul honed his expertise while overseeing a broad spectrum of high-level operations and training.
              </p>
              
              <p>
                Throughout his distinguished career, he served in numerous pivotal roles, including 
                <strong className="text-white"> Commanding Supervisor</strong> and <strong className="text-white">Lead Trainer</strong> for the
                <strong className="text-white"> Emergency Services Unit (SWAT Team)</strong>, <strong className="text-white">Sniper Coordinator</strong>,
                <strong className="text-white"> Range Master</strong>, and <strong className="text-white">Head Firearms/Tactics Instructor</strong>.
              </p>
              
              <p>
                Paul's extensive experience also includes specialized roles as a <strong className="text-white">Narcotics Officer</strong>,
                <strong className="text-white"> Crime Scene Specialist</strong>, and <strong className="text-white">Evidence Technician and Instructor</strong>. 
                He played an instrumental role as the department liaison and Chairman of <strong className="text-white">New York State Counter Terrorism Zone 14</strong>, 
                where he spearheaded initiatives in <strong className="text-white">intelligence-led policing</strong> that transformed the department's approach to crime prevention and public safety.
              </p>
              
              <p>
                Upon his retirement, Paul was appointed <strong className="text-white">Commanding Officer</strong> of the
                <strong className="text-white"> Wappingers Falls Police Department Detective Division</strong>, where he managed and supervised all criminal investigations. 
                He continues to serve as a part-time <strong className="text-white">Sergeant</strong> with a local police agency, 
                where he previously leveraged his skills as an <strong className="text-white">Explosives Detection K-9 Handler</strong>, 
                specializing in IED recognition and detection.
              </p>
              
              <p>
                In addition to his law enforcement career, Paul has also provided <strong className="text-white">Executive and Personal Protection</strong> to 
                high-net-worth individuals and high-profile clients throughout the New York City metropolitan area. 
                His extensive knowledge, hands-on experience, and leadership in both law enforcement and private security 
                make him a respected authority in the field, and a trusted resource for clients seeking elite protection and consultation.
              </p>
              
              <p>
                With a legacy of leadership, innovation, and dedication to public safety, Paul Italiano continues to make a profound impact 
                in the fields of law enforcement, security, and protective services through <strong className="text-white">Guardian Shield Inc.</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Gallery Section - Dark background */}
      <section className="bg-[#0d0d1a] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Gallery</h2>
          <p className="text-center text-gray-400 mb-12">Networking with some of the best in the business!</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 - Paul with colleague */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <Image
                src="/paul-colleague.jpeg"
                alt="Paul networking with colleagues"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Image 2 - Paul headshot */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <Image
                src="/paul-headshot.png"
                alt="Paul Italiano"
                fill
                className="object-cover object-top"
              />
            </motion.div>
            
            {/* Image 3 - Paul at SPI event */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <Image
                src="/paul-spi-event.jpeg"
                alt="Paul at SPI event"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-[#1a1a2e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-400 mb-8">Contact Guardian Shield Inc. today for a confidential consultation.</p>
          <Link href="/contact">
            <Button className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white px-8 py-3">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
