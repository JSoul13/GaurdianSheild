'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Search, Building2, Laptop } from 'lucide-react'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - No images at top */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002855] mb-6">
            Comprehensive Security &<br />Investigation Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From private investigations to cyber security, we provide the full spectrum of protective services tailored to your specific needs.
          </p>
        </div>
      </section>
      
      {/* Executive Protection - with VIDEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-[#60A5FA]" />
                <h2 className="text-3xl font-bold text-[#002855]">Executive Protection</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Your safety is paramount. Our executive protection team provides discreet, professional security solutions for individuals who require an elevated level of protection. Whether you're a high-profile executive, celebrity, or individual facing specific threats, our team delivers comprehensive protection tailored to your unique needs.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Personal security details</li>
                <li>• Threat assessment and risk management</li>
                <li>• Secure transportation</li>
                <li>• Event security</li>
                <li>• Travel security planning</li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/executive-protection.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      
      {/* Private Investigation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-1">
              <Image
                src="/detective-board.jpg"
                alt="Private Investigation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-8 w-8 text-[#60A5FA]" />
                <h2 className="text-3xl font-bold text-[#002855]">Private Investigation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our private investigation services combine traditional investigative techniques with cutting-edge technology to deliver thorough, accurate results. With decades of law enforcement experience, we approach each case with professionalism and discretion.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Background investigations</li>
                <li>• Surveillance operations</li>
                <li>• Missing persons investigations</li>
                <li>• Insurance fraud investigations</li>
                <li>• Due diligence investigations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Corporate Security */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-[#60A5FA]" />
                <h2 className="text-3xl font-bold text-[#002855]">Corporate & Event Security</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Protect your business assets, employees, and reputation with our comprehensive corporate security solutions. We provide thorough assessments and implement strategies to mitigate risks and ensure business continuity.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Corporate security assessments</li>
                <li>• Employee screening and background checks</li>
                <li>• Event security and crowd management</li>
                <li>• Executive protection programs</li>
                <li>• Crisis management planning</li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/event-aerial.jpg"
                alt="Event Security"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cyber Security */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-1">
              <Image
                src="/computer-forensics.jpg"
                alt="Cyber Security"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="h-8 w-8 text-[#60A5FA]" />
                <h2 className="text-3xl font-bold text-[#002855]">Cyber Security & Digital Investigations</h2>
              </div>
              <p className="text-gray-600 mb-6">
                In today's digital world, protecting your online presence is as important as physical security. Our cyber security experts help identify vulnerabilities and protect your digital assets.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Digital forensics</li>
                <li>• Social media investigations</li>
                <li>• Online reputation management</li>
                <li>• Cyber threat assessments</li>
                <li>• Data breach investigations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Surveillance Technology */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#002855] mb-4">Advanced Surveillance Technology</h2>
              <p className="text-gray-600 mb-6">
                We utilize state-of-the-art surveillance technology including drone capabilities to provide comprehensive coverage for investigations, event security, and property assessments.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Aerial surveillance</li>
                <li>• Property assessments</li>
                <li>• Event monitoring</li>
                <li>• Evidence documentation</li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/drone-surveillance.jpg"
                alt="Drone Surveillance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#002855] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Contact us today for a confidential consultation about your security needs.
          </p>
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
